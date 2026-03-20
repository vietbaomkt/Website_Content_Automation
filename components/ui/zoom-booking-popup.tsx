import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, X, Loader2, CheckCircle, Lock, Clock, Video, ArrowLeft } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { submitLead } from '@/src/lib/api';

// --- Validation ---
const VALIDATORS = {
  name: (v: string) => {
    if (!v.trim()) return 'Vui lòng nhập họ tên';
    if (v.trim().length < 2) return 'Họ tên cần tối thiểu 2 ký tự';
    return '';
  },
  email: (v: string) => {
    if (!v.trim()) return 'Vui lòng nhập email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Email không hợp lệ';
    return '';
  },
  phone: (v: string) => {
    if (!v.trim()) return 'Vui lòng nhập số điện thoại';
    if (!/^(0[3|5|7|8|9])+([0-9]{8})$/.test(v)) return 'Số điện thoại Việt Nam không hợp lệ';
    return '';
  },
};

type FieldName = keyof typeof VALIDATORS;

// Generate 30-min slots from 9:00 to 18:00
const TIME_SLOTS = Array.from({ length: 19 }, (_, i) => {
  const totalMinutes = i * 30;
  const hour = Math.floor(totalMinutes / 60) + 9;
  const minute = totalMinutes % 60;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
});

interface ZoomBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ZoomBookingPopup({ isOpen, onClose }: ZoomBookingPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const validateField = (field: FieldName, value: string) => {
    const error = VALIDATORS[field](value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const handleChange = (field: FieldName, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) validateField(field, value);
  };

  const handleBlur = (field: FieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const isFormValid = () => {
    return (
      (Object.keys(VALIDATORS) as FieldName[]).every(
        (field) => !VALIDATORS[field](formData[field])
      ) &&
      selectedDate !== undefined &&
      selectedTime !== null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = (Object.keys(VALIDATORS) as FieldName[]).reduce(
      (acc, field) => ({ ...acc, [field]: true }),
      {} as Record<FieldName, boolean>
    );
    setTouched(allTouched);

    let hasError = false;
    const newErrors: Partial<Record<FieldName, string>> = {};
    (Object.keys(VALIDATORS) as FieldName[]).forEach((field) => {
      const error = VALIDATORS[field](formData[field]);
      if (error) hasError = true;
      newErrors[field] = error;
    });
    setErrors(newErrors);

    if (hasError || !selectedDate || !selectedTime) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const dateStr = selectedDate.toLocaleDateString('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `[Zoom Booking]\nNgày: ${dateStr}\nGiờ: ${selectedTime}\nGhi chú: ${formData.note || 'Không có'}`,
      source: 'zoom_booking',
    });

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Có lỗi xảy ra. Vui lòng thử lại.');
    }
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', note: '' });
    setSelectedDate(undefined);
    setSelectedTime(null);
    setErrors({});
    setTouched({});
    setSubmitted(false);
    setSubmitError(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  // Disable past dates and weekends
  const disabledDays = [
    { before: new Date() },
    { dayOfWeek: [0] }, // Sunday
  ];

  const FieldError = ({ field }: { field: FieldName }) =>
    errors[field] && touched[field] ? (
      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
        <span>⚠</span> {errors[field]}
      </p>
    ) : null;

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all text-sm backdrop-blur-sm';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* ===== BACKDROP ===== */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

          {/* Ambient glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-violet-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

          {/* ===== CARD CONTAINER ===== */}
          <motion.div
            className="relative w-full max-w-[1100px] mx-4 mt-[80px] mb-6 max-h-[calc(100vh-100px)] rounded-3xl border border-white/[0.08] bg-[#0a0e1a]/98 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle gradient border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-violet-500/[0.04] pointer-events-none" />

            {/* ===== TOP BAR (inside card) ===== */}
            <div className="relative z-10 flex items-center justify-between px-6 md:px-8 py-4 border-b border-white/[0.06] bg-white/[0.02] shrink-0">
              {/* Left — Back / Close */}
              <button
                onClick={handleClose}
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors cursor-pointer group"
                aria-label="Đóng"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                  <ArrowLeft className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Quay lại</span>
              </button>

              {/* Center — Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10">
                  <Video className="h-4 w-4 text-indigo-400" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-sm font-semibold text-white tracking-tight">
                    Đặt lịch Zoom tư vấn
                  </h2>
                  <p className="text-[11px] text-gray-500 hidden sm:block">
                    Gọi video 30 phút — miễn phí
                  </p>
                </div>
              </div>

              {/* Right — Close X */}
              <button
                onClick={handleClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Đóng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* ===== SCROLLABLE CONTENT (inside card) ===== */}
            <div className="relative flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ===== SUCCESS STATE ===== */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center min-h-[400px] p-8"
                  >
                    <div className="text-center max-w-md mx-auto">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 12 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="h-10 w-10 text-emerald-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Đặt lịch thành công!
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        Chúng tôi đã nhận thông tin của bạn.
                      </p>
                      <p className="text-gray-500 text-sm mb-8">
                        Sẽ xác nhận lịch Zoom qua email trong vòng <strong className="text-white">24 giờ</strong>.
                      </p>
                      <button
                        onClick={handleClose}
                        className="px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:brightness-110 cursor-pointer"
                      >
                        Quay lại trang chủ
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* ===== FORM — 2 COLUMN LAYOUT ===== */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 md:p-8"
                  >
                    {/* Benefits bar */}
                    <div className="flex items-center justify-center gap-6 mb-7">
                      {[
                        { icon: <Video className="h-4 w-4" />, text: 'Zoom 1-1' },
                        { icon: <Clock className="h-4 w-4" />, text: '30 phút' },
                        { icon: <CheckCircle className="h-4 w-4" />, text: 'Miễn phí' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                          <span className="text-indigo-400">{item.icon}</span>
                          {item.text}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                        {/* ===== LEFT COLUMN — Personal Info ===== */}
                        <div className="space-y-5">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              Thông tin của bạn
                            </h3>
                            <p className="text-sm text-gray-500">
                              Điền thông tin để chúng tôi liên hệ xác nhận lịch hẹn.
                            </p>
                          </div>

                          {/* Name + Phone row */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                Họ và tên <span className="text-red-400">*</span>
                              </label>
                              <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                onBlur={() => handleBlur('name')}
                                placeholder="Nguyễn Văn A"
                                className={inputClasses}
                              />
                              <FieldError field="name" />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                Số điện thoại <span className="text-red-400">*</span>
                              </label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                onBlur={() => handleBlur('phone')}
                                placeholder="09xxxxxxxx"
                                className={inputClasses}
                              />
                              <FieldError field="phone" />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                              Email <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              onBlur={() => handleBlur('email')}
                              placeholder="your@email.com"
                              className={inputClasses}
                            />
                            <FieldError field="email" />
                          </div>

                          {/* Note */}
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                              Ghi chú <span className="text-gray-600">(không bắt buộc)</span>
                            </label>
                            <textarea
                              value={formData.note}
                              onChange={(e) =>
                                setFormData((prev) => ({ ...prev, note: e.target.value }))
                              }
                              placeholder="Bạn đang quan tâm đến dịch vụ nào? Có câu hỏi gì không?"
                              rows={3}
                              className={`${inputClasses} resize-none`}
                            />
                          </div>

                          {/* Submit error */}
                          {submitError && (
                            <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2.5">
                              ⚠ {submitError}
                            </p>
                          )}

                          {/* CTA */}
                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={!isFormValid() || isSubmitting}
                              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:brightness-100 cursor-pointer flex items-center justify-center gap-2"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Đang xử lý...
                                </>
                              ) : (
                                <>
                                  <CalendarIcon className="h-4 w-4" />
                                  Xác nhận đặt lịch
                                </>
                              )}
                            </button>

                            {/* Trust line */}
                            <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mt-3">
                              <Lock className="h-3 w-3" />
                              Thông tin bảo mật hoàn toàn — không spam, không bên thứ ba.
                            </p>
                          </div>
                        </div>

                        {/* ===== RIGHT COLUMN — Calendar + Time ===== */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              Chọn ngày & giờ
                            </h3>
                            <p className="text-sm text-gray-500">
                              Chọn ngày và khung giờ phù hợp với bạn.
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                            <div className="relative md:flex">
                              {/* Calendar */}
                              <div className="p-4 md:p-5 flex-1">
                                <Calendar
                                  mode="single"
                                  selected={selectedDate}
                                  onSelect={setSelectedDate}
                                  disabled={disabledDays}
                                  showOutsideDays={false}
                                  className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(11)]"
                                  formatters={{
                                    formatWeekdayName: (date) =>
                                      date.toLocaleString('vi-VN', { weekday: 'short' }),
                                  }}
                                />
                              </div>

                              {/* Time Slots */}
                              <div className="no-scrollbar flex max-h-56 w-full scroll-pb-4 flex-col gap-3 overflow-y-auto border-t border-white/10 p-4 md:max-h-[340px] md:w-44 md:border-t-0 md:border-l md:border-white/10">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 sticky top-0 bg-[#0a0e1a]/90 backdrop-blur-sm pb-2">
                                  Khung giờ
                                </p>
                                <div className="grid gap-1.5">
                                  {TIME_SLOTS.map((time) => (
                                    <Button
                                      key={time}
                                      type="button"
                                      variant={selectedTime === time ? 'default' : 'outline'}
                                      onClick={() => setSelectedTime(time)}
                                      className={`w-full shadow-none text-xs h-8 cursor-pointer ${
                                        selectedTime === time
                                          ? ''
                                          : 'border-white/10 bg-white/[0.03] text-gray-400 hover:bg-white/[0.06] hover:text-white'
                                      }`}
                                    >
                                      {time}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Selected summary */}
                            <div className="border-t border-white/10 px-5 py-3.5 text-sm">
                              {selectedDate && selectedTime ? (
                                <div className="flex items-center gap-2">
                                  <CalendarIcon className="h-4 w-4 text-indigo-400 shrink-0" />
                                  <span className="text-gray-400">Lịch hẹn:</span>
                                  <span className="font-medium text-white">
                                    {selectedDate.toLocaleDateString('vi-VN', {
                                      weekday: 'long',
                                      day: 'numeric',
                                      month: 'long',
                                    })}
                                  </span>
                                  <span className="text-gray-500">lúc</span>
                                  <span className="font-semibold text-indigo-400">{selectedTime}</span>
                                </div>
                              ) : (
                                <span className="text-gray-500 flex items-center gap-2">
                                  <CalendarIcon className="h-4 w-4 shrink-0" />
                                  Chọn ngày và giờ cho buổi tư vấn Zoom.
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

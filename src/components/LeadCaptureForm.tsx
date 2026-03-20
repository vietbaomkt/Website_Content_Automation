import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Calendar, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ZoomBookingPopup } from '@/components/ui/zoom-booking-popup';
import { submitLead } from '@/src/lib/api';

// --- Validation rules ---
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
  message: (v: string) => {
    if (!v.trim()) return 'Vui lòng nhập nhu cầu của bạn';
    return '';
  },
};

type FieldName = keyof typeof VALIDATORS;

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showZoomPopup, setShowZoomPopup] = useState(false);

  const validateField = (field: FieldName, value: string) => {
    const error = VALIDATORS[field](value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const handleChange = (field: FieldName, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: FieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const isFormValid = () => {
    return (Object.keys(VALIDATORS) as FieldName[]).every(
      (field) => !VALIDATORS[field](formData[field])
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Touch all fields
    const allTouched = (Object.keys(VALIDATORS) as FieldName[]).reduce(
      (acc, field) => ({ ...acc, [field]: true }),
      {} as Record<FieldName, boolean>
    );
    setTouched(allTouched);

    // Validate all fields
    const newErrors: Partial<Record<FieldName, string>> = {};
    let hasError = false;
    (Object.keys(VALIDATORS) as FieldName[]).forEach((field) => {
      const error = VALIDATORS[field](formData[field]);
      if (error) hasError = true;
      newErrors[field] = error;
    });
    setErrors(newErrors);

    if (hasError) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Có lỗi xảy ra. Vui lòng thử lại.');
    }
    setIsSubmitting(false);
  };

  const FieldError = ({ field }: { field: FieldName }) =>
    errors[field] && touched[field] ? (
      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
        <span>⚠</span> {errors[field]}
      </p>
    ) : null;

  return (
    <section id="lead-form" className="py-24 relative z-10">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sẵn sàng <span className="text-gradient">tự động hóa</span> nội dung?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Đặt lịch tư vấn miễn phí 30 phút — không cam kết. Chúng tôi sẽ phân tích nhân hiệu của bạn và đề xuất chiến lược phù hợp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Đã gửi thành công!</h3>
                  <p className="text-gray-400">Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Send size={18} className="text-indigo-400" />
                    Nhận tư vấn qua email
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">Để lại thông tin — nhận phân tích nhân hiệu miễn phí trong 24h.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Họ tên */}
                    <div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="Họ và tên"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                      />
                      <FieldError field="name" />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                      />
                      <FieldError field="email" />
                    </div>

                    {/* Số điện thoại */}
                    <div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="09xxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                      />
                      <FieldError field="phone" />
                    </div>

                    {/* Nhu cầu */}
                    <div>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        placeholder="Mô tả nhu cầu của bạn..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                      />
                      <FieldError field="message" />
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                        ⚠ {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={!isFormValid() || isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          Gửi yêu cầu tư vấn
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Book Zoom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col"
          >
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-indigo-400" />
              Đặt lịch Zoom trực tiếp
            </h3>
            <p className="text-gray-400 text-sm mb-6">Gọi video 30 phút — xem demo hệ thống chạy thực tế.</p>
            <div className="space-y-3 mb-8 flex-1">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <ShinyButton onClick={() => setShowZoomPopup(true)}>Đặt lịch Zoom ngay</ShinyButton>
            <ZoomBookingPopup isOpen={showZoomPopup} onClose={() => setShowZoomPopup(false)} />
          </motion.div>
        </div>

        {/* Trust line */}
        <p className="text-center text-gray-400 text-sm mt-8">
          🔒 Thông tin của bạn được bảo mật hoàn toàn. Không spam, không chia sẻ cho bên thứ ba.
        </p>
      </div>
    </section>
  );
}

const benefits = [
  'Xem demo hệ thống chạy với data thật',
  'Nhận phân tích nhân hiệu cá nhân',
  'Đề xuất chiến lược content phù hợp',
  'Không cam kết — hoàn toàn miễn phí',
];

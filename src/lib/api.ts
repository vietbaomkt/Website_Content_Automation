/// <reference types="vite/client" />

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source?: string;
  interested_plan?: string;
}

export async function submitLead(
  data: LeadData
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const params = new URLSearchParams(window.location.search);

    const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        ...data,
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Có lỗi xảy ra' };
    }

    return { success: true, id: result.id };
  } catch {
    return {
      success: false,
      error: 'Không thể kết nối server. Vui lòng thử lại.',
    };
  }
}

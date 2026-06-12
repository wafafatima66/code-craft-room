
import { FormValues, LeadEntry } from './types';

const GOOGLE_SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

type LeadSnapshot = {
  formValues?: FormValues;
  email?: string;
  notified?: boolean;
  newsletterGenerated?: boolean;
  copyClicks?: number;
};

const leadCache = new Map<string, LeadSnapshot>();

const buildFormPayload = (formValues?: FormValues) => ({
  restaurantName: formValues?.restaurantName || '',
  mainTopic: formValues?.mainTopic || '',
  promotion: formValues?.promotion || '',
  tone: formValues?.tone || '',
  length: formValues?.length || '',
  cta: formValues?.cta || '',
  helpful: formValues?.helpful || '',
  feedback: formValues?.feedback || '',
});

const syncLeadToGoogleSheets = async (eventType: string, payload: Record<string, unknown>) => {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) return false;
  try {
    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ eventType, timestamp: new Date().toISOString(), source: 'bistromail-ai', ...payload }),
    });
    return true;
  } catch {
    return false;
  }
};

export const supabaseService = {
  trackLinkOpened: async (): Promise<string | null> => {
    const tempId = `visit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    leadCache.set(tempId, { copyClicks: 0, newsletterGenerated: false, notified: false });
    await syncLeadToGoogleSheets('site_visit', {
      leadId: tempId, anonymousId: tempId, email: '',
      linkOpened: 1, notified: false, newsletterGenerated: false, copyClicks: 0,
      ...buildFormPayload(),
    });
    return tempId;
  },

  saveInitialValidation: async (data: FormValues, existingId?: string | null): Promise<string | null> => {
    const id = existingId || `anon_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    leadCache.set(id, { ...leadCache.get(id), formValues: data, notified: false, newsletterGenerated: false, copyClicks: leadCache.get(id)?.copyClicks || 0 });
    await syncLeadToGoogleSheets('lead_captured', {
      leadId: id, anonymousId: id, email: leadCache.get(id)?.email || '',
      notified: false, newsletterGenerated: false, copyClicks: leadCache.get(id)?.copyClicks || 0,
      ...buildFormPayload(data),
    });
    return id;
  },

  updateLeadWithEmail: async (oldId: string, email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const currentLead = leadCache.get(oldId);
    leadCache.set(oldId, { ...currentLead, email: cleanEmail, notified: true });
    return syncLeadToGoogleSheets('lead_identified', {
      leadId: oldId, anonymousId: oldId, email: cleanEmail, notified: true,
      newsletterGenerated: currentLead?.newsletterGenerated || false,
      copyClicks: currentLead?.copyClicks || 0,
      ...buildFormPayload(currentLead?.formValues),
    });
  },

  trackNewsletterGenerated: async (id: string) => {
    const currentLead = leadCache.get(id);
    leadCache.set(id, { ...currentLead, newsletterGenerated: true });
    await syncLeadToGoogleSheets('newsletter_generated', {
      leadId: id, anonymousId: id, email: currentLead?.email || '',
      notified: currentLead?.notified || false, newsletterGenerated: true,
      copyClicks: currentLead?.copyClicks || 0,
      ...buildFormPayload(currentLead?.formValues),
    });
  },

  trackCopyClick: async (id: string) => {
    const currentLead = leadCache.get(id);
    const nextCopyCount = (currentLead?.copyClicks || 0) + 1;
    leadCache.set(id, { ...currentLead, copyClicks: nextCopyCount });
    await syncLeadToGoogleSheets('copy_clicked', {
      leadId: id, anonymousId: id, email: currentLead?.email || '',
      notified: currentLead?.notified || false,
      newsletterGenerated: currentLead?.newsletterGenerated || false,
      copyClicks: nextCopyCount,
      ...buildFormPayload(currentLead?.formValues),
    });
  },

  getLeads: async (): Promise<LeadEntry[]> => [],
};


'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, CheckCircle, ArrowUpRight, Check, Copy, Loader2,
  Mail, Inbox, Send, FileText, Trash2, Star, User, MoreVertical
} from 'lucide-react';
import { FormValues } from '@/lib/bistromail/types';
import { supabaseService } from '@/lib/bistromail/supabaseService';

interface SuccessViewProps {
  newsletter: string;
  isStreaming: boolean;
  formValues: FormValues;
  leadId: string | null;
  onReset: () => void;
  onNotify: (email: string) => Promise<void>;
}

const SuccessView: React.FC<SuccessViewProps> = ({ newsletter, isStreaming, formValues, leadId, onReset, onNotify }) => {
  const [email, setEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollTop = previewRef.current.scrollHeight;
    }
  }, [newsletter]);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await onNotify(email);
      setIsNotified(true);
    } catch (err) {
      console.error('Failed to join waitlist:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = () => {
    if (!newsletter) return;
    navigator.clipboard.writeText(newsletter);
    setCopied(true);
    if (leadId) supabaseService.trackCopyClick(leadId);
    setTimeout(() => setCopied(false), 2000);
  };

  const subjectMarker = 'SUBJECT: ';
  let displaySubject = 'Composing subject...';
  let displayBody = newsletter;

  if (newsletter.includes(subjectMarker)) {
    const parts = newsletter.split('\n');
    const firstLine = parts[0];
    if (firstLine.startsWith(subjectMarker)) {
      displaySubject = firstLine.replace(subjectMarker, '').trim();
      displayBody = parts.slice(1).join('\n').trim();
    }
  }

  return (
    <div className="min-h-screen bg-[#F9F7F2] p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-[1400px] w-full grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

        {/* Left Info Panel */}
        <div className="xl:col-span-4 space-y-8">
          <button
            onClick={onReset}
            className="flex items-center gap-3 py-2 text-stone-500 hover:text-stone-900 font-bold text-xs uppercase tracking-[0.2em] transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Editor
          </button>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-stone-900 leading-[1.1] italic">Your Professional Draft</h1>
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              This high-conversion copy is ready to engage your customers.
              <span className="text-stone-900 font-bold"> Professional writing that saves you hours of work.</span>
            </p>
          </div>

          <div className="bg-stone-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-orange-100 italic">Automate your outreach.</h3>
              <p className="text-stone-400 text-lg leading-relaxed">
                Connect your guest list and have these updates sent automatically every week.
              </p>
              {!isNotified ? (
                <form onSubmit={handleNotifySubmit} className="space-y-4">
                  <input
                    required
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-6 text-lg text-white placeholder:text-stone-600 focus:outline-none focus:border-[#BC472B] transition-all"
                  />
                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 bg-[#BC472B] hover:bg-[#D5573B] text-white rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-lg"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : 'Get Full Access'}
                  </button>
                </form>
              ) : (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 flex items-center gap-4 text-green-400">
                  <CheckCircle size={24} />
                  <p className="font-bold">Welcome aboard! We&apos;ll be in touch.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Mailbox View */}
        <div className="xl:col-span-8 w-full">
          <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-stone-200 overflow-hidden flex h-[800px]">

            {/* Mock Sidebar */}
            <div className="hidden lg:flex flex-col w-64 bg-stone-50 border-r border-stone-100 p-6 space-y-8">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-[#BC472B] flex items-center justify-center text-white font-bold text-xs">
                  {formValues.restaurantName.charAt(0)}
                </div>
                <span className="font-bold text-sm text-stone-900 truncate">{formValues.restaurantName}</span>
              </div>
              <nav className="space-y-2">
                <div className="flex items-center justify-between px-3 py-2.5 bg-white shadow-sm border border-stone-200 rounded-xl text-[#BC472B] font-bold text-sm">
                  <div className="flex items-center gap-3"><Inbox size={18} /> Inbox</div>
                  <span className="text-[10px] bg-red-100 px-2 py-0.5 rounded-full">1</span>
                </div>
                {[{ icon: <Star size={18} />, label: 'Starred' }, { icon: <Send size={18} />, label: 'Sent' }, { icon: <FileText size={18} />, label: 'Drafts' }, { icon: <Trash2 size={18} />, label: 'Trash' }].map(item => (
                  <div key={item.label} className="flex items-center gap-3 px-3 py-2.5 text-stone-400 hover:text-stone-600 font-medium text-sm transition-colors cursor-default">
                    {item.icon} {item.label}
                  </div>
                ))}
              </nav>
            </div>

            {/* Email View */}
            <div className="flex-grow flex flex-col min-w-0">
              {/* Toolbar */}
              <div className="px-8 py-5 border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <ArrowLeft className="text-stone-400 cursor-not-allowed" size={20} />
                  <Trash2 className="text-stone-400 cursor-not-allowed" size={20} />
                  <Mail className="text-stone-400 cursor-not-allowed" size={20} />
                  <div className="h-6 w-px bg-stone-200 mx-2" />
                  <Star className="text-stone-300 cursor-not-allowed" size={20} />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50 transition-colors"
                  >
                    {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy Draft'}
                  </button>
                  <MoreVertical className="text-stone-400" size={20} />
                </div>
              </div>

              {/* Email Content */}
              <div className="flex-grow overflow-y-auto bg-white">
                <div className="p-10 border-b border-stone-50 space-y-6">
                  <h2 className="text-3xl font-bold text-stone-900 italic leading-tight">{displaySubject}</h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                      <User size={24} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900 text-base">{formValues.restaurantName}</span>
                        <span className="text-xs text-stone-400 font-medium">Just Now</span>
                      </div>
                      <div className="text-stone-400 text-sm flex items-center gap-2">
                        to Your Loyal Regulars <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>

                <div ref={previewRef} className="p-10 md:p-14">
                  <div className="max-w-2xl mx-auto">
                    {displayBody || isStreaming ? (
                      <div className="whitespace-pre-wrap font-sans text-stone-800 leading-[1.8] text-xl selection:bg-orange-100">
                        {displayBody}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-20 text-stone-300 gap-6">
                        <Loader2 className="animate-spin" size={40} />
                        <p className="text-lg italic">Drafting your update...</p>
                      </div>
                    )}
                    {!isStreaming && (
                      <div className="mt-20 pt-10 border-t border-stone-100 text-center space-y-4">
                        <div className="text-[10px] text-stone-300 font-bold uppercase tracking-[0.2em]">
                          Sent via BistroMail AI • High-Efficiency Marketing
                        </div>
                        <div className="flex justify-center gap-4 text-xs text-stone-400">
                          <span className="underline cursor-pointer">Unsubscribe</span>
                          <span className="underline cursor-pointer">Preferences</span>
                          <span className="underline cursor-pointer">View in Browser</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;

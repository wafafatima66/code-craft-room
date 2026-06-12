
'use client';
import React, { useState, useCallback } from 'react';
import { FormValues, ToneStyle, ValidationFeedback, NewsletterLength } from '@/lib/bistromail/types';
import { Send, Sparkles, Loader2, ChefHat, MessageSquare, TrendingUp } from 'lucide-react';

interface FormStepProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  isSubmitting: boolean;
}

const InputWrapper = ({ label, children, required, help }: { label: string; children: React.ReactNode; required?: boolean; help?: string }) => (
  <div className="space-y-4">
    <label className="block text-sm font-black text-stone-900 uppercase tracking-[0.2em]">
      {label} {required && <span className="text-[#BC472B]">*</span>}
    </label>
    {children}
    {help && <p className="text-xl text-stone-700 font-medium italic leading-relaxed">{help}</p>}
  </div>
);

const FormStep: React.FC<FormStepProps> = ({ initialValues, onSubmit, isSubmitting }) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="divide-y divide-stone-100 bg-white">
      {/* Section 1: Identity */}
      <div className="p-10 md:p-16 space-y-12">
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center text-[#BC472B] shadow-inner">
            <ChefHat size={36} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 italic">Establish your profile</h2>
            <p className="text-xl text-stone-700 font-medium mt-2">The first step to building a consistent brand voice.</p>
          </div>
        </div>
        <div className="max-w-2xl">
          <InputWrapper label="Restaurant Name" required>
            <input
              required
              autoComplete="organization"
              type="text"
              name="restaurantName"
              value={values.restaurantName}
              onChange={handleChange}
              placeholder="e.g. Hearth & Vine Bistro"
              className="w-full px-8 py-6 rounded-3xl border-2 border-stone-200 bg-stone-50 focus:bg-white transition-all outline-none text-2xl text-stone-900 font-bold placeholder:text-stone-300"
            />
          </InputWrapper>
        </div>
      </div>

      {/* Section 2: The Story */}
      <div className="p-10 md:p-16 space-y-12">
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 rounded-3xl bg-[#BC472B]/5 flex items-center justify-center text-[#BC472B] shadow-inner">
            <MessageSquare size={36} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 italic">Your Weekly Update</h2>
            <p className="text-xl text-stone-700 font-medium mt-2">New menu items? Tasting events? Or a warm seasonal greeting?</p>
          </div>
        </div>

        <div className="space-y-12">
          <InputWrapper label="Main Topic" help="What's the one thing they need to know?" required>
            <input
              required
              type="text"
              name="mainTopic"
              value={values.mainTopic}
              onChange={handleChange}
              placeholder="e.g. New Summer Cocktail Menu"
              className="w-full px-8 py-6 rounded-3xl border-2 border-stone-200 bg-stone-50 focus:bg-white transition-all outline-none text-2xl text-stone-900 font-bold placeholder:text-stone-300"
            />
          </InputWrapper>

          <InputWrapper label="Key Details" help="The more details, the more appetizing the AI output." required>
            <textarea
              required
              name="promotion"
              value={values.promotion}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about the ingredients, the atmosphere, or why tonight is the perfect night for a visit..."
              className="w-full px-8 py-7 rounded-3xl border-2 border-stone-200 bg-stone-50 focus:bg-white transition-all outline-none text-2xl text-stone-900 font-medium resize-none leading-relaxed"
            />
          </InputWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InputWrapper label="Brand Tone" required>
              <select
                name="tone"
                value={values.tone}
                onChange={handleChange}
                className="w-full px-8 py-6 rounded-3xl border-2 border-stone-200 bg-white shadow-sm outline-none text-xl text-stone-900 font-bold cursor-pointer appearance-none"
              >
                {Object.values(ToneStyle).map(tone => (
                  <option key={tone} value={tone}>{tone}</option>
                ))}
              </select>
            </InputWrapper>

            <InputWrapper label="Primary Call to Action" help="What should the guest do next?" required>
              <input
                required
                type="text"
                name="cta"
                value={values.cta}
                onChange={handleChange}
                placeholder="e.g. Reserve a Table"
                className="w-full px-8 py-6 rounded-3xl border-2 border-stone-200 bg-white shadow-sm outline-none text-xl text-stone-900 font-bold"
              />
            </InputWrapper>
          </div>
        </div>
      </div>

      {/* Section 3: Growth Preferences */}
      <div className="p-10 md:p-16 bg-stone-900 text-white space-y-14">
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 rounded-3xl bg-[#BC472B]/20 flex items-center justify-center text-[#BC472B]">
            <TrendingUp size={40} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-100 italic">Growth Settings</h2>
            <p className="text-xl text-stone-400 font-medium mt-4">Help us tailor the BistroMail AI experience for your restaurant.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-[0.3em]">Interest Check</label>
            <div className="flex flex-col gap-6">
              {Object.values(ValidationFeedback).map(feedback => (
                <label key={feedback} className={`flex items-center gap-6 px-10 py-7 rounded-3xl border-2 transition-all cursor-pointer ${values.helpful === feedback ? 'border-[#BC472B] bg-[#BC472B]/10 text-white shadow-2xl shadow-orange-900/20' : 'border-stone-800 bg-stone-800/40 hover:border-stone-700 text-stone-400'}`}>
                  <input type="radio" name="helpful" value={feedback} checked={values.helpful === feedback} onChange={handleChange} className="hidden" />
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${values.helpful === feedback ? 'bg-[#BC472B] border-[#BC472B]' : 'border-stone-600'}`} />
                  <span className={`text-2xl ${values.helpful === feedback ? 'font-bold text-white' : 'font-medium'}`}>{feedback}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-[0.3em]">Notes & Custom Requests</label>
            <textarea
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
              rows={8}
              placeholder="e.g. Can you connect to my POS system to track ROI?"
              className="w-full px-10 py-8 rounded-3xl border-2 border-stone-800 bg-stone-800/40 focus:bg-stone-800 transition-all outline-none text-white font-medium resize-none text-2xl placeholder:text-stone-700"
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="p-12 md:p-24 bg-[#F9F7F2]/60">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-9 rounded-full flex items-center justify-center gap-6 text-4xl font-bold transition-all shadow-[0_40px_80px_-20px_rgba(188,71,43,0.3)] ${isSubmitting ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : 'bg-[#BC472B] hover:bg-[#A33B23] text-white hover:scale-[1.02] active:scale-[0.98]'}`}
          >
            {isSubmitting ? (
              <><Loader2 className="animate-spin" size={40} />Building Content...</>
            ) : (
              <><Sparkles size={32} />Generate Newsletter<Send size={32} /></>
            )}
          </button>
          <p className="text-stone-500 font-bold uppercase tracking-widest text-xs">
            Professional copy crafted instantly for your brand
          </p>
        </div>
      </div>
    </form>
  );
};

export default FormStep;

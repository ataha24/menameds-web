"use client";

import { siteConfig } from "@/data/config";

export default function ContactForm() {
  return (
    // TODO: Wire up form — replace with server action or external form service
    <form
      className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-5"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Name
          </label>
          <input
            id="c-name"
            type="text"
            autoComplete="name"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="c-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Subject
        </label>
        <select
          id="c-subject"
          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors bg-white"
        >
          <option value="">Select a topic</option>
          <option>Discovery Days — volunteering or mentorship</option>
          <option>Expo — exhibit or partnership</option>
          <option>Directory — suggest a resource</option>
          <option>Media or press inquiry</option>
          <option>General question</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          required
          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-cardinal-600 text-white font-semibold text-sm hover:bg-cardinal-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

export function NewsletterForm() {
  return (
    <div className="mt-12 bg-slate-900 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <div className="flex-1">
        <p className="font-semibold text-white mb-1">Join our mailing list</p>
        <p className="text-sm text-slate-400">
          Get updates on events, opportunities, and community news from MENAMeds.
        </p>
      </div>
      {/* TODO: Wire up newsletter — Mailchimp, Buttondown, or custom */}
      <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="your@email.com"
          aria-label="Email for newsletter"
          className="flex-1 sm:w-52 px-3 py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
        />
        <button
          type="submit"
          className="shrink-0 px-4 py-2.5 rounded-lg bg-cardinal-500 text-white font-semibold text-sm hover:bg-cardinal-400 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

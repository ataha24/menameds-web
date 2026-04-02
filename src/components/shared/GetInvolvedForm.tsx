"use client";

export default function GetInvolvedForm() {
  return (
    // TODO: Replace with a real form — Typeform, Google Form, or server action
    <div className="mt-10 bg-white border border-slate-100 rounded-2xl shadow-sm p-8">
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Get involved form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gi-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name
            </label>
            <input
              id="gi-name"
              type="text"
              autoComplete="name"
              className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="gi-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email
            </label>
            <input
              id="gi-email"
              type="email"
              autoComplete="email"
              className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="you@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="gi-role" className="block text-xs font-semibold text-slate-700 mb-1.5">
            How would you like to get involved?
          </label>
          <select
            id="gi-role"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white"
          >
            <option value="">Select one</option>
            <option>Volunteer at events</option>
            <option>Mentor students</option>
            <option>Collaborate as an organization</option>
            <option>Submit a directory resource</option>
            <option>Join the mailing list only</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="gi-affiliation" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Affiliation / Role
          </label>
          <input
            id="gi-affiliation"
            type="text"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            placeholder="e.g. Stanford MS2, Community physician, Nonprofit director"
          />
        </div>
        <div>
          <label htmlFor="gi-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Anything else? (optional)
          </label>
          <textarea
            id="gi-message"
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
            placeholder="Tell us about yourself, your organization, or what you'd like to contribute."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
        >
          Submit
        </button>
        <p className="text-xs text-slate-400 text-center">
          {/* TODO: Wire up form submission — see /api/get-involved route or use a form service */}
          We&apos;ll follow up within a few days. Questions? Email{" "}
          <a href="mailto:menameds@stanford.edu" className="text-teal-600 hover:underline">
            menameds@stanford.edu
          </a>
        </p>
      </form>
    </div>
  );
}

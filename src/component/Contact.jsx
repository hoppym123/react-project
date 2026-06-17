import { useState } from 'react';

export default function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact-us" className="bg-[#070b18] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
          <div className="space-y-6 rounded-[2rem] bg-slate-900/95 p-10 ring-1 ring-white/10 shadow-2xl shadow-black/30" data-aos="fade-right">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Contact us</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">Ready to start your next project?</h2>
            <p className="text-slate-400 leading-7">
              Send a message and we&#39;ll get back to you with a free estimate, timeline, and material recommendations.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-white/10" data-aos="zoom-in">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Phone</p>
                <a href="tel:+2349014592261" className="mt-3 inline-block text-xl font-semibold text-white hover:text-amber-200 transition-colors cursor-pointer">
                  +2349014592261
                </a>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-white/10" data-aos="zoom-in" data-aos-delay="100">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
                <a href="mailto:yayaafeez197@gmail.com" className="mt-3 inline-block break-all text-xl font-semibold text-white hover:text-amber-200 transition-colors cursor-pointer max-w-xs">
                  yayaafeez197@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form action="https://formspree.io/f/mlgorqej"
            method="post" noValidate aria-label='contact form' className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-black/30" data-aos="fade-left">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-200">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-200">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                required
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/20"
              />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-amber-300 active:scale-95">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 

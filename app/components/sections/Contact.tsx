"use client";

import { useState } from "react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import PixelButton from "@/app/components/ui/PixelButton";
import { personalInfo, socialLinks } from "@/lib/constants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens the user's mail client as a fallback.
    // Replace with Formspree, EmailJS, or your own API endpoint.
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
  };

  const inputClass =
    "w-full bg-surface border-2 border-border px-4 py-3 text-text-primary font-mono text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="// 06" title="Message Guild" align="center" />

        <div className="rpg-panel p-6 md:p-8 mb-10">
          <p className="font-pixel text-[8px] text-gold mb-6 text-center uppercase tracking-wider">
            Write your message below
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-pixel text-[7px] text-text-muted mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-pixel text-[7px] text-text-muted mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-pixel text-[7px] text-text-muted mb-2 uppercase">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="What's on your mind?"
              />
            </div>

            <div className="text-center pt-2">
              <PixelButton>▶ SEND SCROLL</PixelButton>
            </div>
          </form>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-[8px] text-text-muted hover:text-gold transition-colors"
            >
              [ {link.name.toUpperCase()} ]
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-pixel text-[8px] text-text-muted hover:text-gold transition-colors"
          >
            [ EMAIL ]
          </a>
        </div>
      </div>
    </section>
  );
}

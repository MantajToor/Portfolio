"use client";

import { useState } from "react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import PixelButton from "@/app/components/ui/PixelButton";
import { personalInfo, socialLinks } from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface border-2 border-border px-4 py-3 text-text-primary font-mono text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="// 06" title="Get In Touch" align="center" />

        <div className="rpg-panel p-6 md:p-8 mb-10">
          <p className="font-pixel text-[8px] text-gold mb-6 text-center uppercase tracking-wider">
            Send me a message
          </p>

          {status === "success" ? (
            <div className="text-center py-10 space-y-3">
              <p className="font-pixel text-[10px] text-emerald">▶ MESSAGE SENT!</p>
              <p className="text-text-muted text-sm">Thanks — I&apos;ll get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="font-pixel text-[7px] text-text-muted hover:text-gold transition-colors mt-4 block mx-auto"
              >
                [ send another ]
              </button>
            </div>
          ) : (
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

              {status === "error" && (
                <p className="font-pixel text-[7px] text-crimson text-center">
                  ✕ Failed to send — please try again or email me directly.
                </p>
              )}

              <div className="text-center pt-2">
                <PixelButton type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "▷ SENDING..." : "▶ SEND MESSAGE"}
                </PixelButton>
              </div>
            </form>
          )}
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

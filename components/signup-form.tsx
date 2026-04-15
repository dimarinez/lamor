"use client";

import { useState, type FormEvent } from "react";
import { validateEmail } from "@/lib/utils";
import SectionHeading from "./section-heading";
import { Reveal, motion } from "./motion";
import { AnimatePresence } from "framer-motion";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "First name is required.";
    if (!lastName.trim()) next.lastName = "Last name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!validateEmail(email)) next.email = "Please enter a valid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          note: note.trim(),
          _hp: honeypot,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setNote("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-border rounded-xl text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink/30 transition-all duration-300";

  return (
    <section id="join" className="bg-powder-light py-20 md:py-28 lg:py-32">
      <div className="max-w-xl mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Join the List"
          subtitle="If Lamor sounds like the kind of experience you've been looking for, leave your details and we'll be in touch."
        />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-2xl text-ink mb-2">Thank you.</p>
              <p className="text-muted">Your details have been received.</p>
            </motion.div>
          ) : (
            <Reveal key="form">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot — hidden from real users */}
                <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="hp-field">Leave blank</label>
                  <input
                    id="hp-field"
                    type="text"
                    name="_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-1.5">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={inputClass}
                      placeholder="Jane"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-1.5">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={inputClass}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-ink mb-1.5">
                    Note{" "}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <textarea
                    id="note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Anything you'd like us to know..."
                  />
                </div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-ink text-white text-sm font-medium rounded-full hover:bg-ink-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "loading" ? "Submitting\u2026" : "Submit"}
                </motion.button>
              </form>
            </Reveal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

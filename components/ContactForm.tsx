"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      type: "spring" as const,
      bounce: 0.15,
    },
  }),
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      time: new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      }),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#B7410E]/50 focus:ring-1 focus:ring-[#B7410E]/30 focus:bg-white/[0.07] transition-all duration-300 font-mono backdrop-blur-sm";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full"
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
      >
        <motion.div className="flex flex-col gap-2" variants={fieldVariants} custom={0}>
          <label
            htmlFor="contact-name"
            className="text-xs font-mono text-white/40 uppercase tracking-widest"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
            disabled={status === "sending"}
          />
        </motion.div>
        <motion.div className="flex flex-col gap-2" variants={fieldVariants} custom={1}>
          <label
            htmlFor="contact-email"
            className="text-xs font-mono text-white/40 uppercase tracking-widest"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
            disabled={status === "sending"}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        variants={fieldVariants}
        custom={2}
      >
        <label
          htmlFor="contact-message"
          className="text-xs font-mono text-white/40 uppercase tracking-widest"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={`${inputClasses} resize-none`}
          disabled={status === "sending"}
        />
      </motion.div>

      {/* Status Messages */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3.5 text-sm text-green-400 font-mono"
        >
          <CheckCircle2 size={18} className="flex-shrink-0" />
          Message sent successfully!
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3.5 text-sm text-red-400 font-mono"
        >
          <AlertTriangle size={18} className="flex-shrink-0" />
          Something went wrong. Try again.
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        variants={fieldVariants}
        custom={3}
      >
        <button
          type="submit"
          disabled={status === "sending"}
          className="group relative w-full mt-2 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#B7410E] to-[#D96A36] px-8 py-4 font-bold text-base text-white shadow-[0_0_25px_rgba(183,65,14,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(183,65,14,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_0_25px_rgba(183,65,14,0.3)] cursor-pointer overflow-hidden"
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {status === "sending" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Transmitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </motion.div>
    </form>
  );
}

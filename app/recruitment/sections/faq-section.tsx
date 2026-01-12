
"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { faqs } from "../data";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  return (
    <section className="py-20 px-6" id="faq">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar IME
            FTUI 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/50 dark:bg-black/20 border border-white/40 dark:border-white/10 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { requirements } from "../data";

export function RequirementsSection() {
  return (
    <section className="py-20 px-6" id="requirements">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5"
            >
              <Award className="w-4 h-4 mr-2" />
              Persyaratan
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Yang Kami Cari
            </h2>
          </motion.div>

          <div className="grid gap-4">
            {requirements.map((req, index) => (
              <motion.div
                key={req}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{req}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

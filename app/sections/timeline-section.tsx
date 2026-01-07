"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import { timeline } from "@/app/data";

export function TimelineSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Timeline
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Rangkaian Rekrutmen
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Ikuti setiap tahapan dan jangan sampai terlewat
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-primary transition-all"
              style={{ width: "20%" }}
            />

            <div className="grid grid-cols-5 gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold relative z-10 ${
                        item.status === "active"
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                          : "bg-background border-2 border-border text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`text-xs font-medium ${
                        item.status === "active"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.date}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.event}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-3">
          {timeline.map((item, index) => (
            <motion.div
              key={item.event}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card rounded-xl p-4 flex items-start gap-3 ${
                item.status === "active" ? "ring-1 ring-primary/30" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  item.status === "active"
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground/5 text-foreground"
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <h3 className="font-semibold text-foreground text-sm">
                    {item.event}
                  </h3>
                  {item.status === "active" && (
                    <Badge className="bg-primary/10 text-primary border-0 text-[10px] px-1.5 py-0">
                      Aktif
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
                <span
                  className={`text-xs mt-1 inline-block ${
                    item.status === "active"
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

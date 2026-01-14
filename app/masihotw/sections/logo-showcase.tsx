"use client";

import { memo } from "react";
import Image from "next/image";
import { divisi } from "../data";

export const LogoShowcase = memo(function LogoShowcase() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Logo Grid - Clean and minimal */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {divisi.map((div) => (
            <div
              key={div.id}
              className="aspect-square flex items-center justify-center group"
            >
              <div className="w-full h-full p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-foreground/5 flex items-center justify-center">
                <Image
                  src={div.logoDark}
                  alt={div.abbr}
                  width={96}
                  height={96}
                  className="hidden dark:block object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
                <Image
                  src={div.logoLight}
                  alt={div.abbr}
                  width={96}
                  height={96}
                  className="block dark:hidden object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

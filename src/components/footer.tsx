"use client";

import { RadioTower } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socials = [
  { label: "Instagram", icon: FaInstagram },
  { label: "X", icon: FaXTwitter },
  { label: "Studio", icon: FaGithub },
];

export function Footer() {
  return (
    <footer className="section-x relative overflow-hidden border-t border-[#102117]/10 bg-white py-14">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#5CFF8F]/10 to-transparent" />
      <div className="noise-overlay" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-[#0B5A3F]/20 bg-[#EDF8EE] shadow-sm">
              <RadioTower className="h-5 w-5 text-[#E6B325]" />
            </span>
              <span className="font-display text-3xl uppercase text-[#102117]">StadiumX</span>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#526158]">
            Cricket broadcast design, crowd emotion, live analytics, and 3D stadium atmosphere
            fused into one premium single-page experience.
          </p>
        </div>
        <div className="flex gap-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href="#top"
                aria-label={social.label}
                whileHover={{ y: -5, rotate: index % 2 === 0 ? -4 : 4 }}
                className="grid h-12 w-12 place-items-center rounded-md border border-[#102117]/10 bg-[#F7F9F2] text-[#102117]/70 transition hover:border-[#0B5A3F]/35 hover:text-[#0B5A3F]"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

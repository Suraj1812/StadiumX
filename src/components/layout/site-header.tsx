"use client";

import { Activity, BarChart3, Menu, Trophy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#live-match", label: "Live Match" },
  { href: "#teams", label: "Teams" },
  { href: "#players", label: "Players" },
  { href: "#analytics", label: "Analytics" },
  { href: "#highlights", label: "Highlights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[#102117]/10 bg-[#FBFCF7]/86 px-4 py-3 shadow-[0_10px_30px_rgba(16,33,23,.06)] backdrop-blur-xl sm:px-6 lg:px-10 2xl:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-[#0B5A3F]/20 bg-white shadow-sm">
            <Trophy className="h-5 w-5 text-[#E6B325]" />
          </span>
          <span className="font-display text-2xl uppercase leading-none text-[#102117]">StadiumX</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-[#102117]/10 bg-white px-1.5 py-1.5 shadow-sm lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#526158] transition hover:bg-[#EDF5EC] hover:text-[#0B5A3F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B5A3F]/15 bg-[#EDF8EE] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0B5A3F]">
            <Activity className="h-3.5 w-3.5" />
            Stable live UI
          </span>
          <a
            href="#analytics"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#0B5A3F] px-3 text-sm font-medium text-white transition hover:bg-[#063b2a]"
          >
            <BarChart3 className="h-4 w-4" />
            Insights
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="lg:hidden" />
            }
          >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent className="border-[#102117]/10 bg-[#FBFCF7]">
            <SheetHeader>
              <SheetTitle className="font-display text-3xl uppercase text-[#102117]">StadiumX</SheetTitle>
            </SheetHeader>
            <div className="mt-8 grid gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-[#102117]/10 bg-white px-4 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#102117] shadow-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

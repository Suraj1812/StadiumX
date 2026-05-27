"use client";

import { ArrowUpRight, CalendarDays, Newspaper, Table2 } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { fixtures, newsItems, standings } from "@/data/cricket";

export function SeasonHub() {
  return (
    <SectionShell
      id="season-hub"
      eyebrow="Season Hub"
      title="Fixtures, Table, Reports"
      intro="A real cricket site needs practical routes: what is next, who is on top, and what happened last night."
      className="bg-[#F7F9F2]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
        <Reveal>
          <div className="rounded-md border border-[#102117]/10 bg-white p-5 shadow-[0_22px_60px_rgba(16,33,23,.08)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B5A3F]">
                  <CalendarDays className="h-4 w-4" />
                  Fixtures
                </p>
                <h3 className="mt-2 font-display text-4xl uppercase text-[#102117]">Playoff schedule</h3>
              </div>
              <a
                href="#live-match"
                className="hidden items-center gap-1 rounded-full border border-[#102117]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#526158] transition hover:text-[#0B5A3F] sm:inline-flex"
              >
                Match center <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-3">
              {fixtures.map((fixture) => (
                <article
                  key={`${fixture.home}-${fixture.away}`}
                  className="grid gap-4 rounded-md border border-[#102117]/10 bg-[#FBFCF7] p-4 sm:grid-cols-[7rem_minmax(0,1fr)_7rem] sm:items-center"
                >
                  <div>
                    <p className="font-score text-3xl leading-none text-[#102117]">{fixture.date}</p>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#68766e]">
                      {fixture.time}
                    </p>
                  </div>
                  <div>
                    <p className="font-black text-[#102117]">
                      {fixture.home} <span className="text-[#9aa39c]">vs</span> {fixture.away}
                    </p>
                    <p className="mt-1 text-sm text-[#68766e]">{fixture.venue}</p>
                  </div>
                  <span className="w-fit rounded-full bg-[#EDF8EE] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#0B5A3F] sm:justify-self-end">
                    {fixture.tag}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.06}>
            <div className="rounded-md border border-[#102117]/10 bg-white p-5 shadow-[0_22px_60px_rgba(16,33,23,.08)]">
              <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B5A3F]">
                <Table2 className="h-4 w-4" />
                Standings
              </p>
              <div className="overflow-hidden rounded-md border border-[#102117]/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#EDF8EE] text-xs uppercase tracking-[0.14em] text-[#526158]">
                    <tr>
                      <th className="px-3 py-3">#</th>
                      <th className="px-3 py-3">Team</th>
                      <th className="px-3 py-3 text-right">Pts</th>
                      <th className="px-3 py-3 text-right">NRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#102117]/10">
                    {standings.map((row) => (
                      <tr key={row.team} className="bg-white">
                        <td className="px-3 py-3 font-score text-2xl text-[#0B5A3F]">{row.pos}</td>
                        <td className="px-3 py-3 font-bold text-[#102117]">{row.team}</td>
                        <td className="px-3 py-3 text-right font-bold text-[#102117]">{row.points}</td>
                        <td className="px-3 py-3 text-right text-[#68766e]">{row.nrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-md border border-[#102117]/10 bg-white p-5 shadow-[0_22px_60px_rgba(16,33,23,.08)]">
              <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B5A3F]">
                <Newspaper className="h-4 w-4" />
                Latest reports
              </p>
              <div className="space-y-3">
                {newsItems.map((item) => (
                  <article key={item.title} className="rounded-md border border-[#102117]/10 bg-[#FBFCF7] p-4">
                    <p className="text-[0.64rem] font-black uppercase tracking-[0.16em] text-[#E6B325]">
                      {item.category} / {item.meta}
                    </p>
                    <h3 className="mt-2 font-bold leading-6 text-[#102117]">{item.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

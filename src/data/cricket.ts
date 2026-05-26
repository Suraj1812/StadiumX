import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Flame,
  RadioTower,
  Shield,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

export type Team = {
  id: string;
  name: string;
  city: string;
  shortName: string;
  logo: string;
  primary: string;
  secondary: string;
  accent: string;
  record: string;
  form: string[];
  aura: string;
  powerPlay: number;
  deathOvers: number;
  fielding: number;
};

export type Player = {
  name: string;
  role: string;
  team: string;
  image: string;
  badge: string;
  accent: string;
  stats: {
    label: string;
    value: number;
    suffix?: string;
  }[];
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
  metric: string;
  icon: LucideIcon;
};

export const teams: Team[] = [
  {
    id: "mumbai",
    name: "Mumbai Meteor",
    city: "Wankhede",
    shortName: "MM",
    logo: "M",
    primary: "#0B3DFF",
    secondary: "#071B2A",
    accent: "#E6B325",
    record: "8-2",
    form: ["W", "W", "L", "W", "W"],
    aura: "death-over machines with a gold-trimmed pace cartel",
    powerPlay: 88,
    deathOvers: 93,
    fielding: 86,
  },
  {
    id: "chennai",
    name: "Chennai Crown",
    city: "Chepauk",
    shortName: "CC",
    logo: "C",
    primary: "#E6B325",
    secondary: "#0B3D2E",
    accent: "#5CFF8F",
    record: "7-3",
    form: ["W", "L", "W", "W", "W"],
    aura: "spin, patience, and playoff memory under brutal humidity",
    powerPlay: 81,
    deathOvers: 84,
    fielding: 89,
  },
  {
    id: "bengaluru",
    name: "Bengaluru Volt",
    city: "Chinnaswamy",
    shortName: "BV",
    logo: "B",
    primary: "#FF3B3B",
    secondary: "#050505",
    accent: "#5CFF8F",
    record: "6-4",
    form: ["L", "W", "W", "L", "W"],
    aura: "high-altitude hitting and scoreboard pressure from ball one",
    powerPlay: 94,
    deathOvers: 78,
    fielding: 82,
  },
  {
    id: "kolkata",
    name: "Kolkata Knights",
    city: "Eden Gardens",
    shortName: "KK",
    logo: "K",
    primary: "#6D28D9",
    secondary: "#071B2A",
    accent: "#E6B325",
    record: "6-4",
    form: ["W", "W", "W", "L", "L"],
    aura: "left-arm mystery, purple smoke, and late-night boundary storms",
    powerPlay: 85,
    deathOvers: 87,
    fielding: 91,
  },
];

export const players: Player[] = [
  {
    name: "Arjun Viraat",
    role: "Opener",
    team: "Bengaluru Volt",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85",
    badge: "Powerplay detonator",
    accent: "#FF3B3B",
    stats: [
      { label: "Runs", value: 684 },
      { label: "SR", value: 174 },
      { label: "6s", value: 42 },
    ],
  },
  {
    name: "Rehan Noor",
    role: "Left-arm Quick",
    team: "Mumbai Meteor",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=85",
    badge: "Yorker architect",
    accent: "#5CFF8F",
    stats: [
      { label: "Wkts", value: 28 },
      { label: "Eco", value: 6.8 },
      { label: "Dots", value: 151 },
    ],
  },
  {
    name: "Devika Rao",
    role: "Finisher",
    team: "Chennai Crown",
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?auto=format&fit=crop&w=900&q=85",
    badge: "Last-over pulse",
    accent: "#E6B325",
    stats: [
      { label: "Avg", value: 61 },
      { label: "SR", value: 189 },
      { label: "Clutch", value: 94, suffix: "%" },
    ],
  },
];

export const inningsData = [
  { over: "1", runs: 8, rr: 8.0, wickets: 0 },
  { over: "2", runs: 17, rr: 8.5, wickets: 0 },
  { over: "3", runs: 26, rr: 8.7, wickets: 1 },
  { over: "4", runs: 41, rr: 10.2, wickets: 1 },
  { over: "5", runs: 52, rr: 10.4, wickets: 1 },
  { over: "6", runs: 66, rr: 11.0, wickets: 1 },
  { over: "7", runs: 73, rr: 10.4, wickets: 2 },
  { over: "8", runs: 87, rr: 10.9, wickets: 2 },
  { over: "9", runs: 98, rr: 10.8, wickets: 2 },
  { over: "10", runs: 112, rr: 11.2, wickets: 2 },
  { over: "11", runs: 127, rr: 11.5, wickets: 3 },
  { over: "12", runs: 141, rr: 11.8, wickets: 3 },
];

export const overByOver = ["8", "9", "9 W", "15", "11", "14", "7 W", "14", "11", "14", "15 W", "14"];

export const momentumData = [
  { phase: "PP", batting: 92, bowling: 56, fielding: 74 },
  { phase: "Middle", batting: 78, bowling: 68, fielding: 83 },
  { phase: "Spin", batting: 66, bowling: 87, fielding: 76 },
  { phase: "Death", batting: 96, bowling: 72, fielding: 88 },
  { phase: "Clutch", batting: 89, bowling: 80, fielding: 91 },
];

export const milestones: Milestone[] = [
  {
    year: "2008",
    title: "The lights came on",
    description: "Franchise cricket became prime-time theatre, all color, noise, and impossible chases.",
    metric: "8 teams",
    icon: RadioTower,
  },
  {
    year: "2011",
    title: "The trophy got heavier",
    description: "Rivalries gained folklore. Every over started to feel like a title fight.",
    metric: "74 matches",
    icon: Trophy,
  },
  {
    year: "2016",
    title: "Power-hitting era",
    description: "Bat speed, analytics, and fearless intent rewired how the final ten overs were played.",
    metric: "638 sixes",
    icon: Zap,
  },
  {
    year: "2020",
    title: "Empty stands, full volume",
    description: "Broadcast craft carried the emotion when the seats went quiet.",
    metric: "31.6B mins",
    icon: Shield,
  },
  {
    year: "2026",
    title: "StadiumX signal",
    description: "A cinematic layer of live data, crowd pulse, and interactive match storytelling.",
    metric: "Live now",
    icon: Sparkles,
  },
];

export const gallery = [
  {
    title: "Floodlit toss",
    kicker: "7:28 PM",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=85",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Boundary rope cam",
    kicker: "Ultra slow-mo",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85",
    span: "",
  },
  {
    title: "Dugout pulse",
    kicker: "Win predictor",
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?auto=format&fit=crop&w=900&q=85",
    span: "",
  },
  {
    title: "Final-over stare",
    kicker: "Hot zone",
    image:
      "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?auto=format&fit=crop&w=900&q=85",
    span: "md:col-span-2",
  },
];

export const broadcastStats = [
  { label: "Crowd db", value: 106, suffix: "" },
  { label: "Win swing", value: 18, suffix: "%" },
  { label: "Peak SR", value: 214, suffix: "" },
  { label: "Light rigs", value: 64, suffix: "" },
];

export const heroTicker = [
  "MM 141/3 after 12.0",
  "Required rate 10.25",
  "Noor warming up at deep square",
  "Volt review retained",
  "Chinnaswamy noise at 106db",
  "Boundary probability rising",
];

export const predictionCards = [
  { label: "Meteor defend", chance: 54, icon: Crown },
  { label: "Volt chase", chance: 46, icon: Flame },
  { label: "Super over", chance: 9, icon: Sparkles },
];

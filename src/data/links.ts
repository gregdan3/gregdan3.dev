import type { Link } from "$lib/types";
import type { DiscordShield } from "$lib/types";

export const metaLinks: Link[] = [
  { name: "License", href: "/LICENSE.txt", icon: "mingcute:document-line" },
  {
    name: "Repo",
    href: "https://github.com/gregdan3/gregdan3.github.io",
    icon: "mingcute:code-line",
  },
];

export const internalLinks: Link[] = [
  {
    name: "Home",
    href: "/",
    icon: "mingcute:home-4-line",
    // tooltip: "mu mu mu mu mu",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: "mingcute:book-6-line",
    tooltip: "Every dev needs an abandoned blog.",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: "mingcute:terminal-box-line",
    // tooltip: "",
  },
  // { name: 'Mind Map', url: '/map/' },
  {
    name: "Now",
    href: "/now",
    icon: "mingcute:calendar-time-add-line",
    tooltip: "What am I doing right now?",
  },
];

export const externalLinks: Link[] = [
  {
    name: "Toki Pona",
    href: "https://mun.la/",
    icon: "tokipona",
  },
  {
    name: "ilo Muni",
    href: "https://gregdan3.github.io/ilo-muni/",
    icon: "ilomuni",
  },
];

export const subscribeLinks: Link[] = [
  {
    name: "RSS",
    href: "/rss/",
    icon: "mingcute:rss-2-fill",
  },
];

export const socialLinks: Link[] = [
  // {
  // 	name: 'Gitlab',
  // 	href: 'https://gitlab.com/gregdan3',
  // 	icon: "fa-brands:gitlab",
  // },
  // {
  // 	name: 'LinkedIn',
  // 	href: 'https://www.linkedin.com/in/gregdan3',
  // 	icon: "fa-brands:linkedin",
  // },
  // { name: 'Reddit', url: 'https://reddit.com/u/gregdan3d' },
  // {
  // 	name: 'Twitter',
  // 	href: 'https://www.twitter.com/gregdan3d',
  // 	icon: "fa-brands:twitter",
  // },
  {
    name: "Discord",
    href: "https://discord.com/users/497549183847497739",
    icon: "fa-brands:discord",
  },
  {
    name: "Telegram",
    href: "https://gregdan3.t.me",
    icon: "fa-brands:telegram-plane",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@gregdan3d",
    icon: "fa-brands:youtube",
  },
  {
    name: "GitHub",
    href: "https://github.com/gregdan3",
    icon: "fa-brands:github",
  },
];

// shields
export const servers: DiscordShield[] = [
  {
    invite_link: "https://discord.gg/mapona",
    label: "ma pona pi toki pona",
    server_id: "301377942062366741",
    color: "3A4740",
    logoColor: "white",
    labelColor: "5865F2",
    style: "plastic",
    logo: "discord",
  },
  {
    invite_link: "https://discord.gg/ChC6qtVsSE",
    label: "kama sona",
    server_id: "969386329513295872",
    color: "3A4740",
    logoColor: "white",
    labelColor: "violet",
    style: "plastic",
    logo: "discord",
  },
  {
    invite_link: "https://discord.gg/arjV4Nw",
    label: "ma toki pona",
    server_id: "453933949362765826",
    color: "3A4740",
    logoColor: "white",
    labelColor: "yellow",
    style: "plastic",
    logo: "discord",
  },
  {
    invite_link: "https://vrc.group/TOKI.9663",
    label: "MA TOKI PONA VR",
    server_id: "929521083193888790",
    color: "3A4740",
    logoColor: "white",
    labelColor: "00a6e8",
    style: "plastic",
    logo: "discord",
  },
  {
    invite_link: "https://discord.gg/A3ZPqnHHsy",
    label: "kulupu Linku",
    server_id: "972470770443886662",
    color: "3A4740",
    logoColor: "white",
    labelColor: "lightgray",
    style: "plastic",
    logo: "discord",
  },
  {
    invite_link: "https://discord.gg/7BfyugsbEK",
    label: "ma unpa pi toki unpa",
    server_id: "1036373672895725598",
    color: "3A4740",
    logoColor: "white",
    labelColor: "DD2222",
    style: "plastic",
    logo: "discord",
  },
];

import EbookNookImg1 from '../public/EBookNook/image1.png'
import EbookNookImg2 from '../public/EBookNook/image2.png'
import EbookNookImg3 from '../public/EBookNook/image3.png'
import FlasherImg1 from '../public/FirmwareFlashingTool/image1.png'
import FlasherImg2 from '../public/FirmwareFlashingTool/image2.png'
import FlasherImg3 from '../public/FirmwareFlashingTool/image3.png'
import MusicBotImg1 from '../public/MusicBot/image1.png'
import MusicBotImg2 from '../public/MusicBot/image2.png'
import MusicBotImg3 from '../public/MusicBot/image3.png'

export const WORK = [
  {
    id: '01',
    title: 'EyetrackVR',
    year: '2023',
    role: 'Core Maintainer',
    color: 'bg-[#b1d1bb]',
    description:
      "Core maintainer of an open-source VR eye-tracking ecosystem with 1.1K+ GitHub stars, driving design, UX, and frontend architecture decisions across the project's core tools",
    content: {
      main: 'An opensource VR eye tracking project.',
      content1: 'I contribute to the project by working on the FirmwareFlashingTool.',
      content2: 'It has grown into a community project with over 1.1K GitHub stars.',
    },
    tags: ['VR', 'Tracking', 'Community', 'opensource'],
  },
  {
    id: '02',
    color: 'bg-[#ddcca9]',
    title: 'FirmwareFlashingTool',
    year: '2023',
    role: 'Frontend Engineer',
    description:
      'Complete rewrite of the ETVR firmware flashing tool (22+ stars) — flashing made accessible without a command line.',
    images: {
      image1: FlasherImg1,
      image2: FlasherImg2,
      image3: FlasherImg3,
    },
    content: {
      main: 'A desktop application for flashing EyeTrackVR firmware.',
      content1: 'Designed to make firmware updates simple without relying on command line tools.',
      content2:
        'Built as a complete rewrite with a focus on a cleaner and more user friendly experience.',
    },
    tags: ['SolidJS', 'Tauri V2', 'Rust', 'ESP', 'tailwindcss', 'UI/UX'],
  },
  {
    id: '03',
    title: 'EbookNook',
    year: '2024',
    color: 'bg-[#e6b7b2]',
    role: 'Solo Project',
    description:
      'Desktop ebook reader with a custom UI/UX, built to close usability gaps in existing tools.',
    images: {
      image1: EbookNookImg1,
      image2: EbookNookImg2,
      image3: EbookNookImg3,
    },
    content: {
      main: 'A desktop ebook reader I built as a personal project.',
      content1: "I created it because I wasn't happy with the ebook readers I had been using.",
      content2: 'It focuses on a simple interface and a comfortable reading experience.',
    },
    tags: [
      'Tauri v2',
      'Typescript',
      'React',
      'rust',
      'sqlite',
      'vitest',
      'biome',
      'redux',
      'tailwindcss',
    ],
  },
  {
    id: '04',
    title: 'Chunky bot',
    year: '2024',
    color: 'bg-[#c9bde0]',
    role: 'Solo Project',
    description: 'A music bot for Discord, built as a fun side project.',
    images: {
      image1: MusicBotImg1,
      image2: MusicBotImg2,
      image3: MusicBotImg3,
    },
    content: {
      main: 'A small Discord music bot I built for fun.',
      content1:
        'It supports queue management, playback controls, and an easy to extend command structure.',
      content2: 'Built from scratch as a way to experiment with Discord APIs and bot development.',
    },
    tags: ['Music', 'Discord', 'Typescript', 'Commands'],
  },
]

export const WORK_MAP = WORK.reduce(
  (acc, el) => {
    acc[el.id] = el
    return acc
  },
  {} as Record<string, (typeof WORK)[number]>,
)

export const TECH = [
  'Typescript',
  'React',
  'SolidJS',
  'JavaScript',
  'Zustand',
  'Tauri v2',
  'TailwindCSS',
  'Playwright',
  'Vitest',
  'Figma',
]

export const INTRO = [
  {
    id: 'synthetify',
    text: 'At Synthetify, I led frontend architecture for a crypto trading platform from greenfield, building the live orderbook, trade history, and charting UI while engineering a WebSocket and REST data layer that preserved full BigInt precision from the Rust backend - no rounding errors in financial calculations. I also built the testing infrastructure (Playwright, Vitest) from scratch.',
  },
  {
    id: 'nightly',
    text: 'On Nightly Wallet, I helped scale a multi chain crypto wallet to 200k+ downloads and 50k active users, shipping staking, token swaps, and cross chain functionality powered by NEAR Intents, and integrating 10+ blockchain protocols into one interface.',
  },
  {
    id: 'eyetrackvr',
    text: "Outside of paid work, I core maintain EyeTrackVR, an opensource VR eye tracking ecosystem with 1.1K+ GitHub stars, where I drive UX and frontend architecture decisions for the project's tools.",
  },
]

export const EXPERIENCE = [
  {
    id: 'synthetify-labs',
    period: '2022-2026',
    role: 'Frontend Engineer',
    place: 'Synthetify Labs · Cracow',
    description:
      'Led the frontend of Neony Exchange (live crypto trading) and was a core developer on Nightly Wallet — 200K+ downloads, 50K+ active users.',
  },
  {
    id: 'eyetrackvr',
    period: '2021 — Present',
    role: 'Core Maintainer',
    place: 'EyeTrackVR · Open source',
    description:
      'Maintain an open-source VR eye-tracking ecosystem (1.1K+ stars) and led a full rewrite of the Firmware Flashing Tool.',
  },
  {
    id: 'high-school',
    period: '2017-2020',
    role: 'High school',
    place: 'Rybnik, Poland',
    description: 'General secondary education.',
  },
]

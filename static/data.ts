import EbookNook from '../public/ebookNook.png'
import Flasher from '../public/Flasher.png'
import MusicBot from '../public/MusicBot.png'

export const work = [
  {
    id: '01',
    title: 'EyetrackVR',
    year: '2023',
    role: 'Core Maintainer',
    color: 'bg-[#b1d1bb]',
    description:
      "Core maintainer of an open-source VR eye-tracking ecosystem with 1.1K+ GitHub stars, driving design, UX, and frontend architecture decisions across the project's core tools",
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
    image: Flasher,
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
    image: EbookNook,
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
    image: MusicBot,
    tags: ['Music', 'Discord', 'Typescript', 'Commands'],
  },
]

export const tech = [
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

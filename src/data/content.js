import {
  ShieldCheck,
  Layers,
  Gauge,
  Award,
  Factory,
  BadgeCheck,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Specifications', href: '#specs' },
  { label: 'Applications', href: '#applications' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
]

export const WHY_SUPRA = [
  {
    icon: Gauge,
    title: 'Superior Strength',
    desc: 'Engineered for high tensile bonds that hold steel together under heavy load.',
  },
  {
    icon: Layers,
    title: 'Consistent Quality',
    desc: 'Every batch monitored for chemical composition and coating integrity.',
  },
  {
    icon: ShieldCheck,
    title: 'Crack Resistant',
    desc: 'Low-hydrogen formulations deliver clean, crack-free structural welds.',
  },
  {
    icon: Award,
    title: 'Trusted Performance',
    desc: 'The dependable choice for professionals across India for over a decade.',
  },
  {
    icon: Factory,
    title: 'Industrial Grade',
    desc: 'Built to perform from small fabrication to large-scale operations.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Manufacturing',
    desc: 'ISO 9001:2015 certified and MSME registered processes throughout.',
  },
]

export const PRODUCTS = [
  {
    code: 'E6013 / 6013S / 6013SS',
    name: 'General Purpose',
    tagline: 'Smooth arc, easy strike',
    desc: 'A versatile all-position electrode delivering a stable arc and fine, easy-to-clean welds for everyday fabrication.',
    apps: ['Sheet Metal', 'Fabrication', 'General Repair'],
  },
  {
    code: 'E7018',
    name: 'Low-Hydrogen',
    tagline: 'The structural gold standard',
    desc: 'Produces very strong, crack-resistant welds for critical structural integrity. Keep dry in a rod oven.',
    apps: ['Structural Steel', 'Storage Tanks', 'Boilers', 'Bridges'],
  },
  {
    code: 'E308L / 309L / E312 / E316L',
    name: 'Stainless Steel',
    tagline: 'Corrosion-resistant alloys',
    desc: 'Stainless steel electrodes for joining and surfacing stainless and dissimilar steels with excellent corrosion resistance.',
    apps: ['Stainless Fabrication', 'Food & Dairy', 'Chemical Plants'],
  },
]

export const ELECTRODE_TYPES = [
  {
    code: 'E6010',
    label: 'Fast-Freeze',
    advantages: ['Deep penetration', 'Cuts through contamination', 'Strong root passes'],
    useCases: ['Pipeline welding', 'Field repair', 'Rusty / painted steel'],
  },
  {
    code: 'E6011',
    label: 'Fast-Freeze (AC)',
    advantages: ['Runs on AC & DC', 'Aggressive arc', 'Forgiving on poor fit-up'],
    useCases: ['Farm & maintenance', 'Demolition repair', 'General fabrication'],
  },
  {
    code: 'E7018',
    label: 'Low-Hydrogen',
    advantages: ['Crack-resistant welds', 'Highest strength', 'Smooth, clean beads'],
    useCases: ['Structural buildings', 'Bridges', 'Pressure-critical joints'],
  },
]

export const SPECS = [
  { swg: '12', size: '2.50 × 350', count: '125', current: '80–120 Amps', type: 'AC / DC (±)' },
  { swg: '10', size: '3.15 × 350 / 450', count: '90', current: '90–140 Amps', type: 'AC / DC (±)' },
  { swg: '08', size: '4.00 × 350 / 450', count: '60', current: '140–190 Amps', type: 'AC / DC (±)' },
  { swg: '06', size: '5.00 × 450', count: '40', current: '170–230 Amps', type: 'AC / DC (±)' },
]

export const APPLICATIONS = [
  'Construction',
  'Heavy Engineering',
  'Automotive',
  'Fabrication',
  'Shipbuilding',
  'Bridges',
  'Pipelines',
  'Industrial Plants',
]

export const QUALITY_STEPS = [
  { step: '01', title: 'Quality Control', desc: 'Strict quality control systems govern every stage of production.' },
  { step: '02', title: 'Chemical Testing', desc: 'Consistent chemical composition verified for every batch.' },
  { step: '03', title: 'Mechanical Testing', desc: 'Rigorous mechanical testing confirms strength and reliability.' },
  { step: '04', title: 'Packaging', desc: 'Coating integrity preserved with protective, moisture-safe packaging.' },
  { step: '05', title: 'Distribution', desc: 'Delivered nationwide to fabricators and industrial partners.' },
]

export const CERTIFICATIONS = [
  { title: 'ISO 9001:2015', subtitle: 'Certified Quality Management', tag: 'Certified Company' },
  { title: 'MSME', subtitle: 'Micro, Small & Medium Enterprises', tag: 'Registered' },
  // { title: 'Govt. of India', subtitle: 'Ministry of MSME', tag: 'Government Registered' },
]

export const STATS = [
  { value: 9001, suffix: ':2015', label: 'ISO Certified' },
 
  { value: 100, suffix: '%', label: 'Batch Tested' },
]

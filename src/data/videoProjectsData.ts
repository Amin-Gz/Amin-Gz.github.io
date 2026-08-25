import { PrivateProjectVideo } from '../types';

export const videoProjectsData: PrivateProjectVideo[] = [
  {
    id: 'ariomex-trade-terminal',
    title: 'Ariomex High-Frequency Trading Terminal & OrderBook',
    company: 'Ariomex (FinTech & Cryptocurrency Exchange)',
    role: 'Frontend Software Engineer',
    period: '2023 – 2024',
    ndaDisclaimer: 'Client data, proprietary order routing algorithms, and API keys obfuscated under Non-Disclosure Agreement (NDA). UI/UX execution and interactive frontend state flows presented for architectural review.',
    category: 'FinTech & Trading',
    tagline: 'Sub-16ms low latency orderbook, real-time WebSocket tick engine, and dense multi-panel trading interface.',
    overview: 'Engineered the primary high-velocity trading dashboard used by institutional and retail crypto traders. Solved severe DOM reflow bottlenecks caused by thousands of streaming WebSocket price updates per second using virtualized lists and memoized canvas charting.',
    uxHighlights: [
      'Engineered virtualized Depth-of-Market (DOM) orderbook rendering 200+ price level mutations per second at a locked 60fps.',
      'Designed a multi-window customizable dock workspace enabling users to pin candlestick charts, open positions, order tickets, and execution logs.',
      'Implemented optimistic UI state with instant tactile feedback and keyboard shortcuts (Hotkeys) for rapid limit/stop-loss order submission.',
      'Integrated real-time slippage calculation and dynamic margin leverage visualizers.',
    ],
    technologies: ['React 18', 'TypeScript', 'WebSockets', 'TradingView Lightweight Charts', 'Zustand', 'Tailwind CSS', 'Web Workers'],
    metrics: '< 12ms WebSocket tick render latency · 60fps canvas depth charts',
    duration: '03:45 Walkthrough',
    mockupType: 'trading',
    videoPreviewBadge: 'Interactive Video Walkthrough',
    keyWorkflows: [
      {
        timestamp: '00:00 - 00:45',
        title: 'Workspace Layout & Split View Docking',
        description: 'Demonstrating modular layout reordering, compact financial typography, and dark-theme high-contrast color hierarchy for trader eye strain reduction.',
      },
      {
        timestamp: '00:46 - 01:30',
        title: 'Streaming OrderBook & Depth Chart Mutations',
        description: 'Walkthrough of live WebSocket pipeline streaming depth delta updates into Web Workers to prevent main-thread UI jank.',
      },
      {
        timestamp: '01:31 - 02:40',
        title: 'Order Ticket & Advanced Leverage Sliders',
        description: 'Interactive execution of market, limit, and trailing stop orders with live liquidation boundary indicators.',
      },
      {
        timestamp: '02:41 - 03:45',
        title: 'Open Positions & Real-Time PnL Tracker',
        description: 'Demonstration of real-time unrealized PnL recalculations and one-click bulk position closure safety confirmations.',
      },
    ],
  },
  {
    id: 'tonb-fleet-dispatcher',
    title: 'Tonb Smart Logistics Fleet Dispatch & Routing Canvas',
    company: 'Tonb Freight & Supply Chain Corp',
    role: 'Frontend / Full-Stack Engineer',
    period: '2024 – Present',
    ndaDisclaimer: 'Commercial carrier rates, shipper identities, and proprietary geofencing routes sanitized in accordance with corporate data protection policies.',
    category: 'Logistics & Dispatch',
    tagline: 'Multi-node map clustering, freight load assignment Gantt charts, and real-time transit telemetry.',
    overview: 'Built the real-time operational command center for national freight dispatchers coordinating hundreds of long-haul carrier vehicles. Provided live GPS telemetry visualization, dynamic cargo matching, and predictive delivery schedule alerts.',
    uxHighlights: [
      'Custom SVG/Canvas fleet radar interface tracking 500+ active carrier trucks with live speed, temperature, and geofence alerts.',
      'Drag-and-drop shipment assignment timeline coordinating multi-leg cargo transfers with automated driver rest-break validation.',
      'Instant search and multi-criteria freight filtering across weight, hazard class, refrigerated trailers, and carrier ratings.',
      'Emergency broadcast notification system with audible cues and actionable resolution modals.',
    ],
    technologies: ['React', 'TypeScript', 'Mapbox GL / Canvas', 'Dnd Kit', 'Django REST', 'Redis Streams', 'Tailwind CSS'],
    metrics: 'Coordinating 500+ live trucks · 42% reduction in dispatcher assignment time',
    duration: '04:12 Walkthrough',
    mockupType: 'dispatch',
    videoPreviewBadge: 'Operational UI Walkthrough',
    keyWorkflows: [
      {
        timestamp: '00:00 - 01:05',
        title: 'Live Geographic Fleet Overview',
        description: 'Clustered marker animations, transit status badges, and rapid zoom filtering by corridor or destination hub.',
      },
      {
        timestamp: '01:06 - 02:15',
        title: 'Load Assignment Drag-and-Drop Matrix',
        description: 'Assigning pending cargo orders to available carrier slots with real-time volume and weight capacity warnings.',
      },
      {
        timestamp: '02:16 - 03:20',
        title: 'Driver Telemetry & Cold-Chain Monitoring',
        description: 'Inspecting live reefer temperature sensors and historical route deviation logs.',
      },
      {
        timestamp: '03:21 - 04:12',
        title: 'Automated Bill of Lading (BOL) Dispatch',
        description: 'One-click generation and cryptographic digital dispatch of digital manifests to carrier mobile terminals.',
      },
    ],
  },
];

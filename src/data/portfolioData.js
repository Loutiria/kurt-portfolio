import {
  Mail,
  CalendarCheck,
  FileSpreadsheet,
  FolderKanban,
  Search,
  ClipboardList,
  MonitorCog,
  Palette,
} from "lucide-react";

export const navItems = [
  "about",
  "services",
  "tools",
  "workflow",
  "projects",
  "experience",
  "contact",
];

export const skills = [
  "Adobe Photoshop",
  "Canva",
  "Google Workspace",
  "Microsoft Office",
  "File Management",
  "Data Entry",
  "Internet Research",
  "Email Communication",
  "Event Planning",
  "Event Coordination",
  "Facilitation",
  "Attention to Detail",
  "Time Management",
  "Organization",
  "Adaptability",
  "Communication",
  "Problem Solving",
  "Critical Thinking",
];

export const tools = [
  {
    name: "Google Docs",
    logo: "GD",
    color:
      "text-blue-300 border-blue-400/30 bg-blue-500/10 hover:border-blue-400/50",
  },
  {
    name: "Google Sheets",
    logo: "GS",
    color:
      "text-green-300 border-green-400/30 bg-green-500/10 hover:border-green-400/50",
  },
  {
    name: "Gmail",
    logo: "GM",
    color:
      "text-red-300 border-red-400/30 bg-red-500/10 hover:border-red-400/50",
  },
  {
    name: "Google Calendar",
    logo: "GC",
    color:
      "text-cyan-300 border-cyan-400/30 bg-cyan-500/10 hover:border-cyan-400/50",
  },
  {
    name: "Canva",
    logo: "CA",
    color:
      "text-sky-300 border-sky-400/30 bg-sky-500/10 hover:border-sky-400/50",
  },
  {
    name: "Adobe Photoshop",
    logo: "PS",
    color:
      "text-blue-300 border-blue-400/30 bg-blue-500/10 hover:border-blue-400/50",
  },
  {
    name: "Microsoft Word",
    logo: "W",
    color:
      "text-blue-300 border-blue-400/30 bg-blue-500/10 hover:border-blue-400/50",
  },
  {
    name: "Microsoft Excel",
    logo: "X",
    color:
      "text-emerald-300 border-emerald-400/30 bg-emerald-500/10 hover:border-emerald-400/50",
  },
  {
    name: "Notion",
    logo: "N",
    color:
      "text-slate-200 border-slate-300/20 bg-slate-500/10 hover:border-slate-300/40",
  },
  {
    name: "Trello",
    logo: "T",
    color:
      "text-blue-300 border-blue-400/30 bg-blue-500/10 hover:border-blue-400/50",
  },
  {
    name: "ChatGPT",
    logo: "AI",
    color:
      "text-emerald-300 border-emerald-400/30 bg-emerald-500/10 hover:border-emerald-400/50",
  },
  {
    name: "Discord",
    logo: "DC",
    color:
      "text-violet-300 border-violet-400/30 bg-violet-500/10 hover:border-violet-400/50",
  },
  {
    name: "Zoom",
    logo: "ZM",
    color:
      "text-sky-300 border-sky-400/30 bg-sky-500/10 hover:border-sky-400/50",
  },
  {
    name: "Netlify",
    logo: "NF",
    color:
      "text-teal-300 border-teal-400/30 bg-teal-500/10 hover:border-teal-400/50",
  },
  {
    name: "GitHub",
    logo: "GH",
    color:
      "text-slate-200 border-slate-300/20 bg-slate-500/10 hover:border-slate-300/40",
  },
];

export const services = [
  {
    title: "Email & Communication Support",
    description:
      "Assist with professional email handling, message organization, follow-ups, and clear communication workflows.",
    icon: Mail,
  },
  {
    title: "Calendar & Schedule Coordination",
    description:
      "Support scheduling, event preparation, activity tracking, reminders, and organized calendar updates.",
    icon: CalendarCheck,
  },
  {
    title: "Data Entry & Expense Tracking",
    description:
      "Maintain accurate records, monitor entries, organize financial documentation, and support spreadsheet-based tracking.",
    icon: FileSpreadsheet,
  },
  {
    title: "File & Documentation Management",
    description:
      "Structure digital files, organize documents, prepare reports, and maintain clean record systems.",
    icon: FolderKanban,
  },
  {
    title: "Research & Information Organization",
    description:
      "Collect, verify, summarize, and organize online information for administrative or project-based needs.",
    icon: Search,
  },
  {
    title: "Event Planning & Facilitation Support",
    description:
      "Assist with planning, coordination, logistics preparation, documentation, and activity facilitation.",
    icon: ClipboardList,
  },
];

export const workflow = [
  {
    step: "01",
    title: "Receive Task or Project Brief",
    description:
      "Clarify the objective, expected output, deadline, and important instructions before execution.",
  },
  {
    step: "02",
    title: "Organize Files & Requirements",
    description:
      "Prepare references, documents, spreadsheets, links, and working folders for structured execution.",
  },
  {
    step: "03",
    title: "Coordinate Schedules & Communication",
    description:
      "Track updates, organize communication, and support scheduling or event-related preparation.",
  },
  {
    step: "04",
    title: "Execute Support Tasks",
    description:
      "Handle documentation, data entry, research, monitoring, design support, or web/project assistance.",
  },
  {
    step: "05",
    title: "Deliver Organized Output",
    description:
      "Submit clean, accurate, and organized work with clear files, notes, and status updates.",
  },
];

export const projects = [
  {
    title: "CCI Liquidation Report System",
    role: "Treasurer / Documentation & Operations Support",
    description:
      "A digital liquidation and reporting system used to organize financial records, monitor expenses, and support structured documentation workflows.",
    responsibilities: [
      "Managed liquidation records, expense tracking, and financial documentation.",
      "Coordinated submission and verification of liquidation-related information.",
      "Maintained organized financial records and monitoring systems for operational efficiency.",
    ],
    tools: [
      "Record Management",
      "Expense Tracking",
      "Documentation",
      "Google Workspace",
    ],
    outcome:
      "Improved organization of liquidation-related records and made monitoring easier for student council operations.",
    link: "https://cci-liquidation-report.netlify.app/",
  },
  {
    title: "Dice Roller Game Website",
    role: "Web Project Assistant / Front-End Developer",
    description:
      "A browser-based interactive dice roller website designed with responsive structure, simple game logic, and smooth user interaction.",
    responsibilities: [
      "Designed and organized the website interface for usability.",
      "Implemented browser-based interactive functionality and game logic.",
      "Managed project structure, testing, and usability improvements.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "UI Design"],
    outcome:
      "Built a functional web project that demonstrates front-end organization and interactive browser logic.",
    link: "https://diceroller-games.netlify.app/",
  },
  {
    title: "Miscellaneous Graphic Design Portfolio",
    role: "Creative Digital Project Assistant",
    description:
      "A collection of promotional graphics, digital layouts, and social media materials created for visual communication and project support.",
    responsibilities: [
      "Created promotional graphics, layouts, and social media materials.",
      "Managed multiple creative assets and organized project files efficiently.",
      "Applied branding consistency and visual communication principles across outputs.",
    ],
    tools: ["Adobe Photoshop", "Canva", "Branding", "Asset Management"],
    outcome:
      "Strengthened practical creative support skills useful for administrative, social media, and digital operations tasks.",
    link: "#",
  },
];

export const experiences = [
  {
    title: "Treasurer — College of Computing and Informatics Student Council",
    period: "2025 – Present",
    icon: FileSpreadsheet,
    details: [
      "Managed financial records, liquidation reports, and documentation processes.",
      "Assisted in planning, coordinating, and facilitating student organization events.",
      "Coordinated scheduling, logistics, and operational preparation for activities.",
      "Maintained organized records to support accountability and smoother reporting.",
    ],
  },
  {
    title: "Information Systems Secretary — Computer Department",
    period: "2024 – 2025",
    icon: ClipboardList,
    details: [
      "Organized administrative records and departmental documentation.",
      "Supported communication coordination and report preparation activities.",
      "Assisted with documentation workflows and structured information management.",
    ],
  },
  {
    title: "Freelance Graphic Designer",
    period: "2023 – Present",
    icon: Palette,
    details: [
      "Designed promotional graphics and social media content using Adobe Photoshop and Canva.",
      "Managed digital assets, project files, and design revisions.",
      "Handled creative support tasks with attention to layout, branding, and file organization.",
    ],
  },
  {
    title: "Web & Creative Project Assistant",
    period: "2024 – Present",
    icon: MonitorCog,
    details: [
      "Built and organized web-based projects with focus on structure, usability, and presentation.",
      "Supported project testing, content organization, and interface improvements.",
      "Combined administrative, creative, and technical skills to support digital workflows.",
    ],
  },
];

export const languages = [
  ["English", "Intermediate"],
  ["Tagalog", "Proficient"],
  ["Hiligaynon", "Native"],
];

export const atsKeywords = [
  "calendar management",
  "documentation workflows",
  "operational coordination",
  "administrative assistance",
  "expense tracking",
  "digital organization",
  "workflow support",
  "record monitoring",
  "communication coordination",
  "data entry accuracy",
  "file organization",
  "event coordination",
];

export const metrics = [
  ["2023–Present", "Creative & digital project support"],
  ["2024–2025", "Secretary documentation experience"],
  ["2025–Present", "Treasurer and liquidation records"],
  ["Multi-role", "Admin, events, web, and design support"],
];

export const trustIndicators = [
  "Student leadership experience",
  "Financial documentation exposure",
  "Event coordination support",
  "Live deployed web projects",
  "Organized digital workflows",
  "Recruiter-ready resume website",
];
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Briefcase,
  Layers,
  Languages,
  Send,
  CheckCircle,
  CalendarCheck,
  FileSpreadsheet,
  FolderKanban,
  Search,
  ClipboardList,
  MonitorCog,
  Palette,
  Download,
  Sparkles,
  FileText,
  Clock,
  Target,
} from "lucide-react";

const skills = [
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

const tools = [
  "Google Docs",
  "Google Sheets",
  "Gmail",
  "Google Calendar",
  "Canva",
  "Adobe Photoshop",
  "Microsoft Word",
  "Microsoft Excel",
  "Notion",
  "Trello",
  "ChatGPT",
  "Discord",
  "Zoom",
  "Netlify",
  "GitHub",
];

const services = [
  {
    title: "Email & Communication Support",
    description: "Assist with professional email handling, message organization, follow-ups, and clear communication workflows.",
    icon: Mail,
  },
  {
    title: "Calendar & Schedule Coordination",
    description: "Support scheduling, event preparation, activity tracking, reminders, and organized calendar updates.",
    icon: CalendarCheck,
  },
  {
    title: "Data Entry & Expense Tracking",
    description: "Maintain accurate records, monitor entries, organize financial documentation, and support spreadsheet-based tracking.",
    icon: FileSpreadsheet,
  },
  {
    title: "File & Documentation Management",
    description: "Structure digital files, organize documents, prepare reports, and maintain clean record systems.",
    icon: FolderKanban,
  },
  {
    title: "Research & Information Organization",
    description: "Collect, verify, summarize, and organize online information for administrative or project-based needs.",
    icon: Search,
  },
  {
    title: "Event Planning & Facilitation Support",
    description: "Assist with planning, coordination, logistics preparation, documentation, and activity facilitation.",
    icon: ClipboardList,
  },
];

const workflow = [
  {
    step: "01",
    title: "Receive Task or Project Brief",
    description: "Clarify the objective, expected output, deadline, and important instructions before execution.",
  },
  {
    step: "02",
    title: "Organize Files & Requirements",
    description: "Prepare references, documents, spreadsheets, links, and working folders for structured execution.",
  },
  {
    step: "03",
    title: "Coordinate Schedules & Communication",
    description: "Track updates, organize communication, and support scheduling or event-related preparation.",
  },
  {
    step: "04",
    title: "Execute Support Tasks",
    description: "Handle documentation, data entry, research, monitoring, design support, or web/project assistance.",
  },
  {
    step: "05",
    title: "Deliver Organized Output",
    description: "Submit clean, accurate, and organized work with clear files, notes, and status updates.",
  },
];

const projects = [
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
    tools: ["Record Management", "Expense Tracking", "Documentation", "Google Workspace"],
    outcome: "Improved organization of liquidation-related records and made monitoring easier for student council operations.",
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
    outcome: "Built a functional web project that demonstrates front-end organization and interactive browser logic.",
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
    outcome: "Strengthened practical creative support skills useful for administrative, social media, and digital operations tasks.",
    link: "#",
  },
];

const experiences = [
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

const languages = [
  ["English", "Intermediate"],
  ["Tagalog", "Proficient"],
  ["Hiligaynon", "Native"],
];

const atsKeywords = [
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

const testimonials = [
  {
    quote: "Available upon request. This section can be updated with feedback from advisers, organization officers, classmates, project collaborators, or freelance clients.",
    source: "Future testimonial placeholder",
  },
];

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.35 }}
      className="fixed inset-0 z-[999] grid place-items-center bg-[#070b12] pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative grid h-28 w-28 place-items-center rounded-3xl border border-cyan-300/30 bg-cyan-300/10 shadow-2xl shadow-cyan-500/20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
          className="absolute inset-[-8px] rounded-[2rem] border border-cyan-300/20 border-t-cyan-300"
        />
        <span className="text-3xl font-black tracking-tight text-cyan-100">KP</span>
      </motion.div>
    </motion.div>
  );
}

function SectionHeader({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{label}</p>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>}
    </motion.div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`group rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.075] ${className}`}>
      {children}
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-700/20 blur-3xl" />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute left-10 top-40 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm"
      />
      <motion.div
        animate={{ y: [0, -24, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-32 right-24 h-32 w-32 rounded-full border border-blue-300/20 bg-blue-300/5 blur-sm"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <motion.div
        animate={{ y: ["-20%", "120%"] }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-cyan-300/5 to-transparent"
      />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", botField: "" });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    document.title = "Kurt Panolino | Virtual Assistant & Digital Operations Support";
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    const emailPattern = /^[^ @]+@[^ @]+\.[^ @]+$/;

    if (formData.botField) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setFormError("Please complete all fields before sending.");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (formData.message.length < 20) {
      setFormError("Please write a more complete message before sending.");
      return;
    }

    if (formData.message.length > 1200) {
      setFormError("Please keep the message under 1,200 characters.");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "portfolio-contact",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      setFormData({ name: "", email: "", subject: "", message: "", botField: "" });
      alert("Message sent successfully.");
    } catch (error) {
      setFormError("Message failed to send. Please email me directly instead.");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white selection:bg-cyan-300 selection:text-slate-950">
      <LoadingScreen />
      <AnimatedBackground />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 text-left">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-bold text-cyan-200 shadow-lg shadow-cyan-500/10">KP</div>
            <div>
              <h1 className="text-base font-bold leading-none">Kurt Panolino</h1>
              <p className="mt-1 text-xs text-slate-400">Resume Portfolio</p>
            </div>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {["about", "services", "tools", "workflow", "projects", "experience", "contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-sm font-medium capitalize text-slate-300 transition hover:text-cyan-300">
                {item}
              </button>
            ))}
          </div>

          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            {["about", "services", "tools", "workflow", "projects", "experience", "contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="block w-full py-3 text-left capitalize text-slate-300">
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <section id="hero" className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
            <CheckCircle size={16} /> Available for VA and operations support roles
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Organized digital support for cleaner workflows and reliable execution.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I support administrative tasks, documentation, data entry, event coordination, file organization, expense tracking, and creative or web-based project workflows with accuracy and structure.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => scrollTo("experience")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20">
              View Resume <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo("projects")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold transition hover:border-cyan-300/50 hover:bg-white/10">
              View Projects <Layers size={18} />
            </button>
            <a href="/Kurt-Panolino-Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold transition hover:border-cyan-300/50 hover:bg-white/10">
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Card className="relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-cyan-300/10" />
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
            <h2 className="mt-5 text-4xl font-black">Kurt Panolino</h2>
            <p className="mt-3 text-lg text-slate-300">Virtual Assistant | Administrative & Digital Operations Support</p>
            <div className="mt-8 space-y-4 text-slate-300">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300" /> Iloilo City, Philippines</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> kurutopanorino@gmail.com</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> Phone available upon request</p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm leading-7 text-slate-400">Primary value</p>
              <p className="mt-1 font-semibold text-white">Reliable documentation, coordination, digital organization, and operations support.</p>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          label="About"
          title="Reliable support with administrative discipline and creative flexibility."
          description="Detail-oriented and adaptable college student with experience in administrative support, digital organization, event planning, coordination, facilitation, web development, and creative digital projects. Skilled in managing documentation, coordinating workflows, organizing files, handling data entry, supporting operations, and maintaining accurate records."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {["Organized in records, files, schedules, and documentation.", "Adaptable across administrative, creative, event, and web-related tasks.", "Focused on accuracy, accountability, workflow clarity, and professional output."].map((text) => (
            <Card key={text}>
              <p className="leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="What I Can Help With" title="Practical support for busy teams, projects, and operations." description="This section is designed for recruiters and clients who need to quickly understand the kinds of tasks I can support." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <Icon className="text-cyan-300 transition duration-300 group-hover:rotate-3 group-hover:scale-110" />
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Tools & Platforms" title="Software familiarity for administrative, creative, and remote support tasks." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => (
            <div key={tool} className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.075]">
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Workflow Process" title="A simple operating process for cleaner execution." description="This shows how I approach tasks so outputs stay organized, traceable, and easier to review." />
        <div className="relative grid gap-6 lg:grid-cols-5">
          {workflow.map((item) => (
            <Card key={item.step}>
              <p className="text-sm font-bold text-cyan-300">{item.step}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Skills" title="Administrative, digital, event, and creative support capabilities." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 font-medium text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.075]">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Card>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Availability</p>
              <h2 className="text-3xl font-bold">Currently available for remote and part-time support opportunities.</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">Open to Virtual Assistant roles, administrative support, documentation and operations support, project coordination, creative assistance, and student-friendly remote work arrangements.</p>
            </div>
            <button onClick={() => scrollTo("contact")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Contact Me <Send size={18} />
            </button>
          </div>
        </Card>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Projects" title="Work samples showing organization, documentation, design, and web execution." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{project.role}</p>
              <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                {project.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Outcome</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.outcome}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">{tool}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                Visit Project <ExternalLink size={16} />
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Resume Timeline" title="Real roles connected to administration, coordination, and digital work." />
        <div className="relative space-y-6 border-l border-white/10 pl-6 md:pl-10">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <div className="absolute -left-[13px] mt-1 grid h-6 w-6 place-items-center rounded-full border border-cyan-300/50 bg-[#070b12]">
                  <div className="h-2 w-2 rounded-full bg-cyan-300" />
                </div>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-cyan-300"><Icon size={18} /> {item.period}</p>
                    <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-300">
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="ATS Keywords" title="Recruiter-friendly keywords integrated naturally." description="These terms match the kind of work expected in Virtual Assistant, administrative support, and digital operations roles." />
        <div className="flex flex-wrap gap-3">
          {atsKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-slate-300">
              {keyword}
            </span>
          ))}
        </div>
      </section>

      <section id="languages" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Languages" title="Communication range for local and remote support work." />
        <div className="grid gap-6 md:grid-cols-3">
          {languages.map(([lang, level]) => (
            <Card key={lang}>
              <Languages className="text-cyan-300 transition duration-300 group-hover:rotate-3 group-hover:scale-110" />
              <h3 className="mt-5 text-2xl font-bold">{lang}</h3>
              <p className="mt-2 text-slate-300">{level}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Testimonials" title="Proof of work section prepared for future feedback." />
        <div className="grid gap-6 md:grid-cols-1">
          {testimonials.map((item) => (
            <Card key={item.source}>
              <p className="text-lg leading-8 text-slate-300">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.source}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-white/[0.06] to-blue-500/10 p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300"><Sparkles size={16} /> Recruiter CTA</p>
              <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Looking for organized operational support?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">I’m open to remote administrative, coordination, documentation, creative, and digital support opportunities.</p>
            </div>
            <button onClick={() => scrollTo("contact")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Start a Conversation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader label="Contact" title="Let’s connect for administrative, operations, or project support roles." description="The form below opens your email app with the message already prepared and addressed to me." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="mt-7 space-y-5 text-slate-300">
              <a href="mailto:kurutopanorino@gmail.com" className="flex items-center gap-4 transition hover:text-cyan-300"><Mail className="text-cyan-300" /> kurutopanorino@gmail.com</a>
              <p className="flex items-center gap-4"><Phone className="text-cyan-300" /> Phone available upon request</p>
              <p className="flex items-center gap-4"><MapPin className="text-cyan-300" /> Iloilo City, Philippines</p>
              <a href="https://www.linkedin.com/in/kurt-panolino-8a5ab4410/" target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-cyan-300"><ExternalLink className="text-cyan-300" /> LinkedIn Profile</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-400">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><Clock className="mb-3 text-cyan-300" /> Responsive within available hours</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><Target className="mb-3 text-cyan-300" /> Open to remote support roles</div>
            </div>
          </Card>

          <Card>
            <form
              name="portfolio-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="botField"
              className="grid gap-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="portfolio-contact" />
              <p className="hidden">
                <label>
                  Do not fill this out: <input name="botField" value={formData.botField} onChange={handleChange} />
                </label>
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" required className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" required className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              </div>
              <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject" required className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required className="min-h-36 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              {formError && <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{formError}</p>}
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200">
                Send Message <Send size={18} />
              </button>
              <p className="text-xs leading-6 text-slate-500">Protected with required fields, email validation, message length limits, and a hidden anti-spam honeypot. Deploy on Netlify to activate form submission.</p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Kurt Panolino — Resume Portfolio Website

/*
NETLIFY SECURITY HEADERS
Create a file named _headers inside your public folder and paste:

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

Also place your resume PDF inside:
public/Kurt-Panolino-Resume.pdf
*/</p>
          <div className="flex gap-4">
            <a href="mailto:kurutopanorino@gmail.com" className="hover:text-cyan-300">Email</a>
            <a href="https://www.linkedin.com/in/kurt-panolino-8a5ab4410/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn</a>
            <a href="/Kurt-Panolino-Resume.pdf" className="hover:text-cyan-300">Resume PDF</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

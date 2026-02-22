import { useEffect } from "react";
import pixelSpiderman from "@/assets/pixel-spiderman.png";
import pixelBatman from "@/assets/pixel-batman.png";
import pixelIronman from "@/assets/pixel-ironman.png";
import pixelDeadpool from "@/assets/pixel-deadpool.png";
import { Github, Linkedin, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Innovun Global",
    period: "Sept. 2025 — Present",
    location: "Remote",
    color: "border-yarn-pink",
    tag: "text-yarn-pink",
    points: [
      "Engineered RESTful APIs for a CRM platform, handling core business logic including lead management, client tracking, and sales pipeline workflows",
      "Built pixel-perfect, responsive front-end interfaces from design specs and integrated them with backend APIs, ensuring seamless data flow",
      "Contributed to a 110% increase in client sales by delivering a CRM that streamlined operations and improved team productivity",
      "Diagnosed and resolved critical production bugs, reducing system errors and improving overall platform stability",
      "Collaborated with senior engineers to learn and apply critical system design principles including scalability patterns and API architecture",
    ],
  },
  {
    role: "Freelance Front-End Developer",
    company: "DataInYourself",
    period: "Aug. 2025 — Sept. 2025",
    location: "Remote",
    color: "border-yarn-teal",
    tag: "text-yarn-teal",
    points: [
      "Designed and developed an educational website including a landing page and admin panel, supporting 1500+ monthly visitors at launch",
      "Built a responsive interface using Next.js and Tailwind CSS, improving load speed by ~35% compared to a previous static site",
      "Developed an admin dashboard that reduced content update time from hours to minutes",
      "Ensured secure and efficient functionality, resulting in 0 reported downtime post-deployment",
    ],
  },
  {
    role: "Junior Front-End Developer — Internship",
    company: "Dreamstudio",
    period: "June 2025 — Aug. 2025",
    location: "Remote",
    color: "border-yarn-gold",
    tag: "text-yarn-gold",
    points: [
      "Implemented modern UI features that improved user interactions and reduced bounce rates by ~15%",
      "Debugged and optimized code, reducing reported UI bugs by ~20%",
      "Collaborated in an Agile team of 6 developers and designers, ensuring consistent delivery across sprints",
      "Contributed to reusable TypeScript components, accelerating new feature development by ~25%",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Bromine",
    period: "Oct. 2024 — Dec. 2024",
    location: "Remote",
    color: "border-yarn-lavender",
    tag: "text-yarn-lavender",
    points: [
      "Optimized web performance using lazy loading and Redux, decreasing page load time by ~30%",
      "Integrated REST APIs to fetch and display dynamic content, improving data rendering speed by ~40%",
      "Participated in Agile sprints, consistently completing 100% of assigned tasks within deadlines",
    ],
  },
];

const heroes = [
  { name: "Spiderman", img: pixelSpiderman },
  { name: "Batman", img: pixelBatman },
  { name: "Iron Man", img: pixelIronman },
  { name: "Deadpool", img: pixelDeadpool },
];


const Index = () => {
  useEffect(() => {
    document.title = "Nilima Sahu";
  }, []);

  return (
    <div className="min-h-screen yarn-pattern">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 pixel-border-sm border-secondary bg-secondary/10 rounded-sm">
              <span className="font-pixel text-[10px] text-secondary">FULLSTACK ENGINEER</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel leading-relaxed text-foreground">
              Hello, World!
              <span className="animate-blink text-primary">_</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-lg leading-relaxed">
              I build things for the web and when I'm not coding, you'll find me crocheting gifts,
              making rive animation, or drawing pixel art superheroes.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/nilimaSahu22" target="_blank" rel="noopener noreferrer" className="p-2 pixel-border-sm border-border hover-pixel rounded-sm text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nilima-sahu-62685b2ab/" target="_blank" rel="noopener noreferrer" className="p-2 pixel-border-sm border-border hover-pixel rounded-sm text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/Nilima_Sahu_" target="_blank" rel="noopener noreferrer" className="p-2 pixel-border-sm border-border hover-pixel rounded-sm text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.23H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pixel Heroes Grid */}
          <div className="grid grid-cols-2 gap-4">
            {heroes.map((hero, i) => (
              <div
                key={hero.name}
                className="pixel-border border-border rounded-sm bg-card overflow-hidden hover-pixel"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <img
                  src={hero.img}
                  alt={`Pixel art ${hero.name}`}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover animate-float"
                  style={{ animationDelay: `${i * 0.7}s` }}
                />
                <div className="px-2 py-1 text-center border-t-2 border-border bg-muted">
                  <span className="font-pixel text-[8px] text-muted-foreground">{hero.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="border-y-2 border-border bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Javascript", "TypeScript", "Python", "React", "Next.js", "React Query", "React Router", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Docker", "HTML", "TailwindCSS", "ShadCN"].map((tech) => (
              <span key={tech} className="font-pixel text-[9px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16 max-w-3xl">
        <h2 className="font-pixel text-lg text-foreground mb-12">
          <span className="text-primary">&gt;</span> Experience
        </h2>
        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-border ml-[5px] hidden sm:block" />
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center pt-1.5 flex-shrink-0">
                <div className={`w-3 h-3 border-2 ${exp.color} bg-background`} />
              </div>
              {/* Card */}
              <div className={`flex-1 pixel-border ${exp.color} rounded-sm bg-card p-5 hover-pixel`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-pixel text-[10px] text-foreground leading-relaxed">{exp.role}</h3>
                    <span className={`font-pixel text-[9px] ${exp.tag}`}>{exp.company}</span>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span className="font-pixel text-[7px]">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="font-pixel text-[7px]">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 border-t-2 border-border pt-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground font-body leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-pixel text-[9px] text-muted-foreground">
            crafted with <span className="text-primary">♥</span> & lots of yarn
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

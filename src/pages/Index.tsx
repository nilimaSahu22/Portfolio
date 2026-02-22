import { useEffect } from "react";
import pixelSpiderman from "@/assets/pixel-spiderman.png";
import pixelBatman from "@/assets/pixel-batman.png";
import pixelIronman from "@/assets/pixel-ironman.png";
import pixelDeadpool from "@/assets/pixel-deadpool.png";
import { Music, Scissors, Code, Terminal, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const heroes = [
  { name: "Spiderman", img: pixelSpiderman },
  { name: "Batman", img: pixelBatman },
  { name: "Iron Man", img: pixelIronman },
  { name: "Deadpool", img: pixelDeadpool },
];

const interests = [
  {
    title: "Music",
    icon: Music,
    desc: "Beats, melodies & playlists that fuel my coding sessions.",
    link: "/music",
    color: "text-yarn-pink",
    borderColor: "border-yarn-pink",
  },
  {
    title: "Crochet",
    icon: Scissors,
    desc: "Handmade creations stitched with patience and love.",
    link: "/crochet",
    color: "text-yarn-teal",
    borderColor: "border-yarn-teal",
  },
  {
    title: "Blogs",
    icon: Terminal,
    desc: "Thoughts on tech, life, and everything in between.",
    link: "/blogs",
    color: "text-yarn-gold",
    borderColor: "border-yarn-gold",
  },
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
              I build things for the web — and when I'm not coding, you'll find me crocheting amigurumi,
              making playlists, or drawing pixel art superheroes.
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
            {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL"].map((tech) => (
              <span key={tech} className="font-pixel text-[9px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-pixel text-lg text-center text-foreground mb-12">
          <span className="text-primary">&gt;</span> Explore My World
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.link}
                className={`pixel-border ${item.borderColor} rounded-sm bg-card p-6 hover-pixel group`}
              >
                <Icon className={`h-8 w-8 ${item.color} mb-4`} />
                <h3 className="font-pixel text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                <span className="inline-block mt-4 font-pixel text-[9px] text-muted-foreground group-hover:text-primary transition-colors">
                  [ enter ] →
                </span>
              </Link>
            );
          })}
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

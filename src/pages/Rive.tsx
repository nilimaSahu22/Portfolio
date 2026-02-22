import { useEffect } from "react";
import { Layers, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "LOOI the Robot",
    desc: "A client-delivered Rive animation inspired by LOOI the robot — expressive, characterful, and built for production.",
    tags: ["Client Work", "Character", "Interactive"],
    color: "border-yarn-pink",
    tag: "text-yarn-pink",
    link: "https://x.com/Nilima_Sahu_/status/2021190880217235764?s=20",
    review: "https://x.com/SinghDevHub/status/2021191328332231133?s=20",
    isClient: true,
  },
  {
    title: "Tiny Planet",
    desc: "A whimsical tiny planet animation — a small world floating in space, crafted with smooth looping motion in Rive.",
    tags: ["Animation", "Loop", "Space"],
    color: "border-yarn-teal",
    tag: "text-yarn-teal",
    link: "https://x.com/Nilima_Sahu_/status/1948448779251728593?s=20",
    review: null,
    isClient: false,
  },
  {
    title: "Feathers Practice",
    desc: "An animation built to explore and practice Feathers — one of Rive's powerful procedural animation features.",
    tags: ["Feathers", "Procedural", "Practice"],
    color: "border-yarn-gold",
    tag: "text-yarn-gold",
    link: "https://x.com/Nilima_Sahu_/status/1943936113430999441?s=20",
    review: null,
    isClient: false,
  },
  {
    title: "Day & Night Toggle",
    desc: "An interactive toggle button with two modes — flip to light and a sunny sky with the sun appears; flip to dark and the scene shifts to a night sky filled with the moon and stars.",
    tags: ["Interactive", "State Machine", "Toggle"],
    color: "border-yarn-lavender",
    tag: "text-yarn-lavender",
    link: "https://x.com/Nilima_Sahu_/status/1941460182267211830?s=20",
    review: null,
    isClient: false,
  },
];

const RivePage = () => {
  useEffect(() => {
    document.title = "Nilima Sahu | Rive";
  }, []);

  return (
    <div className="min-h-screen yarn-pattern">
      <div className="container mx-auto px-6 pt-28 pb-16 max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers className="h-5 w-5 text-yarn-pink" />
            <span className="font-pixel text-[10px] text-yarn-pink">RIVE</span>
          </div>
          <h1 className="font-pixel text-2xl text-foreground mb-4">
            <span className="text-primary">&gt;</span> Animations
          </h1>
          <p className="text-muted-foreground font-body">
            Interactive animations crafted with Rive — where design meets code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`pixel-border ${project.color} rounded-sm bg-card p-6 hover-pixel flex flex-col gap-4`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="font-pixel text-[10px] text-foreground leading-relaxed">
                    {project.title}
                  </h3>
                  {project.isClient && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-yarn-gold/10 border border-yarn-gold/30 rounded-sm">
                      <Star className="h-2.5 w-2.5 text-yarn-gold" />
                      <span className="font-pixel text-[6px] text-yarn-gold">CLIENT DELIVERY</span>
                    </div>
                  )}
                </div>
                <Layers className={`h-6 w-6 flex-shrink-0 ${project.tag} opacity-60`} />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel text-[7px] px-2 py-1 bg-muted text-muted-foreground rounded-sm"
                  >
                    #{tag.toLowerCase().replace(" ", "-")}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 border-t-2 border-border pt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 pixel-border-sm ${project.color} rounded-sm font-pixel text-[8px] ${project.tag} hover-pixel`}
                >
                  <ExternalLink className="h-3 w-3" />
                  View on X
                </a>
                {project.review && (
                  <a
                    href={project.review}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 pixel-border-sm border-yarn-gold rounded-sm font-pixel text-[8px] text-yarn-gold hover-pixel"
                  >
                    <Star className="h-3 w-3" />
                    Client Review
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RivePage;

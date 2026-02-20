import { useEffect } from "react";
import { FileText, Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Why I Love Pixel Art & Code",
    date: "2026-02-15",
    excerpt: "The intersection of creativity and logic — how pixel art made me a better engineer.",
    tags: ["pixel-art", "career"],
  },
  {
    title: "Building Accessible Web Apps",
    date: "2026-01-28",
    excerpt: "Lessons learned from making my projects more inclusive and accessible to everyone.",
    tags: ["a11y", "web-dev"],
  },
  {
    title: "Crochet Patterns as Algorithms",
    date: "2026-01-10",
    excerpt: "How following crochet patterns is basically executing code, stitch by stitch.",
    tags: ["crochet", "programming"],
  },
  {
    title: "My 2025 Tech Stack Roundup",
    date: "2025-12-20",
    excerpt: "A look back at the tools, languages, and frameworks that shaped my year.",
    tags: ["tools", "reflection"],
  },
];

const Blogs = () => {
  useEffect(() => {
    document.title = "Nilima Sahu | Blogs";
  }, []);

  return (
    <div className="min-h-screen note-grid">
      <div className="container mx-auto px-6 pt-28 pb-16 max-w-3xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-yarn-gold" />
            <span className="font-pixel text-[10px] text-yarn-gold">BLOG</span>
          </div>
          <h1 className="font-pixel text-2xl text-foreground mb-4">
            <span className="text-primary">&gt;</span> Thoughts & Notes
          </h1>
          <p className="text-muted-foreground font-body">
            Writing about code, craft, and the creative life.
          </p>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="pixel-border border-border rounded-sm bg-card p-6 hover-pixel group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-3 w-3 text-muted-foreground" />
                <time className="font-pixel text-[8px] text-muted-foreground">{post.date}</time>
              </div>
              <h2 className="font-pixel text-xs text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground font-body mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="font-pixel text-[7px] px-2 py-1 bg-muted text-muted-foreground rounded-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

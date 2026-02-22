import { useEffect } from "react";
import { FileText, Calendar, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "6 Core Principles of REST APIs",
    date: "2025",
    excerpt: "A deep dive into the six foundational constraints that make an API truly RESTful — from statelessness to uniform interfaces.",
    tags: ["rest-api", "backend", "web-dev"],
    link: "https://medium.com/@nilimasahu2201/6-core-principles-of-rest-apis-3000d1e9dc10",
  },
  {
    title: "PUT vs PATCH: Key Differences in REST APIs",
    date: "2025",
    excerpt: "Breaking down the difference between PUT and PATCH — when to use each and why it matters for your API design.",
    tags: ["rest-api", "http", "backend"],
    link: "https://medium.com/@nilimasahu2201/put-vs-patch-key-differences-in-rest-apis-5796a350d8c4",
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
            Writing about code, APIs, and everything in between.
          </p>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pixel-border border-border rounded-sm bg-card p-6 hover-pixel group"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-3 w-3 text-muted-foreground" />
                <time className="font-pixel text-[8px] text-muted-foreground">{post.date}</time>
              </div>
              <h2 className="font-pixel text-xs text-foreground mb-2 group-hover:text-primary transition-colors leading-relaxed">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="font-pixel text-[7px] px-2 py-1 bg-muted text-muted-foreground rounded-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

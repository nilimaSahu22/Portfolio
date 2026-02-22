import { Link, useLocation } from "react-router-dom";
import { FileText, Home, Code, Layers } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/blogs", label: "Blogs", icon: FileText },
  { path: "/rive", label: "Rive", icon: Layers },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <Code className="h-5 w-5 text-primary" />
          <span className="font-pixel text-xs text-primary group-hover:text-accent transition-colors">
            &lt;dev/&gt;
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all
                  pixel-border-sm rounded-sm
                  ${isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline font-pixel text-[10px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

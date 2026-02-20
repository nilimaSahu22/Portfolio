import { Scissors, Heart } from "lucide-react";

const projects = [
  {
    name: "Spidey Amigurumi",
    description: "A little crocheted Spider-Man to guard my desk. Red and blue yarn, safety eyes, and lots of love.",
    stitches: "Single Crochet, Magic Ring",
    difficulty: "★★★☆☆",
    color: "border-yarn-pink",
  },
  {
    name: "Granny Square Blanket",
    description: "Classic granny squares in a retro color palette. My cozy coding companion for cold nights.",
    stitches: "Granny Stitch, Chain",
    difficulty: "★★☆☆☆",
    color: "border-yarn-teal",
  },
  {
    name: "Pixel Heart Coaster Set",
    description: "A set of coasters inspired by 8-bit hearts. Tapestry crochet meets retro gaming.",
    stitches: "Tapestry Crochet, SC",
    difficulty: "★★★★☆",
    color: "border-yarn-gold",
  },
  {
    name: "Cable Knit Beanie",
    description: "A chunky beanie with cable patterns. Perfect for winter walks and thinking about code.",
    stitches: "Front Post DC, Chain",
    difficulty: "★★★☆☆",
    color: "border-yarn-lavender",
  },
  {
    name: "Mini Batman Keychain",
    description: "Tiny Batman amigurumi keychain. Because even keychains deserve a hero.",
    stitches: "Magic Ring, SC, HDC",
    difficulty: "★★★★☆",
    color: "border-yarn-pink",
  },
  {
    name: "Flower Garland",
    description: "Delicate crocheted flowers strung together. Decorating my workspace one petal at a time.",
    stitches: "Puff Stitch, Slip Stitch",
    difficulty: "★★☆☆☆",
    color: "border-yarn-teal",
  },
];

const Crochet = () => {
  return (
    <div className="min-h-screen yarn-pattern">
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Scissors className="h-5 w-5 text-yarn-teal" />
            <span className="font-pixel text-[10px] text-yarn-teal">CROCHET</span>
          </div>
          <h1 className="font-pixel text-2xl text-foreground mb-4">
            <span className="text-primary">&gt;</span> Yarn & Hooks
          </h1>
          <p className="text-muted-foreground font-body">
            Crochet is my analog escape — loops, chains, and counting stitches is surprisingly like debugging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`pixel-border ${project.color} rounded-sm bg-card p-5 hover-pixel`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-pixel text-[10px] text-foreground leading-relaxed">{project.name}</h3>
                <Heart className="h-4 w-4 text-yarn-pink flex-shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-muted-foreground font-body mb-4">{project.description}</p>
              <div className="space-y-2 border-t-2 border-border pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-pixel text-[7px] text-muted-foreground">STITCHES</span>
                  <span className="text-xs text-foreground font-body">{project.stitches}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-pixel text-[7px] text-muted-foreground">DIFFICULTY</span>
                  <span className="text-xs text-yarn-gold">{project.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crochet;

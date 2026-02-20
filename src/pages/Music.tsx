import { Music as MusicIcon, Headphones, Radio, Disc3 } from "lucide-react";

const playlists = [
  {
    name: "Coding Flow",
    vibe: "Lo-fi beats & ambient synths",
    tracks: 42,
    duration: "2h 38m",
    color: "border-yarn-pink",
    icon: Headphones,
  },
  {
    name: "Yarn & Chill",
    vibe: "Acoustic, indie folk for crochet nights",
    tracks: 28,
    duration: "1h 52m",
    color: "border-yarn-teal",
    icon: Radio,
  },
  {
    name: "Boss Battle Mode",
    vibe: "Intense game OSTs for debugging sessions",
    tracks: 35,
    duration: "2h 10m",
    color: "border-yarn-gold",
    icon: Disc3,
  },
];

const favoriteArtists = [
  "Nujabes", "Khruangbin", "Japanese Breakfast", "Tame Impala",
  "Mac DeMarco", "Gorillaz", "Radiohead", "The Marias",
];

const MusicPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <MusicIcon className="h-5 w-5 text-yarn-pink" />
            <span className="font-pixel text-[10px] text-yarn-pink">MUSIC</span>
          </div>
          <h1 className="font-pixel text-2xl text-foreground mb-4">
            <span className="text-primary">&gt;</span> Now Playing
          </h1>
          <p className="text-muted-foreground font-body">
            Music powers everything I do — from late-night coding sessions to lazy crochet afternoons.
          </p>
        </div>

        {/* Playlists */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {playlists.map((playlist, i) => {
            const Icon = playlist.icon;
            return (
              <div
                key={i}
                className={`pixel-border ${playlist.color} rounded-sm bg-card p-6 hover-pixel`}
              >
                <Icon className="h-8 w-8 text-yarn-pink mb-4" />
                <h3 className="font-pixel text-xs text-foreground mb-1">{playlist.name}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{playlist.vibe}</p>
                <div className="flex gap-4 border-t-2 border-border pt-3">
                  <span className="font-pixel text-[7px] text-muted-foreground">{playlist.tracks} TRACKS</span>
                  <span className="font-pixel text-[7px] text-muted-foreground">{playlist.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Favorite Artists */}
        <div className="max-w-2xl">
          <h2 className="font-pixel text-sm text-foreground mb-6">
            <span className="text-primary">♫</span> Artists on Repeat
          </h2>
          <div className="flex flex-wrap gap-3">
            {favoriteArtists.map((artist) => (
              <span
                key={artist}
                className="pixel-border-sm border-border rounded-sm bg-card px-4 py-2 font-body text-sm text-muted-foreground hover:text-foreground hover:border-yarn-pink transition-colors cursor-default"
              >
                {artist}
              </span>
            ))}
          </div>
        </div>

        {/* Equalizer Visual */}
        <div className="mt-16 flex items-end justify-center gap-1 h-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-2 bg-primary/40 rounded-t-sm animate-float"
              style={{
                height: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1.5 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;

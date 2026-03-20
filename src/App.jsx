import { useState, useEffect } from "react";

// ─── App Registry ───────────────────────────────────────
// Add new apps here as you build them!
const APPS = [
  {
    id: "music",
    name: "Our Music Adventure",
    description: "Learn guitar & ukulele together — chords, songs, and a practice tracker!",
    emoji: "🎸",
    secondEmoji: "🪕",
    color: "#FF6B6B",
    colorLight: "#FFF1F0",
    gradient: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
    url: "/music-adventure/",
    status: "ready",
    tags: ["Music", "Learn Together"],
  },
  {
    id: "life-skills",
    name: "Life Skills Adventure",
    description: "Fix things, explore outdoors, ride bikes, cook food, and handle emergencies like a boss!",
    emoji: "🛠️",
    secondEmoji: "🔥",
    color: "#FF6B35",
    colorLight: "#FFF3E0",
    gradient: "linear-gradient(135deg, #FF6B35, #FFA726)",
    url: "/life-skills/",
    status: "ready",
    tags: ["Life Skills", "Independence"],
  },
  // ── Future apps — change status to "ready" and add a url when deployed ──
  {
    id: "chess",
    name: "Our Chess Adventure",
    description: "Learn chess together — 9 lessons from pawns to playing a full game!",
    emoji: "♟️",
    secondEmoji: "🧠",
    color: "#4ECDC4",
    colorLight: "#F0FFFE",
    gradient: "linear-gradient(135deg, #4ECDC4, #7EDDD6)",
    url: "/chess-adventure/",
    status: "ready",
    tags: ["Thinking", "Puzzles"],
  },
  {
    id: "nature",
    name: "Nature Explorer",
    description: "Track the birds, bugs, and plants you spot on your adventures!",
    emoji: "🔭",
    secondEmoji: "🦋",
    color: "#66BB6A",
    colorLight: "#E8F5E9",
    gradient: "linear-gradient(135deg, #66BB6A, #81C784)",
    url: "#",
    status: "coming-soon",
    tags: ["Outdoors", "Science"],
  },
  {
    id: "cooking",
    name: "Our Recipe Book",
    description: "Recipes we've cooked together — with measuring and math!",
    emoji: "👩‍🍳",
    secondEmoji: "🧁",
    color: "#F59E0B",
    colorLight: "#FFFBEB",
    gradient: "linear-gradient(135deg, #F59E0B, #FBC02D)",
    url: "#",
    status: "coming-soon",
    tags: ["Cooking", "Math"],
  },
];

// ─── Floating Emoji Background ──────────────────────────
function FloatingEmojis() {
  const emojis = ["🎵", "⭐", "🌈", "🎸", "🪕", "🦋", "🌻", "🎨", "📚", "🔭", "🧩", "🌙", "🔧", "🚲", "🍳"];
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0,
    }}>
      {emojis.map((e, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${(i * 17 + 5) % 95}%`,
          top: `${(i * 23 + 10) % 90}%`,
          fontSize: 28 + (i % 3) * 10,
          opacity: 0.07,
          transform: `rotate(${i * 30}deg)`,
          animation: `floatEmoji ${6 + (i % 4) * 2}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
        }}>{e}</div>
      ))}
    </div>
  );
}

// ─── App Card ───────────────────────────────────────────
function AppCard({ app }) {
  const [hovered, setHovered] = useState(false);
  const isReady = app.status === "ready";

  const handleClick = () => {
    if (isReady) window.location.href = app.url;
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "white",
        borderRadius: 28,
        padding: "28px 28px 24px",
        cursor: isReady ? "pointer" : "default",
        border: `3px solid ${hovered && isReady ? app.color : "transparent"}`,
        boxShadow: hovered && isReady
          ? `0 12px 40px ${app.color}25, 0 4px 16px rgba(0,0,0,0.06)`
          : "0 4px 20px rgba(0,0,0,0.05)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered && isReady ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        opacity: isReady ? 1 : 0.7,
        overflow: "hidden",
      }}
    >
      {/* Decorative corner gradient */}
      <div style={{
        position: "absolute", top: -30, right: -30,
        width: 120, height: 120, borderRadius: "50%",
        background: app.gradient, opacity: 0.08,
      }} />

      {/* Emoji header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10, marginBottom: 16,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 20,
          background: app.colorLight,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 34,
          transition: "transform 0.3s ease",
          transform: hovered && isReady ? "rotate(-8deg) scale(1.1)" : "rotate(0)",
        }}>
          {app.emoji}
        </div>
        <div style={{
          position: "absolute", top: 20, right: 24,
          fontSize: 28, opacity: 0.3,
          transition: "transform 0.4s ease",
          transform: hovered ? "rotate(12deg) scale(1.2)" : "rotate(0)",
        }}>
          {app.secondEmoji}
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Fredoka', sans-serif",
        fontSize: 22, fontWeight: 700,
        color: "#2D3436", margin: "0 0 6px",
        lineHeight: 1.2,
      }}>
        {app.name}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: 17, lineHeight: 1.5,
        color: "#636E72", margin: "0 0 16px",
      }}>
        {app.description}
      </p>

      {/* Tags + status */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {app.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 13, fontWeight: 600,
              padding: "4px 12px", borderRadius: 12,
              background: app.colorLight, color: app.color,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {isReady ? (
          <div style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 16, fontWeight: 700,
            color: app.color,
            display: "flex", alignItems: "center", gap: 4,
            transition: "gap 0.2s ease",
            ...(hovered ? { gap: 8 } : {}),
          }}>
            Open <span style={{ fontSize: 20 }}>→</span>
          </div>
        ) : (
          <div style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 14, fontWeight: 600,
            color: "#B0BEC5",
            background: "#F5F5F5",
            padding: "4px 14px", borderRadius: 12,
          }}>
            Coming Soon ✨
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────
export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const hour = time.getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const greetEmoji = hour < 12 ? "🌅" : hour < 17 ? "☀️" : "🌙";

  const readyCount = APPS.filter(a => a.status === "ready").length;
  const comingCount = APPS.filter(a => a.status === "coming-soon").length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(170deg, #FFF9F0 0%, #F8F0FF 35%, #F0F8FF 65%, #F0FFF4 100%)",
      fontFamily: "'Nunito', sans-serif",
      position: "relative",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes floatEmoji {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-18px) rotate(calc(var(--r, 0deg) + 10deg)); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes titlePop {
          0% { transform: scale(0.9); opacity: 0; }
          60% { transform: scale(1.03); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <FloatingEmojis />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* Hero Section */}
        <div style={{
          textAlign: "center",
          paddingTop: 60,
          paddingBottom: 40,
          animation: "titlePop 0.6s ease-out",
        }}>
          {/* Greeting */}
          <div style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 20, fontWeight: 700, color: "#B0BEC5",
            marginBottom: 8,
          }}>
            {greetEmoji} {greeting}!
          </div>

          {/* Big title */}
          <h1 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 46,
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 12px",
          }}>
            <span style={{ color: "#2D3436" }}>My </span>
            <span style={{
              background: "linear-gradient(135deg, #FF6B6B, #A78BFA, #4ECDC4, #F59E0B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Learning
            </span>
            <span style={{ color: "#2D3436" }}> Apps</span>
            <span style={{
              display: "inline-block",
              animation: "wave 2s ease-in-out infinite",
              marginLeft: 8, fontSize: 40,
            }}>🚀</span>
          </h1>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 20, color: "#90A4AE",
            maxWidth: 500, margin: "0 auto",
            lineHeight: 1.5,
          }}>
            All our learning adventures in one place.
            <br/>Pick one and let's go!
          </p>

          {/* Stats pill */}
          <div style={{
            display: "inline-flex", gap: 16,
            background: "white",
            borderRadius: 20, padding: "10px 24px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            marginTop: 20,
          }}>
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#66BB6A", fontWeight: 600 }}>
              ✅ {readyCount} app{readyCount !== 1 ? "s" : ""} ready
            </span>
            {comingCount > 0 && (
              <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#B0BEC5", fontWeight: 600 }}>
                ✨ {comingCount} coming soon
              </span>
            )}
          </div>
        </div>

        {/* App Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
          paddingBottom: 60,
        }}>
          {APPS.map((app, i) => (
            <div key={app.id} style={{
              animation: "fadeSlideUp 0.5s ease-out both",
              animationDelay: `${i * 0.1}s`,
            }}>
              <AppCard app={app} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          padding: "24px 0 40px",
          borderTop: "1px solid #F0F0F0",
        }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 16, color: "#CFD8DC",
          }}>
            Made with ❤️ by us
          </p>
        </div>
      </div>
    </div>
  );
}

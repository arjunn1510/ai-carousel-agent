import UrlInput from "@/components/UrlInput";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Purple orb */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <div
          className="anim-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.35)",
            borderRadius: "999px",
            color: "#c084fc",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "32px",
          }}
        >
          AI-Powered · No Editing Skills Needed
        </div>

        {/* Headline */}
        <h1
          className="anim-2"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.07,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            marginBottom: "24px",
          }}
        >
          Turn Any Video Into{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c084fc, #a855f7, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Viral Carousel
          </span>{" "}
          Content
        </h1>

        {/* Subtext */}
        <p
          className="anim-3"
          style={{
            fontSize: "20px",
            color: "#9ca3af",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "40px",
          }}
        >
          Paste a YouTube or Instagram URL and let AI generate{" "}
          <strong style={{ color: "#e2e8f0" }}>
            ready-to-post carousel scripts
          </strong>{" "}
          in seconds.
        </p>

        {/* URL INPUT */}
        <div style={{ width: "100%", marginBottom: "40px" }}>
          <UrlInput />
        </div>

        {/* Social proof */}
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          <strong style={{ color: "#d1d5db" }}>2,400+</strong> carousels
          generated this week
        </p>
      </div>
    </section>
  );
}
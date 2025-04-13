"use client";

export default function FooterGlow() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-full z-[-20] pointer-events-none overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(at bottom, rgba(6, 2, 255, 0.7) 0%, transparent 20%)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

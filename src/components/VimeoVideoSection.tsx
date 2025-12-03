"use client";

import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

export default function VimeoVideoSection() {
  useEffect(() => {
    // Carrega o script do Vimeo Player se ainda não estiver carregado
    if (typeof window !== "undefined") {
      const existingScript = document.querySelector(
        'script[src="https://player.vimeo.com/api/player.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);
        console.log("Vimeo Player script carregado");
      }
    }
  }, []);

  return (
    <div
      className="vimeo-video-section-container relative"
      style={{
        backgroundColor: "#F9F6F1",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="relative w-full"
        style={{
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1142706851?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute top-0 left-0"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            margin: 0,
            padding: 0,
            display: "block",
          }}
          title="1202"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

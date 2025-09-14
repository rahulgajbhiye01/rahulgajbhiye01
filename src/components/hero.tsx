"use client";

import React, { useState, useEffect } from "react";
import { Code2, ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

const SimpleElegantHero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Building modern, scalable web solutions...";

  useEffect(() => {
    if (isTyping && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= fullText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  return (
    <section
      className="bg-background relative flex min-h-screen w-full items-center justify-center pt-20"
      id="hero"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-green-400" />
            <span className="text-muted-foreground font-mono text-sm">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-foreground mb-6 font-mono text-6xl font-bold tracking-tight md:text-8xl">
            Rahul
          </h1>

          {/* Role */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <Code2 className="h-6 w-6 text-green-400" />
            <h2 className="text-muted-foreground font-mono text-xl md:text-2xl">
              Full-Stack Developer
            </h2>
          </div>

          {/* Typewriter description */}
          <div className="mb-8 h-8">
            <p className="text-muted-foreground font-mono text-lg">
              {displayText}
              <span className="animate-pulse text-green-400">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
            Currently diving deep into{" "}
            <span className="font-medium text-green-400">DevOps & Cloud</span>{" "}
            to create high-performance systems. Let's connect and turn your
            ideas into reality.
          </p>

          {/* CTA Button */}
          <div className="space-y-8">
            <Link
              href="/#stack-&-builds"
              className="group inline-flex items-center gap-2 rounded-xl border border-green-400/30 bg-green-500/10 px-8 py-4 font-mono text-sm font-semibold text-green-300 transition-all duration-300 hover:border-green-400/50 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20"
            >
              <Code2 className="h-4 w-4" />
              View My Work
            </Link>

            {/* Scroll indicator */}
            <div className="animate-bounce pt-8">
              <ArrowDown className="text-muted-foreground mx-auto h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleElegantHero;

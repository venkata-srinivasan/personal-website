'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        const colors = ['#6366f1', '#22d3ee', '#818cf8'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = '#6366f1';
            ctx.globalAlpha = 0.1 * (1 - distance / 150);
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg data-grid">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#6366f1]/30 shadow-2xl shadow-[#6366f1]/20">
              <Image
                src="/profile.jpeg"
                alt="Venkata Srinivasan"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#22d3ee]/20 animate-pulse" style={{ transform: 'scale(1.1)' }}></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a] border border-[#1e1e2e]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-[#9ca3af]">Available for consulting & collaboration</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-[#6366f1] via-[#22d3ee] to-[#818cf8] bg-clip-text text-transparent">
                Venkata Srinivasan
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#9ca3af] mb-4">
              Senior Data Scientist at Asurion
            </p>

            <p className="text-lg text-[#9ca3af] mb-8 max-w-xl leading-relaxed">
              Specializing in NLP, Computer Vision, and Causal Modeling.
              Building AI solutions that ensure compliance and drive business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a href="#newsletter" className="btn-primary">
                Subscribe to Newsletter
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {['Python', 'PyTorch', 'NLP', 'Computer Vision', 'Causal Inference', 'MLOps'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
          <a href="#about" className="text-[#9ca3af] hover:text-[#6366f1] transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

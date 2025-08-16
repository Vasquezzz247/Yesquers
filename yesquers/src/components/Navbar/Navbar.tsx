import React from 'react';

// Estilos CSS en línea para las animaciones psicodélicas
const styles = `
  @keyframes psychedelic-wave {
    0% { 
      transform: translateX(-100%) rotate(0deg); 
      filter: hue-rotate(0deg) saturate(150%);
    }
    25% { 
      transform: translateX(-50%) rotate(90deg); 
      filter: hue-rotate(90deg) saturate(200%);
    }
    50% { 
      transform: translateX(0%) rotate(180deg); 
      filter: hue-rotate(180deg) saturate(150%);
    }
    75% { 
      transform: translateX(50%) rotate(270deg); 
      filter: hue-rotate(270deg) saturate(200%);
    }
    100% { 
      transform: translateX(100%) rotate(360deg); 
      filter: hue-rotate(360deg) saturate(150%);
    }
  }

  @keyframes kaleidoscope {
    0% { 
      transform: rotate(0deg) scale(1); 
      filter: hue-rotate(0deg) brightness(1.2);
    }
    33% { 
      transform: rotate(120deg) scale(1.2); 
      filter: hue-rotate(120deg) brightness(1.5);
    }
    66% { 
      transform: rotate(240deg) scale(0.8); 
      filter: hue-rotate(240deg) brightness(1.8);
    }
    100% { 
      transform: rotate(360deg) scale(1); 
      filter: hue-rotate(360deg) brightness(1.2);
    }
  }

  @keyframes plasma-flow {
    0%, 100% { 
      background-position: 0% 50%; 
      transform: scale(1) rotate(0deg);
    }
    25% { 
      background-position: 100% 75%; 
      transform: scale(1.1) rotate(90deg);
    }
    50% { 
      background-position: 100% 50%; 
      transform: scale(0.9) rotate(180deg);
    }
    75% { 
      background-position: 0% 25%; 
      transform: scale(1.2) rotate(270deg);
    }
  }

  @keyframes morph-blob {
    0% { 
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
      transform: rotate(0deg);
    }
    25% { 
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; 
      transform: rotate(90deg);
    }
    50% { 
      border-radius: 50% 40% 50% 60% / 30% 50% 60% 40%; 
      transform: rotate(180deg);
    }
    75% { 
      border-radius: 40% 70% 30% 50% / 70% 40% 50% 30%; 
      transform: rotate(270deg);
    }
    100% { 
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
      transform: rotate(360deg);
    }
  }

  @keyframes neon-pulse {
    0%, 100% { 
      box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
      opacity: 0.8;
    }
    50% { 
      box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
      opacity: 1;
    }
  }

  @keyframes spiral-rotation {
    0% { 
      transform: rotate(0deg) scale(1); 
      filter: hue-rotate(0deg);
    }
    100% { 
      transform: rotate(720deg) scale(1.5); 
      filter: hue-rotate(360deg);
    }
  }

  @keyframes rgb-wave {
    0% { 
      background-position: -200% 0;
      filter: brightness(1.2);
    }
    50% { 
      background-position: 0% 0;
      filter: brightness(1.5);
    }
    100% { 
      background-position: 200% 0;
      filter: brightness(1.2);
    }
  }

  @keyframes glitch-warp {
    0%, 100% { 
      transform: translateX(0) skew(0deg); 
      filter: contrast(1) brightness(1);
    }
    25% { 
      transform: translateX(-2px) skew(-5deg); 
      filter: contrast(1.2) brightness(1.3);
    }
    50% { 
      transform: translateX(2px) skew(5deg); 
      filter: contrast(0.8) brightness(0.7);
    }
    75% { 
      transform: translateX(-1px) skew(-2deg); 
      filter: contrast(1.5) brightness(1.1);
    }
  }

  @keyframes liquid-distort {
    0% { 
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
      transform: rotate(0deg) scale(1);
      filter: blur(0px);
    }
    25% { 
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; 
      transform: rotate(90deg) scale(1.3);
      filter: blur(2px);
    }
    50% { 
      border-radius: 50% 50% 50% 50% / 30% 70% 30% 70%; 
      transform: rotate(180deg) scale(0.7);
      filter: blur(1px);
    }
    75% { 
      border-radius: 80% 20% 80% 20% / 20% 80% 20% 80%; 
      transform: rotate(270deg) scale(1.1);
      filter: blur(3px);
    }
    100% { 
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
      transform: rotate(360deg) scale(1);
      filter: blur(0px);
    }
  }

  @keyframes void-pulse {
    0%, 100% { 
      background: radial-gradient(circle, rgba(10, 0, 20, 0.8) 0%, rgba(30, 0, 50, 0.4) 50%, transparent 100%);
      transform: scale(1);
    }
    50% { 
      background: radial-gradient(circle, rgba(50, 0, 80, 0.9) 0%, rgba(80, 0, 120, 0.6) 50%, transparent 100%);
      transform: scale(1.5);
    }
  }

  @keyframes fractal-spin {
    0% { 
      transform: rotate(0deg) scale(1); 
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    33% { 
      transform: rotate(120deg) scale(1.2); 
      clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
    }
    66% { 
      transform: rotate(240deg) scale(0.8); 
      clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    }
    100% { 
      transform: rotate(360deg) scale(1); 
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }

  .animate-psychedelic-wave {
    animation: psychedelic-wave 12s ease-in-out infinite;
  }

  .animate-kaleidoscope {
    animation: kaleidoscope 8s ease-in-out infinite;
  }

  .animate-plasma-flow {
    animation: plasma-flow 15s ease-in-out infinite;
    background-size: 400% 400%;
  }

  .animate-morph-blob {
    animation: morph-blob 10s ease-in-out infinite;
  }

  .animate-neon-pulse {
    animation: neon-pulse 3s ease-in-out infinite;
  }

  .animate-spiral-rotation {
    animation: spiral-rotation 20s linear infinite;
  }

  .animate-rgb-wave {
    background-size: 300% 100%;
    animation: rgb-wave 3s linear infinite;
  }

  .animate-glitch-warp {
    animation: glitch-warp 0.8s ease-in-out infinite;
  }

  .animate-liquid-distort {
    animation: liquid-distort 14s ease-in-out infinite;
  }

  .animate-void-pulse {
    animation: void-pulse 6s ease-in-out infinite;
  }

  .animate-fractal-spin {
    animation: fractal-spin 16s linear infinite;
  }

  /* Gradientes psicodélicos personalizados */
  .bg-psychedelic-1 {
    background: linear-gradient(45deg, #1a0033, #330066, #660099, #9900cc, #cc00ff);
  }

  .bg-psychedelic-2 {
    background: linear-gradient(-45deg, #001122, #003366, #006699, #0099cc, #00ccff);
  }

  .bg-psychedelic-3 {
    background: linear-gradient(135deg, #220011, #440033, #660055, #880077, #aa0099);
  }

  .bg-trippy-mesh {
    background: 
      radial-gradient(circle at 20% 80%, rgba(80, 0, 40, 0.4) 0%, transparent 60%),
      radial-gradient(circle at 80% 20%, rgba(0, 40, 80, 0.4) 0%, transparent 60%),
      radial-gradient(circle at 40% 40%, rgba(40, 0, 80, 0.4) 0%, transparent 60%),
      radial-gradient(circle at 60% 60%, rgba(80, 40, 0, 0.3) 0%, transparent 60%),
      linear-gradient(135deg, #0a0015 0%, #0f0020 25%, #1a0030 50%, #250040 75%, #300050 100%);
  }

  .bg-void-gradient {
    background: 
      conic-gradient(from 0deg, 
        rgba(10, 0, 30, 0.8), 
        rgba(30, 0, 60, 0.6), 
        rgba(60, 0, 90, 0.4), 
        rgba(90, 0, 120, 0.6), 
        rgba(10, 0, 30, 0.8)
      );
  }
`;

const Navbar = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="relative overflow-hidden">
        {/* 🌀 Fondo psicodélico ultra trippy */}
        <div className="fixed inset-0 -z-10">
          {/* Capa base con gradiente mesh psicodélico */}
          <div className="absolute inset-0 bg-trippy-mesh"></div>

          {/* Ondas psicodélicas que se mueven */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-psychedelic-1 animate-psychedelic-wave"></div>
          </div>

          {/* Plasma flow animado con colores más oscuros */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full animate-plasma-flow"
              style={{
                background: `linear-gradient(-45deg, 
                     rgba(60, 0, 80, 0.7), 
                     rgba(0, 40, 100, 0.6), 
                     rgba(80, 30, 0, 0.5), 
                     rgba(40, 0, 120, 0.8), 
                     rgba(60, 0, 80, 0.7))`
              }}>
            </div>
          </div>

          {/* Gradiente cónico giratorio */}
          <div className="absolute inset-0 opacity-25">
            <div className="w-full h-full bg-void-gradient animate-spin" style={{ animationDuration: '35s' }}></div>
          </div>

          {/* Efectos de distorsión líquida */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-900 via-indigo-900 to-violet-800 opacity-20 animate-liquid-distort"></div>

          <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 opacity-25 animate-liquid-distort" style={{ animationDelay: '3s' }}></div>

          {/* Elementos flotantes morfológicos con colores más oscuros */}
          <div className="absolute top-20 left-16 w-40 h-40 bg-gradient-to-r from-purple-800 via-violet-900 to-indigo-800 opacity-30 animate-morph-blob animate-glitch-warp"></div>

          <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-slate-700 via-purple-800 to-violet-800 opacity-40 animate-fractal-spin"></div>

          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-700 opacity-25 animate-spiral-rotation"></div>

          <div className="absolute bottom-20 right-32 w-36 h-36 bg-gradient-to-r from-violet-800 via-purple-900 to-indigo-900 opacity-35 animate-liquid-distort" style={{ animationDelay: '2s' }}></div>

          {/* Elementos adicionales más trippy */}
          <div className="absolute top-2/3 left-1/2 w-28 h-28 bg-gradient-to-r from-slate-800 via-purple-900 to-violet-800 opacity-45 animate-fractal-spin animate-glitch-warp" style={{ animationDelay: '5s' }}></div>

          <div className="absolute top-1/4 left-3/4 w-24 h-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-slate-700 opacity-50 animate-void-pulse" style={{ animationDelay: '3s' }}></div>

          {/* Pulsos del vacío distribuidos */}
          <div className="absolute top-10 right-1/4 w-20 h-20 animate-void-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-10 w-16 h-16 animate-void-pulse opacity-40" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 animate-void-pulse opacity-70" style={{ animationDelay: '6s' }}></div>

          {/* Efectos de overlay adicionales con tonos más profundos */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-indigo-900/30 animate-pulse" style={{ animationDuration: '12s' }}></div>

          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/15 to-transparent animate-spin" style={{ animationDuration: '40s' }}></div>

          {/* Efecto de scanner psicodélico */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-bounce" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>

        {/* 🛸 Navbar con efectos mejorados */}
        <header className="relative z-10 flex justify-between items-center p-6 backdrop-blur-lg bg-black/40 border-b-2 border-purple-600/40 shadow-2xl shadow-purple-900/30">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse shadow-lg shadow-purple-400/60"></span>
            {/* 👇 Le metí psych-text para que use el gradiente animado */}
            <h1 className="text-3xl font-bold psych-text drop-shadow-lg">
              YESQUERS
            </h1>
          </div>
          <a
            href="https://opensea.io/collection/yesquers"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 hover:from-purple-600 hover:via-violet-600 hover:to-indigo-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-600/50 flex items-center justify-center overflow-hidden"
          >
            <span className="relative z-10">🌟 Mint yours now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
          </a>
        </header>


      </div>
    </>
  );
};

export default Navbar;
import "./navbar.css";

const Navbar = () => {
  return (
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
          <div
            className="w-full h-full animate-plasma-flow"
            style={{
              background: `linear-gradient(-45deg, 
                rgba(60, 0, 80, 0.7), 
                rgba(0, 40, 100, 0.6), 
                rgba(80, 30, 0, 0.5), 
                rgba(40, 0, 120, 0.8), 
                rgba(60, 0, 80, 0.7))`,
            }}
          ></div>
        </div>

        {/* Gradiente cónico giratorio */}
        <div className="absolute inset-0 opacity-25">
          <div
            className="w-full h-full bg-void-gradient animate-spin"
            style={{ animationDuration: "35s" }}
          ></div>
        </div>

        {/* Efectos de distorsión líquida */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-900 via-indigo-900 to-violet-800 opacity-20 animate-liquid-distort"></div>

        <div
          className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 opacity-25 animate-liquid-distort"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Elementos flotantes morfológicos */}
        <div className="absolute top-20 left-16 w-40 h-40 bg-gradient-to-r from-purple-800 via-violet-900 to-indigo-800 opacity-30 animate-morph-blob animate-glitch-warp"></div>

        <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-slate-700 via-purple-800 to-violet-800 opacity-40 animate-fractal-spin"></div>

        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-700 opacity-25 animate-spiral-rotation"></div>

        <div
          className="absolute bottom-20 right-32 w-36 h-36 bg-gradient-to-r from-violet-800 via-purple-900 to-indigo-900 opacity-35 animate-liquid-distort"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Elementos adicionales más trippy */}
        <div
          className="absolute top-2/3 left-1/2 w-28 h-28 bg-gradient-to-r from-slate-800 via-purple-900 to-violet-800 opacity-45 animate-fractal-spin animate-glitch-warp"
          style={{ animationDelay: "5s" }}
        ></div>

        <div
          className="absolute top-1/4 left-3/4 w-24 h-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-slate-700 opacity-50 animate-void-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Pulsos del vacío */}
        <div
          className="absolute top-10 right-1/4 w-20 h-20 animate-void-pulse opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-10 w-16 h-16 animate-void-pulse opacity-40"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-12 h-12 animate-void-pulse opacity-70"
          style={{ animationDelay: "6s" }}
        ></div>

        {/* Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-indigo-900/30 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/15 to-transparent animate-spin"
          style={{ animationDuration: "40s" }}
        ></div>

        {/* Scanner psicodélico */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
        </div>
      </div>

      {/* 🛸 Navbar */}
      <header className="relative z-10 flex justify-between items-center p-6 backdrop-blur-lg bg-black/40 border-b-2 border-purple-600/40 shadow-2xl shadow-purple-900/30">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse shadow-lg shadow-purple-400/60"></span>
          <h1 className="text-3xl font-bold psych-text drop-shadow-lg">YESQUERS</h1>
        </div>
        <a
          href="https://opensea.io/collection/yesquers"
          target="_blank"
          rel="noopener noreferrer"
          className="relative 
            bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 
            hover:from-purple-600 hover:via-violet-600 hover:to-indigo-600 
            text-white font-bold 
            px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3
            text-sm sm:text-base md:text-lg
            rounded-full 
            transform hover:scale-105 
            transition-all duration-300 
            shadow-xl shadow-purple-600/50 
            flex items-center justify-center 
            overflow-hidden 
            w-auto ml-auto"
        >
          {/* mobile version */}
          <span className="relative z-10 flex sm:hidden">🌟 Mint</span>
          {/* complete version */}
          <span className="relative z-10 hidden sm:flex">🌟 Mint yours now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
        </a>
      </header>
    </div>
  );
};

export default Navbar;
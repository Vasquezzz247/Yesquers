const Navbar = () => (
    <div className="relative overflow-hidden">
        {/* 🎨 Fondo animado trippy */}
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-green-900 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 via-purple-600/30 to-pink-700/40 animate-spin-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-green-600/30 via-yellow-500/20 to-purple-800/50 animate-bounce-slow"></div>

            {/* 🌟 Elementos flotantes */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 animate-float-delayed"></div>
            <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-15 animate-float-slow"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-purple-500 to-green-400 rounded-full opacity-25 animate-float"></div>
        </div>

        {/* 🛸 Navbar con transparencia y blur */}
        <header className="relative z-10 flex justify-between items-center p-6 backdrop-blur-sm bg-black/20 border-b border-purple-500/30">
            <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-green-400 rounded-full animate-pulse"></span>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer">
                    YESQUERS
                </h1>
            </div>
            <a
                href="https://opensea.io/collection/yesquers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center justify-center"
            >
                🌟 Mint yours now
            </a>
        </header>
    </div>
);

export default Navbar;

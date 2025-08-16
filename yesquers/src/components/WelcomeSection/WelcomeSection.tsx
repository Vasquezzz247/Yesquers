import { Twitter } from "lucide-react";
import useInView from "../../hooks/useInView";

const WelcomeSection = () => {
    const { ref, isVisible } = useInView();

    // 🔮 Card inline
    const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
        <div className={className}>{children}</div>
    );

    const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
        <div className={className}>{children}</div>
    );

    const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${className}`}>{children}</span>
    );

    return (
        <section className="mb-20 px-4 w-full flex justify-center">
            <div
                ref={ref}
                className={`transition-fade duration-700 ${isVisible ? "opacity-100" : "opacity-0"} w-full max-w-[100rem]`}
            >
                <Card className="w-full bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 animate-float-slow flex items-center">
                    <CardContent className="p-12 w-full text-center text-slate-200">
                        {/* ✨ Título principal */}
                        <h2 className="text-4xl font-bold psych-text mb-6">
                            Welcome yesquers
                        </h2>

                        {/* 🧘 Descripción */}
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Step into a world where creativity meets consciousness. Join our community of like-minded souls
                            who appreciate the finer things in life and the art of being chill.
                        </p>

                        {/* 🌐 Redes Sociales */}
                        <div className="flex justify-center gap-6 mb-8">
                            {/* Twitter */}
                            <a
                                href="https://twitter.com/yesquers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                                title="Follow on Twitter"
                            >
                                <Twitter className="w-8 h-8" />
                            </a>
                        </div>

                        {/* 🎯 Botones de acción */}
                        <div className="flex justify-center flex-wrap gap-4">
                            <a
                                href="https://opensea.io/collection/yesquers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-700 to-violet-700 hover:from-purple-600 hover:to-violet-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                            >
                                View Collection
                            </a>
                            <a
                                href="https://opensea.io/collection/yesquers/overview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                            >
                                More about the yesquers
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default WelcomeSection;

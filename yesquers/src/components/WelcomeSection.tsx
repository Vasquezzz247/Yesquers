import { Card, CardContent } from "./Card";
import Button from "./Button";
import { Twitter } from "lucide-react";
import useInView from "../hooks/useInView";

const WelcomeSection = () => {
    const { ref, isVisible } = useInView();

    return (
        <section className="mb-20 px-4 w-full flex justify-center">
            <div
                ref={ref}
                className={`transition-fade duration-700 ${isVisible ? "opacity-100" : "opacity-0"} w-full max-w-[100rem]`}
            >
                <Card className="w-full bg-black/30 backdrop-blur-md border border-pink-500/30 shadow-2xl shadow-pink-500/20 animate-float-slow flex items-center">
                    <CardContent className="p-12 w-full text-center">
                        {/* ✨ Título principal */}
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-shimmer">
                            Welcome yesquers
                        </h2>

                        {/* 🧘 Descripción */}
                        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
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
                                className="bg-purple-600/80 hover:bg-purple-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                            >
                                View Collection
                            </a>
                            <a
                                href="https://opensea.io/collection/yesquers/overview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-pink-600/80 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
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

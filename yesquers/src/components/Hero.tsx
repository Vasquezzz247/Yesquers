import {
    Card,
    CardContent
} from "./Card";
import Badge from "./Badge";
import { Zap } from "lucide-react";
import useInView from "../hooks/useInView";

const Hero = () => {
    const { ref, isVisible } = useInView();

    return (
        <section className="mb-20 px-4 max-w-7xl mx-auto">
            <div
                ref={ref}
                className={`
                    transition-fade 
                    duration-700 
                    ${isVisible ? "opacity-100" : "opacity-0"}
                `}
            >
                <Card
                    className="
                        bg-black/30 
                        backdrop-blur-md 
                        border border-purple-500/30 
                        shadow-2xl shadow-purple-500/20 
                        animate-float-slow
                        min-h-[600px] flex items-center
                    "
                >
                    <CardContent className="p-8 w-full">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* 🧠 CONTENIDO TEXTO */}
                            <div className="space-y-6 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer">
                                        mint yours now
                                    </h2>
                                </div>

                                <p className="text-lg text-gray-200 leading-relaxed">
                                    Yesquers is a collection made from yesquers to yesquers, the ones that know what really matters in life.
                                    Join the most chill community in the metaverse and embrace the trippy vibes.
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">420 Friendly</Badge>
                                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Trippy Vibes</Badge>
                                    <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">Chill Community</Badge>
                                </div>
                            </div>

                            {/* 🖼️ CUADRADO FLOTANTE */}
                            <div className="flex justify-center">
                                <div className="relative animate-float-slow">
                                    <div className="w-72 h-72 bg-gradient-to-br from-green-400 via-purple-500 to-pink-500 rounded-2xl animate-pulse shadow-2xl shadow-purple-500/30"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src={require("../assets/test1.gif")}
                                            alt="Yesquer"
                                            className="w-64 h-64 object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 rounded-2xl opacity-30 animate-spin-slow"></div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Hero;

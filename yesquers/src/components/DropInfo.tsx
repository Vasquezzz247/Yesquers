import { Card, CardContent } from "./Card";
import Badge from "./Badge";
import { Sparkles } from "lucide-react";
import useInView from "../hooks/useInView";

const DropInfo = () => {
    const { ref, isVisible } = useInView();

    return (
        <section className="mb-20 px-4 max-w-7xl mx-auto">
            <div
                ref={ref}
                className={`transition-fade duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                <Card className="bg-black/30 backdrop-blur-md border border-green-500/30 shadow-2xl shadow-green-500/20 animate-float-slow min-h-[600px] flex items-center">
                    <CardContent className="p-8 w-full">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* 🧩 IZQUIERDA - Info de la fecha */}
                            <div className="space-y-10 text-center md:text-left flex flex-col justify-center">
                                {/* 🕓 Drop Info centrado */}
                                <div className="flex justify-center md:justify-center items-center space-x-3 min-h-[150px]">
                                    <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
                                    <h3 className="text-2xl font-bold text-white">
                                        Drop on 4/20/2024 at 4:20:00 PM
                                    </h3>
                                </div>

                                {/* 🧊 Cards de rareza */}
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20 animate-float-slow animate-glow">
                                        <h4 className="text-xl font-bold text-yellow-300 mb-2">rarity 1 of 2500</h4>
                                        <p className="text-gray-300 font-semibold">The real G</p>
                                        <p className="text-sm text-gray-400 mt-2">Ultra rare legendary yesquers</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 animate-float-slow animate-glow">
                                        <h4 className="text-xl font-bold text-purple-300 mb-2">rarity 25 of 2500</h4>
                                        <p className="text-gray-300 font-semibold">The trippy ones</p>
                                        <p className="text-sm text-gray-400 mt-2">Psychedelic masterpieces</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20 animate-float-slow animate-glow">
                                        <h4 className="text-xl font-bold text-green-300 mb-2">rarity 50 of 2500</h4>
                                        <p className="text-gray-300 font-semibold">og chill</p>
                                        <p className="text-sm text-gray-400 mt-2">Original chill vibes collection</p>
                                    </div>
                                </div>
                            </div>

                            {/* 🖼️ DERECHA - NFT Destacado */}
                            <div className="flex justify-center items-center">
                                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30 text-center animate-float-slow animate-glow w-full max-w-sm">
                                    <h4 className="text-3xl font-bold text-white mb-4">YESQUERS 1</h4>
                                    <div className="space-y-3">
                                        <p className="text-lg text-purple-300">yesquers rarity 25</p>
                                        <p className="text-lg text-pink-300">Yesquers 50 of 2500</p>
                                    </div>
                                    <div className="mt-6">
                                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg">
                                            Featured NFT
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default DropInfo;

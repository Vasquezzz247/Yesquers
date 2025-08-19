import React from 'react';
import { Sparkles } from "lucide-react";
import useInView from "../../hooks/useInView";
import "./DropInfo.css";

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${className}`}>{children}</span>
);

const DropInfo = () => {
    const { ref, isVisible } = useInView(0.3);

    return (
        <section className="mb-20 px-4 max-w-7xl mx-auto">
            <div
                ref={ref}
                className={`transition-fade duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                <Card className="bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 animate-float-slow min-h-[600px] flex items-center">
                    <CardContent className="p-8 w-full">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* 🧩 IZQUIERDA - Info de la fecha */}
                            <div className="space-y-10 flex flex-col justify-center">
                                {/* 🕓 Drop Info centrado - Versión corregida */}
                                <div className="w-full text-center">
                                    <div className="inline-flex items-center justify-center gap-2 p-4 rounded-lg">
                                        <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                                        <h3 className="text-2xl font-bold psych-text">
                                            Drop on 8/29/2025 at 10:00:00 AM
                                        </h3>
                                    </div>
                                </div>

                                {/* 🧊 Cards de rareza (sin cambios) */}
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-violet-900/20 to-indigo-900/20 p-6 rounded-xl border border-violet-600/40 animate-float-slow">
                                        <h4 className="text-xl font-bold text-violet-300 mb-2">rarity 1 of 2500</h4>
                                        <img
                                            src={require('../../assets/Yesquers/Gold.png')}
                                            alt="Ultra rare legendary yesquers"
                                            className="mb-4 w-full h-auto rounded-lg"
                                        />
                                        <p className="text-slate-200 font-semibold">The real G</p>
                                        <p className="text-sm text-slate-400 mt-2">Ultra rare legendary yesquers</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 p-6 rounded-xl border border-purple-600/40 animate-float-slow">
                                        <h4 className="text-xl font-bold text-purple-300 mb-2">rarity 25 of 2500</h4>
                                        <p className="text-slate-200 font-semibold">The trippy ones</p>
                                        <p className="text-sm text-slate-400 mt-2">Psychedelic masterpieces</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-indigo-900/20 to-slate-800/20 p-6 rounded-xl border border-indigo-600/40 animate-float-slow">
                                        <h4 className="text-xl font-bold text-indigo-300 mb-2">rarity 50 of 2500</h4>
                                        <p className="text-slate-200 font-semibold">og chill</p>
                                        <p className="text-sm text-slate-400 mt-2">Original chill vibes collection</p>
                                    </div>
                                </div>
                            </div>

                            {/* 🖼️ DERECHA - NFT Destacado (sin cambios) */}
                            <div className="flex justify-center items-center">
                                <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 p-8 rounded-xl border border-purple-600/50 text-center animate-float-slow w-full max-w-sm">
                                    <h4 className="text-3xl font-bold text-slate-200 mb-4">YESQUERS 1</h4>
                                    <div className="space-y-3">
                                        <p className="text-lg text-purple-300">yesquers rarity 25</p>
                                        <p className="text-lg text-violet-300">Yesquers 50 of 2500</p>
                                    </div>
                                    <div className="mt-6">
                                        <Badge className="bg-gradient-to-r from-purple-700 to-violet-700 text-white px-4 py-2 text-lg border-0">
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
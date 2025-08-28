import { Card, CardContent, Badge } from "../ui/YesquerShades";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import useInView from "../../hooks/useInView";
import Gold from "../../assets/Yesquers/Gold.jpeg";
import yesq from "../../assets/Yesquers/yesq.png";
import yesq2 from "../../assets/Yesquers/yesq2.png";
import yesqGray from "../../assets/Yesquers/yescGray.png";
import yesqE from "../../assets/Yesquers/yesqE.png";

import "./DropInfo.css";

type RarityKey = "common" | "special" | "epic" | "legendary";

type RarityItem = {
    key: RarityKey;
    title: string;
    subtitle: string;
    imageSrc?: string;
};

const rarityItems: RarityItem[] = [
    { key: "common", title: "Common Yesquer", subtitle: "All gray traits", imageSrc: yesqGray },
    { key: "special", title: "Special Yesquer", subtitle: "gray/blue traits", imageSrc: yesq2 },
    { key: "epic", title: "Epic Yesquer", subtitle: "At least one purple trait", imageSrc: yesqE },
    { key: "legendary", title: "Legendary Yesquer", subtitle: "At least one gold trait", imageSrc: yesq },
];

function rarityStyles(key: RarityKey) {
    switch (key) {
        case "common":
            return { card: "bg-gradient-to-r from-slate-800/20 to-slate-700/20 border-slate-600/40", title: "text-slate-300", divider: "via-slate-500/40" };
        case "special":
            return { card: "bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-600/40", title: "text-blue-300", divider: "via-blue-600/40" };
        case "epic":
            return { card: "bg-gradient-to-r from-violet-900/20 to-purple-900/20 border-violet-600/40", title: "text-violet-300", divider: "via-violet-600/40" };
        case "legendary":
            return { card: "bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border-amber-600/40", title: "text-amber-300", divider: "via-amber-500/40" };
    }
}

function RarityCard({ item }: { item: RarityItem }) {
    const s = rarityStyles(item.key);
    return (
        <div className={`h-full p-5 md:p-6 rounded-xl border animate-float-slow flex flex-col ${s.card}`}>
            <h4 className={`text-lg md:text-xl font-bold mb-2 ${s.title}`}>{item.title}</h4>
            <div className={`my-2 h-px bg-gradient-to-r from-transparent ${s.divider} to-transparent`} />
            <p className="text-xs md:text-sm text-slate-400">{item.subtitle}</p>

            {/* square image, smaller so cards aren't too tall */}
            {item.imageSrc ? (
                <div className="mt-3 md:mt-4 mx-auto w-40 md:w-44 aspect-square rounded-lg overflow-hidden">
                    <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
            ) : (
                <div className="mt-3 md:mt-4 mx-auto w-40 md:w-44 aspect-square rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-800/40 to-slate-700/40">
                    <div className="flex flex-col items-center text-slate-400">
                        <ImageIcon className="w-8 h-8 mb-2" />
                        <span className="text-xs uppercase tracking-wider">Image coming soon</span>
                    </div>
                </div>
            )}
        </div>
    );
}

const DropInfo = () => {
    const { ref, isVisible } = useInView(0.3);

    return (
        <section className="mb-20 px-4 w-full flex justify-center">
            <div
                ref={ref}
                className={`transition-fade duration-700 ${isVisible ? "opacity-100" : "opacity-0"} w-full max-w-[100rem]`}
            >
                {/* keep width roomy but reduce overall height */}
                <Card className="bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 min-h-[540px] flex items-center animate-float-slow">
                    <CardContent className="w-full p-10 md:p-12">
                        {/* two columns: 4 cards left, golden right */}
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
                            {/* title spans both columns and centered */}
                            <div className="md:col-span-2">
                                <div className="mx-auto flex flex-col items-center justify-center gap-2 p-2 text-center">
                                    <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                                    <h3 className="text-3xl md:text-4xl font-bold psych-text text-center">
                                        Drop on 8/29/2025 at 10:00:00 AM
                                    </h3>
                                </div>
                            </div>

                            {/* LEFT: exactly 4 cards (2x2 on md+) */}
                            <div className="w-full">
                                <div className="mx-auto max-w-3xl">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                        {rarityItems.map((item) => (
                                            <RarityCard key={item.key} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: golden card, smaller image to keep height down */}
                            <div className="w-full flex justify-center">
                                <div className="w-full max-w-[340px] bg-gradient-to-r from-violet-900/20 to-indigo-900/20 p-7 md:p-8 rounded-xl border border-violet-600/40 animate-float-slow flex flex-col text-center">
                                    <h4 className="text-2xl md:text-3xl font-bold text-slate-200 mb-2">
                                        Golden Yesquer — 1 of 2500
                                    </h4>
                                    <div className="my-3 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />
                                    <p className="text-sm md:text-base text-slate-400">All traits are gold</p>

                                    <div className="mt-5 mx-auto w-48 md:w-56 aspect-square rounded-lg overflow-hidden">
                                        <img
                                            src={Gold}
                                            alt="Golden Yesquer — all gold traits"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <Badge className="px-3 py-1.5 text-xs md:text-sm border-violet-600/40 text-violet-300">
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

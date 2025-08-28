import { Card, CardContent, Badge } from "../ui/YesquerShades";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import useInView from "../../hooks/useInView";
import Gold from "../../assets/Yesquers/Gold.jpeg";
import "./DropInfo.css";

type RarityKey = "common" | "special" | "epic" | "legendary";

type RarityItem = {
    key: RarityKey;
    title: string;
    subtitle: string;
    imageSrc?: string; // put your real image path here; placeholder will show if missing
};

const rarityItems: RarityItem[] = [
    {
        key: "common",
        title: "Common Yesquer",
        subtitle: "All gray traits",
        // imageSrc: "/assets/yesquers/common-1.jpg",
    },
    {
        key: "special",
        title: "Special Yesquer",
        subtitle: "gray/blue traits",
        // imageSrc: "/assets/yesquers/special-1.jpg",
    },
    {
        key: "epic",
        title: "Epic Yesquer",
        subtitle: "At least one purple trait",
        // imageSrc: "/assets/yesquers/epic-1.jpg",
    },
    {
        key: "legendary",
        title: "Legendary Yesquer",
        subtitle: "At least one gold trait",
        // imageSrc: "/assets/yesquers/legendary-1.jpg",
    },
];

function rarityStyles(key: RarityKey) {
    switch (key) {
        case "common":
            return {
                card: "bg-gradient-to-r from-slate-800/20 to-slate-700/20 border-slate-600/40",
                title: "text-slate-300",
                divider: "via-slate-500/40",
            };
        case "special":
            return {
                card: "bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-600/40",
                title: "text-blue-300",
                divider: "via-blue-600/40",
            };
        case "epic":
            return {
                card: "bg-gradient-to-r from-violet-900/20 to-purple-900/20 border-violet-600/40",
                title: "text-violet-300",
                divider: "via-violet-600/40",
            };
        case "legendary":
            return {
                card: "bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border-amber-600/40",
                title: "text-amber-300",
                divider: "via-amber-500/40",
            };
    }
}

function RarityCard({ item }: { item: RarityItem }) {
    const s = rarityStyles(item.key);
    return (
        <div
            className={`h-full p-6 rounded-xl border animate-float-slow flex flex-col ${s.card}`}
        >
            <h4 className={`text-xl font-bold mb-2 ${s.title}`}>{item.title}</h4>
            <div className={`my-2 h-px bg-gradient-to-r from-transparent ${s.divider} to-transparent`} />
            <p className="text-sm text-slate-400">{item.subtitle}</p>

            {/* Square image (or a styled placeholder if imageSrc is missing) */}
            {item.imageSrc ? (
                <div className="mt-4 rounded-lg overflow-hidden aspect-square">
                    <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            ) : (
                <div className="mt-4 rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-gradient-to-br from-slate-800/40 to-slate-700/40">
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
        <section className="mb-20 px-4 max-w-7xl mx-auto">
            <div
                ref={ref}
                className={`transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <Card className="bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 animate-float-slow min-h-[600px] flex items-center">
                    <CardContent className="p-8 w-full">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* LEFT: Drop info + rarity grid */}
                            <div className="space-y-10 flex flex-col justify-center">
                                {/* Drop info */}
                                <div className="w-full text-center">
                                    <div className="inline-flex items-center justify-center gap-2 p-4 rounded-lg">
                                        <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                                        <h3 className="text-2xl font-bold psych-text">
                                            Drop on 8/29/2025 at 10:00:00 AM
                                        </h3>
                                    </div>
                                </div>

                                {/* Rarity grid (images only, square, consistent) */}
                                <section className="w-full">
                                    <div className="max-w-3xl mx-auto">
                                        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6 items-stretch">
                                            {rarityItems.map((item) => (
                                                <RarityCard key={item.key} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* RIGHT: Golden Yesquer (1 of 2500), square image */}
                            <div className="flex justify-center items-center">
                                <div className="w-full max-w-sm h-full bg-gradient-to-r from-violet-900/20 to-indigo-900/20 p-6 rounded-xl border border-violet-600/40 animate-float-slow flex flex-col text-center">
                                    <h4 className="text-xl font-bold text-violet-300 mb-2">
                                        Golden Yesquer — 1 of 2500
                                    </h4>
                                    <div className="my-2 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />
                                    <p className="text-sm text-slate-400">
                                        All traits are gold
                                    </p>

                                    <div className="mt-4 rounded-lg overflow-hidden aspect-square">
                                        <img
                                            src={Gold}
                                            alt="Golden Yesquer — all gold traits"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="px-4 py-2 text-sm border-violet-600/40 text-violet-300">
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

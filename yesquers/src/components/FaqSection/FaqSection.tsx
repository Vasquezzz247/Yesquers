import { Card, CardContent } from "../ui/YesquerShades";
import useInView from "../../hooks/useInView";
import React, { useCallback, useMemo, useState } from "react";

/** Move data outside render to avoid recreating arrays/strings on every render */
const FAQ_ITEMS = [
    {
        question: "What are Yesquers?",
        answer:
            "Yesquers are pixel art homies that live the chill life — smoking, vibing, being creative and just enjoying the ride. They’re not just NFTs, they’re a whole vibe, a lifestyle, and a crew to be part of.",
    },
    {
        question: "How many Yesquers are in the collection?",
        answer: "Only 2,500 unique Yesquers, each one with different skins, traits and rarities.",
    },
    {
        question: "What blockchain are Yesquers on?",
        answer: "The Yesquers are rolling on Base, the new L2 blockchain from Coinbase.",
    },
    {
        question: "What utilities do Yesquers offer?",
        answer: `Owning a Yesquer means:

Early access to future projects and collabs

Priority entry into whatever we cook up next

Being part of the Yesquer familia — a community that’s all about weed culture, chill vibes and creativity 🌿`,
    },
    {
        question: "How can I buy a Yesquer?",
        answer:
            "The official mint is happening only on OpenSea, this 29th of August. That’s the one and only spot to mint your Yesquer.",
    },
    {
        question: "Is there a roadmap for the project?",
        answer:
            "We keep it simple. First, the 2,500 Yesquers. After that, we’ll keep creating new projects and experiences for holders. No fake hype, just vibes and whatever comes naturally.",
    },
] as const;

type FaqItem = (typeof FAQ_ITEMS)[number];

const FAQRow = React.memo(function FAQRow({
    item,
    open,
    onToggle,
    index,
}: {
    item: FaqItem;
    open: boolean;
    onToggle: (i: number) => void;
    index: number;
}) {
    const contentId = useMemo(() => `faq-content-${index}`, [index]);

    return (
        <div
            className={[
                // Lighter styles: remove per-item backdrop-blur & heavy transforms
                "bg-black/20 border border-purple-600/30 rounded-lg overflow-hidden",
                "transition-colors duration-200 hover:border-purple-500/50",
            ].join(" ")}
        >
            <button
                onClick={() => onToggle(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-900/10 transition-colors duration-200"
                aria-expanded={open}
                aria-controls={contentId}
            >
                <span className="text-lg font-semibold text-slate-200 pr-4">
                    {item.question}
                </span>
                <span
                    className={[
                        "text-purple-400 text-2xl font-bold transition-transform duration-200",
                        open ? "rotate-45" : "",
                    ].join(" ")}
                >
                    +
                </span>
            </button>

            <div
                id={contentId}
                className={[
                    "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
            >
                <div className="px-6 pb-4 border-t border-purple-600/20">
                    <p className="text-slate-300 leading-relaxed pt-4 whitespace-pre-line">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
});

const FAQSection = () => {
    // Use once-like behavior to avoid re-animating on every scroll (less work)
    const { ref, isVisible } = useInView(0.3);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = useCallback((index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    }, []);

    return (
        <section className="mb-20 px-4 w-full flex justify-center">
            <div
                ref={ref}
                className={[
                    "w-full max-w-[100rem] transform transition-opacity duration-600",
                    isVisible ? "opacity-100" : "opacity-0",
                ].join(" ")}
            >
                {/* Lighter outer styles: keep palette, reduce shadow cost slightly */}
                <Card className="w-full bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-xl shadow-purple-900/20">
                    <CardContent className="p-12 w-full text-center text-slate-200">
                        <h2 className="text-4xl font-bold psych-text mb-6">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Got questions about Yesquers? We've got answers. Dive into our FAQ
                            to learn more about our community and what makes us special.
                        </p>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {FAQ_ITEMS.map((item, i) => (
                                <FAQRow
                                    key={i}
                                    item={item}
                                    index={i}
                                    open={openIndex === i}
                                    onToggle={toggleFAQ}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default FAQSection;

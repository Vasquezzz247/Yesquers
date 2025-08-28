import { Card, CardContent } from "../ui/YesquerShades";
import useInView from "../../hooks/useInView";
import { useState } from "react";

const FAQSection = () => {
    const { ref, isVisible } = useInView(0.3);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What are Yesquers?",
            answer:
                "Yesquers are pixel art homies that live the chill life — smoking, vibing, being creative and just enjoying the ride. They’re not just NFTs, they’re a whole vibe, a lifestyle, and a crew to be part of.",
        },
        {
            question: "How many Yesquers are in the collection?",
            answer:
                "Only 2,500 unique Yesquers, each one with different skins, traits and rarities.",
        },
        {
            question: "What blockchain are Yesquers on?",
            answer:
                "The Yesquers are rolling on Base, the new L2 blockchain from Coinbase.",
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
    ];

    return (
        <section className="mb-20 px-4 w-full flex justify-center">
            {/* Aplica el ref del hook al contenedor que quieres animar */}
            <div
                ref={ref}
                className={[
                    "w-full max-w-[100rem] transform transition-all duration-700 will-change-transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
            >
                <Card className="w-full bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 animate-float-slow">
                    <CardContent className="p-12 w-full text-center text-slate-200">
                        {/* FAQ Title */}
                        <h2 className="text-4xl font-bold psych-text mb-6">
                            Frequently Asked Questions
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Got questions about Yesquers? We've got answers. Dive into our FAQ
                            to learn more about our community and what makes us special.
                        </p>

                        {/* FAQ Items */}
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    // Stagger opcional: entra cada card con 80ms extra
                                    style={{
                                        transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                                    }}
                                    className={[
                                        "bg-black/20 backdrop-blur border border-purple-600/30 rounded-lg overflow-hidden",
                                        "transition-all duration-500 hover:border-purple-500/50 transform",
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4",
                                    ].join(" ")}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-900/20 transition-colors duration-200"
                                    >
                                        <span className="text-lg font-semibold text-slate-200 pr-4">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`text-purple-400 text-2xl font-bold transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-6 pb-4 border-t border-purple-600/20">
                                            <p className="text-slate-300 leading-relaxed pt-4 whitespace-pre-line">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default FAQSection;

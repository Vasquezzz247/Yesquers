import { useEffect, useRef, useState } from "react";

const useInView = (threshold = 0.3) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setVisible] = useState(false);
    const lastScrollY = useRef(0);
    const scrollDirection = useRef<"up" | "down">("down");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollDirection.current =
                currentScrollY > lastScrollY.current ? "down" : "up";
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    if (scrollDirection.current === "up") {
                        setVisible(false);
                    }
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return { ref, isVisible };
};

export default useInView;

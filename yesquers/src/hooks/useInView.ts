import { useEffect, useRef, useState } from "react";

const useInView = (threshold = 0.3) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return { ref, isVisible };
};

export default useInView;

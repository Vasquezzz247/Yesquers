import React from "react";
import { Zap } from "lucide-react";
import "./Hero.css";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium border ${className}`}
  >
    {children}
  </span>
);

const useInView = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const ref = React.useRef(null);
  return { ref, isVisible };
};

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
            bg-black/40 
            backdrop-blur-lg 
            border-2 border-purple-600/40 
            shadow-2xl shadow-purple-900/30
            min-h-[600px] flex items-center
            relative overflow-hidden
            animate-float-slow
          "
        >
          <CardContent className="p-8 w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Zap className="w-6 h-6 text-violet-400" />
                  <h2 className="text-3xl font-bold psych-text">
                    Enjoy the trip and mint!
                  </h2>
                </div>

                <p className="text-lg text-slate-200 leading-relaxed">
                  Yesquers is a collection made from yesquers to yesquers, the
                  ones that know what really matters in life. Join the most
                  chill community in the metaverse and embrace the trippy vibes.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Badge className="bg-purple-800/30 text-purple-300 border-purple-600/50 shadow-lg shadow-purple-600/20">
                    420 Friendly
                  </Badge>
                  <Badge className="bg-violet-800/30 text-violet-300 border-violet-600/50 shadow-lg shadow-violet-600/20">
                    Trippy Vibes
                  </Badge>
                  <Badge className="bg-indigo-800/30 text-indigo-300 border-indigo-600/50 shadow-lg shadow-indigo-600/20">
                    Chill Community
                  </Badge>
                </div>
              </div>

              {/* Imagen flotando */}
              <div className="flex justify-center">
                <div className="relative animate-float-slow">
                  <div className="w-72 h-72 bg-gradient-to-br from-purple-800 via-violet-900 to-indigo-800 rounded-2xl shadow-2xl shadow-purple-800/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-slate-600 via-purple-700 to-violet-700 rounded-2xl flex items-center justify-center text-slate-200 text-lg font-bold">
                      [GIF Placeholder]
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 rounded-2xl opacity-40"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-slate-700/20 via-purple-600/20 to-violet-600/20 opacity-30"></div>
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

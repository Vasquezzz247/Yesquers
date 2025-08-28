import { Card, CardContent, Badge } from "../ui/YesquerShades";
import React from "react";
import { Zap } from "lucide-react";
import useInView from "../../hooks/useInView";
import "./Hero.css";
import testImage from "../../assets/Yesquers/GIF_Yesquers.gif";

const Hero = () => {
  const { ref, isVisible } = useInView(0.3); // mismo hook y sensación que el resto

  return (
    <section className="mb-20 px-4 w-full flex justify-center">
      <div
        ref={ref}
        className={`transition-fade duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        } w-full max-w-[100rem]`}
      >
        <Card className="bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 min-h-[600px] flex items-center relative overflow-hidden animate-float-slow">
          <CardContent className="w-full relative z-10 p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="space-y-8 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Zap className="w-6 h-6 text-violet-400" />
                  <h2 className="text-4xl md:text-5xl font-bold psych-text">
                    Enjoy the trip and mint!
                  </h2>
                </div>

                <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Yesquers is a collection made from yesquers to yesquers, the ones
                  that know what really matters in life. Join the most chill community
                  in the metaverse and embrace the trippy vibes.
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

              {/* Imagen flotando (más grande y espaciosa para igualar a otros) */}
              <div className="flex justify-center">
                <div className="relative animate-float-slow">
                  {/* Outer glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 rounded-2xl opacity-40" />
                  <div className="absolute -inset-4 bg-gradient-to-r from-slate-700/20 via-purple-600/20 to-violet-600/20 opacity-30" />

                  {/* Imagen encima (cuadrada y más grande) */}
                  <img
                    src={testImage}
                    alt="Yesquers animated preview"
                    className="relative rounded-2xl shadow-2xl shadow-purple-800/40 z-10 w-80 h-80 md:w-96 md:h-96 object-cover"
                  />
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

import { Card, CardContent } from "../ui/YesquerShades";
import useInView from "../../hooks/useInView";
import nftCalendarLogo from "../../assets/NFTCalendar/nftcalendar-svg-white.svg";
import GithubIcon from '../../assets/SocialMedia/github-mark-white.png';
import XIcon from '../../assets/SocialMedia/icons8-x-50.png';
import OpenSeaIcon from '../../assets/SocialMedia/openseaIcon.png';


const WelcomeSection = () => {
    const { ref, isVisible } = useInView();

    return (
        <section className="mb-20 px-4 w-full flex justify-center">
            <div
                ref={ref}
                className={`transition-fade duration-700 ${isVisible ? "opacity-100" : "opacity-0"} w-full max-w-[100rem]`}
            >
                <Card className="w-full bg-black/40 backdrop-blur-lg border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 animate-float-slow flex items-center">
                    <CardContent className="p-12 w-full text-center text-slate-200">
                        {/* Welcome */}
                        <h2 className="text-4xl font-bold psych-text mb-6">
                            Welcome yesquers
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Step into a world where creativity meets consciousness. Join our community of like-minded souls
                            who appreciate the finer things in life and the art of being chill.
                        </p>
                        {/* Meet the Creators divider */}
                        <div className="flex items-center my-10">
                            <div className="flex-grow border-t border-purple-600/30"></div>
                            <span className="mx-4 text-slate-300 uppercase tracking-wide text-sm font-semibold">
                                Meet The Creators
                            </span>
                            <div className="flex-grow border-t border-purple-600/30"></div>
                        </div>
                        {/* Social Media */}
                        <div className="flex justify-center gap-6 mb-8">
                            {/* Twitter */}
                            <a
                                href="https://x.com/yesquersnft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                                title="Follow on Twitter"
                            >
                                <img
                                    src={XIcon}
                                    alt="Twitter"
                                    className="w-8 h-8"
                                />
                            </a>

                            {/* Github */}
                            <a
                                href="https://github.com/Vasquezzz247"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:text-orange-400 transition-transform transform hover:scale-110"
                                title="Github Profile"
                            >
                                <img
                                    src={GithubIcon}
                                    alt="Github"
                                    className="w-8 h-8"
                                />
                            </a>

                            {/* OpenSea icon */}
                            <a
                                href="https://opensea.io/Tonca_10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 transition-transform transform hover:scale-110"
                                title="Join our Discord"
                            >
                                <img
                                    src={OpenSeaIcon}
                                    alt="OpenSea profile"
                                    className="w-8 h-8"
                                />
                            </a>
                        </div>

                        {/* buttons */}
                        <div className="flex justify-center flex-wrap gap-4 mb-10">
                            <a
                                href="https://opensea.io/collection/yesquers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-700 to-violet-700 hover:from-purple-600 hover:to-violet-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                            >
                                View Collection
                            </a>
                            <a
                                href="https://opensea.io/collection/yesquers/overview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                            >
                                More about the yesquers
                            </a>
                        </div>
                        {/* 🏷️ NFT Calendar Section */}
                        <div className="pt-8">
                            <div className="flex items-center mb-6">
                                <div className="flex-grow border-t border-purple-600/30"></div>
                                <span className="mx-4 text-slate-400 uppercase tracking-wide text-sm font-semibold">
                                    As Seen On
                                </span>
                                <div className="flex-grow border-t border-purple-600/30"></div>
                            </div>
                            <div className="flex justify-center">
                                <a
                                    href="https://nftcalendar.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform transform hover:scale-105 opacity-70 hover:opacity-100"
                                    title="Featured on NFT Calendar"
                                >
                                    <img
                                        src={nftCalendarLogo}
                                        alt="NFT Calendar"
                                        className="h-24 w-auto"
                                    />
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default WelcomeSection;

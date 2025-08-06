import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RarityCard from "../components/RarityCard";
import FeaturedNFT from "../components/FeaturedNFT";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-yellow-300 text-white">
        <Navbar />
        <Hero />
        <section className="flex justify-center space-x-4 p-10">
            <RarityCard rarity="rarity 1 of 2500" title="The real G" description="Ultra rare legendary yesquers" />
            <RarityCard rarity="rarity 25 of 2500" title="The trippy ones" description="Psychedelic masterpieces" />
            <RarityCard rarity="rarity 50 of 2500" title="og chill" description="Original chill vibes collection" />
        </section>
        <FeaturedNFT />
        <CTA />
        <Footer />
    </div>
);

export default Home;

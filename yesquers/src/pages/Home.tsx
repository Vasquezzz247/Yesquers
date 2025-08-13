import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DropInfo from "../components/DropInfo";
import WelcomeSection from "../components/WelcomeSection";
import Footer from "../components/Footer";

const Home = () => (
    <div className="min-h-screen trippy-bg text-white">
        <Navbar />
        <div className="mt-16">
            <Hero />
        </div>
        <div className="mt-10">
            <DropInfo />
        </div>
        <div className="mt-10">
            <WelcomeSection />
        </div>
        <Footer />
    </div>
);

export default Home;



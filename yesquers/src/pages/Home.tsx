import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DropInfo from "../components/DropInfo";
import WelcomeSection from "../components/WelcomeSection";
import Footer from "../components/Footer";

const Home = () => (
    <div className="min-h-screen trippy-bg text-white">
        <div className="flex flex-col space-y-16">
            <Navbar />
            <Hero />
            <DropInfo />
            <WelcomeSection />
            <Footer />
        </div>
    </div>
);

export default Home;



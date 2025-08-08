import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DropInfo from "../components/DropInfo";
import WelcomeSection from "../components/WelcomeSection";
import Footer from "../components/Footer";

const Home = () => (
    //<div className="min-h-screen trippy-bg text-white relative z-0">
    <div className="min-h-screen trippy-bg text-white relative z-0">
    <div className="flex flex-col space-y-16 relative z-10">
        <Navbar />
        <Hero />
        <DropInfo />
        <WelcomeSection />
        <Footer />
    </div>
</div>

);

export default Home;


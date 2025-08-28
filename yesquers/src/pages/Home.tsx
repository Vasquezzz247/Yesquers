import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import DropInfo from "../components/DropInfo/DropInfo";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FaqSection/FaqSection";

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
            <FAQSection />
        </div>
        <div className="mt-10">
            <WelcomeSection />
        </div>
        <Footer />
    </div>
);


export default Home;
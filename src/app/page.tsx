import NavBar from "./components/NavBar";
import { UserSection } from "./components/UserSection";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-[#121212]">
                <NavBar />

                <div className="container mt-24 mx-auto px-12 py-4">
                    <UserSection />
                    <AchievementsSection />
                    <AboutSection />
                    <ProjectSection />
                    <ExperienceSection />
                    <ContactSection />
                </div>
                <Footer />
                
            </main>
        </>
    );
}

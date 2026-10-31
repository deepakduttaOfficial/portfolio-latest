import AboutSection from "../components/aboutSection";
import CertificateSection from "../components/certificateSection";
import FooterSection from "../components/footerSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/projectSection";

const Home = () => (
  <>
    <Navbar />
    <main id="main-content">
      <Hero />
      <ProjectSection />
      <AboutSection />
      <CertificateSection />
    </main>
    <FooterSection />
  </>
);

export default Home;

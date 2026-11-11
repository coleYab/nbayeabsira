import { Navigation } from "@/app/components/navigation";
import { Hero } from "@/app/components/hero";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";
import { Awards } from "@/app/components/awards";
import { Education } from "@/app/components/education";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Education />
      </main>
      <Footer />
    </>
  );
}

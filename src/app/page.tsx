import AboutCard from "@/components/AboutCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechnologiesSection from "@/components/TechnologiesSection";
import WorkStyleSection from "@/components/WorkStyleSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10">
      <AboutCard />
      <TechnologiesSection />
      <ExperienceCard />
      <WorkStyleSection />
      <br />
    </main>
  );
}

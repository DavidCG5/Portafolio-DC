import AboutCard from '@/components/AboutCart'
import ExperienceCard from '@/components/ExperienceCard'
import TechnologiesSection from '@/components/TechnologiesSection'
import WorkStyleSection from '@/components/WorkStyleSection'


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 pt-0 px-0">
      <AboutCard />
      <TechnologiesSection />
      <ExperienceCard />
      <WorkStyleSection />
      <br />
    </main>
  )
}

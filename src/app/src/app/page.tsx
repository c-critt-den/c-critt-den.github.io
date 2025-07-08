import SimpleCentered from '@/components/blocks/heros/simple-centered'
import AboutSection from '@/components/blocks/about-section'
import SkillsSection from '@/components/blocks/skills-section'
import ProjectsSection from '@/components/blocks/projects-section'
import EducationCertifications from '@/components/blocks/education-certifications'
import { SimpleCenteredContactForm } from '@/components/blocks/contact-forms/simple-centered-contact-form'
import { CenteredWithLogo } from '@/components/blocks/footers/centered-with-logo'

export default function Home() {
  return (
    <>
      <SimpleCentered />
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="education">
        <EducationCertifications />
      </section>
      <section id="contact">
        <SimpleCenteredContactForm />
      </section>
      <CenteredWithLogo />
    </>
  )
}

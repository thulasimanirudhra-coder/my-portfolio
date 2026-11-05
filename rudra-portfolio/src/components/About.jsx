import {
  FaGraduationCap,
  FaLaptopCode,
  FaSeedling,
  FaBullseye,
} from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProfileImage from './ProfileImage'

const highlights = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    text: 'B.Sc Computer Science (2024–2027) with 84.53%.',
  },
  {
    icon: FaLaptopCode,
    title: 'Interest',
    text: 'Frontend development and creative, responsive web design.',
  },
  {
    icon: FaSeedling,
    title: 'Learning Journey',
    text: 'Comfortable with HTML and CSS; now building up JavaScript.',
  },
  {
    icon: FaBullseye,
    title: 'Career Objective',
    text: 'To become a skilled frontend developer creating meaningful digital experiences.',
  },
]

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="info-card glass">
      <div className="ic">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About Me" title="Get to know me" />
        <div className="about-grid">
          <Reveal>
            <ProfileImage />
          </Reveal>

          <Reveal delay={120}>
            <div className="about-text">
              <p>
                Hello! I'm Rudhra, a passionate Computer Science student
                interested in frontend development and creative web design.
              </p>
              <p>
                I have learned HTML and CSS and have experience building
                frontend projects with the assistance of AI development tools.
                I am currently improving my JavaScript and exploring modern web technologies.
              </p>
              <p>
                I enjoy creating responsive, user-friendly, and visually
                attractive websites. My goal is to become a skilled frontend
                developer and build meaningful digital experiences.
              </p>

              <div className="about-cards">
                {highlights.map((item) => (
                  <InfoCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
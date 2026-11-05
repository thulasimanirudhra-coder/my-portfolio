import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaBrain,
  FaHeart,
  FaGraduationCap,
  FaBriefcase,
  FaFilm,
  FaUtensils,
} from 'react-icons/fa'

export const profile = {
  name: 'Rudhra',
  role: 'Frontend Developer',
  location: 'Tiruppur, Tamil Nadu, India',
  email: 'thulasimanirudhra86@gmail.com', // PLACEHOLDER – replace with your real email
  github: 'https://github.com/thulasimanirudhra-coder',
  linkedin: '#', // PLACEHOLDER – replace with your LinkedIn profile URL
  resume: '/resume.pdf',
  photo: '/images/profile.jpg',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export const typingRoles = [
  'Frontend Developer',
  'Computer Science Student',
]

export const technicalSkills = [
  { name: 'HTML', icon: FaHtml5, level: 'Comfortable', tone: 'strong', note: 'Semantic, well-structured pages' },
  { name: 'CSS', icon: FaCss3Alt, level: 'Comfortable', tone: 'strong', note: 'Responsive layouts and styling' },
  { name: 'JavaScript', icon: FaJs, level: 'Learning', tone: 'learning', note: 'Practising core concepts' },
  { name: 'Python', icon: FaPython, level: 'Learning', tone: 'learning', note: 'Learning the fundamentals' },
  { name: 'React', icon: FaReact, level: 'Learning', tone: 'learning', note: 'Building components and hooks' },
  { name: 'Git', icon: FaGitAlt, level: 'Beginner', tone: 'beginner', note: 'Basic version control' },
  { name: 'GitHub', icon: FaGithub, level: 'Beginner', tone: 'beginner', note: 'Hosting and sharing projects' },
]

export const aiTools = [
  { name: 'ChatGPT', icon: FaRobot, level: 'AI Tool', tone: 'ai', note: 'Ideas, debugging and learning support' },
  { name: 'Claude', icon: FaBrain, level: 'AI Tool', tone: 'ai', note: 'Code help and explanations' },
  { name: 'Lovable', icon: FaHeart, level: 'AI Tool', tone: 'ai', note: 'Rapid UI prototyping' },
]

// TODO: Replace the "tech" arrays with the real technologies used in each project.
// TODO: Add real links in "live" / "github" fields once you have them (null = placeholder button).
// TODO: To use screenshots, save them in public/images/projects/ and set e.g. image: '/images/projects/smart-campus.png'
export const projects = [
  {
    id: 1,
    title: 'Smart Campus',
    description:
      'A college-focused web application designed to organize campus information, academic schedules, events, subjects, and student-related updates.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: FaGraduationCap,
    gradient: 'linear-gradient(135deg, #0ea5e9, #4f46e5)',
    image: null,
    live: null,
    github: null,
  },
  {
    id: 2,
    title: 'Job Portal',
    description:
      'A job search portal that helps users explore job opportunities and access job-related information through a user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: FaBriefcase,
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    image: null,
    live: null,
    github: 'https://github.com/thulasimanirudhra-coder/job-search-portal',
  },
  {
    id: 3,
    title: 'Vijay Fan Page',
    description:
      'A Tamil cinema fan page dedicated to actor Vijay, showcasing movie information, movie highlights, and an engaging cinematic experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: FaFilm,
    gradient: 'linear-gradient(135deg, #1e1b4b, #7f1d1d 60%, #d97706)',
    image: null,
    live: null,
    github:'https://github.com/thulasimanirudhra-coder/Vijay-portfolio.git',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description:
      'A recipe discovery website that allows users to explore food recipes and find dishes based on ingredients, including South Indian food discovery.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: FaUtensils,
    gradient: 'linear-gradient(135deg, #f59e0b, #ec4899)',
    image: null,
    live: null,
    github:'https://github.com/thulasimanirudhra-coder/Recipe-finder.git',
  }
]
export const education = [
  {
    title: 'B.Sc Computer Science',
    place: 'Navarasam Arts and Science College for Women, Erode.',
    period: '2024 – 2027',
    score: 'Academic Percentage: 84.53%',
  },
  {
    title: 'HSC',
    place: 'TAMM GHSS Nathakkadaiyur',
    period: '2024',
    score: null,
  },
]

// TODO: Set "file" to e.g. '/images/certificates/web-dev.jpg' once you add the image (null = placeholder).
export const certificates = [
  {
    title: "Full Stack Development Certificate",
    image: "", // add a path like "/images/certificates/full-stack.jpg" when you have it
  },
  {
    title: "AI-Infused DevOps",
    topic: "Best Practices for Scalable ML Systems",
    date: "09 January 2025",
    institution: "Navarasam Arts and Science College for Women",
    image: "images/certificates/ai-infused-devops.jpg",
  },
  {
    title: "Data Visualization and Machine Learning",
    topic: "Unlocking Insights in the Data Science",
    date: "22 July 2025",
    institution: "Navarasam Arts and Science College for Women",
    image: "/images/certificates/data-visualization-ml.jpg",
  }
]
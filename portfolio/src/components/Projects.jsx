import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import screenImg from "../assets/Screenshot (213).png";
import image from "../assets/image.png";
import image2 from "../assets/Screenshot (723).png";

const projects = [
  {
    id: 1,
    title: 'Library Management System',
    description: 'Full-stack library management system with real-time inventory management and checkout processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express','Tailwind CSS','FIREBASE'],
    demo: 'https://library-bk56.vercel.app',
    github: 'https://github.com/NidhiS2611/Library',
    image: screenImg,
    accent: '#7F77DD',
  },
  {
    id: 2,
    title: 'Blog Platform',
    description: 'Interactive analytics dashboard with real-time data visualization and custom reports.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express','Tailwind CSS','FIREBASE'],
    demo: 'https://blogwebsite-pi-silk.vercel.app',
    github: 'https://github.com/NidhiS2611/Blogwebsite',
    image: image,
    accent: '#1D9E75',
  },
  {
    id: 3,
    title: 'Medicine Stock Prediction System',
    description: 'Collaborative task management application with real-time synchronization and team features.',
    tags: ['React', 'Flask', 'Tailwind CSS', 'Python'],
    demo: 'https://medicine-ai-six.vercel.app/',
    github: 'https://github.com/NidhiS2611/Medicine-AI',
    image: image2,
    accent: '#a09ae8',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '100px 2rem',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Work
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: '12px', lineHeight: 1.1 }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '16px' }}>
            A selection of projects I've built with modern technologies
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '20px',
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ y: -6, borderColor: project.accent }}
              style={{
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '188px', overflow: 'hidden' }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${project.accent}33 0%, transparent 60%)`,
                }} />
              </div>

              {/* Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.65, flex: 1, marginBottom: '16px' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: `${project.accent}18`,
                        color: project.accent,
                        fontSize: '12px',
                        fontWeight: 500,
                        border: `1px solid ${project.accent}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '9px',
                      borderRadius: 'var(--radius-sm)',
                      background: project.accent,
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 500,
                    }}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '9px',
                      borderRadius: 'var(--radius-sm)',
                      background: `${project.accent}18`,
                      color: project.accent,
                      fontSize: '13px',
                      fontWeight: 500,
                      border: `1px solid ${project.accent}30`,
                    }}
                  >
                    <Github size={14} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

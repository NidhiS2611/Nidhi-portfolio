import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    icon: '◈',
    items: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#7F77DD',
  },
  {
    category: 'Backend',
    icon: '◉',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL','Flask','Python','MySQL'],
    color: '#1D9E75',
  },
  {
    category: 'Tools',
    icon: '◎',
    items: ['Git', 'Docker', 'Vite', 'Docker', 'jupyter notebook','VS Code'],
    color: '#a09ae8',
  },
  {
    category: 'Languages',
    icon: '◐',
    items: ['JavaScript', 'Python', 'Java', "C++"],
    color: '#5DCAA5',
  },
   
]


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '100px 2rem',
        background: 'var(--color-bg)',
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
          <p style={{ fontSize: '13px', color: 'var(--color-secondary)', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Expertise
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: '12px', lineHeight: 1.1 }}>
            Skills & Expertise
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '16px' }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '16px',
          }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={cardAnim}
              whileHover={{ borderColor: group.color, y: -4 }}
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                transition: 'border-color 0.25s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{ fontSize: '20px', color: group.color }}>{group.icon}</span>
                <h3 style={{ fontSize: '15px', fontWeight: 500, color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {group.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-muted)' }}
                  >
                    <span style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: group.color,
                      flexShrink: 0,
                      boxShadow: `0 0 6px ${group.color}`,
                    }} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

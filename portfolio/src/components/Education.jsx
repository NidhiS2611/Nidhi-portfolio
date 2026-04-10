import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    school: 'APJ Abdul Kalam Technical University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    year: '2022 - present',
    description: 'Specialized in Full-Stack Development and Web Technologies',
    icon: GraduationCap,
    color: '#7F77DD',
  },
   {
    school: 'Government Girls Inter College',
    degree: '12(Grade)',
    field: 'Science',
    year: '2020 - 2022',
    description: 'Completed higher secondary education with a focus on science subjects, achieving top grades.',
    icon: Award,
    color: '#7F77DD',
  },
  {
    school: 'Government Girls Inter College',
    degree: '10(Grade)',
    field: 'Science',
    year: '2018 - 2020',
    description: 'Completed high school education with a focus on science subjects, achieving top grades.',
    icon: Award,
    color: '#7F77DD',
  },
]

export default function Education() {
  return (
    <section
      id="education"
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
            Background
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: '12px', lineHeight: 1.1 }}>
            Education
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '16px' }}>
            My academic background and certifications
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {education.map((edu, idx) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ borderColor: edu.color }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  padding: '24px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.25s',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: `${edu.color}18`,
                  border: `1px solid ${edu.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color={edu.color} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 500 }}>{edu.degree}</h3>
                    <span style={{
                      fontSize: '12px',
                      color: 'var(--color-hint)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--color-border)',
                      whiteSpace: 'nowrap',
                    }}>
                      {edu.year}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: edu.color, fontWeight: 500, marginBottom: '4px' }}>{edu.school}</p>
                  <p style={{ fontSize: '13px', color: 'var(--color-hint)', marginBottom: '8px' }}>{edu.field}</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>{edu.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

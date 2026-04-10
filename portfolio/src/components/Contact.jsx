import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '100px 2rem',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(127,119,221,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Get in touch
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '1.2rem',
          }}>
            Let's Work Together
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Have a project in mind? I'd love to hear from you. Get in touch and
            let's create something amazing together.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <motion.a
              href="mailto:nidhikalpana555@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(127,119,221,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                borderRadius: '999px',
                background: 'var(--color-primary)',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              <Mail size={17} />
              Send me an Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/nidhi-shakya-a132b32aa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                borderRadius: '999px',
                background: 'transparent',
                color: 'var(--color-text)',
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <Linkedin size={17} />
              Connect on LinkedIn
            </motion.a>
          </div>

          {/* Social links row */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            {[
              { icon: Github, href: 'https://github.com/NidhiS2611', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/nidhi-shakya-a132b32aa', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:nidhikalpana555@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, borderColor: 'var(--color-primary)' }}
                whileTap={{ scale: 0.95 }}
                title={label}
                style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

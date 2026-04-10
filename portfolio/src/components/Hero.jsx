import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const floatingBadges = [
  { label: 'React', x: '78%', y: '18%', delay: 0.8 },
  { label: 'Node.js', x: '82%', y: '45%', delay: 1.0 },
  { label: 'MongoDB', x: '72%', y: '68%', delay: 1.2 },
  { label: 'TypeScript', x: '60%', y: '82%', delay: 1.4 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 2rem 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #7F77DD 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #1D9E75 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(127,119,221,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(127,119,221,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: badge.delay, duration: 0.5 },
            scale: { delay: badge.delay, duration: 0.5 },
            y: { duration: 3 + Math.random(), repeat: Infinity, ease: 'easeInOut', delay: badge.delay },
          }}
          style={{
            position: 'absolute',
            left: badge.x,
            top: badge.y,
            padding: '8px 16px',
            borderRadius: '999px',
            background: 'rgba(127,119,221,0.1)',
            border: '1px solid rgba(127,119,221,0.25)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--color-primary-light)',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            display: window.innerWidth > 768 ? 'block' : 'none',
          }}
        >
          {badge.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={item} style={{ marginBottom: '16px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid rgba(29,158,117,0.3)',
              background: 'rgba(29,158,117,0.08)',
              fontSize: '13px',
              color: 'var(--color-secondary)',
              fontWeight: 500,
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--color-secondary)',
                boxShadow: '0 0 8px var(--color-secondary)',
              }} />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-1px',
              marginBottom: '1.5rem',
            }}
          >
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7F77DD 0%, #a09ae8 40%, #1D9E75 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Nidhi
            </span>
            <br />
            <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-sans)', fontSize: '0.55em', fontWeight: 300, letterSpacing: '-0.5px' }}>
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              fontSize: '17px',
              color: 'var(--color-muted)',
              maxWidth: '520px',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}
          >
            I build full-stack web applications with modern frontend and backend
            technologies. Passionate about creating beautiful user interfaces and
            robust server solutions that solve real-world problems.
          </motion.p>

          <motion.div variants={item} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(127,119,221,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 32px',
                borderRadius: '999px',
                background: 'var(--color-primary)',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 500,
                border: 'none',
                display: 'inline-block',
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 32px',
                borderRadius: '999px',
                background: 'transparent',
                color: 'var(--color-text)',
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'inline-block',
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats row */}
          
          

        </motion.div>
      </div>
    </section>
  )
}

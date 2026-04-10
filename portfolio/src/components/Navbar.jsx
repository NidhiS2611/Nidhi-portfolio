import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.04 }}
        style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', letterSpacing: '-0.5px' }}
      >
        <span style={{ color: 'var(--color-text)' }}>Nidhi</span>
        <span style={{ color: 'var(--color-primary)' }}>.</span>
      </motion.a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ color: 'var(--color-primary)' }}
            style={{
              fontSize: '14px',
              color: 'var(--color-muted)',
              fontWeight: 400,
              transition: 'color 0.2s',
            }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="mailto:nidhikalpana555@gmail.com"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          style={{
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid var(--color-primary)',
            color: 'var(--color-primary)',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--color-primary)'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--color-primary)'
          }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}

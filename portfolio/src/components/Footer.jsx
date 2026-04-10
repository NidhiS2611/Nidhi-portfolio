export default function Footer() {
  return (
    <footer style={{
      padding: '28px 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      fontSize: '13px',
      color: 'var(--color-hint)',
    }}>
      © {new Date().getFullYear()} Nidhi. All rights reserved.
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-[6px] border-b border-swel-subtle shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-300 h-full flex items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-swel-navy-mid tracking-tight">
          SWEL
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? 'text-xs font-semibold tracking-[0.6px] text-swel-navy-mid border-b-2 border-swel-navy-mid pb-1'
                    : 'text-xs font-semibold tracking-[0.6px] text-swel-muted hover:text-swel-navy transition-colors'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

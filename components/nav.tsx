'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/research' },
  { label: 'Blog', href: '/blog' },
  { label: 'Learning Platform', href: '/learning' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-[6px] border-b border-swel-subtle shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-300 h-full flex items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="16" cy="16" r="15" stroke="var(--color-swel-navy-mid)" strokeWidth="2" />
            <path
              d="M16 8 L23 12 V20 L16 24 L9 20 V12 Z"
              fill="var(--color-swel-navy-mid)"
              opacity="0.15"
            />
            <path
              d="M16 8 L23 12 V20 L16 24 L9 20 V12 Z"
              stroke="var(--color-swel-navy-mid)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold text-swel-navy-mid tracking-tight">SWEL</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? 'text-xs font-semibold tracking-[0.6px] text-swel-navy-mid border-b-2 border-swel-navy-mid pb-1 inline-block hover:scale-105 active:scale-95 transition-transform'
                    : 'text-xs font-semibold tracking-[0.6px] text-swel-muted hover:text-swel-navy transition-colors inline-block hover:scale-105 active:scale-95 transition-transform'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-2 rounded-full text-swel-body hover:bg-swel-bg-light transition-all active:scale-90"
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-swel-body active:scale-90 transition-transform"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

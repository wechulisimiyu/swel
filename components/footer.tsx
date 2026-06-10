import Link from 'next/link'

const aboutLinks = [
  { label: 'Our Team', href: '/team' },
  { label: 'Impact Map', href: '/impact' },
  { label: 'Annual Report', href: '/report' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Institutional Access', href: '/access' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-swel-divider px-10">
      <div className="mx-auto max-w-300 px-8 py-12 flex justify-between">
        {/* Left — brand */}
        <div className="flex flex-col gap-4 max-w-[371px]">
          <Link href="/" className="text-lg font-bold text-swel-navy-mid tracking-tight">
            SWEL
          </Link>

          <p className="text-label leading-5 text-swel-muted">
            © 2025 Surgical Work and Equity Lab. Focused on surgical precision and social equity. A
            multidisciplinary initiative dedicated to clinical excellence and global health justice.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-2">
            {/* Twitter/X */}
            <Link href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-swel-faint">
                <path
                  d="M17.5 2.5L11.25 9.58M2.5 2.5L8.75 9.58M2.5 17.5L8.75 10.42M17.5 17.5L11.25 10.42"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            {/* LinkedIn */}
            <Link href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true" className="text-swel-faint">
                <rect width="4" height="10" rx="1" fill="currentColor" transform="translate(0 6)" />
                <circle cx="2" cy="2" r="2" fill="currentColor" />
                <path
                  d="M7 16V9a4 4 0 018 0v7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect x="7" y="6" width="4" height="10" rx="1" fill="currentColor" />
              </svg>
            </Link>
            {/* Email */}
            <Link href="#" aria-label="Email" className="hover:opacity-70 transition-opacity">
              <svg width="18" height="20" viewBox="0 0 18 14" fill="none" aria-hidden="true" className="text-swel-faint">
                <rect
                  x="1"
                  y="1"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M1 4l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right — nav columns */}
        <div className="flex gap-16">
          {/* About column */}
          <div className="flex flex-col gap-4">
            <h5 className="text-body-sm font-bold leading-5 tracking-[0.7px] uppercase text-swel-navy-mid">
              About
            </h5>
            <ul className="flex flex-col gap-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-label leading-4 text-swel-muted hover:text-swel-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-4">
            <h5 className="text-body-sm font-bold leading-5 tracking-[0.7px] uppercase text-swel-navy-mid">
              Legal
            </h5>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-label leading-4 text-swel-muted hover:text-swel-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

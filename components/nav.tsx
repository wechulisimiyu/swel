import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-[6px] border-b border-swel-subtle shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-swel-navy-mid tracking-tight"
        >
          SWEL
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-xs font-semibold tracking-[0.6px] text-swel-navy-mid border-b-2 border-swel-navy-mid pb-1"
                  : "text-xs font-semibold tracking-[0.6px] text-swel-muted hover:text-swel-navy transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search icon */}
        <button
          aria-label="Search"
          className="flex items-center justify-center w-[34px] h-[34px] rounded-full hover:bg-swel-subtle transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="5.5" stroke="#45464D" strokeWidth="1.5" />
            <path
              d="M12.5 12.5L16 16"
              stroke="#45464D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

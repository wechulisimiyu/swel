import Link from "next/link";

export default function CTABlock() {
  return (
    <section className="px-10 py-6">
      <div
        className="relative rounded-[32px] overflow-hidden"
        style={{ background: "#2D325A" }}
      >
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "#2D325A", opacity: 0.1 }}
        />

        <div className="relative flex flex-col items-center text-center px-20 py-20 gap-6 max-w-[896px] mx-auto">
          {/* Icon placeholder */}
          <div className="flex items-center justify-center w-9 h-[43px]">
            <svg width="36" height="43" viewBox="0 0 36 43" fill="none" aria-hidden="true">
              <path
                d="M18 0L36 10.75V32.25L18 43L0 32.25V10.75L18 0Z"
                fill="white"
              />
            </svg>
          </div>

          <h2 className="text-[48px] font-bold leading-[58px] tracking-[-0.96px] text-white pt-2">
            Join Us
          </h2>

          <p className="text-[18px] leading-[32px] text-[#E0E7FF] pb-4">
            Partner with SWEL to shape the future of an equitable surgical
            workforce. Whether you are a researcher, clinician, or institution,
            your collaboration matters.
          </p>

          <Link
            href="/get-involved"
            className="relative flex items-center gap-3 px-10 py-5 rounded-xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:bg-swel-bg transition-colors"
          >
            <span className="text-[16px] font-bold leading-[26px] text-swel-navy">
              Become a Research Partner
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M3 9H15M15 9L9 3M15 9L9 15"
                stroke="#111C2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

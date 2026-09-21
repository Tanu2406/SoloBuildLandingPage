import Link from "next/link";
import BrandLogo from "./BrandLogo";

const FOOTER_LINKS = {
  Platform: [
    { label: "AI Employees", href: "/platform/ai-employees" },
    { label: "AI Agents", href: "/platform/ai-agents" },
    { label: "Voice Intelligence", href: "/platform/voice-intelligence" },
    { label: "Workflow Automation", href: "/platform/workflow-automation" },
    { label: "Integrations", href: "/platform/integrations" },
  ],
  Solutions: [
    { label: "AI for HR", href: "/solutions/ai-for-hr" },
    { label: "AI for Hiring", href: "/solutions/hiring" },
    { label: "AI for Sales", href: "/solutions/sales" },
    { label: "AI for Customer Support", href: "/solutions/customer-support" },
    { label: "AI for Operations", href: "/solutions/operations" },
    { label: "Custom AI Solutions", href: "/solutions/custom" },
  ],
  Products: [
    { label: "Hiring Intelligence", href: "/products/hiring-intelligence" },
    { label: "Voice AI", href: "/products/voice-ai" },
    { label: "Campaigns", href: "/products/campaigns" },
    { label: "Candidate Intelligence", href: "/products/candidate-intelligence" },
    { label: "Analytics", href: "/products/analytics" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Blog", href: "/resources/blog" },
    { label: "AI Resources", href: "/resources/ai-resources" },
  ],
  Company: [
    { label: "About", href: "/company/about" },
    { label: "Security", href: "/company/security" },
    { label: "Contact", href: "/company/contact" },
    { label: "Careers", href: "/company/careers" },
  ],
};

const COMPACT_LINKS = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform/ai-agents" },
  { label: "Solutions", href: "/solutions/ai-for-hr" },
  { label: "Products", href: "/products/hiring-intelligence" },
  { label: "Resources", href: "/resources/ai-resources" },
  { label: "Company", href: "/company/about" },
];

export default function Footer({ compact = false, wide = false }: { compact?: boolean; wide?: boolean }) {
  if (compact) {
    return (
      <footer className={`${wide ? "px-0" : "px-2 sm:px-3"} pb-2 sm:pb-3`}>
        <div className="rounded-2xl border border-white/12 bg-black px-5 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <Link href="/"><BrandLogo /></Link>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:mx-auto">
              {COMPACT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/legal/privacy" className="text-[13px] text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/legal/terms" className="text-[13px] text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
            </nav>

            <div className="flex items-center justify-between lg:justify-end gap-6 flex-shrink-0">
              <p className="text-[11px] text-slate-500">
                © {new Date().getFullYear()} SoloBuildAI. All rights reserved.
              </p>
              <p className="hidden md:block text-[10px] font-medium tracking-[0.18em] uppercase text-slate-500 text-right leading-relaxed">
                Same<br />people.<br />Bigger<br />outcomes.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(5,minmax(0,1fr))_auto] gap-10 mb-14">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="mb-6 flex"><BrandLogo /></Link>
            <p className="text-xs leading-relaxed text-slate-600">
              AI agents for real work.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-4 text-slate-500">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-600 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Divider + Contact Block */}
          <div className="hidden lg:flex items-start gap-8 col-span-2 md:col-span-3 lg:col-span-1">
            {/* Vertical Divider */}
            <div className="w-px h-full bg-white/10 flex-shrink-0"></div>
            
            {/* GET IN TOUCH */}
            <div className="flex-shrink-0 min-w-[200px]">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-4 text-[#0066FF]">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Email</span>
                  </div>
                  <a href="mailto:sb.solobuild@gmail.com" className="block text-xs text-slate-600 hover:text-[#0066FF] transition-colors mb-1">
                    sb.solobuild@gmail.com
                  </a>
                  <a href="mailto:contact@solobuildai.com" className="block text-xs text-slate-600 hover:text-[#0066FF] transition-colors">
                    contact@solobuildai.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Phone</span>
                  </div>
                  <a href="tel:+918700159508" className="block text-xs text-slate-600 hover:text-[#0066FF] transition-colors">
                    +91 870 015 9508
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Contact Block - Stacked Below */}
          <div className="lg:hidden col-span-2 md:col-span-3 pt-6 border-t border-white/10">
            <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-4 text-[#0066FF]">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Email</span>
                </div>
                <a href="mailto:sb.solobuild@gmail.com" className="block text-xs text-slate-600 hover:text-[#0066FF] transition-colors mb-1">
                  sb.solobuild@gmail.com
                </a>
                <a href="mailto:contact@solobuildai.com" className="block text-xs text-slate-600 hover:text-[#0066FF] transition-colors">
                  contact@solobuildai.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Phone</span>
                </div>
                <a href="tel:+918700159508" className="block text-xs text-slate-600 hover:text-[#0066FF] transition-colors">
                  +91 870 015 9508
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <p className="text-[10px] text-slate-700">
            © {new Date().getFullYear()} SoloBuildAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms", href: "/legal/terms" },
              { label: "Cookies", href: "/legal/cookies" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[10px] text-slate-700 hover:text-slate-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

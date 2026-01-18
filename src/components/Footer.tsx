import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-400 overflow-hidden">
      {/* Background Illustration - Abstract shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient circle - top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-purple-900/10 rounded-full blur-3xl" />
        {/* Medium circle - bottom left */}
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-[#5a23b1]/15 to-purple-700/10 rounded-full blur-2xl" />
        {/* Small accent circle */}
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-xl" />
        {/* Wave pattern overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 opacity-5"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-purple-400"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and About */}
          <div>
            <img src="/tawila.png" alt="Tawila" className="mb-4 h-8 w-auto" />
            <p className="mb-4 text-sm">
              The complete operating system for modern restaurants. Streamline
              operations and boost profitability.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/tawila-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/tawila_uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@tawila_uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ordering" className="hover:text-white">
                  Ordering
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-white">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/pos" className="hover:text-white">
                  POS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Subscribe to our newsletter
            </h4>
            <p className="mb-4 text-sm">
              Get the latest updates and restaurant insights.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5a23b1]"
              />
              <button className="w-full rounded-lg bg-[#5a23b1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4a1d91]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>© {new Date().getFullYear()} Tawila. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Extra whitespace section with decorative element */}
      <div className="relative h-24 lg:h-32">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>
    </footer>
  )
}

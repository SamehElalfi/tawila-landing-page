import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: 'Products', path: '/products' as const },
    { label: 'Solutions', path: '/solutions' as const },
    { label: 'Pricing', path: '/pricing' as const },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldBeTransparent = transparent && !isScrolled

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        shouldBeTransparent
          ? 'bg-white/10 backdrop-blur-md'
          : 'bg-white/80 shadow-sm backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/tawila.png" alt="Tawila" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-gray-700 transition-colors hover:text-[#5a23b1] hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <a
              href="https://control.tawila.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-[#5a23b1] bg-purple-50 px-4 py-2 text-[#5a23b1] transition-colors hover:bg-[#5a23b1] hover:text-white"
            >
              Log In
            </a>
            <a
              href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#5a23b1] px-4 py-2 text-white transition-colors hover:bg-[#4a1d91]"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/20 bg-white/80 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2 pt-4">
              <a
                href="https://control.tawila.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border-2 border-[#5a23b1] px-4 py-2 text-center text-[#5a23b1]"
              >
                Log In
              </a>
              <a
                href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-[#5a23b1] px-4 py-2 text-center text-white"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

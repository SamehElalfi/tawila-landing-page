import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Sparkles,
  PlayCircle,
  ShoppingBag,
  BarChart3,
  Package,
  Star,
  ArrowRight,
  Check,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: TawilaLandingPage,
})

/**
 * Restaurant Operating System Landing Page
 * A complete, responsive landing page for a Restaurant SaaS platform
 * Built with Tailwind CSS and Lucide icons
 */
function TawilaLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Sticky Navigation Bar */}
      <StickyNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof / Trust Bar */}
      <TrustBar />

      {/* Value Proposition (Icon Grid) */}
      <ValueProposition />

      {/* Feature Highlights (Zig-Zag Layout) */}
      <FeatureHighlights />

      {/* Success Stories / Testimonials */}
      <Testimonials />

      {/* Resources / Content Hub */}
      <ResourcesHub />

      {/* Bottom CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  )
}

/**
 * Sticky Navigation Bar Component
 * Features: Logo, centered nav links, action buttons, mobile hamburger menu
 */
function StickyNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}) {
  const navLinks = ['Products', 'Solutions', 'Resources', 'Pricing']
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="https://www.tawila.co.uk/_next/image?url=%2Ftawila.png&w=3840&q=75"
                alt="Tawila"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 transition-colors hover:text-[#5a23b1] hover:underline"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <button className="rounded-lg border-2 border-[#5a23b1] bg-purple-50 px-4 py-2 text-[#5a23b1] transition-colors hover:bg-[#5a23b1] hover:text-white">
              Log In
            </button>
            <button className="rounded-lg bg-[#5a23b1] px-4 py-2 text-white transition-colors hover:bg-[#4a1d91]">
              Book a Demo
            </button>
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
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="space-y-2 pt-4">
              <button className="w-full rounded-lg border-2 border-[#5a23b1] px-4 py-2 text-[#5a23b1]">
                Log In
              </button>
              <button className="w-full rounded-lg bg-[#5a23b1] px-4 py-2 text-white">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

/**
 * Hero Section Component
 * Two-column layout with compelling headline, CTAs, and dashboard mockup
 */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-gray-50 via-purple-50/30 to-gray-50 pt-16">
      {/* Background Image with Fade Effect */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop"
          alt="Restaurant Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-gray-50/60 to-gray-50"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-[#5a23b1]">
              <Sparkles className="h-4 w-4" />
              New: AI Inventory Management
            </div>

            {/* H1 Headline */}
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
              The All-in-One Operating System for Restaurants
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-xl text-gray-600">
              Streamline orders, cut food waste, and boost profits with one
              platform. Trusted by 10,000+ venues.
            </p>

            {/* CTA Area */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button className="rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#4a1d91] hover:shadow-xl">
                Get Started Free
              </button>
              <a
                href="#demo"
                className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#5a23b1]"
              >
                <PlayCircle className="h-6 w-6" />
                View Demo Video
              </a>
            </div>
          </div>

          {/* Right Content - Spacer for background image */}
          <div className="relative hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}

/**
 * Trust Bar Component
 * Displays trusted company logos with hover effects
 */
function TrustBar() {
  const brands = [
    'https://tawila-vault.s3.eu-north-1.amazonaws.com/01962ebb-4b46-78f6-b5e2-e554b512463e.avif',
    'https://imagedelivery.net/om7lG0lN91mifFHl_A941A/123d4f69-772e-40b6-e414-a4e5e05b7900/public',
    'https://toctive-medisync.s3.me-central-1.amazonaws.com/menu-items/01957109-dd42-7022-a36a-fd1ced0b7bb8..avif',
    'https://tawila-vault.s3.eu-north-1.amazonaws.com/01976b0d-5eb4-75fb-be6a-69b7758bb6b1.jpeg',
    'https://tawila-vault.s3.eu-north-1.amazonaws.com/01984d88-7e79-7cda-a976-d2e58aa31356.png',
  ]

  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by Leading Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex h-16 w-32 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Value Proposition Component
 * Icon grid showcasing key features
 */
function ValueProposition() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Commission-Free Ordering',
      description:
        'Keep 100% of your revenue with our direct ordering platform. No hidden fees, no commissions.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Package,
      title: 'Real-Time Inventory',
      description:
        'Track stock levels automatically, reduce waste, and never run out of key ingredients.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: BarChart3,
      title: 'Unified Analytics',
      description:
        'All your data in one place. Make informed decisions with powerful insights and reports.',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Everything you need to run a modern restaurant
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From ordering to inventory management, analytics to staff
            scheduling—we've got you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${feature.color}`}
                >
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * Feature Highlights Component
 * Alternating zig-zag layout showcasing detailed features
 */
function FeatureHighlights() {
  const features = [
    {
      title: 'Direct Ordering & Delivery',
      bullets: [
        'Commission-free mobile app',
        'Sync with UberEats/DoorDash',
        'Automated dispatch',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      imageLeft: false,
    },
    {
      title: 'Smart Inventory & Food Costing',
      bullets: [
        'Track stock in real-time',
        'Automated supplier orders',
        'Recipe costing & menu engineering',
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      imageLeft: true,
    },
    {
      title: 'Actionable Insights',
      bullets: [
        'Sales dashboards',
        'Staff performance tracking',
        'Profit/Loss reports',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      imageLeft: false,
    },
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                feature.imageLeft ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={feature.imageLeft ? 'lg:col-start-2' : ''}>
                <h3 className="mb-6 text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#5a23b1]" />
                      <span className="text-lg text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={feature.imageLeft ? 'lg:col-start-1' : ''}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Testimonials Component
 * Grid of customer success stories with ratings and metrics
 */
function Testimonials() {
  const testimonials = [
    {
      quote: 'This platform saved us 15 hours a week on admin.',
      name: 'Sarah Johnson',
      restaurant: 'The Green Bistro',
      avatar: 'https://i.pravatar.cc/150?img=1',
      metric: '⬇ 12% Food Cost',
    },
    {
      quote:
        'Our online orders tripled in the first month. Best investment ever.',
      name: 'Michael Chen',
      restaurant: 'Dragon Wok',
      avatar: 'https://i.pravatar.cc/150?img=2',
      metric: '⬆ 200% Online Orders',
    },
    {
      quote: 'The analytics helped us identify our most profitable dishes.',
      name: 'Emma Rodriguez',
      restaurant: 'La Cocina',
      avatar: 'https://i.pravatar.cc/150?img=3',
      metric: '⬆ 28% Profit Margin',
    },
  ]

  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Loved by restaurant owners
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg bg-white p-8 shadow-sm"
            >
              {/* Star Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-lg text-gray-700">
                "{testimonial.quote}"
              </p>

              {/* User Profile */}
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.restaurant}
                  </p>
                </div>
              </div>

              {/* Metric Highlight */}
              <div className="rounded-lg bg-green-50 px-4 py-2 text-center">
                <p className="font-bold text-green-700">
                  {testimonial.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Resources Hub Component
 * Grid of blog posts and guides
 */
function ResourcesHub() {
  const resources = [
    {
      tag: 'Guide',
      title: 'How to Optimize Your Menu for Profit',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    },
    {
      tag: 'Article',
      title: '10 Ways to Reduce Food Waste in Your Kitchen',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
    },
    {
      tag: 'Case Study',
      title: 'How Bella Italia Increased Revenue by 40%',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Latest Resources
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Learn from industry experts and discover best practices for running
            a successful restaurant.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg"
            >
              {/* Cover Image */}
              <img
                src={resource.image}
                alt={resource.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#5a23b1]">
                  {resource.tag}
                </span>
                <h3 className="mb-4 mt-3 text-xl font-bold text-gray-900">
                  {resource.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium text-[#5a23b1] hover:underline"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * CTA Banner Component
 * High-impact call to action with dark background
 */
function CTABanner() {
  return (
    <section className="bg-linear-to-r from-[#5a23b1] to-[#7c3aed] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
          Ready to grow your restaurant empire?
        </h2>
        <p className="mb-8 text-xl text-purple-100">
          Join 3,000+ restaurateurs today. No credit card required.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#5a23b1] shadow-lg transition-transform hover:scale-105 sm:w-auto">
            Get a Demo
          </button>
          <button className="w-full rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#5a23b1] sm:w-auto">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  )
}

/**
 * Footer Component
 * Comprehensive footer with links, newsletter signup, and social media
 */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and About */}
          <div>
            <img
              src="https://www.tawila.co.uk/_next/image?url=%2Ftawila.png&w=3840&q=75"
              alt="Tawila"
              className="mb-4 h-8 w-auto"
            />
            <p className="mb-4 text-sm">
              The complete operating system for modern restaurants. Streamline
              operations and boost profitability.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Ordering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  POS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partners
                </a>
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
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5a23b1]"
              />
              <button className="rounded-lg bg-[#5a23b1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4a1d91]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>© 2024 Tawila. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

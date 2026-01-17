import { motion } from 'framer-motion'
import { slideInFromBottom } from '../../utils/animations'

export function CTABanner() {
  return (
    <section className="bg-linear-to-br from-purple-600 to-purple-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...slideInFromBottom}
          className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Ready to keep 100% of your revenue?
          </h2>
          <p className="mb-8 text-xl text-purple-100">
            Join restaurant owners who chose 0% commission. No credit card
            required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-white px-8 py-4 text-center text-lg font-semibold text-[#5a23b1] shadow-lg transition-transform hover:scale-105 sm:w-auto"
            >
              Get a Demo
            </a>
            <a
              href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border-2 border-white px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#5a23b1] sm:w-auto"
            >
              Talk to Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

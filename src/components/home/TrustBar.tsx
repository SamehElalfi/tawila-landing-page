import { motion } from 'framer-motion'
import { trustBarBrands } from '../../data/homepage'
import { fadeInUp } from '../../utils/animations'

export function TrustBar() {
  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500"
        >
          Trusted by Leading Brands
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustBarBrands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-16 w-32 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-full w-full overflow-hidden rounded-2xl object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

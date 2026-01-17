import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInLeft, fadeInRight, fadeInUp } from '../../utils/animations'

export function SavingsCalculator() {
  const [ordersPerMonth, setOrdersPerMonth] = useState(440)
  const [averageOrderValue, setAverageOrderValue] = useState(20)
  const [commissionRate, setCommissionRate] = useState(20)

  const monthlySavings =
    (ordersPerMonth * averageOrderValue * commissionRate) / 100
  const annualSavings = monthlySavings * 12

  return (
    <section className="bg-linear-to-br from-purple-600 to-purple-800 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Save on Aggregator Commissions
          </h2>
          <p className="mb-12 text-xl text-purple-100">
            Calculate how much you could save by switching to Tawila
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calculator Inputs */}
          <motion.div
            {...fadeInLeft}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Calculate Savings
            </h3>

            <div className="space-y-8">
              {/* Orders Per Month */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Orders per month
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={ordersPerMonth}
                      onChange={(e) =>
                        setOrdersPerMonth(Number(e.target.value))
                      }
                      className="w-20 rounded-lg border border-gray-300 px-3 py-1.5 text-right text-sm font-semibold text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                    <span className="text-sm font-medium text-gray-500">
                      orders
                    </span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={ordersPerMonth}
                    onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
                    className="range-slider"
                    style={{
                      background: `linear-gradient(to right, #5a23b1 0%, #5a23b1 ${((ordersPerMonth - 50) / (1000 - 50)) * 100}%, #e5e7eb ${((ordersPerMonth - 50) / (1000 - 50)) * 100}%, #e5e7eb 100%)`,
                    }}
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>50</span>
                    <span>1,000</span>
                  </div>
                </div>
              </div>

              {/* Average Order Value */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Average Order Value
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">£</span>
                    <input
                      type="number"
                      value={averageOrderValue}
                      onChange={(e) =>
                        setAverageOrderValue(Number(e.target.value))
                      }
                      className="w-20 rounded-lg border border-gray-300 px-3 py-1.5 text-right text-sm font-semibold text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                    <span className="text-sm font-medium text-gray-500">
                      per order
                    </span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={averageOrderValue}
                    onChange={(e) =>
                      setAverageOrderValue(Number(e.target.value))
                    }
                    className="range-slider"
                    style={{
                      background: `linear-gradient(to right, #5a23b1 0%, #5a23b1 ${((averageOrderValue - 5) / (100 - 5)) * 100}%, #e5e7eb ${((averageOrderValue - 5) / (100 - 5)) * 100}%, #e5e7eb 100%)`,
                    }}
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>£5</span>
                    <span>£100</span>
                  </div>
                </div>
              </div>

              {/* Commission Rate */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Aggregator Commission Rate
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={commissionRate}
                      onChange={(e) =>
                        setCommissionRate(Number(e.target.value))
                      }
                      className="w-20 rounded-lg border border-gray-300 px-3 py-1.5 text-right text-sm font-semibold text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                    <span className="text-sm font-medium text-gray-500">%</span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="10"
                    max="35"
                    step="1"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="range-slider"
                    style={{
                      background: `linear-gradient(to right, #5a23b1 0%, #5a23b1 ${((commissionRate - 10) / (35 - 10)) * 100}%, #e5e7eb ${((commissionRate - 10) / (35 - 10)) * 100}%, #e5e7eb 100%)`,
                    }}
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>10%</span>
                    <span>35%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            {...fadeInRight}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="mb-8 text-2xl font-bold text-white">
                Your Potential Savings
              </h3>

              <div className="space-y-6">
                {/* Monthly Savings */}
                <div className="rounded-xl bg-white/20 p-6">
                  <p className="mb-2 text-sm text-purple-100">Saved Monthly</p>
                  <p className="text-4xl font-bold text-white">
                    £
                    {monthlySavings.toLocaleString('en-GB', {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>

                {/* Annual Savings */}
                <div className="rounded-xl bg-white p-6">
                  <p className="mb-2 text-sm text-gray-600">Saved Annually</p>
                  <p className="text-5xl font-bold text-[#5a23b1]">
                    £
                    {annualSavings.toLocaleString('en-GB', {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfFbO3qsAFcuD0pApU3Vlth8L_ZnvJnEiIdl4U_wEyd_7p-iQ/viewform?usp=preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-white px-6 py-4 text-center text-lg font-semibold text-[#5a23b1] shadow-lg transition-transform hover:scale-105"
                  >
                    Start Saving Today
                  </a>
                  <p className="mt-3 text-center text-sm text-purple-100">
                    No credit card required • Free setup
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid gap-4 text-center text-white sm:grid-cols-3"
        >
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <p className="mb-1 text-3xl font-bold">0%</p>
            <p className="text-purple-100">Commission Fees</p>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <p className="mb-1 text-3xl font-bold">100%</p>
            <p className="text-purple-100">Revenue Retained</p>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <p className="mb-1 text-3xl font-bold">48h</p>
            <p className="text-purple-100">Setup Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

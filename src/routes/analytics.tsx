import { createFileRoute } from '@tanstack/react-router'
import { ProductPageLayout } from '../components/shared/ProductPageLayout'
import { analyticsPageData } from '../data/analytics'

export const Route = createFileRoute('/analytics')({
  component: AnalyticsPage,
})

function AnalyticsPage() {
  return <ProductPageLayout data={analyticsPageData} />
}

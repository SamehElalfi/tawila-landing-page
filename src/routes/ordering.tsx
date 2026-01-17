import { createFileRoute } from '@tanstack/react-router'
import { ProductPageLayout } from '../components/shared/ProductPageLayout'
import { orderingPageData } from '../data/ordering'

export const Route = createFileRoute('/ordering')({
  component: OrderingPage,
})

function OrderingPage() {
  return <ProductPageLayout data={orderingPageData} />
}

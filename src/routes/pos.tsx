import { createFileRoute } from '@tanstack/react-router'
import { ProductPageLayout } from '../components/shared/ProductPageLayout'
import { posPageData } from '../data/pos'

export const Route = createFileRoute('/pos')({
  component: POSPage,
})

function POSPage() {
  return <ProductPageLayout data={posPageData} />
}

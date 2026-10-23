import React from 'react'
import DefaultLayout from '@/layout/DefaultLayout'
import StockSummaryFilters from './com/StockSummaryFilters'
import GreetingBanner from './com/GreetingBanner'
import MonthlyStockMovement from './com/MonthlyStockMovement'
import StockOverview from './com/StockOverview'
import ProductStock from './com/ProductStock'

function StockSummary() {
  return (
    <DefaultLayout>
      <div className='mx-auto w-full max-w-6xl space-y-5'>
      <StockSummaryFilters />
      <GreetingBanner />      
      <StockOverview />
      <MonthlyStockMovement />
      <ProductStock />
      </div>
    </DefaultLayout>
  )
}

export default StockSummary
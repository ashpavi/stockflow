import React from 'react'
import DefaultLayout from '@/layout/DefaultLayout'
import StockRequestTable from './com/StockRequestTable'
import { pendingStockRequests } from '@/data/mock/stock-request'

function StockRequests() {
  return (
    <DefaultLayout>
      <div className='mx-auto w-full max-w-6xl space-y-5'>
        <div>
          <h1 className="text-lg font-semibold">
            Stock Requests
          </h1>
          <p className='mt-1 text-sm text-muted-foreground'>
            {pendingStockRequests.length} Pending request awaiting decision
          </p>
        </div>
        <StockRequestTable />
      </div>
    </DefaultLayout>
  )
}

export default StockRequests
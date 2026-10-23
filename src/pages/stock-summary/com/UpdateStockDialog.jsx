import React from 'react'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { stockUpdateProductOptions, stockUpdateWarehouseOptions } from '@/data/mock/stock-summary'

const initialform = {
  warehouse: stockUpdateWarehouseOptions[0].value,
  product: stockUpdateProductOptions[0].value,
  quantity: "",
  reference: "",
}

function UpdateStockDialog() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(initialform)
}

function resetForm() {
  setForm(initialform)
}

function handleOpenChange(nextOpen) {
  setOpen(nextOpen)
  if (!nextOpen) {
    resetForm()
  }
}

function handleChange(event) {
  const { name, value } = event.target

  setForm((currentForm) => ({
    ...currentForm,
    [name]: value,
  }))
}

function handleSubmit(event) {
  event.preventDefault()
  setOpen(false)
  resetForm()
}


return (
  <Dialog open={open} onOpenChange={handleOpenChange}>
    <DialogTrigger
      render={
        <Button className='bg-[#f25527] text-white hover:bg-[#dd4617]'></Button>
        }
    >
      <Plus className='size-4'/>
      Update Stock
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Stock</DialogTitle>
        <DialogDescription className='sr-only'>
          Record stock recieved for a warehouse and product.
        </DialogDescription>
      </DialogHeader>
      <form className='grid gap-3' onSubmit={handleSubmit}>
        <div className='grid gap-1.5'>
          <Label htmlFor='stock-warehouse'>Warehouse</Label>
          <Select
          value={form.warehouse}
          onValueChange={(value)=>
            setForm((currentForm) =>({
              ...currentForm,
              warehouse:value,
            }))
          }
          >
            
            
          </Select>
        </div>
      </form>
    </DialogContent>
  </Dialog>
)


export default UpdateStockDialog
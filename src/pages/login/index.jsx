import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { BarChart3 } from "lucide-react"
import AuthLayout from '../../layout/AuthLayout'
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(event){
    alert(JSON.stringify(form))
  }

  function handleChange(event) {
    const { name, value } = event.target

    setForm((currentForm)=>({
      ...currentForm,
      [name]: value
    }))
  }

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <button
            onClick={() =>
              navigate('/')
            }
            className='flex items-center gap-3 h-16 pb-3 justify-center cursor-pointer'>
            <div className='flex items-center justify-center rounded-md flex-row bg-[#e85d31] text-white size-8  shadow-2xl'>
              <BarChart3 className='size-5 stroke-[2.25]' />
            </div>
            <div className='leading-tight'>
              <p className='text-md font-semibold text-foreground'>Stockflow</p>
              <p className='text-[11px] text-muted-foreground'>Distribution System</p>
            </div>
          </button>
          <CardTitle className="font-semibold text-2xl">Login</CardTitle>
          <CardDescription>Enter your email and password to log in</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                id="password" 
                name="password" 
                type="password" 
                required
                onChange={handleChange}
                 />
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 mt-7">
              Login
            </Button>
          </form>
        </CardContent>

      </Card>
    </AuthLayout>
  )
}

export default Login
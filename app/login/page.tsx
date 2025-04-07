"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="container py-10 max-w-md">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-brand-600 text-white p-1 rounded">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-brand-600">StudyShare</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-muted-foreground text-center">
          Log in to access your study materials and connect with other students.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-xs text-brand-600 hover:text-brand-700">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full bg-brand-600 hover:bg-brand-700 mb-4">Log In</Button>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-brand-600 hover:text-brand-700 font-medium">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from "lucide-react"
import authService from "../../src/appwrite/auth"
import { Checkbox } from "@/components/ui/checkbox"
import conf from "../../src/conf/conf"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const router = useRouter()

  const handleNextStep = () => {
    if (step === 1) {
      // Basic validation for step 1
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill all required fields")
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords don't match")
        return
      }
    }
    setStep(step + 1)
    setError("")
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    setError("")
  }

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError("")
    
    try {
      setLoading(true)
      // Create account with Appwrite
      const userData = await authService.createAccount({
        email: formData.email,
        password: formData.password,
        name: `${formData.firstName} ${formData.lastName}`
      })
      
      if (userData) {
        // Redirect to home page after successful signup
        router.push("/")
      }
    } catch (error) {
      setError((error instanceof Error ? error.message : "Signup failed. Please try again."))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-10 max-w-md">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-orange-500 text-white p-1 rounded">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-orange-600">StudyShare</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
        <p className="text-muted-foreground text-center">
          Join our community of students sharing knowledge and resources.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                1
              </div>
              <div className={`h-0.5 flex-1 ${step >= 2 ? "bg-orange-500" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                2
              </div>
              <div className={`h-0.5 flex-1 ${step >= 3 ? "bg-orange-500" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                3
              </div>
            </div>
            <CardTitle>
              {step === 1 && "Account Information"}
              {step === 2 && "Academic Profile"}
              {step === 3 && "Preferences"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Enter your basic account details"}
              {step === 2 && "Tell us about your academic background"}
              {step === 3 && "Set your preferences for the platform"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div className="text-center py-8">
                <p>Academic profile step (to be implemented)</p>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <p>Preferences step (to be implemented)</p>
                <div className="flex items-start space-x-2 pt-4 justify-center">
                  <Checkbox 
                    id="terms" 
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="font-normal text-sm">
                      I agree to the terms and conditions
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" type="button" onClick={handlePrevStep}>
                Back
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link href="/">Cancel</Link>
              </Button>
            )}

            {step < 3 ? (
              <Button 
                type="button" 
                className="bg-orange-500 hover:bg-orange-600" 
                onClick={handleNextStep}
              >
                Continue
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-600 hover:text-orange-700 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
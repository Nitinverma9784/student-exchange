"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen } from "lucide-react"

export default function SignupPage() {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
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
          {step === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="institution">Educational Institution</Label>
                <Input id="institution" placeholder="University of Example" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="degree">Degree Program</Label>
                <Select>
                  <SelectTrigger id="degree">
                    <SelectValue placeholder="Select your degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="field">Field of Study</Label>
                <Select>
                  <SelectTrigger id="field">
                    <SelectValue placeholder="Select your field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="law">Law</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                    <SelectItem value="5+">5+ Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a bit about yourself and your academic interests"
                  className="min-h-[100px]"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-2">
                <Label>Interested Subjects</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-cs" />
                    <Label htmlFor="subject-cs" className="font-normal">
                      Computer Science
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-eng" />
                    <Label htmlFor="subject-eng" className="font-normal">
                      Engineering
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-math" />
                    <Label htmlFor="subject-math" className="font-normal">
                      Mathematics
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-physics" />
                    <Label htmlFor="subject-physics" className="font-normal">
                      Physics
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-chem" />
                    <Label htmlFor="subject-chem" className="font-normal">
                      Chemistry
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-bio" />
                    <Label htmlFor="subject-bio" className="font-normal">
                      Biology
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-business" />
                    <Label htmlFor="subject-business" className="font-normal">
                      Business
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subject-law" />
                    <Label htmlFor="subject-law" className="font-normal">
                      Law
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Notification Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-materials" defaultChecked />
                    <Label htmlFor="notify-materials" className="font-normal">
                      New materials in my subjects
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-comments" defaultChecked />
                    <Label htmlFor="notify-comments" className="font-normal">
                      Comments on my materials
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-messages" defaultChecked />
                    <Label htmlFor="notify-messages" className="font-normal">
                      Direct messages
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-updates" />
                    <Label htmlFor="notify-updates" className="font-normal">
                      Platform updates and news
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Privacy Settings</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy-profile" defaultChecked />
                    <Label htmlFor="privacy-profile" className="font-normal">
                      Make my profile visible to other users
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy-materials" defaultChecked />
                    <Label htmlFor="privacy-materials" className="font-normal">
                      Show my name on materials I upload
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-4">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="font-normal text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-orange-600 hover:text-orange-700">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-orange-600 hover:text-orange-700">
                      privacy policy
                    </Link>
                  </Label>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/">Cancel</Link>
            </Button>
          )}

          {step < 3 ? (
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleNextStep}>
              Continue
            </Button>
          ) : (
            <Button className="bg-orange-500 hover:bg-orange-600">Create Account</Button>
          )}
        </CardFooter>
      </Card>

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


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Star, Shield, Award, BookMarked } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                About StudyShare
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Our mission is to make education more accessible and collaborative for students worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-orange-600">Our Story</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                StudyShare was founded in 2023 by a group of university students who were frustrated with the high cost
                and limited accessibility of educational resources.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                We recognized that students often create excellent study materials that could benefit their peers, but
                there was no efficient platform to facilitate this exchange. That's when the idea for StudyShare was
                born.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Today, StudyShare connects thousands of students across hundreds of universities, enabling them to share
                knowledge, reduce costs, and improve their academic performance through collaboration.
              </p>
            </div>
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students collaborating"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">Our Mission</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We're on a mission to transform how students access and share educational resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-3 mb-4">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessible Education</h3>
              <p className="text-muted-foreground">
                Make quality educational resources available to all students regardless of financial constraints.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-3 mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
              <p className="text-muted-foreground">
                Foster a community where students can learn from each other and build on shared knowledge.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-3 mb-4">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Resources</h3>
              <p className="text-muted-foreground">
                Ensure all shared materials meet high standards through peer reviews and ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">How StudyShare Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Our platform makes it easy to find, share, and collaborate on educational resources.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-orange-200 hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-muted-foreground">
                Sign up with your email and complete your student profile with your academic interests.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-orange-200 hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Browse Materials</h3>
              <p className="text-muted-foreground">
                Search for study materials by subject, course, or keywords to find what you need.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-orange-200 hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Knowledge</h3>
              <p className="text-muted-foreground">
                Upload your notes, study guides, or other educational resources to help fellow students.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Recognition</h3>
              <p className="text-muted-foreground">
                Get points, badges, and climb the leaderboard as others benefit from your contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">Our Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              The principles that guide everything we do at StudyShare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-2 mt-1">
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Academic Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold the highest standards of academic integrity. Our platform prohibits sharing of copyrighted
                  materials without permission and any content that violates academic policies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-2 mt-1">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community. Our platform is designed to foster collaboration, mutual
                  respect, and support among students.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-2 mt-1">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Over Quantity</h3>
                <p className="text-muted-foreground">
                  We prioritize the quality of educational resources over quantity. Our review system ensures that only
                  the most helpful and accurate materials rise to the top.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="rounded-full bg-orange-100 p-2 mt-1">
                <BookMarked className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lifelong Learning</h3>
                <p className="text-muted-foreground">
                  We're committed to supporting students throughout their educational journey, from undergraduate
                  studies to advanced degrees and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community Today</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Be part of a growing network of students sharing knowledge and helping each other succeed.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/browse">Browse Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


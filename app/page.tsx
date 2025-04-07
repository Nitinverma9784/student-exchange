import { AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFB300]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Unlock Your Academic Potential
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                with Student Material Exchange and Collaboration Platform
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                <Link href="/browse">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-brand-600 border-white hover:bg-white/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-6 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Trusted by students from</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">Harvard</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">Stanford</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">MIT</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">Oxford</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">Cambridge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-600">Benefits</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Why students love our platform for sharing and discovering study materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-100 text-brand-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold">Flexible Resource Sharing</h3>
              </div>
              <p className="text-muted-foreground flex-1">
                Share and access a wide variety of study materials including notes, textbooks, and study guides.
              </p>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/browse"
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  Browse Materials <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-100 text-brand-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold">Expert Verification</h3>
              </div>
              <p className="text-muted-foreground flex-1">
                All materials are reviewed and rated by peers to ensure accuracy and quality of content.
              </p>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/about"
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-100 text-brand-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-xl font-bold">Diverse Course Offerings</h3>
              </div>
              <p className="text-muted-foreground flex-1">
                Find materials for virtually any subject, from computer science to medicine and humanities.
              </p>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/browse"
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  Explore Subjects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-100 text-brand-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-xl font-bold">Updated Curriculum</h3>
              </div>
              <p className="text-muted-foreground flex-1">
                Access the most recent study materials that align with current course curricula and requirements.
              </p>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/about"
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-100 text-brand-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  05
                </div>
                <h3 className="text-xl font-bold">Practical Projects and Examples</h3>
              </div>
              <p className="text-muted-foreground flex-1">
                Find real-world examples, projects, and case studies to enhance your understanding of concepts.
              </p>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/browse"
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  View Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-100 text-brand-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  06
                </div>
                <h3 className="text-xl font-bold">Interactive Learning Environment</h3>
              </div>
              <p className="text-muted-foreground flex-1">
                Connect with peers, ask questions, and collaborate on study materials to enhance learning.
              </p>
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/signup"
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  Join Community <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Materials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-brand-600">Popular Materials</h2>
              <p className="text-gray-500 md:text-xl/relaxed mt-2">Most downloaded and highly-rated study resources</p>
            </div>
            <Link
              href="/browse"
              className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center mt-4 md:mt-0"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Material Card 1 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="aspect-video relative bg-gray-100">
                <Image
                  src="https://5.imimg.com/data5/SELLER/PDFImage/2024/6/425549527/DG/KC/XR/9872455/multilingual-seo-services-500x500.png"
                  alt="Computer Science notes"
                  width={400}
                  height={200}
                  className="object-center w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium bg-brand-100 text-brand-600 px-2 py-1 rounded-full">
                    Computer Science
                  </span>
                  <span className="text-xs text-muted-foreground">By Prof. Anderson</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Web Design Fundamentals</h3>
                <p className="text-muted-foreground mb-4">
                  Complete guide to HTML, CSS, and responsive design principles for beginners.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-xs text-muted-foreground">(128 reviews)</span>
                  </div>
                  <a
  href="https://drive.google.com/file/d/1JDS740pjwsxURrEXxvD5RxBUpO-cLnzN/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="sm" className="bg-brand-500 hover:bg-brand-600 text-white">
    View
  </Button>
</a>

                </div>
              </div>
            </div>

            {/* Material Card 2 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="aspect-video relative bg-gray-100">
                <Image
                  src="https://media.istockphoto.com/id/1346294889/photo/web-designing.jpg?s=1024x1024&w=is&k=20&c=4PQc-vgT6h8sQDYKUXB0uKWbseuQkDSqAvxm_zsEitM="
                  alt="UX/UI Design"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium bg-brand-100 text-brand-600 px-2 py-1 rounded-full">Design</span>
                  <span className="text-xs text-muted-foreground">By Sarah K.</span>
                </div>
                <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guide to user experience and interface design principles.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-xs text-muted-foreground">(96 reviews)</span>
                  </div>
                  <a
  href="https://drive.google.com/file/d/1JJUPSq8XvNEUDnAqm-f0cFBYVz0_hYMa/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="sm" className="bg-brand-500 hover:bg-brand-600 text-white">
    View
  </Button>
</a>
                </div>
              </div>
            </div>

            {/* Material Card 3 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="aspect-video relative bg-gray-100">
                <Image
                  src="https://media.istockphoto.com/id/1195696110/photo/hands-using-mobile-payments-digital-marketing-banking-network-online-shopping-and-icon.jpg?s=1024x1024&w=is&k=20&c=9FxKYaY4DQXZ9H0oLNlF5BesY0ga0y5FmfbN4kg3jjw="
                  alt="Mobile App Development"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium bg-brand-100 text-brand-600 px-2 py-1 rounded-full">
                    Development
                  </span>
                  <span className="text-xs text-muted-foreground">B.Deepthi Reddy</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
                <p className="text-muted-foreground mb-4">
                  Learn to build cross-platform mobile applications using React Native.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-xs text-muted-foreground">(84 reviews)</span>
                  </div>
                  <a
  href="https://drive.google.com/file/d/1Jce0y3eH2OSgcZm_Iwoph0hgEqno-2Oa/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="sm" className="bg-brand-500 hover:bg-brand-600 text-white">
    View
  </Button>
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-600">
              Our Testimonials
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Hear what students have to say about their experience with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Jessica D.</p>
                    <p className="text-sm text-muted-foreground">Medical Student</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "StudyShare has been a lifesaver during my medical studies. I found comprehensive anatomy notes that
                  helped me ace my exams. The quality of materials is outstanding!"
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>RJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Robert J.</p>
                    <p className="text-sm text-muted-foreground">Computer Science Student</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The algorithm study guides I found on StudyShare were incredibly detailed and well-explained. I've
                  also uploaded my own notes and received great feedback from other students."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-[#FFB300] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Sharing and Learning?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of students already using StudyShare to exchange knowledge and excel in their studies.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-brand-600 border-white hover:bg-white/10">
                <Link href="/browse">Browse Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


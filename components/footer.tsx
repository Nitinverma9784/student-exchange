import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-brand-600">
            <div className="bg-brand-600 text-white p-1 rounded">
              <BookOpen className="h-5 w-5" />
            </div>
            StudyShare
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Connecting students through knowledge sharing.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-sm font-medium">Platform</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              <Link href="/browse" className="text-sm text-muted-foreground hover:text-foreground">
                Browse
              </Link>
              <Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground">
                Leaderboard
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-sm font-medium">Contact</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">
                Support
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} StudyShare. All rights reserved.
      </div>
    </footer>
  )
}


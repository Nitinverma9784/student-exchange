"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, BookOpen } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be determined by your auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-brand-600 text-white p-1 rounded">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-brand-600">StudyShare</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/browse" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Browse
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Leaderboard
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-brand-600 transition-colors">
            About
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">User</p>
                    <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile/upload" className="w-full">
                    Upload Material
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile/materials" className="w-full">
                    My Materials
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile/messages" className="w-full">
                    Messages
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className="w-full text-left" onClick={() => setIsLoggedIn(false)}>
                    Log out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 py-4">
            <Link href="/browse" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Browse
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Leaderboard
            </Link>
            <Link href="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                  <Link href="/profile/upload" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    Upload Material
                  </Link>
                  <Link href="/profile/materials" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    My Materials
                  </Link>
                  <Link href="/profile/messages" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                    Messages
                  </Link>
                  <button
                    className="text-sm font-medium text-left"
                    onClick={() => {
                      setIsLoggedIn(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/login">Log in</Link>
                  </Button>
                  <Button
                    className="bg-brand-600 hover:bg-brand-700 text-white"
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/signup">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}


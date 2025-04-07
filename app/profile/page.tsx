"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, FileText, MessageSquare, Star, Trophy, Upload, Download, PenSquare } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  // Mock user data - in a real app this would come from your auth/database
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "/placeholder.svg",
    institution: "University of Example",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    year: "3rd Year",
    bio: "Computer Science student passionate about web development and AI. I love sharing my notes and helping fellow students.",
    points: 750,
    nextLevel: 1000,
    materialsShared: 12,
    materialsDownloaded: 47,
    averageRating: 4.8,
    badges: [
      { name: "Top Contributor", icon: <Upload className="h-6 w-6 text-orange-600" /> },
      { name: "Highly Rated", icon: <Star className="h-6 w-6 text-orange-600" /> },
      { name: "Helpful", icon: <MessageSquare className="h-6 w-6 text-orange-600" /> },
    ],
  }

  return (
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center">{user.name}</CardTitle>
                <CardDescription className="text-center">{user.field} Student</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">Contribution Points</span>
                  </div>
                  <span className="font-bold text-orange-600">{user.points}</span>
                </div>
                <Progress value={(user.points / user.nextLevel) * 100} className="h-2" />
                <div className="text-xs text-muted-foreground text-center">
                  {user.nextLevel - user.points} points until next level
                </div>

                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Materials Shared</span>
                    </div>
                    <span className="font-medium">{user.materialsShared}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Materials Downloaded</span>
                    </div>
                    <span className="font-medium">{user.materialsDownloaded}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Average Rating</span>
                    </div>
                    <span className="font-medium">{user.averageRating}/5</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Badges</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-2">
              {user.badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <span className="text-xs text-center">{badge.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Institution</p>
                <p className="text-sm text-muted-foreground">{user.institution}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Degree</p>
                <p className="text-sm text-muted-foreground">{user.degree}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Year</p>
                <p className="text-sm text-muted-foreground">{user.year}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Bio</p>
                <p className="text-sm text-muted-foreground">{user.bio}</p>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="/profile/edit">
              <PenSquare className="h-4 w-4 mr-2" />
              Edit Profile
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <div>
          <Tabs defaultValue="materials">
            <TabsList className="mb-6">
              <TabsTrigger value="materials">My Materials</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="materials">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">My Shared Materials</h2>
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="/profile/upload">
                      <Upload className="h-4 w-4 mr-2" />
                      Share New Material
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {/* Material Card */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-orange-100 p-3">
                          <FileText className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">Data Structures and Algorithms Notes</h3>
                              <p className="text-sm text-muted-foreground">Uploaded 2 months ago</p>
                            </div>
                            <Badge className="bg-orange-500">Notes</Badge>
                          </div>
                          <p className="text-sm">
                            Comprehensive notes covering sorting algorithms, trees, graphs, and dynamic programming.
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Download className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">128 downloads</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm text-muted-foreground">4.9/5 (23 reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Material Card */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-orange-100 p-3">
                          <BookOpen className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">Introduction to Machine Learning</h3>
                              <p className="text-sm text-muted-foreground">Uploaded 5 months ago</p>
                            </div>
                            <Badge variant="secondary">Textbook</Badge>
                          </div>
                          <p className="text-sm">
                            Open-source textbook covering the basics of machine learning, neural networks, and data
                            analysis.
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Download className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">256 downloads</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm text-muted-foreground">4.7/5 (42 reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="downloads">
              <div className="space-y-6">
                <h2 className="text-xl font-bold">My Downloads</h2>
                <div className="grid gap-4">
                  {/* Downloaded Material Card */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-orange-100 p-3">
                          <FileText className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">Calculus II Final Exam Study Guide</h3>
                              <p className="text-sm text-muted-foreground">Downloaded 1 week ago</p>
                            </div>
                            <Badge>Study Guide</Badge>
                          </div>
                          <p className="text-sm">
                            Comprehensive study guide with practice problems and solutions for Calculus II.
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">Leave a review</span>
                            </div>
                            <Button size="sm" variant="outline">
                              Download Again
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Reviews I've Received</h2>
                <div className="grid gap-4">
                  {/* Review Card */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg" alt="@username" />
                              <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Michael K.</p>
                              <p className="text-xs text-muted-foreground">2 weeks ago</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-500" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm">
                            These notes saved my life during finals! So well organized and easy to understand. Thank
                            you!
                          </p>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground">
                            Review for:{" "}
                            <span className="font-medium text-foreground">Data Structures and Algorithms Notes</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}


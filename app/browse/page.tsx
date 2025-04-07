import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, BookOpen, FileText, Video, Download } from "lucide-react"

export default function BrowsePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6 text-brand-600">Browse Materials</h1>

      {/* Search and Filter Section */}
      <div className="grid gap-6 md:grid-cols-[1fr_250px] mb-8">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for textbooks, notes, study guides..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Computer Science
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Engineering
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Business
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Medicine
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Arts
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Law
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Mathematics
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Physics
            </Badge>
          </div>
        </div>
        <div className="space-y-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Material Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="textbooks">Textbooks</SelectItem>
              <SelectItem value="notes">Notes</SelectItem>
              <SelectItem value="guides">Study Guides</SelectItem>
              <SelectItem value="videos">Video Tutorials</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Materials Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="guides">Study Guides</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Textbook Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-brand-600" />
                <Badge className="bg-brand-500 hover:bg-brand-600">Textbook</Badge>
              </div>
              <CardTitle className="text-lg">Introduction to Computer Science</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Comprehensive textbook covering the fundamentals of computer science, algorithms, and programming.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Computer Science</Badge>
                  <Badge variant="outline">Programming</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Uploaded by <span className="font-medium text-foreground">Alex J.</span>
              </div>
              <a href="https://drive.google.com/file/d/1oibMwgglgL8UvE-r-iqIBxbpZALbyosz/view?usp=drivesdk"
              target="_blank">
       <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                View
              </Button>
              </a>
       
            </CardFooter>
          </Card>

          {/* Notes Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-brand-600" />
                <Badge variant="secondary">Notes</Badge>
              </div>
              <CardTitle className="text-lg">Organic Chemistry Lecture Notes</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Detailed notes from Professor Smith's Organic Chemistry course, covering all topics from the semester.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Chemistry</Badge>
                  <Badge variant="outline">Science</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Uploaded by <span className="font-medium text-foreground">Maria L.</span>
              </div>
              <a href="https://drive.google.com/file/d/1okJAqzsP4b7OAef7CZIBxC7LvuCliWEi/view?usp=drivesdk"
              target="_blank">
   <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                View
              </Button>
              </a>
           
            </CardFooter>
          </Card>

          {/* Study Guide Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-brand-600" />
                <Badge className="bg-brand-500 hover:bg-brand-600">Study Guide</Badge>
              </div>
              <CardTitle className="text-lg">Calculus I Final Exam Guide</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Comprehensive study guide with practice problems and solutions for Calculus I final exam.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Mathematics</Badge>
                  <Badge variant="outline">Calculus</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Uploaded by <span className="font-medium text-foreground">James T.</span>
              </div>

              <a href="https://drive.google.com/file/d/1osiDMZvFd_PBwmusGv3weQmWX9sVIamO/view?usp=drivesdk"
              target="_blank">
 <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                View
              </Button>
              </a>
             
            </CardFooter>
          </Card>

          {/* Video Tutorial Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Video className="h-4 w-4 text-brand-600" />
                <Badge variant="secondary">Video</Badge>
              </div>
              <CardTitle className="text-lg">Python Programming Basics</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Video tutorial series covering Python programming fundamentals for beginners.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Programming</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Uploaded by <span className="font-medium text-foreground">Sarah K.</span>
              </div>
              <a href="https://drive.google.com/file/d/1oxOSRb8Cyz_EsWnUd0dZkMsp3pW72Wri/view?usp=drivesdk"
              target="_blank"
              >
              <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                View
              </Button>
              </a>
           
            </CardFooter>
          </Card>

          {/* More cards would be here */}
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="textbooks">{/* Textbooks content */}</TabsContent>
        <TabsContent value="notes">{/* Notes content */}</TabsContent>
        <TabsContent value="guides">{/* Study guides content */}</TabsContent>
        <TabsContent value="videos">{/* Video tutorials content */}</TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Load More
        </Button>
      </div>
    </div>
  )
}


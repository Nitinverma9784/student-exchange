"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="container py-10 max-w-3xl">
      <Link href="/profile" className="flex items-center text-orange-600 hover:text-orange-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Profile
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-orange-600">Share Your Materials</h1>
      <p className="text-muted-foreground mb-8">
        Help fellow students by sharing your notes, textbooks, study guides, or video tutorials. You'll earn points for
        every material you share and even more when others find them helpful!
      </p>

      <Tabs defaultValue="upload">
        <TabsList className="mb-6">
          <TabsTrigger value="upload">Upload Material</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Study Material</CardTitle>
              <CardDescription>Fill in the details about your study material to help others find it.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="E.g., Organic Chemistry Notes - Fall 2023" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your material in detail. What topics does it cover? What makes it useful?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="material-type">Material Type</Label>
                  <Select>
                    <SelectTrigger id="material-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="textbook">Textbook</SelectItem>
                      <SelectItem value="notes">Notes</SelectItem>
                      <SelectItem value="study-guide">Study Guide</SelectItem>
                      <SelectItem value="video">Video Tutorial</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    placeholder="Add relevant tags (e.g., Calculus, Beginner)"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addTag()
                      }
                    }}
                  />
                  <Button type="button" size="icon" onClick={addTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="text-muted-foreground hover:text-foreground">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload File</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground text-center">
                    Drag and drop your file here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground text-center">
                    Supports PDF, DOCX, PPTX, MP4, and more (max 50MB)
                  </p>
                  <Input id="file" type="file" className="hidden" />
                  <Button variant="outline" size="sm" onClick={() => document.getElementById("file")?.click()}>
                    Browse Files
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" asChild>
                <Link href="/profile">Cancel</Link>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">Upload Material</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Upload Guidelines</CardTitle>
              <CardDescription>
                Please follow these guidelines to ensure your materials are helpful and appropriate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Acceptable Materials</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your own notes, summaries, and study guides</li>
                  <li>Public domain or open-source textbooks</li>
                  <li>Self-created tutorial videos</li>
                  <li>Practice problems with solutions (that you created)</li>
                  <li>Flashcards and memory aids</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Prohibited Materials</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Copyrighted textbooks without permission</li>
                  <li>Exam papers or solutions not publicly released</li>
                  <li>Materials explicitly marked as confidential by your institution</li>
                  <li>Content that violates academic integrity policies</li>
                  <li>Materials containing personal information of others</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Standards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Materials should be clearly organized and labeled</li>
                  <li>Content should be accurate and free of major errors</li>
                  <li>Files should be readable and properly formatted</li>
                  <li>Provide comprehensive descriptions to help others find your materials</li>
                  <li>Use appropriate tags to categorize your content</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Materials that don't follow these guidelines may be removed. If you're unsure about whether your
                material is appropriate, please contact us.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


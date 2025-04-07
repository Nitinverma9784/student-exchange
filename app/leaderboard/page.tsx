import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Upload, Star } from "lucide-react"

export default function LeaderboardPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-BLACK">Leaderboard</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          Recognizing our top contributors who help make education more accessible for everyone. Earn points by sharing
          quality materials and receiving positive reviews!
        </p>
      </div>

      {/* Top Contributors Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-12">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <Badge className="mb-2 bg-gray-500">2nd Place</Badge>
          <Avatar className="h-16 w-16 mb-2 border-4 border-gray-500">
            <AvatarImage src="/placeholder.svg" alt="@username" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <p className="font-semibold">Michael J.</p>
          <div className="flex items-center gap-1">
            <Medal className="h-4 w-4 text-gray-500" />
            <span className="font-bold">920 pts</span>
          </div>
          <div className="h-24 w-full bg-gray-200 mt-2"></div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <Badge className="mb-2 bg-yellow-500">1st Place</Badge>
          <Avatar className="h-20 w-20 mb-2 border-4 border-yellow-500">
            <AvatarImage src="/placeholder.svg" alt="@username" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <p className="font-semibold">Sarah L.</p>
          <div className="flex items-center gap-1">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span className="font-bold">1250 pts</span>
          </div>
          <div className="h-32 w-full bg-yellow-100 mt-2"></div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <Badge className="mb-2 bg-amber-700">3rd Place</Badge>
          <Avatar className="h-16 w-16 mb-2 border-4 border-amber-700">
            <AvatarImage src="/placeholder.svg" alt="@username" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <p className="font-semibold">Alex K.</p>
          <div className="flex items-center gap-1">
            <Medal className="h-4 w-4 text-amber-700" />
            <span className="font-bold">780 pts</span>
          </div>
          <div className="h-16 w-full bg-amber-100 mt-2"></div>
        </div>
      </div>

      <Tabs defaultValue="overall">
        <TabsList className="mb-6">
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="monthly">This Month</TabsTrigger>
          <TabsTrigger value="subject">By Subject</TabsTrigger>
        </TabsList>

        <TabsContent value="overall">
          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
              <CardDescription>
                Students who have shared the most valuable materials based on downloads and ratings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Leaderboard Entry */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-purple-600">1</div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Sarah L.</p>
                    <p className="text-sm text-muted-foreground">Computer Science</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">32</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">4.9</span>
                    </div>
                    <div className="font-bold text-purple-600">1250 pts</div>
                  </div>
                </div>

                {/* Leaderboard Entry */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-purple-600">2</div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Michael J.</p>
                    <p className="text-sm text-muted-foreground">Engineering</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">28</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">4.8</span>
                    </div>
                    <div className="font-bold text-purple-600">920 pts</div>
                  </div>
                </div>

                {/* Leaderboard Entry */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-purple-600">3</div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Alex K.</p>
                    <p className="text-sm text-muted-foreground">Mathematics</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">24</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">4.7</span>
                    </div>
                    <div className="font-bold text-purple-600">780 pts</div>
                  </div>
                </div>

                {/* More leaderboard entries would be here */}

                {/* Leaderboard Entry */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-purple-600">4</div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Jane D.</p>
                    <p className="text-sm text-muted-foreground">Computer Science</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">18</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">4.9</span>
                    </div>
                    <div className="font-bold text-purple-600">750 pts</div>
                  </div>
                </div>

                {/* Leaderboard Entry */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-purple-600">5</div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="@username" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Robert M.</p>
                    <p className="text-sm text-muted-foreground">Business</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">15</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">4.6</span>
                    </div>
                    <div className="font-bold text-purple-600">680 pts</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">{/* Monthly leaderboard content would be similar */}</TabsContent>

        <TabsContent value="subject">{/* Subject-specific leaderboard content would be here */}</TabsContent>
      </Tabs>
    </div>
  )
}


import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InviteModal } from "@/components/InviteModal"
import { QuestionCard } from "@/components/QuestionCard"
import { AddQuestionForm } from "@/components/AddQuestionForm"
import { LinkButton } from "@/components/common/LinkButton"

export default function SpacePage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch space data based on the ID
  const spaceId = params.id

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Fitness Group</h1>
          <p className="text-muted-foreground">Track your daily workouts and fitness goals</p>
        </div>
        <div className="flex gap-2">
          <InviteModal spaceId={spaceId} />
            <LinkButton href="/">Home</LinkButton>
        </div>
      </div>

      <Tabs defaultValue="questions" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="questions">Habits</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="questions" className="space-y-6">
          <AddQuestionForm spaceId={spaceId} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuestionCard question="Did you go to the gym today?" answered={true} answer="Yes" date="Today" />
            <QuestionCard question="Did you drink enough water?" answered={true} answer="No" date="Today" />
            <QuestionCard question="Did you track your calories?" answered={false} date="Today" />
          </div>
        </TabsContent>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Members</CardTitle>
              <CardDescription>People with access to this space</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">John Doe (You)</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Owner</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-sm text-muted-foreground">jane@example.com</p>
                  </div>
                  <span className="text-sm bg-muted px-2 py-1 rounded">Member</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Mike Johnson</p>
                    <p className="text-sm text-muted-foreground">mike@example.com</p>
                  </div>
                  <span className="text-sm bg-muted px-2 py-1 rounded">Member</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Space Settings</CardTitle>
              <CardDescription>Manage your space preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Space Name</h3>
                <Input defaultValue="Fitness Group" />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Space Description</h3>
                <Input defaultValue="Track your daily workouts and fitness goals" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// This is just to make the example work - in a real app, you'd import this
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  )
}


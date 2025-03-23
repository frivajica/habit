"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft } from "lucide-react"

export default function CreateSpacePage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [privacy, setPrivacy] = useState("private")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, we would send this data to the server
      console.log("Creating space:", { name, description, privacy })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to the new space (using a fake ID for demo)
      router.push("/spaces/new-space")
    } catch (error) {
      console.error("Error creating space:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-2">
          <Link href="/spaces">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Spaces
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Space</h1>
        <p className="text-muted-foreground">Set up a new space for tracking habits with others</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Space Details</CardTitle>
            <CardDescription>Provide information about your new space</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Space Name</Label>
              <Input
                id="name"
                placeholder="e.g., Fitness Group"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="What is this space for?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
              <p className="text-sm text-muted-foreground">Briefly describe the purpose of this space</p>
            </div>

            <div className="space-y-3">
              <Label>Privacy Settings</Label>
              <RadioGroup value={privacy} onValueChange={setPrivacy}>
                <div className="flex items-start space-x-2 mb-3">
                  <RadioGroupItem value="private" id="private" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="private" className="font-medium">
                      Private
                    </Label>
                    <p className="text-sm text-muted-foreground">Only invited members can join and see this space</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="public" className="font-medium">
                      Public
                    </Label>
                    <p className="text-sm text-muted-foreground">Anyone with the link can join this space</p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.push("/spaces")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Space"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}


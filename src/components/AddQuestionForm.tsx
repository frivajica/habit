"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

interface AddQuestionFormProps {
  spaceId: string
}

export function AddQuestionForm({ spaceId }: AddQuestionFormProps) {
  const [question, setQuestion] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim()) {
      // In a real app, we would save this question to the database
      console.log(`Adding question "${question}" to space ${spaceId}`)
      setQuestion("")
      setIsAdding(false)
    }
  }

  if (!isAdding) {
    return (
      <Button onClick={() => setIsAdding(true)} variant="outline" className="w-full">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add New Habit
      </Button>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Habit</CardTitle>
        <CardDescription>Add a new habit for your space members</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Input
            placeholder="e.g., Did you go to the gym today?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" type="button" onClick={() => setIsAdding(false)}>
            Cancel
          </Button>
          <Button type="submit">Add Habit</Button>
        </CardFooter>
      </form>
    </Card>
  )
}


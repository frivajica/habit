"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

interface QuestionCardProps {
  question: string
  answered?: boolean
  answer?: string
  date: string
}

export function QuestionCard({ question, answered = false, answer, date }: QuestionCardProps) {
  const [isAnswered, setIsAnswered] = useState(answered)
  const [currentAnswer, setCurrentAnswer] = useState(answer || "")

  const handleAnswer = (value: string) => {
    setCurrentAnswer(value)
    setIsAnswered(true)
    // In a real app, we would save this answer to the database
    console.log(`Answered "${question}" with "${value}"`)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{question}</CardTitle>
          <Badge variant="outline">{date}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        {isAnswered ? (
          <div className="flex items-center">
            <span className="mr-2">Your answer:</span>
            {currentAnswer === "Yes" ? (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <CheckCircle className="h-3 w-3 mr-1" />
                Yes
              </Badge>
            ) : (
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <XCircle className="h-3 w-3 mr-1" />
                No
              </Badge>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground">Not answered yet</p>
        )}
      </CardContent>
      {!isAnswered && (
        <CardFooter className="flex gap-2 pt-0">
          <Button size="sm" variant="outline" className="flex-1" onClick={() => handleAnswer("Yes")}>
            <CheckCircle className="h-4 w-4 mr-1" />
            Yes
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={() => handleAnswer("No")}>
            <XCircle className="h-4 w-4 mr-1" />
            No
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}


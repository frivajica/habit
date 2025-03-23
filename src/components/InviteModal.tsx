"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Mail, User, LinkIcon } from "lucide-react"

interface InviteModalProps {
  spaceId: string
}

export function InviteModal({ spaceId }: InviteModalProps) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const inviteLink = `https://spacetracker.app/invite/${spaceId}`

  const handleEmailInvite = (e: React.FormEvent) => {
    e.preventDefault()
    // Send email invite logic would go here
    console.log("Inviting via email:", email)
    setEmail("")
    setOpen(false)
  }

  const handleUsernameInvite = (e: React.FormEvent) => {
    e.preventDefault()
    // Send username invite logic would go here
    console.log("Inviting via username:", username)
    setUsername("")
    setOpen(false)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Invite People</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invite to Space</DialogTitle>
          <DialogDescription>Invite others to join your space and track habits together.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="email" className="w-full mt-4">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="email">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </TabsTrigger>
            <TabsTrigger value="username">
              <User className="h-4 w-4 mr-2" />
              Username
            </TabsTrigger>
            <TabsTrigger value="link">
              <LinkIcon className="h-4 w-4 mr-2" />
              Link
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <form onSubmit={handleEmailInvite} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <DialogFooter className="sm:justify-end">
                <Button type="submit">Send Invitation</Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="username">
            <form onSubmit={handleUsernameInvite} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <DialogFooter className="sm:justify-end">
                <Button type="submit">Send Invitation</Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="link">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Share this link</Label>
                <div className="flex items-center space-x-2">
                  <Input value={inviteLink} readOnly className="flex-1" />
                  <Button size="icon" variant="outline" onClick={copyLink}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                {copied && <p className="text-sm text-green-600">Copied to clipboard!</p>}
                <p className="text-sm text-muted-foreground">Anyone with this link can join your space.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}


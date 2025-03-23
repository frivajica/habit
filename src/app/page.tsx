"use server";

import { LinkButton } from "@/components/common/LinkButton";
import { SpaceCard } from "../components/SpaceCard";
import { PlusCircle } from "lucide-react";

export default async function Home() {
  const userSpaces = [
    {
      id: "fitness",
      title: "Fitness Group",
      description: "Track your daily workouts and fitness goals",
      memberCount: 5,
      questionCount: 3,
    },
    {
      id: "reading",
      title: "Reading Club",
      description: "Keep up with your reading habits and share progress",
      memberCount: 8,
      questionCount: 2,
    },
    {
      id: "meditation",
      title: "Meditation Circle",
      description: "Daily mindfulness practice tracking",
      memberCount: 4,
      questionCount: 1,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Your Spaces</h1>
          <p className="text-muted-foreground">
            Manage and track your daily habits with your groups
          </p>
        </div>
        <LinkButton href="/spaces/create">
          <PlusCircle className="h-4 w-4 mr-2" />
          Create New Space
        </LinkButton>
      </div>

      {userSpaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userSpaces.map((space) => (
            <SpaceCard
              key={space.id}
              title={space.title}
              description={space.description}
              memberCount={space.memberCount}
              questionCount={space.questionCount}
              href={`/spaces/${space.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <PlusCircle className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold mb-2">No spaces yet</h2>
          <p className="text-muted-foreground max-w-md mb-6">
            Create your first space to start tracking habits with friends and
            colleagues
          </p>
          <LinkButton href="/spaces/create">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Your First Space
          </LinkButton>
        </div>
      )}
    </div>
  );
}

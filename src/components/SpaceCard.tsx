import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, MessageSquare } from "lucide-react";
import { LinkButton } from "./common/LinkButton";

interface SpaceCardProps {
  title: string;
  description: string;
  memberCount: number;
  questionCount: number;
  href?: string;
}

export function SpaceCard({
  title,
  description,
  memberCount,
  questionCount,
  href = "#",
}: SpaceCardProps) {
  return (
    <Card className="overflow-hidden py-5 gap-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{memberCount} members</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{questionCount} questions</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <LinkButton className="w-full" href={href}>View Space</LinkButton>
      </CardFooter>
    </Card>
  );
}

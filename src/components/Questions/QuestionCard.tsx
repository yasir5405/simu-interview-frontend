import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Bookmark,
  MessageCircleDashed,
  MoveRight,
  PlusCircle,
} from "lucide-react";

type QuestionCardProps = {
  questionText: string;
  type: string;
  difficulty: string;
  totalAttempts: number;
};

const difficultyVariant = (difficulty: string) => {
  switch (difficulty) {
    case "EASY":
      return "secondary";
    case "MEDIUM":
      return "outline";
    case "HARD":
      return "destructive";
    default:
      return "secondary";
  }
};

const QuestionCard = ({
  difficulty,
  questionText,
  type,
  totalAttempts,
}: QuestionCardProps) => {
  return (
    <div className="w-8/12 min-h-35 rounded-md border-2 py-4 px-5 flex flex-col gap-2 cursor-pointer hover:shadow-md">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-semibold">{questionText}</h1>
        <Badge variant={difficultyVariant(difficulty)}>{difficulty}</Badge>
      </div>

      <div className="w-full flex items-center justify-between">
        <Badge variant="secondary" className="border">
          <h1>Type: </h1>
          {type}
        </Badge>
      </div>

      <div className="w-full flex items-center gap-3 justify-between">
        <div className="flex items-center justify-center gap-1">
          <Button variant="ghost" size={"sm"} asChild>
            <Link to="/">
              <Bookmark />
              <span className="text-sm">Save</span>
            </Link>
          </Button>
          <Button variant="ghost" size={"sm"} asChild>
            <Link to="/">
              <MessageCircleDashed />
              <span className="text-sm"> {totalAttempts} Attempts</span>
            </Link>
          </Button>
          <Button variant="ghost" size={"sm"} asChild>
            <Link to="/">
              <PlusCircle />
              <span className="text-sm">I was asked this question</span>
            </Link>
          </Button>
        </div>

        <Button variant={"default"}>
          Attempt <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;

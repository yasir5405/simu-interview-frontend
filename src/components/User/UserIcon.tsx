import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const UserIcon = () => {
  const { user } = useAuth();
  const normalisedName = user?.name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="cursor-pointer" variant="ghost">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{normalisedName}</AvatarFallback>
          </Avatar>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Profile</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default UserIcon;

import { Bell, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import UserIcon from "../User/UserIcon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-16  px-10 flex items-center justify-between">
      <div className="flex items-center justify-center h-full">
        <Button className="cursor-pointer" variant="link" asChild>
          <Link to={"/"}>
            <Briefcase />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold">
          Simu<span className="text-primary">Interview</span>
        </h1>
      </div>

      <div className="h-full flex items-center justify-center gap-2 ">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="cursor-pointer" variant="ghost" asChild>
              <Link to={"/notifications"}>
                <Bell />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="cursor-pointer" variant="ghost" asChild>
              <Link to={"/progress"}>
                <GraduationCap />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Progress</TooltipContent>
        </Tooltip>

        <UserIcon />
      </div>
    </div>
  );
};

export default NavBar;

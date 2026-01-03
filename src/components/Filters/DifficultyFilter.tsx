import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

const DifficultyFilter = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const filterParams = searchParams.get("difficulty");

  const [active, setActive] = useState(filterParams || "");

  const handleFilter = (filter: string) => {
    let newurl = "";

    if (filter === active) {
      setActive("");

      newurl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["difficulty"],
      });
    } else {
      setActive(filter);

      newurl = formUrlQuery({
        params: searchParams.toString(),
        key: "difficulty",
        value: filter.toLowerCase(),
      });
    }

    navigate(newurl);
  };

  return (
    <Select
      value={active || undefined}
      onValueChange={(value) => handleFilter(value)}
    >
      <SelectTrigger className="w-35 cursor-pointer">
        <SelectValue
          className="text-muted-foreground"
          placeholder="Choose difficulties"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Difficulties</SelectItem>
        <SelectItem value="easy">Easy</SelectItem>
        <SelectItem value="medium">Medium</SelectItem>
        <SelectItem value="hard">Hard</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DifficultyFilter;

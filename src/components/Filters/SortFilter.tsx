import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SortFilter = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const filterParams = searchParams.get("sort");

  const [active, setActive] = useState(filterParams || "");

  const handleFilter = (filter: string) => {
    let newurl = "";

    if (filter === active) {
      setActive("");

      newurl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["sort"],
      });
    } else {
      setActive(filter);

      newurl = formUrlQuery({
        params: searchParams.toString(),
        key: "sort",
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
      <SelectTrigger className="w-35 flex gap-1 cursor-pointer">
        <span className="text-muted-foreground">Sort by:</span>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="oldest">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortFilter;

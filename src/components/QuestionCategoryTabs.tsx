import { useNavigate, useSearchParams } from "react-router-dom";
import { Badge } from "./ui/badge";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

const QuestionCategoryTabs = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const active = searchParams.get("type") ?? "mcq";

  const badgeList = [
    // { label: "All", value: "all" },
    // { label: "DSA", value: "dsa" },
    // { label: "Frontend", value: "frontend" },
    // { label: "Backend", value: "backend" },
    // { label: "Fullstack", value: "fullstack" },
    { label: "MCQ", value: "mcq" },
    { label: "TEXT", value: "text" },
  ];

  const handleFilter = (filter: string) => {
    let newurl = "";

    if (filter === "mcq" || filter === active) {
      newurl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["type"],
      });
    } else {
      newurl = formUrlQuery({
        params: searchParams.toString(),
        key: "type",
        value: filter.toLowerCase(),
      });
    }

    navigate(newurl);
  };

  return (
    <div className="mt-4 flex items-center gap-3">
      <h1 className="font-semibold text-xl">Practice Questions</h1>

      <div className="flex items-center justify-center gap-2">
        {badgeList.map((badge) => (
          <Badge
            key={badge.value}
            variant={active === badge.value ? "default" : "secondary"}
            onClick={() => handleFilter(badge.value)}
          >
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default QuestionCategoryTabs;

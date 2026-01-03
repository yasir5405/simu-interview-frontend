import { useAuth } from "@/context/AuthContext";
import SortFilter from "../Filters/SortFilter";
import DifficultyFilter from "../Filters/DifficultyFilter";
import { Button } from "../ui/button";
import QuestionSearch from "../Search/QuestionSearch";

const HomeHeader = () => {
  const { user } = useAuth();

  const clearFilters = () => {};
  return (
    <div className="w-full">
      {/* Top Div */}
      <div className="w-full flex justify-between items-center">
        {/* Left Div */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Welcome back, {user?.name}</h1>
          <p className="text-muted-foreground">
            Ready to practice for your next technical interview?
          </p>
        </div>

        {/* Right Div */}
        <div className="flex items-end justify-center flex-col gap-1">
          <div className="flex items-center justify-center gap-2">
            <SortFilter />
            <DifficultyFilter />
          </div>

          <Button
            onClick={clearFilters}
            className="text-muted-foreground"
            variant="ghost"
          >
            <p className="text-sm">Clear filters</p>
          </Button>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="mt-4">
        <QuestionSearch />
      </div>
    </div>
  );
};

export default HomeHeader;

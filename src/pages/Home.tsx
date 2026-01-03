import HomeHeader from "@/components/Navigation/HomeHeader";
import QuestionCategoryTabs from "@/components/QuestionCategoryTabs";
import QuestionList from "@/components/Questions/QuestionList";
const Home = () => {
  return (
    <div className="w-full p-5">
      <HomeHeader />
      <QuestionCategoryTabs />
      <QuestionList />
    </div>
  );
};

export default Home;

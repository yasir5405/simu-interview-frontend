import {
  fetchQuestions,
  type QuestionsSuccessResponse,
} from "@/api/questions.api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  const [urlParams] = useSearchParams();
  console.log(urlParams.toString());
  const difficulty = urlParams.get("difficulty");
  const type = urlParams.get("type");
  const sort = urlParams.get("sort");

  const [questions, setQuestions] = useState<
    QuestionsSuccessResponse["questions"]
  >([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuestions = () => {
      setLoading(true);
      setError(null);

      const normalizedDifficulty =
        difficulty && difficulty !== "all"
          ? difficulty.toUpperCase()
          : undefined;

      fetchQuestions({
        difficulty: normalizedDifficulty,
        type: type?.toUpperCase() ?? undefined,
        // sort: sort ?? undefined,
      }).then((res) => {
        if (res.success) {
          setQuestions(res.questions);
        } else {
          setError(res.message);
        }
        setLoading(false);
      });
    };
    loadQuestions();
  }, [difficulty, type, sort]);

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>{error}</div>;
  if (questions.length === 0) return <div>No questions found</div>;

  return (
    <div className="space-y-4 mt-4">
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          difficulty={q.difficulty}
          questionText={q.questionText}
          type={q.type}
          totalAttempts={q.totalAttempts}
        />
      ))}
    </div>
  );
};

export default QuestionList;

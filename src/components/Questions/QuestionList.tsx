import { fetchQuestions, type Questions } from "@/api/questions.api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QuestionList = () => {
  const [urlParams] = useSearchParams();
  console.log(urlParams.toString());
  const difficulty = urlParams.get("difficulty");
  const type = urlParams.get("type");
  const sort = urlParams.get("sort");

  const [questions, setQuestions] = useState([]);

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
    <div className="space-y-4">
      {questions.map((q) => (
        <div key={q.id} className="border p-4 rounded">
          <p>{q.questionText}</p>
          <p className="text-sm text-muted-foreground">
            {q.type.toUpperCase()} · {q.difficulty}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;

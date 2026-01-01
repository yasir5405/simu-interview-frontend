import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-background to-muted/20">
      <Card className="w-full max-w-lg shadow-xl border-2">
        <CardHeader className="text-center space-y-4 pb-8 pt-10">
          <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-destructive"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Error 403
            </p>
            <CardTitle className="text-3xl font-bold tracking-tight">
              Access Denied
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 px-8 pb-10 text-center">
          <p className="text-muted-foreground leading-relaxed">
            You don't have permission to access this page.
            <br />
            <span className="text-sm mt-2 block">
              Either your role is too humble… or security is feeling powerful.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate(-1)}
              className="min-w-[140px]"
            >
              ← Go Back
            </Button>

            <Button asChild size="lg" className="min-w-[140px]">
              <Link to="/">Go to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unauthorized;

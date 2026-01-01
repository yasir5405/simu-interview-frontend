import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { register, type RegisterPayload } from "@/api/auth.api";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register: registerFn,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterPayload>();

  const handleSignUp: SubmitHandler<RegisterPayload> = async (
    data: RegisterPayload
  ) => {
    setLoading(true);
    try {
      const res = await register(data);

      if (!res.success) {
        const message = res.error ?? res.message;

        if (message.toLocaleLowerCase().includes("email")) {
          setError("email", {
            type: "server",
            message,
          });
        } else if (message.toLocaleLowerCase().includes("password")) {
          setError("password", {
            type: "server",
            message,
          });
        } else {
          setError("root", {
            type: "server",
            message: res.error ?? res.message,
          });
        }

        console.log(res.error ?? res.message);
        return;
      }
      toast.success(res.message);
      navigate("/");
      console.log(res.message);
    } catch (error) {
      setError("root", {
        type: "server",
        message: "Network error. Please try again.",
      });
      console.error("Unexpected error:", error);

      console.log("Network error or server unreachable");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>

          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...registerFn("name", {
              required: "Name is required",
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...registerFn("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              {...registerFn("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <InputGroupAddon className="cursor-pointer" align="inline-end">
              {showPassword ? (
                <EyeClosed onClick={() => setShowPassword((prev) => !prev)} />
              ) : (
                <Eye onClick={() => setShowPassword((prev) => !prev)} />
              )}
            </InputGroupAddon>
          </InputGroup>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              {...registerFn("confirmPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <InputGroupAddon className="cursor-pointer" align="inline-end">
              {showConfirmPassword ? (
                <EyeClosed
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              ) : (
                <Eye onClick={() => setShowConfirmPassword((prev) => !prev)} />
              )}
            </InputGroupAddon>
          </InputGroup>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </Field>
        {errors.root?.message && (
          <p className="text-xs text-red-500 text-center">
            {errors.root.message}
          </p>
        )}
        <Field>
          <Button disabled={loading} type="submit">
            {loading ? (
              <div className="gap-2 flex items-center justify-center">
                <Spinner />
                Creating Account...
              </div>
            ) : (
              "Create account"
            )}
          </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Sign up with Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link to="/login">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

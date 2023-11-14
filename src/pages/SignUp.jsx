import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/store/contexts/authContext";

import { Loader2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorSpan } from "@/components/ui/error";

export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signUpError, signUpAction, clearMessageAction } = useAuthContext();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);

    await signUpAction(formData, navigate);

    setIsLoading(false);
  }

  useEffect(() => {
    if (signUpError) {
      const timeout = setTimeout(() => {
        clearMessageAction();
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [signUpError]);

  return (
    <Card className="w-[350px]">
      <CardHeader>Create an account</CardHeader>
      {signUpError && <ErrorSpan>{signUpError}</ErrorSpan>}
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="juan@example.com"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              id="password_confirmation"
              type="password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            ></Input>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create account"
            )}
          </Button>
          <div className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="underline cursor-pointer">
              Sign In
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

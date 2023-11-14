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

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signInError, signInAction, clearMessageAction } = useAuthContext();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await signInAction(formData, navigate);

    setIsLoading(false);
  }

  useEffect(() => {
    if (signInError) {
      const timeout = setTimeout(() => {
        clearMessageAction();
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [signInError]);

  return (
    <Card className="w-[350px]">
      <CardHeader className="text-2xl">Sign In</CardHeader>
      {signInError && <ErrorSpan>{signInError}</ErrorSpan>}
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">
            {isLoading ? <Loader2 className="animate-spin" /> : "Log In"}
          </Button>
          <div className="text-center text-xs text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="underline cursor-pointer">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

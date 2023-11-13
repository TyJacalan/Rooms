import { useState } from "react";
import { Link } from "react-router-dom";

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

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card className="w-[350px]">
      <CardHeader>Sign In</CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="juan@example.com"></Input>
            <Label htmlFor="password">Password</Label>
            <Input id="password"></Input>
          </div>
        </form>
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
    </Card>
  );
}

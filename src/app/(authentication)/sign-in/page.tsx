import { Card } from "@/components/ui/card";

import { UserAuthForm } from "./user-auth-form";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-2 text-left">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below <br />
          to log into your account <br />
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <UserAuthForm />
    </Card>
  );
}

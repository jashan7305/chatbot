import AuthForm from "@/components/auth-form";
import { signUp } from "../actions";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function SignIn() {
    return (
        <div className="max-w-sm mx-auto mt-32">
            <Card>
                <CardHeader>
                    <CardTitle>Login Form</CardTitle>
                    <CardDescription>Enter Login details to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <AuthForm active = "signup" action = {signUp}/>
                </CardContent>
                <CardFooter>
                    <p>
                        Already have an account?
                        <Link href={"/login"} className="underline">Sign in!</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
export default SignIn;
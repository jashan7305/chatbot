import AuthForm from "@/components/auth-form";
import { signIn } from "../actions";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function Login() {
    return (
        <div className="max-w-sm mx-auto mt-32">
            <Card>
                <CardHeader>
                    <CardTitle>Login Form</CardTitle>
                    <CardDescription>Enter Login details to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <AuthForm active = "login" action = {signIn}/>
                </CardContent>
                <CardFooter>
                    <p>
                        Dont have an account?
                        <Link href={"/signup"} className="underline">Sign up!</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Login;
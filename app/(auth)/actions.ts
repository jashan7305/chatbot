"use server"

import { auth } from "@/lib/auth";
import { email } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async({email, password}: any) => {
    try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name: email.split("@"),
            }
        })
    } catch (error: any) {
        console.error("error signing up", error);
        throw new Error("error signing up", error);
    }
};

export const signIn = async({email, password}: any) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
                // name: email.split("@"),
            }
        })
    } catch (error: any) {
        console.error("error signing in", error);
        throw new Error("error signing in", error);
    }
};

export const signOut = async() => {
    try {
        await auth.api.signOut({headers: await headers()});
        redirect("/login");
    } catch (error: any) {
        console.error("error signing out", error);
    }
}
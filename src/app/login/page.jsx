"use client";

import { authClient } from "@/lib/auth-client";
import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const router = useRouter;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    //console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    //console.log(data, error);

    if (data) {
      toast.success("Login Successfully!");
      router.push("/");
    }
    if (error) {
      toast.error(error?.message || "Something went Wrong");
      return;
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-sm sm:max-w-md p-5 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>
        <p className="text-center">
          Start your adventure with{" "}
          <span className="text-[#F97316]">Drive Nest</span>
        </p>

        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>

            <Input placeholder="john@example.com" />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type={isPasswordShow ? "text" : "password"}
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              return undefined;
            }}
          >
            <Label>Password</Label>

            <div className="relative">
              <Input placeholder="Enter your password" className="w-full" />
              <span
                className="cursor-pointer absolute right-3 top-3"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <Description>
              Must be at least 6 characters with 1 uppercase and 1 lowercase
            </Description>

            <FieldError />
          </TextField>

          <div className="flex flex-col gap-3 mt-2">
            <Button type="submit" className="w-full bg-[#F97316] rounded-xl">
              Login
            </Button>
          </div>
          <p className="text-center">
            Don't have an account?
            <Link href="/registration">
              <span className="text-[#F97316] font-bold"> Register</span>
            </Link>
          </p>
        </Form>

        <div className="flex justify-center items-center gap-3">
          <div className="flex-1">
            <Separator />
          </div>
          <div className="whitespace-nowrap">
            <p>Or sign in with</p>
          </div>
          <div className="flex-1">
            <Separator />
          </div>
        </div>
        <div>
          <Button
            className="w-full cursor-pointer bg-[#0F172A] rounded-xl"
            onClick={handleGoogleLogin}
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;

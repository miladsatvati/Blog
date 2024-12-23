"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValue {
  name: string;
  email: string;
  age: number;
  message: string;
}

export default function ContactPage() {
  const form = useForm<FormValue>();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <div className="mainContact max-w-full">
      <h1 className="hOneContact text-2xl max-w-72 mt-10">
        Love to hear from you, Get in Touch👋
      </h1>
      <div className="w-full flex justify-center">
        <div className="boxInsideMain max-w-80 mt-10">
          <form
            onSubmit={handleSubmit(submit)}
            className="formContact max-w-80 mt-10 p-2"
          >
            <div className="grid w-full max-w-xl items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                className="sm:w-96 w-72"
                {...register("name", {
                  required: {
                    value: true,
                    message: "you must to fill field",
                  },
                  minLength: {
                    value: 4,
                    message: "you must to fill at least 4 characters",
                  },
                })}
              />
              <p className="text-red-700 p-1 text-xs">{errors.name?.message}</p>
            </div>
            <div className="grid w-full max-w-xl items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="sm:w-96 w-72"
                {...register("email", {
                  required: {
                    value: true,
                    message: "please enter your email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "please enter valid email",
                  },
                })}
              />
              <p className="text-red-700 p-1 text-xs">{errors.email?.message}</p>
            </div>
            <div className="grid w-full max-w-xl items-center gap-1.5">
              <Label htmlFor="email">Age</Label>
              <Input
                type="number"
                id="age"
                placeholder="Age"
                className="sm:w-96 w-72"
                {...register("age", {
                  required: {
                    value: true,
                    message: "You must enter your age from 12 to 80",
                  },
                  min: {
                    value: 12,
                    message: "at least 12",
                  },
                  max: {
                    value: 80,
                    message: "Your age must be at most 80",
                  },
                })}
              />
              <p className="text-red-700 p-1 text-xs">{errors.age?.message}</p>
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="sm:w-96 w-72"
                {...register("message", {
                  required: {
                    value: true,
                    message: "you must to fill field",
                  },
                  minLength: 6,
                  maxLength: 100,
                })}
              />
              <p className="text-red-700 p-1 text-xs">{errors.message?.message}</p>
            </div>
            <Button variant="secondary">Submit</Button>
          </form>

        </div>
      </div>
    </div>
  );
}

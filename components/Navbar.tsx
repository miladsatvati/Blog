import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/40 border-b sticky top-0 px-8 backdrop-blur flex items-center justify-between">
      <div className="font-bold md:text-xl text-base">Blog </div>
      <ul className="hidden  md:flex w-full justify-end space-x-6 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="buttons px-4 space-x-2">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <div>
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size={35} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

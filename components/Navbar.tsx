import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/40 border-b sticky top-0 px-8 backdrop-blur flex items-center justify-between">
      <div className="font-bold md:text-xl text-base">Blog </div>
      <ul className="hidden  md:flex w-full justify-end space-x-6 items-center">
        <li>
          <Link className="hover:text-[#00719c]" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#00719c]" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#00719c]" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#00719c]" href="/contact">
            Contact
          </Link>
        </li>
        <li className="buttons px-4 space-x-2">
          <div className="flex items-center">
            <SignedOut>
              <SignInButton mode="modal"/>
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </div>
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
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription> */}
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/">Home</Link>
                  </SheetClose>
                </SheetTitle>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/about">About</Link>
                  </SheetClose>
                </SheetTitle>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/blog">Blog</Link>
                  </SheetClose>
                </SheetTitle>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/contact">Contact</Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

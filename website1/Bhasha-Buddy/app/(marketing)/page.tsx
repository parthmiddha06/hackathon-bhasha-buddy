"use client";
import Image from "next/image";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  if (user) {
    router.push("/learn");
    return null;
  }

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero-2.svg" className="mr-5" fill alt="Hero" />
        {/* <Image src="/he_sitting_with_notebook.png" className="ml-[400px] mb-98" width={500} height={500} alt="Hero" /> */}
      </div>
      <div className="flex flex-col items-center gap-y-8">
        {/* <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Detect When You Stutter with BhashaBuddy!
        </h1> */}

        <div className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          <TextGenerateEffect words="Detect When You Stutter with BhashaBuddy!"></TextGenerateEffect>
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/stutter"
                afterSignUpUrl="/stutter"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/stutter"
                afterSignUpUrl="/stutter"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/stutter">Start Detecting</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

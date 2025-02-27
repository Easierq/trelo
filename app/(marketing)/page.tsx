import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    // <div className="flex items-center justify-center flex-col">
    //   <div
    //     className={cn(
    //       "flex items-center justify-center flex-col",
    //       headingFont.className
    //     )}
    //   >
    //     <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
    //       <Medal className="h-6 w-6 mr-2" />
    //       No 1 task managment
    //     </div>
    //     <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
    //       Frilo helps team move
    //     </h1>
    //     <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
    //       work forward.
    //     </div>
    //   </div>
    //   <div
    //     className={cn(
    //       "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
    //       textFont.className
    //     )}
    //   >
    //     Collaborate, manage projects, and reach new productivity peaks. From
    //     high rises to the home office, the way your team works is unique -
    //     accomplish it all with Frilo.
    //   </div>
    //   <Button className="mt-6" size="lg" asChild>
    //     <Link href="/sign-up">Get Frilo for free</Link>
    //   </Button>
    // </div>
    <div className="mx-auto flex w-full max-w-[988px] flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center font-bold text-slate-100 text-4xl items-start">
          Frilio brings all your tasks, teammates, and tools together.
        </h1>
        <div
          className={cn(
            "text-lg font-bold text-slate-200 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is unique -
          accomplish it all with Frilo.
        </div>
        <Button className="mt-6" size="lg" asChild>
          <Link href="/sign-in">Get Frilo for free</Link>
        </Button>
      </div>
      <div className="relative mb-8 mt-8 h-[300px] w-[340px] lg:mb-0 lg:h-[400px] lg:w-[500px]">
        <Image src="/tr.webp" alt="Hero" fill />
      </div>
    </div>
  );
};

export default MarketingPage;

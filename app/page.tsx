import HomeImage from "@/components/HomeImage";
import Link from "next/link";
import { Eye, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 divide-y-2">
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          <div className="sm:flex sm:flex-col sm:justify-center sm:mx-auto sm:gap-4 sm:p-8">
            <h1 className="text-4xl max-w-xl tracking-tight">
              We Give Perfect Solution of Your{" "}
              <span className="font-bold">Problem</span>
            </h1>
            <p className="text-xl max-w-80 text-slate-500 ">
              You can search blogs and find your problem
            </p>
          </div>
          <div className="sm:col-start-2 sm:col-span-1 flex justify-center">
            <HomeImage />
          </div>
        </div>
        </div>
        <div className="flex justify-center items-center h-24">
          <h1 className="text-4xl font-semibold">Categories</h1>
        </div>
        <div className="categoryMD w-full grid grid-cols-1 gap-10">
          <div className="dark:bg-[#0D1829] bg-slate-100 eachCategory rounded-lg h-72 ">
            <h3 className="text-md text-[#9ba9bed0]">CATEGORY</h3>
            <h1 className="text-2xl">Raclette Blueberry Nextious</h1>
            <p className="text-[#667ca8]">
              Photo booth fam kinfolk cold-pressed sriracha leggings janbing
              microdosing tousled waistcoat.
            </p>
            <Link className="mt-2 text-[#565A90]" href="/">Learn more </Link>
            <div className="grid grid-cols-2 divide-x-2 divide-slate-200 max-w-40 gap-3 mt-4">
              <div className="flex justify-center items-center gap-2">
                <Eye size={22} /><p>1.2k</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MessageCircle size={22} /><p>6</p>
              </div>
            </div>
          </div>
          <div className="dark:bg-[#0D1829] bg-slate-100 eachCategory rounded-lg">
            <h3 className="text-md text-[#9ba9bed0]">CATEGORY</h3>
            <h1 className="text-2xl">Raclette Blueberry Nextious</h1>
            <p className="text-[#667ca8]">
              Photo booth fam kinfolk cold-pressed sriracha leggings janbing
              microdosing tousled waistcoat.
            </p>
            <Link className="mt-2 text-[#565A90]" href="/">Learn more </Link>
            <div className="grid grid-cols-2 divide-x-2 divide-slate-200 max-w-40 gap-3 mt-4">
              <div className="flex justify-center items-center gap-2">
                <Eye size={22} /><p>1.2k</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MessageCircle size={22} /><p>6</p>
              </div>
            </div>
          </div>
          <div className="dark:bg-[#0D1829] bg-slate-100 eachCategory rounded-lg">
            <h3 className="text-md text-[#9ba9bed0]">CATEGORY</h3>
            <h1 className="text-2xl">Raclette Blueberry Nextious</h1>
            <p className="text-[#667ca8]">
              Photo booth fam kinfolk cold-pressed sriracha leggings janbing
              microdosing tousled waistcoat.
            </p>
            <Link className="mt-2 text-[#565A90]" href="/">Learn more </Link>
            <div className="grid grid-cols-2 divide-x-2 divide-slate-200 max-w-40 gap-3 mt-4">
              <div className="flex justify-center items-center gap-2">
                <Eye size={22} /><p>1.2k</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MessageCircle size={22} /><p>6</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

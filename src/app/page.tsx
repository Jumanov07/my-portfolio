import dynamic from "next/dynamic";
import Link from "next/link";
import Cursor from "@/components/cursor";
import Navigation from "@/components/navigation";
import About from "@/modules/about";

const Experience = dynamic(() => import("@/modules/experience"));
const Projects = dynamic(() => import("@/modules/projects"));

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row w-full relative mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex-1 relative">
          <aside className="flex-1 pt-12 lg:px-24 lg:py-24 lg:fixed lg:top-0 lg:left-0">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <Link href="/">Alisher Jumanov</Link>
            </h1>

            <h2 className="mt-3 text-lg tracking-tight text-slate-200 sm:text-xl">
              Frontend Engineer 2+ Years Experience
            </h2>

            <p className="mt-4 max-w-xs leading-normal font-light">
              Creating digital experiences that are engaging, intuitive, and
              accessible.
            </p>

            <Navigation />
          </aside>
        </div>

        <aside className="flex-1 flex flex-col lg:gap-36 gap-24 pt-24 scroll-smooth lg:py-24 lg:h-[calc(100vh-3rem)]">
          <About />
          <Experience />
          <Projects />
        </aside>

        
      </main>

      <Cursor />
    </>
  );
}

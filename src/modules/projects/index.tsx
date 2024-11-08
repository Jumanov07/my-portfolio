import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PROJECTS } from "@/utils/constants";

const Projects = () => {
  return (
    <section id="projects" className="pb-12 lg:pb-24">
      <h2 className="lg:hidden mb-9 text-sm font-bold tracking-widest text-slate-200 ">
        PROJECTS
      </h2>

      <div className="flex flex-col gap-12 group/list">
        {PROJECTS.map(({ id, image, title, link, description, tools }) => (
          <Link href={link} key={id} target="_blank">
            <div className="flex items-start flex-col-reverse sm:flex-row gap-4 lg:p-4 rounded-md transition duration-200 hover:bg-slate-800 group group-hover/list:opacity-50 hover:!opacity-100">
              <Image
                style={{
                  width: 120,
                  height: 60,
                }}
                width={120}
                height={60}
                src={image}
                alt={title}
                className="hidden sm:block rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              />

              <div className="sm:hidden flex gap-4">
                <Image
                  style={{
                    width: 155,
                    height: 90,
                  }}
                  width={155}
                  height={90}
                  src={image}
                  alt={title}
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                />

                <div className="h-fit flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="h-fit w-fit rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="w-fit flex items-center gap-1 text-slate-200 leading-tight group-hover:text-[#51c8be] transition-colors duration-200">
                  {title}
                  <MdOutlineArrowOutward className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#51c8be] text-slate-200" />
                </h3>

                <p className="text-sm leading-normal">{description}</p>

                <div className="flex-wrap gap-2 hidden sm:flex">
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import Link from "next/link";
import { MdOutlineArrowBack, MdOutlineArrowOutward } from "react-icons/md";
import { ALL_PROJECTS } from "@/utils/constants";

const AllProjects = () => {
  return (
    <main className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <Link
        href="/"
        className="group mb-2 flex items-center text-teal-300 w-fit"
      >
        <MdOutlineArrowBack className="text-teal-300 mr-1" />

        <span className="font-semibold leading-tight">Alisher Jumanov</span>
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>

      <table className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr className="flex ">
            <th className="py-4 text-sm font-semibold text-slate-200 mr-8">
              Year
            </th>
            <th className="py-4 text-sm font-semibold text-slate-200 flex-1">
              Project
            </th>
            <th className="py-4 hidden text-sm font-semibold text-slate-200 lg:table-cell flex-1">
              Built with
            </th>
            <th className="py-4 mr-5 hidden text-sm font-semibold text-slate-200 lg:table-cell flex-1">
              Description
            </th>
            <th className="py-4 hidden text-sm font-semibold text-slate-200 lg:table-cell flex-1">
              Made at
            </th>
          </tr>
        </thead>

        <tbody>
          {ALL_PROJECTS.map(
            ({ id, year, name, link, tools, description, made }) => (
              <tr key={id} className="flex border-b border-slate-300/10">
                <td className="py-4 text-sm text-slate-400 mr-7">{year}</td>
                <td className="py-4 flex-1">
                  {link ? (
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 w-fit flex items-center group hover:text-[#51c8be] transition-colors duration-200"
                    >
                      {name}

                      <MdOutlineArrowOutward className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  ) : (
                    name
                  )}
                </td>
                <td className="py-4 hidden lg:table-cell flex-1">
                  <div className="flex items-center justify-start flex-wrap gap-2">
                    {tools.map((tool) => (
                      <div
                        key={tool}
                        className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-4 mr-5 hidden lg:table-cell text-sm text-slate-400 flex-1">
                  {description}
                </td>
                <td className="py-4 hidden lg:table-cell text-sm text-slate-400 flex-1">
                  {made}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </main>
  );
};

export default AllProjects;

import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { JOBS } from "@/utils/constants";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="lg:hidden mb-9 text-sm font-bold tracking-widest text-slate-200">
        EXPERIENCE
      </h2>

      <div className="flex flex-col gap-12 group/list">
        {JOBS.map(
          ({ id, title, company, link, startDate, endDate, description }) => (
            <Link href={link} key={id} target="_blank">
              <div className="flex flex-col gap-2 lg:p-4 rounded-md transition duration-200 sm:hover:bg-slate-800 group group-hover/list:opacity-50 hover:!opacity-100">
                <h3 className="w-fit flex items-center gap-1 text-slate-200 leading-tight group-hover:text-[#51c8be] transition-colors duration-200">
                  {title} {title && "at"} {company}
                  <MdOutlineArrowOutward className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#51c8be] text-slate-200" />
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {startDate} - {endDate}
                </p>

                <p className="text-sm leading-normal">{description}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;

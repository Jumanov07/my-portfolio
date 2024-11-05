import { JOBS } from "@/utils/constants";

const Experience = () => {
  return (
    <section id="experience" className="space-y-6">
      <h2
        style={{
          marginBottom: "2.25rem",
        }}
        className="section-title text-sm font-bold tracking-widest text-slate-200"
      >
        EXPERIENCE
      </h2>

      {JOBS.map(({ id, title, company, startDate, endDate, description }) => (
        <div key={id} className="p-4 border border-slate-600 rounded-md">
          <h3 className="text-xl font-semibold text-slate-200">
            {title} {title && "at"} {company}
          </h3>

          <p className="text-slate-400">
            {startDate} - {endDate}
          </p>

          <p className="text-slate-400">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;

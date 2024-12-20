import Link from "next/link";

const About = () => (
  <section id="about" className="flex flex-col gap-4 font-light">
    <h2 className="lg:hidden mb-9 text-sm font-bold tracking-widest text-slate-200">
      ABOUT
    </h2>

    <p className="text-slate-400">
      Back in 2022, I immersed myself in learning programming at
      <Link
        href="https://www.instagram.com/peaksoft.house/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-slate-200 hover:text-[#51c8be]"
      >
        {" "}
        Peaksoft House{" "}
      </Link>
      courses, becoming a true adventurer in the exciting world of coding and
      web development. Since then, I’ve had the honor of creating projects in
      exciting fields, including
      <Link
        href="https://go.codifylab.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-slate-200 hover:text-[#51c8be]"
      >
        {" "}
        learning platforms
      </Link>
      , online stores, the medical field, hotel booking systems, and
      <Link
        href="https://letscodify.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-slate-200 hover:text-[#51c8be]"
      >
        {" "}
        job platform
      </Link>
      !
    </p>

    <p className="text-slate-400 mt-4">
      At the moment, I’m developing the accessible and intuitive gaming
      education platform
      <Link
        href="https://go.codifylab.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-slate-200 hover:text-[#51c8be]"
      >
        {" "}
        Codify GO{" "}
      </Link>
      at{" "}
      <Link
        href="https://dev.codifylab.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-slate-200 hover:text-[#51c8be]"
      >
        {" "}
        Codify Lab
      </Link>
      . I incredibly enjoy building software in a clear space where design and
      engineering meet in harmony — which is pleasing to the eye and functions
      perfectly under the hood. In my spare time, I dabble in personal projects,
      a bit of freelancing, and I’m constantly learning new things, because
      knowledge is real power!
    </p>

    <p className="text-slate-400 mt-4">
      When I’m not at my computer, you can find me volunteering, playing soccer,
      immersed in reading books, meditating, or spending time with friends. I
      also love to attend workshops to soak up all the useful knowledge like a
      sponge, because life is not only work, but also constant self-development!
    </p>
  </section>
);

export default About;

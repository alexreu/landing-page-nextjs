import { ArrowDown } from "lucide-react";
import { Navbar } from "../Navbar";

export const Hero = () => {
  return (
    <section className="min-h-[2300px] bg-[url('/images/hero-bg.png')] bg-cover bg-top bg-no-repeat">
      <div className="container mx-auto">
        <Navbar />
        <div className="mx-auto flex w-96 flex-col justify-center gap-8">
          <h1 className="relative flex items-center gap-14 text-sm uppercase tracking-widest text-accent before:h-0.5 before:w-16 before:bg-accent before:content-['']">
            A Hiking guide
          </h1>
          <p className="text-3xl font-bold">
            Be prepared for the Mountains and beyond!
          </p>
          <p className="flex items-center gap-2 text-sm">
            scroll down <ArrowDown size={16} />
          </p>
        </div>
      </div>
    </section>
  );
};

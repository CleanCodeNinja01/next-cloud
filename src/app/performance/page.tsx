import Hero from "@/components/Hero";
import perfImg from "public/performance.jpg";

export default function Performance() {
  return (
    <div>
      <Hero imgData={perfImg} imgAlt="welding" title="We serve high Perf apps" />{" "}
    </div>
  );
}

// hero component --> image on background

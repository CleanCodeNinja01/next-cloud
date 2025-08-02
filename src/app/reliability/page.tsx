import Hero from "@/components/Hero";
import relImg from "public/reliability.jpg";

export default function Reliability() {
  return (
    <div>
      <Hero imgData={relImg} imgAlt="rel" title="We serve reliable apps!" />{" "}
    </div>
  );
}

// hero component --> image on background

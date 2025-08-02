import Hero from "@/components/Hero";
import scaleImg from "public/scale.jpg";

export default function Scale() {
  return (
    <div>
      <Hero imgData={scaleImg} imgAlt="steelFactory" title="Scale your app to infinity!" />{" "}
    </div>
  );
}

// hero component --> image on background

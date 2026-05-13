import SolutionWindow from "@/components/solutions/SolutionWindow";
import { SOLUTIONS } from "@/lib/solutions";

export default function SolutionsShowcase() {
  return (
    <section id="features" className="landing-section w-full flex justify-center mt-20 md:mt-28">
      <div className="w-[95%] max-w-7xl">
        <div className="section-heading-stack">
          <span className="section-ghost-h2" aria-hidden>
            SOLUTIONS
          </span>
          <h2 className="landing-h2">LOJJ solutions, window by window</h2>
        </div>
        <p className="landing-sub">
          Click through each interactive window to see how Guest Expert, Ops Lead, Review
          Specialist, and AI Manager work together.
        </p>

        <div className="solutions-wrap">
          {SOLUTIONS.map((solution) => (
            <SolutionWindow key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}

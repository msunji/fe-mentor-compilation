import "../../styles/components/solutions.scss";
import { useEffect, useState } from "react";
import Solution from "./Solution";
import SkeletonCard from "./SkeletonCard";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const loadSolutions = async () => {
    try {
      const response = await fetch("/api/solutions");
      const data = await response.json();
      setSolutions(data.solutions);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    loadSolutions();
  }, []);

  return (
    <section className="solutions">
      <div className="solutions-container">
        {solutions.length
          ? solutions.map((solution) => (
              <Solution key={solution.id} data={solution} />
            ))
          : [1, 2, 3, 4].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </section>
  );
};

export default Solutions;

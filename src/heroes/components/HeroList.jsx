import { useMemo } from "react";
import { getHeroesByPublishers } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);

  return (
    <>
      <div className="container-lg">
        <div className="row rows-cols-1 rows-cols-ms-3 g-3">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

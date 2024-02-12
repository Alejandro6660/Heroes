import { getHeroesByPublishers } from "../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublishers(publisher);
  return (
    <>
      <ul>
        {heroes.map((hero) => {
          return <li key={hero.id}>{hero.superhero}</li>;
        })}
      </ul>
    </>
  );
};
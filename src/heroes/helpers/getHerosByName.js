import { heroes } from "../data/Heroes";

export default function getHerosByName(name = "") {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
}

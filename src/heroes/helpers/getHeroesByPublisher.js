import { heroes } from "../data/Heroes";

export const getHeroesByPublishers = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};

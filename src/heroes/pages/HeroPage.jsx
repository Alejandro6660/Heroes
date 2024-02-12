import { Navigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroesById(id);
  if (!hero) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="row mt-5 mx-2">
      <div className="col-4">
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b className="text-primary">Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b className="text-primary">Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b className="text-primary">First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
      </div>
    </div>
  );
};

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroesById(id), [id]);

  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to={"/"} />;
  }
  const onReturn = () => {
    navigate(-1);
  };

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
        <h5 className="mt-3">Characters</h5>
        <p className="text-muted">{hero.characters}</p>
        <button className="btn btn-outline-danger mt-3 mx-3" onClick={onReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="my-4 col-8 m-auto">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5">
            <img
              src={heroImgUrl}
              alt={superhero}
              className="card-img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-7">
            <div className="card-body">
              <h3 className="card-title">{superhero}</h3>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}
              <div className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </div>
              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

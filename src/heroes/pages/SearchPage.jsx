import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import getHerosByName from "../helpers/getHerosByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHerosByName(q);
  console.log(heroes);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const showSearch = q.length === 0;

  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container-fluid">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} className="p-2">
            <input
              type="text"
              name="searchText"
              autoComplete="off"
              className="form-control"
              placeholder="Search a hero"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Hero</h4>
          <hr />
          <div className="p-2 w-100">
            <div
              className="alert alert-primary"
              style={{ display: showSearch ? "" : "none" }}
            >
              Search Hero
            </div>
            <div
              className="alert alert-danger"
              style={{ display: showError ? "" : "none" }}
            >
              The hero <b>{q}</b> does not exist
            </div>
            {heroes.map((heroe) => (
              <HeroCard key={heroe.id} {...heroe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

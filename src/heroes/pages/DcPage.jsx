import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <>
      <div className="container-fluid">
        <h1>DC Comics</h1>
        <hr />
        <HeroList publisher={"DC Comics"} />
      </div>
    </>
  );
};

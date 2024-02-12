import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="hero" element={<HeroPage />} />
        <Route path="search" element={<SearchPage />} />
        {/*         <Route path="login" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};

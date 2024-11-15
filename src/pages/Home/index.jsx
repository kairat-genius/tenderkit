import React from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
// components home
import { ContentHome, SearchBox, AccountResetPassword } from "./HomeComponents";
import  MetaTags  from "../../components/MetaTags";

const Home = () => {
  const { uuid, token } = useParams();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const email = queryParams.email;
  return (
    <main className="ng-star-inserted">
      <MetaTags page="home"/>
      <section className="hero">
        <div className="hero__container container">
          <h1 className="hero__title">
          Поиск, обучение и сопровождение тендеров в Казахстане на всех площадках.
          </h1>

          <SearchBox />
        </div>
      </section>
      <ContentHome />
      {uuid && token && (
        <AccountResetPassword uuid={uuid} token={token} email={email} />
      )}
    </main>
  );
};

export default Home;

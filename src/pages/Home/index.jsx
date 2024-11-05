import React from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
// components home
import { ContentHome, SearchBox, AccountResetPassword } from "./HomeComponents";
import { MetaTags } from "../../components";

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
            Поиск тендеров в&nbsp;Казахстане по&nbsp;всем площадкам
            <br />
            в&nbsp;одном месте
          </h1>
          <SearchBox />
          <dl className="hero__dl">
            <dt className="hero__dt"> Поиск по: </dt>
            <dd className="hero__dd">
              <a routerlink="plans" className="hero__link" href="/plans">
                планам,
              </a>
            </dd>
            <dd className="hero__dd">
              <a routerlink="result" className="hero__link" href="/result">
                закупкам,
              </a>
            </dd>
            <dd className="hero__dd">
              <a
                routerlink="contracts"
                className="hero__link"
                href="/contracts"
              >
                договорам
              </a>
            </dd>
          </dl>
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

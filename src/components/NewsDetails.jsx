import React, { useEffect, useState } from "react";
import Header from "./Header";
import RighAside from "./homelayout/RighAside";
import NewsDetailsCard from "../pages/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [newsDetails, setNewsDetails] = useState([]);

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const newsDetails = data.find((news) => news.id === id);
    setNewsDetails(newsDetails);
  }, [id, data]);

  return (
    <>
      <header className="py-3">
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <section className=" col-span-9">
          <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;

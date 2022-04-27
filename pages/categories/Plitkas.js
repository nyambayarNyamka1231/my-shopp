import React from "react";
import Layout from "../../components/Layout";
import ProductsList from "../../components/ProductsList";
import Product from "../../components/Product";
import { getAllPlitkas } from "../../lib/api";

const Plitkas = ({ plitkas }) => {
  const length = plitkas.length;

  return (
    <div>
      <Layout>
        <ProductsList length={length}>
          {plitkas &&
            plitkas.map((plitka) => {
              const { ner, code, une } = plitka?.attributes;
              return <Product ner={ner} code={code} une={une} key={ner} />;
            })}
        </ProductsList>
      </Layout>
    </div>
  );
};

export default Plitkas;

export const getStaticProps = async () => {
  const plitkas = (await getAllPlitkas()) || [];

  const allPlitkas = plitkas?.data;
  return {
    props: {
      plitkas: allPlitkas || [],
    },
  };
};

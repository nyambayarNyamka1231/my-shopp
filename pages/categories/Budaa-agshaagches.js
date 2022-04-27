import React from "react";
import Layout from "../../components/Layout";
import ProductsList from "../../components/ProductsList";
import Product from "../../components/Product";
import { getAllUsButsalgagches } from "../../lib/api";

const BudaaAgshaagches = ({ usButsalgagches }) => {
  const length = usButsalgagches.length;

  return (
    <div>
      <Layout>
        <ProductsList length={length}>
          {usButsalgagches &&
            usButsalgagches.map((usButsalgagch) => {
              const { ner, code, une } = usButsalgagch?.attributes;
              return <Product ner={ner} code={code} une={une} key={ner} />;
            })}
          BudaaAgshaagches
        </ProductsList>
      </Layout>
    </div>
  );
};

export default BudaaAgshaagches;

export const getStaticProps = async ({ params }) => {
  const usButsalgagches = (await getAllUsButsalgagches()) || [];
  const allUsButsalgagches = usButsalgagches?.data;
  return {
    props: {
      usButsalgagches: allUsButsalgagches || [],
    },
  };
};
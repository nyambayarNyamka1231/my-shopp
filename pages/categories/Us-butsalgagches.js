import React from "react";
import Layout from "../../components/Layout";
import ProductsList from "../../components/ProductsList";
import Product from "../../components/Product";
import { getAllUsButsalgagches } from "../../lib/api";

const UsButsalgagches = ({ usButsalgagches }) => {
  const length = usButsalgagches.length;

  return (
    <div>
      <Layout>
        <ProductsList length={length}>
          {usButsalgagches &&
            usButsalgagches.map((usButsalgagch) => {
              const { ner, code, une } = usButsalgagch?.attributes;
              const { id } = usButsalgagch;
              return (
                <Product ner={ner} code={code} une={une} key={ner} id={id} />
              );
            })}
        </ProductsList>
      </Layout>
    </div>
  );
};

export default UsButsalgagches;

export const getStaticProps = async () => {
  const usButsalgagches = (await getAllUsButsalgagches()) || [];
  const allUsButsalgagches = usButsalgagches?.data;

  return {
    props: {
      usButsalgagches: allUsButsalgagches || [],
    },
  };
};

import React from "react";
import { getAllUsButsalgagches } from "../../lib/api";
import client from "../../clients/apollo-client";
import { gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query UsButsalgagch($id: ID) {
    usButsalgagch(id: $id) {
      data {
        attributes {
          ner
          code
          une
        }
      }
    }
  }
`

const UsButsalgagch = ({ data }) => {
  const { code, ner, une } = data.usButsalgagch.data.attributes;
  return (
    <div></div>
  )
}
export default UsButsalgagch;

export const getStaticProps = async ({ params }) => {
  const id = params.UsButsalgagch;
  const { data } = await client.query({
    query: EXCHANGE_RATES,
    variables: { id },
  });
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const usButsalgagches = await getAllUsButsalgagches();
  return {
    paths: usButsalgagches.data.map((usButsalgagch) => ({
      params: {
        UsButsalgagch: usButsalgagch.id,
      },
    })),
    fallback: true,
  };
};

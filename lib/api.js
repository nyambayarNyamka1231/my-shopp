import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query UsButsalgagches {
    usButsalgagches {
      data {
        attributes {
          ner
          code
          une
        }
      }
    }
  }
`;

export const UsNuud = async (id) => {
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);
  // return { data, loading, error };
  return null;
};

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json?.data;
}

export async function getUsButsalgagch(ID) {
  const data = await fetchAPI(
    `
    query UsButsalgagch($id: ID!) {
      usButsalgagch(id: $id} ){
        data{
          attributes{
            ner
            code
            une
          }
        }
      } 
    }
    `,
    {
      variables: {
        ID,
      },
    }
  );
  return data?.usButsalgagch;
}

export async function getAllUsButsalgagches(preview) {
  const data = await fetchAPI(
    `
    query usButsalgagches{
      usButsalgagches{
        data {
          id
          attributes {
            ner
            code 
            une
          }
        }
      }
    }
    `
  );
  return data?.usButsalgagches;
}

export async function getAllPlitkas() {
  const data = await fetchAPI(
    `
    query plitkas{
      plitkas{
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
  );
  return data?.plitkas;
}

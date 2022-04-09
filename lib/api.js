async function fetchAPI(query, { variables } = {}) {
  // console.log("=============+>", process);
  const res = await fetch(`https://guarded-sea-09382.herokuapp.com/graphql`, {
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

export async function getAllUsButsalgagches(preview) {
  const data = await fetchAPI(
    `
    query usButsalgagches{
      usButsalgagches{
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
  return data?.usButsalgagches;
}

export async function getAllPlitkas(preview) {
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

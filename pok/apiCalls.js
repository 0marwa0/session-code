let url = "https://pokeapi.co/api/v2/pokemon";

export let getData = async () => {
  let data = [];
  await fetch(url)
    .then((items) => items.json())
    .then((res) => {
      data = res.results;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

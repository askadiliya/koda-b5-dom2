async function getPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=30";

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`${response.status}: ${response.statusText}`);

    const data = await response.json();
    const characters = data.results;

    const target = document.querySelector("main");

    // container utama
    const container = document.createElement("div");
    container.classList.add("flexs");
    target.append(container);

    for (const character of characters) {
      const res = await fetch(character.url);
      const pokemon = await res.json();

      // element card
      const card = document.createElement("div");
      card.classList.add("pokemon");

      // gambar
      const img = document.createElement("img");
      img.src = pokemon.sprites.front_shiny;
      img.alt = pokemon.name;

      // nama
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("item");
      nameDiv.textContent = pokemon.name;

      // type (benar → pokemon.types)
      const typeDiv = document.createElement("div");
      typeDiv.classList.add("item");
      typeDiv.textContent = pokemon.types.map((t) => t.type.name).join(", ");

    
      card.append(img, nameDiv, typeDiv);

      container.appendChild(card);
    }
  } catch (error) {
    console.error(error);
  }
}

getPokemon();

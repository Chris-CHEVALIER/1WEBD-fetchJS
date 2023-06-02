fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response =>
  response.json().then(pokemons => {
    pokemons.results.forEach(pokemon => {
        let li = document.createElement("li")
        li.innerHTML = pokemon.name
        let ul = document.querySelector("#pokemon-list")
        ul.appendChild(li);
    })
  })
)

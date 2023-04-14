const informacoes = document.getElementById('cabecalho')
const loadMoreButton = document.getElementById('loadMoreButton')


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(pokemon => `
                <div class="cabecalho" id="cabecalho">
                    <a href="/assets/index.html" class="voltar">&#8592;</a>
                    <h1 id="nomePokemon">${pokemon.name}</h1>
                    <p id="numero">#${pokemon.number}</p>

                    <div class="detalhe">
                        <div class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </div>
                    </div>
                    <img src="/imagens/bulbasaur.png.png">
                </div>
                <div class="informacoes">
                    <p id="texto">About</p>
                    <table id="detalhes">        
                            <tr>
                                <td id="detalhe">Species</td>
                                <td id="tipo">Seed</td>
                            </tr>
                            <tr>
                                <td id="detalhe">Heigth</td>
                                <td id="tipo">0.7m</td>
                            </tr>
                            <tr>
                                <td id="detalhe">Weight</td>
                                <td id="tipo">6.9kg</td>
                            </tr>
                            <tr>
                                <td id="detalhe">Abilities</td>
                                <td id="tipo">Overgrow</td>
                            </tr>
                    </table>
                </div>
            `).join('')

        pokemonList.innerHTML += newHtml
    })
} 
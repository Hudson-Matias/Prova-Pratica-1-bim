function changePageTitle(title) {
    document.title = title
}

function generateInfoSection(uf) {
    const ul = document.createElement('h1')
    ul.id = "teste"
    ul.textContent = `Informações sobre ${uf}`

    section.appendChild(ul)
}

async function getPokemonData(uf) {

    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/{uf}`)

        const jsonData = await data.json()

        generateInfoSection(jsonData.sprites.front_default, uf)
    } catch (error) {
        console.error(error)
    }
}

function getSearchParams() {
    if (!location.search) {
        return
    }

    const urlSearchParams = new URLSearchParams(location.search)

    const uf = urlSearchParams.get('name')

    changePageTitle(`Pagina do ${uf}`)
    getPokemonData(uf)
}

document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
})
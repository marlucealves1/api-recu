
function descryptId(id){
    return parseInt(id, 36);
}

async function loadCharacter(baseUrl, id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`)
        if(!response){
            throw new Error('Erro ao carregar o personagem')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    
    }
}

async function loadAll() {
    const urlParam = new URLSearchParams(window.location.search);
    const idParam = urlParam.get('id');
    
        if(!idParam){
            console.log('ID não encontrado na URL')
            return
        }
    const URL = ''

    const idDescrypted = descryptId(idParam)

    try {
        const character = await loadCharacter(URL, idDescrypted)
        console.log('Personagem: ', character)
        renderizarPersonagem(character)
    } catch (error) {
        console.log(error)
    }
}

loadAll()

async function renderizarPersonagem(character) {
    
    const img = document.querySelector('.img')
    const name = document.querySelector('.name')
    const status = document.querySelector('.status')
    const species = document.querySelector('.species')
    const gender = document.querySelector('.gender')
    const type = document.querySelector('.type')
    const location = document.querySelector('.location')
    const origin = document.querySelector('.origin')

    img.src = character.image
    name.innerHTML = character.name
    status.innerHTML = character.status
    species.innerHTML = character.species
    gender.innerHTML = character.gender
    type.innerHTML = character.type
    location.innerHTML = character.location.name
    origin.innerHTML = character.origin.name
}
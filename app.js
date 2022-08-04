const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})


const fetchData = async () => {
    try {
        const res = await fetch('https://strapi.armar.ar/productos')
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {

        let cant = producto.foto.length;
        console.log("numero " + cant)
        if (cant != 0) {
            templateCard.querySelector('h5').textContent = producto.nombre;
            templateCard.querySelector('p').textContent = producto.color;
            templateCard.querySelector('a').setAttribute('href', producto.uri);

            templateCard.querySelector('img').setAttribute('src', 'https://armar.ar/src/images/products/' + producto.foto[0].name);

        }



        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}


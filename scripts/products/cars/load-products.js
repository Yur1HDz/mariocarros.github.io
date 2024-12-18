const productResponse = await fetch('../database/products/cars/registry.json')
const products = await productResponse.json()

const contentGrid = document.querySelector('.products__grid')

const filterOld = document.getElementById('old-type')
const filterSport = document.getElementById('sport-type')
const filterModern = document.getElementById('modern-type')
const filterClassic = document.getElementById('classic-type')
const filterEletric = document.getElementById('eletric-type')

function loadProducts() {
    contentGrid.innerHTML = ''

    const types = []

    if (filterEletric.checked) {
        types.push('electric')
    }

    if (filterOld.checked) {
        types.push('old')
    }

    if (filterClassic.checked) {
        types.push('classic')
    }

    if (filterSport.checked) {
        types.push('sports')
    }

    if (filterModern.checked) {
        types.push('modern')
    }

    const cars =
        types.length === 0
            ? products
            : products.filter((e) => types.includes(e.type))

    for (const car of cars) {
        const card = document.createElement('li')
        card.className = 'product__card'

        const cardImage = document.createElement('div')
        cardImage.className = 'product__card__image'

        const img = document.createElement('img')
        img.src = car.image

        cardImage.appendChild(img)

        const cardContent = document.createElement('div')
        cardContent.className = 'product__card__content'

        const cardName = document.createElement('p')
        cardName.className = 'product__card__name'
        cardName.textContent = car.name

        const cardInfo = document.createElement('div')
        cardInfo.className = 'product__card__info'

        const cardPrice = document.createElement('p')
        cardPrice.className = 'product__card__price'
        cardPrice.textContent = car.price

        const cardYear = document.createElement('p')
        cardYear.className = 'product__card__year'
        cardYear.textContent = `${car.year[0]}/${car.year[1]}`

        const cardFooter = document.createElement('div')
        cardFooter.className = 'product__card__footer'

        const addCartIcon = document.createElement('i')
        addCartIcon.className = 'ti ti-shopping-cart-plus'

        cardFooter.appendChild(addCartIcon)

        card.appendChild(cardImage)
        cardContent.appendChild(cardName)
        cardInfo.appendChild(cardPrice)
        cardInfo.appendChild(cardYear)
        cardContent.appendChild(cardInfo)

        card.appendChild(cardContent)
        card.appendChild(cardFooter)

        contentGrid.appendChild(card)
    }
}

filterClassic.addEventListener('change', () => loadProducts())
filterSport.addEventListener('change', () => loadProducts())
filterOld.addEventListener('change', () => loadProducts())
filterEletric.addEventListener('change', () => loadProducts())
filterModern.addEventListener('change', () => loadProducts())

loadProducts()

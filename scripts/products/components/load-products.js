const productResponse = await fetch(
    '../database/products/components/registry.json'
)
const products = await productResponse.json()

const contentGrid = document.querySelector('.products__grid')

function loadProducts() {
    for (const product of products) {
        const card = document.createElement('li')
        card.className = 'product__card'

        const cardImage = document.createElement('div')
        cardImage.className = 'product__card__image'

        const img = document.createElement('img')
        img.src = product.image

        cardImage.appendChild(img)

        const cardContent = document.createElement('div')
        cardContent.className = 'product__card__content'

        const cardName = document.createElement('p')
        cardName.className = 'product__card__name'
        cardName.textContent = product.name

        const cardInfo = document.createElement('div')
        cardInfo.className = 'product__card__info'

        const cardPrice = document.createElement('p')
        cardPrice.className = 'product__card__price'
        cardPrice.textContent = product.price

        const cardFooter = document.createElement('div')
        cardFooter.className = 'product__card__footer'

        const addCartIcon = document.createElement('i')
        addCartIcon.className = 'ti ti-shopping-cart-plus'

        cardFooter.appendChild(addCartIcon)

        card.appendChild(cardImage)
        cardContent.appendChild(cardName)
        cardContent.appendChild(cardPrice)
        cardContent.appendChild(cardInfo)

        card.appendChild(cardContent)
        card.appendChild(cardFooter)

        contentGrid.appendChild(card)
    }
}

loadProducts()

function yearPrice(price, costsYear, textPrice) {
    price.forEach((item, index) => {
        item.textContent = `$${costsYear[index]}/mo`
    })
    textPrice[textPrice.length-1].classList.remove('blur')
    textPrice[0].classList.add('blur')
}

function monthPrice(price, costsMonth, textPrice) {
    price.forEach((item, index) => {
        item.textContent = `$${costsMonth[index]}/mo`
    })
    textPrice[textPrice.length-1].classList.add('blur')
    textPrice[0].classList.remove('blur')
}

export {yearPrice, monthPrice}
import data from './data.js'

const itemsContainer = document.getElementById('items')

const itemList = document.getElementById("item-list")
itemList.innerHTML = '<li> Hello World</li>'

const cartQty = document.getElementById("cart-qty")

const cartTotal = document.getElementById("cart-total")

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)

    // create a paragraph element for a description
    let desc = document.createElement('P')
    // give the paragraph text from the data
    desc.innerText =data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)
    // do the same thing for price
    let price = document.createElement('P')
    let button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    price.innerText = data[i].price
    newDiv.appendChild(price)
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    // put new div inside items container
    itemsContainer.appendChild(newDiv)
    
}

const cart = []
// --------------------------------------------------
// add item
function addItem(name, price){
    for (let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name){
            cart[i].qty += 1
            return
        }
    }
    const item = { name: name, price: price, qty: 1 }
    cart.push(item)
}
// ---------------------------------------------------
// show items
function showItems() {
    const qty = getQty()
    // console.log(`You have ${qty} items in your cart`)
    cartQty.innerHTML = `You have ${qty} items in your cart`

    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
        // console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty
        const { name, price, qty } = cart[i]

        itemStr += `<li> 
        ${name} 
        $${price} x ${qty} =
        ${qty * price}
        </li>`
    }

    const all_items_button = Array.from(document.querySelectorAll("button"))

    all_items_button.forEach(elt => elt.addEventListener('click', () => {
        addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
        showItems()
    }))

    itemList.innerHTML = itemStr

    // console.log(`Total in cart: $${total.toFixed(2)}`)
    cartTotal.innerHTML = `Total in cart: $${getTotal()}`
}

// ---------------------------------------------------
// get qty
function getQty(){
    let qty = 0
    for (let i = 0; i < cart.length; i += 1){
        qty += cart[i].qty
    } 
    return qty
}

// ---------------------------------------------------
// get total
function getTotal(){
    let total = 0 
    for (let i = 0; i < cart.length; i += 1){
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}

// ---------------------------------------------------
// remove item 
function removeItem(name, qty = 0){
    for (let i=0; i < cart.length; i += 1){
        if (cart[i].name === name){
            if (qty > 0){
                cart[i].qty -= 1
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
        return
        }
    }
}

// ---------------------------------------------------
addItem('Happy', 5.00)

showItems()
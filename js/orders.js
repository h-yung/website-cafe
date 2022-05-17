let products = [
    {id:"a", sale: true, name: 'Flaky almond butter croissant', price:1.25},
    {id:"b", sale: true, name: 'Chocolate croissant', price:`1.70`},
    {id:"c", sale: true, name: 'Ginger cinnamon shortbreads (2 per order)', price:`3.00`},
    {id:"d", sale: true, name: 'New: Apple honey cake (3 per order)', price:10.25},
    {id:"e", sale: true, name: 'New: Brown butter financiers (2 per order)', price:6.75},
    {id:"f", sale: true, name: 'New: Cinnamon sugar-dusted sourdough pretzel', price:`4.10`},
    {id:"g", sale: true, name: 'New: Cranberry sourdough (1/4 loaf)', price:`3.50`},
    {id:"h", sale: false, name: 'New: Cinnamon-peach rose galette', price:8.75},
    {id:"i", sale: false, name: 'Chocolate raspberry galette', price:`6.50`},
    {id:"j", sale: false, name: 'New: Purple sweet yam crepes', price:`8.50`},
    {id:"k", sale: false, name: 'Pear-ginger and elderflower crepes', price:`9.00`},
    {id:"l", sale: true, name: 'Blueberry and havarti sourdough sandwich', price:`11.50`},
    {id:"m", sale: true, name: 'Creme brulee madeleines (3 per order)', price:7.25},
    {id:"n", sale: true, name: 'Yuzu madeleines (3 per order)', price:`7.00`},
    {id:"o", sale: true, name: 'Strawberry shortcake (1 slice)', price:5.25},
    {id:"p", sale: true, name: 'Dark chocolate Guinness cookie', price:3.25},
    {id:"q", sale: true, name: 'Sea salt and caramel cookie', price:3.25},
    {id:"r", sale: true, name: 'Blueberry sponge cake (1 slice)', price:`5.00`},
    {id:"s", sale: true, name: 'Pandan butter mochi cake (1 slice)', price:5.25},
    {id:"t", sale: true, name: 'Hazelnut praline tart', price:4.25},
]

// will contain the selected items and quantities
let currentOrder = [];

/*************
 CREATE MENU ON LOAD
 ************ */

makeMenu();

function makeMenu(){
    for (let item of products){
        const orderItem = document.createElement('li')
        orderItem.classList.add('wrapper')
        orderItem.id = `${item.id}`
        document.querySelector('#itemList').appendChild(orderItem)
    
        const itemName = document.createElement('span')
        itemName.textContent = item.name;
        document.querySelector(`#${item.id}`).appendChild(itemName)
    
        const priceSelect = document.createElement('section')
        priceSelect.classList.add('wrapper')
        document.querySelector(`#${item.id}`).appendChild(priceSelect)
    
        const unitPrice = document.createElement('span')
        unitPrice.id = `${item.id}Price`;
        // fix formatting presentation at some point
        unitPrice.textContent = item.price;
        document.querySelector(`#${item.id} section`).appendChild(unitPrice)
    
        if (item.sale === true){
            // create select
            const select = document.createElement('select')
            select.id = `${item.id}Count`
            select.setAttribute('name', 'order count')
            document.querySelector(`#${item.id} section`).appendChild(select)
            
            const defaultO = document.createElement('option')
            defaultO.setAttribute('selected', true)
            defaultO.textContent = "--"
            document.querySelector(`#${item.id} section select`).appendChild(defaultO)
    
            for (let i=1; i <= 4; i++){
                const option = document.createElement('option')
                option.value = `${i}`;
                option.textContent = `${i}`;
                document.querySelector(`#${item.id} section select`).appendChild(option)
            }
        }else if (item.sale === false){
            // cafe only specification
            const cafeOnly = document.createElement('span')
            cafeOnly.style.fontSize = 'smaller'
            cafeOnly.textContent = 'Cafe only'
            document.querySelector(`#${item.id} section`).appendChild(cafeOnly)
        }
    }

}


/**********
 CALCULATIONS
 * ********* */

const sumUp = document.querySelector('#sumUp')
sumUp.addEventListener('click', calcTotal) 
//could rewrite to call calc upon 'change' for each select dropdown as a running tally, but that seems less efficient than the setup currently enabled by the naming schema
function calcTotal(){
    document.querySelector('#summary ul').replaceChildren()
    let total = 0;
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t']
    for (const letter of arr){
        total+= calcSubTotal(letter)
    }
    if (!String(total).includes(".")){
        total = String(total) + ".00"
    } else if (String(total).split('.')[1].length >=2){
        // this is separate from the following if/else if in case it reduces to no decimal places
        total = Number.parseFloat(total).toFixed(2)
    } else if (String(total).split('.')[1].length === 1){
        total = String(total) + "0"
    } 

    const subtotal = document.createElement('li')
    document.querySelector('#summary ul').appendChild(subtotal)
    const subLabel = document.createElement('span')
    subLabel.textContent = '*Subtotal:';
    document.querySelector('#summary ul li:last-child').appendChild(subLabel)
    const showTotal = document.createElement('span')
    document.querySelector('#summary ul li:last-child').appendChild(showTotal)
    
    document.querySelector('#summary ul li:last-child span:last-child').textContent = `$${total}`
    if (total > 0){
        document.querySelector('#checkout').classList.remove('disabled')
    }
}

// where itemLetter = lowercase letter as string for select parents. 
function calcSubTotal(itemLetter){
    let count;
    if (document.querySelector(`#${itemLetter}Count`)){
        count = document.querySelector(`#${itemLetter}Count`).value
    }
    let price = document.querySelector(`#${itemLetter}Price`).textContent
    let subtotal = 0;
    let subtotalShown;
    if (count && count !=="--"){
        subtotal = +count * +price
        // console.log(`Count for item is ${count}`)
        // console.log(`${count} x ${price}`)
    }
    if (!String(subtotal).includes(".")){
        subtotalShown = String(subtotal) + ".00"
    } else if (String(subtotal).split('.')[1].length >= 2){
        // this is separate from the following if/else if in case it reduces to no decimal places
        subtotalShown = Number.parseFloat(subtotal).toFixed(2)
    } else if (String(subtotal).split('.')[1].length === 1){
        subtotalShown = String(subtotal) + "0"
    } 

        //element creation for summary    
    if (count && count !== '--'){
        const chosen = document.createElement('li');
        chosen.classList.add('wrapper');
        document.querySelector('#summary ul').appendChild(chosen);
        
        const chosenSum = document.createElement('span')
        const itemName = document.querySelector(`#${itemLetter} span:first-of-type`).textContent

        chosenSum.textContent = `${itemName} x ${count}`
        // chosenSum.textContent = `${item.name} x ${item.count}`
        document.querySelector('#summary ul li:last-child').appendChild(chosenSum)

        const chosenSubtotal = document.createElement('span')
        chosenSubtotal.textContent = `$${subtotalShown}`
        // chosenSubtotal.textContent = `${item.subtotal}`
        document.querySelector('#summary ul li:last-child').appendChild(chosenSubtotal)

        // place into new object and add to array for passing onwards
        const ordered = {id:itemLetter, itemName, count, price, subtotal}
        currentOrder.push(ordered);
    }
    return subtotal
}
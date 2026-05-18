let cart={
    item1:{
        itemName:"Handbag",
        itemPrice:48
    
    },
    item2={
        itemName:"iPhone 17",
        itemPrice:799
    }
}

let jsonCart= JSON.stringify(cart)
let finalJSCart= JSON.parse(jsonCart)

console.log(finalJSCart)
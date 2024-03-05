let plusicon = document.getElementsByClassName("plus") //buttons to be clicked
let text = document.getElementsByClassName("q")

let amount = Math.max(plusicon.length, text.length)

let icons = {
    plus: "assets/images/icon-plus.svg",
    minus: "assets/images/icon-minus.svg"
}
let descriptions = {
    refundsandreturns: "All products are uniquely made to order at PODpartner. Therefore, we do not support returns or exchanges if you/your customer ordered the wrong size/color, or provided incorrect shipping details. You are responsible for capturing the correct information from your customers.",
    shippingandhandling: "Customers will be notified when their order ships out. The tracking number will be automatically synced to your storefront so that customers can be updated on the shipping status.",
    privacyandownership: "The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term personal information, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.",
    termsofservice: "This website is operated by Ascend. Throughout the site, the terms “we”, “us” and “our” refer to Ascend. Ascend offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here."
}

for (let i = 0; i<amount; i++) {
    text[i].addEventListener("click", function(event) { //clicking the text
        let element = event.target
        let svg = element.parentNode.querySelector("img")

        let desc = element.parentNode.querySelector(".desc")
        let find = descriptions[element.innerHTML.split(" ").join("").toLowerCase()] //finds descripton by title name

        let card = document.querySelector(".card") //changes height based off of new description
        let currentheight = card.clientHeight
        let prevheight = 0
        let offset = 50
        if (svg.src.endsWith(icons.plus)) { //changes img
            svg.src = icons.minus

            desc.innerHTML = find //sets description

            card.style.height = ((currentheight + desc.clientHeight) + offset) + "px" //formula for calculating the height once text put
        } else {//resets
            svg.src = icons.plus

            prevheight = desc.clientHeight
            desc.innerHTML = ""
            
            card.style.height = ((currentheight - prevheight) - offset) + "px" //removing the height
        }
    })
}
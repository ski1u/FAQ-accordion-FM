let plusicon = document.getElementsByClassName("plus") //buttons to be clicked
let text = document.getElementsByClassName("q")

let amount = Math.max(plusicon.length, text.length)

let icons = {
    plus: "icon-plus.svg",
    minus: "icon-minus.svg"
}
let descriptions = {
    refundsandreturns: "We strive to ensure that you are completely satisfied with your purchase. If, for any reason, you are not satisfied with your purchase, we offer a straightforward refund and return policy to make your shopping experience hassle-free.",
    shippingandhandling: " For eligible returns initiated within a week of purchase or delivery, customers can expect refunds issued promptly in the original form of payment or as store credit if necessary. While customers are responsible for return shipping costs, we cover such expenses for damaged, defective, or incorrect items.",
    privacyandownership: "The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term personal information, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.",
    termsofservice: "In these terms of service, Your User Content shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying Your User Content, you grant this business a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media."
}

for (let i = 0; i<amount; i++) {
    text[i].addEventListener("click", function(event) {
        let element = event.target
        let svg = element.parentNode.querySelector("img")

        let desc = element.parentNode.querySelector(".desc")
        let find = descriptions[element.innerHTML.split(" ").join("").toLowerCase()]

        let card = document.querySelector(".card")
        let currentheight = card.clientHeight
        let prevheight = 0
        let offset = 50
        if (svg.src.endsWith(icons.plus)) {
            svg.src = icons.minus

            desc.innerHTML = find

            card.style.height = ((currentheight + desc.clientHeight) + offset) + "px"
        } else {
            svg.src = icons.plus

            prevheight = desc.clientHeight
            desc.innerHTML = ""
            
            card.style.height = ((currentheight - prevheight) - offset) + "px"
        }
    })
}

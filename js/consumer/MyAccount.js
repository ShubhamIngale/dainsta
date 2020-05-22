let addressDiv = document.getElementById('address');
let paymentDiv = document.getElementById('payment')

let addressData = [
    { name: 'John Cena', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia nam est expedita eligendi aliquam eos, quidem, magnam voluptas possimus harum temporibus' },
    { name: 'John Cena', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia nam est expedita eligendi aliquam eos, quidem, magnam voluptas possimus harum temporibus' }

]

let paymentData = [
    { name: 'Master Card ****0007', expires: 'Expires on 11/23' },
    { name: 'Master Card ****0127', expires: 'Expires on 09/21' }
]

let addressDom = addressData.map(item => {
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let buttonFlex = document.createElement('div')
    let editLink = document.createElement('a')
    let removeLink = document.createElement('a')
    let addressCard = document.createElement('div');

    addressCard.classList.add('address-card')
    buttonFlex.classList.add('button-flex')

    editLink.setAttribute('href', '#')
    editLink.appendChild(document.createTextNode('Edit'))

    removeLink.setAttribute('href', '#')
    removeLink.appendChild(document.createTextNode('Remove'))

    h3.appendChild(document.createTextNode(item.name));
    p.appendChild(document.createTextNode(item.address))

    buttonFlex.appendChild(editLink)
    buttonFlex.appendChild(removeLink)
    addressCard.appendChild(h3)
    addressCard.appendChild(p)
    addressCard.appendChild(buttonFlex)

    return addressCard;
})


addressDom.forEach(item => {
    addressDiv.appendChild(item)
})


let paymentDom = paymentData.map(item => {
    let paymentCard = document.createElement('div');
    let cardHead = document.createElement('div');
    let cardDetails = document.createElement('div');
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let buttonFlex = document.createElement('div')
    let editLink = document.createElement('a')
    let removeLink = document.createElement('a')
    let img = document.createElement('img');

    paymentCard.classList.add('payment-card');
    cardHead.classList.add('card-head');
    cardDetails.classList.add('card-details');
    buttonFlex.classList.add('button-flex');

    img.setAttribute('src', 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png')

    editLink.setAttribute('href', '#')
    editLink.appendChild(document.createTextNode('Edit'))

    removeLink.setAttribute('href', '#')
    removeLink.appendChild(document.createTextNode('Remove'))

    h3.appendChild(document.createTextNode(item.name));
    p.appendChild(document.createTextNode(item.expires))

    buttonFlex.appendChild(editLink)
    buttonFlex.appendChild(removeLink)

    cardDetails.appendChild(h3);
    cardDetails.appendChild(p);

    cardHead.appendChild(img);
    cardHead.appendChild(cardDetails);

    paymentCard.appendChild(cardHead);
    paymentCard.appendChild(buttonFlex);
    return paymentCard;

})


paymentDom.forEach(item => {
    paymentDiv.appendChild(item)
})



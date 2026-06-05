let price=[250,645,300,900,50];
let OfferPrice=[];
let discount;
for (let value of price)
{
     console.log(`Original price:${value}`);
     discount=(value*90)/100;
     OfferPrice=[discount];
     console.log(`The Offer price is: ${OfferPrice}`);
}
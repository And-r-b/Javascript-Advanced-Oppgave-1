// Valgte Case 1

// Regn ut verdien av hele Alvas lager
// Bruk .reduce() for å finne den totale kostnaden av alle produktene.
// Alva må vite dette for å sette riktig pris på forsikringen av varene sine.

const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];

/* Case 1-1
Her ville Alva ha oversikt over produkter som var under 200 gullmynter.
Vi ladge en variable for arrayet og hentet arrayet, også satte inn en arrow funksjon
som da resulterte til en valueOf() også satt the om valueOf() er lavere enn 200.
Tilslutt så setter vi in en console.log(lowPrices) for å få resultatet ut.
*/

const lowPrices = products.filter(lowprice => lowprice.price.valueOf() < 200);
console.log(lowPrices);


/* Case 1-2
Alva ville ha oversikt over alle produktene sine sånn at hun kunne lage skilt av de.

Så med .map() Så tokk vi ut navnene til produktene ut og satt dem in i et nytt array med bare produkt navnene.
*/

const productNames = products.map(product => product.name);
console.log(productNames);


/* Case 1-3
Alva ville ha oversikt over spesifike produkter som var elektronikk. Så her er måten det ble gjort på.

Jeg filtrerte kategorien electronics med .filter() og lagde en ny array med .map med navnet for å bare få ut navnene
til produktet som hadde kategorien electronics.
*/

const electronicNames = products
  .filter(product => product.category === "electronics")
  .map(product => product.name);

console.log(electronicNames);


/* Case 1-4
Alva ville sjekke om det er et produkt som er over 1000 gullmynter
og hvis det var så skulle den bli plassert i en luksuss hylle.

For å sjekke dette så ladge vi en .some() metode som sjekker om hvis
vi har priser som er større enn 1000
så vil det bli plassert i hylla.
*/
const expensiveProduct = products.some(product => product.price > 1000);
console.log(expensiveProduct);

/* Case 1-5
Alva ville ha totale verdien til alle produktene for sin forsikring.
Så jeg ladge en .reduce() for å supplere alt til sammen. deretter en console.log() for å få ut svare.
*/

const totalCost = products.reduce((total, item) => total + item.price, 0);
console.log(totalCost); // 2850
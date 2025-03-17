// Valgte Case 1

// Finn luksusproduktene i Alvas sortiment
// Bruk .some() for å sjekke om det finnes produkter som koster mer enn 1000 gullmynter.
// Hvis ja, vil Alva legge dem i et spesielt luksushjørne i butikken.

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

*/



/* Case 1-5

*/
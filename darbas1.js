// 1. Sukurti klasę Automobilis
 class Automobilis

// konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
// - this.brand
// - this.model
// - this.price

     constructor(brand, model, price) {
     this.brand = BMW;
     this.model = M8;
     this.price = $130,000;
     }

// 2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:

 const butter = new Automobilis('BMW', 'M8', '$130,000')
 const salt = new Automobilis('Lambo', 'Urus Performante', '$260,675')
 const sugar = new Automobilis('Rolls-Royce', 'Phantom', '$460,000')

// 3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

console.log(butter)
console.log(salt)
console.log(sugar)

// 4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
console.log(butter.price)
console.log(salt.price)
console.log(sugar.price)

console.log(butter.model)
console.log(salt.model)
console.log(sugar.model)

console.log(butter.brand)
console.log(salt.brand)
console.log(sugar.brand)

// 5. Padidinkite Automobilis objektų kainas šimtu.

butter.price = butter.price + 100
salt.price = salt.price + 100
sugar.price = sugar.price + 100

// 6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

console.log(butter.price)
console.log(salt.price)
console.log(sugar.price)

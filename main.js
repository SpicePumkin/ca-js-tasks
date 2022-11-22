console.group('1. Sukurti 5 kintamuosius, kurie apibūdintu jus. Kintamuosius atspausdinkite įvardindami kintamųjų pavadinimus.');

const mood = 'drovus'
const mood1 = 'užsispyręs'
const mood2 = 'kantrus'
const mood3 = 'mandagus'
const mood4 = 'atkaklus'

console.groupEnd();

console.group('2. Parašykite salyginį sakinį, kuris pagal jūsų 5 kintamuosius (kuriuos pakeitinėsite) atspausdintų skirtingą tekstą');

{
    const username = 15
    const reqpassword = 16
    
    let msg;
    if (username >= reqpassword) {
        console.log('Succesful')
     } else {
        console.log('Incorrect')
    }
}

console.groupEnd();

console.group('3. Parašykite switch salyginį sakinį patikrinti jūsų būseną ("atsikėlęs" | "miegantis" | "pavargęs") ir pagal tai priskirkite 6 kintamojo (planas) reikšmę');

const status = 'atsikeles';
    switch(state) {
    case 'atsikeles': plan = 'eit issimaudyt'; break;
    case 'miegantis': plan = 'eit miegot'; break;
    case 'pavarges': plan = 'eit pailseti'; break;
    default; console.error('Tokia busena neatpazinta');
    }
    console.log(state, plan)

console.groupEnd();
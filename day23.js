let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'house', 'food']
// indeksai     0         1         2       3       4        5       6
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'his', 'him', 'at', 'ready', 'to', 'eat']
// indeksai      0      1      2     3     4     5     6     7    8       9     10     11     12     13
// 1. My sister is in the lake
let sentance1 = helpers[3] +  helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6]

console.log(sentance1)
// 2. hammer is on the table
let sentance2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4]

console.log(sentance2)
// 3.sun is in the sky
let sentance3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5]

console.log(sentance3)
// 4. apple is with my sister
let sentance4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + nouns[1] 

console.log(sentance4)
// 5.Papildyti naujais zodziais
// His house is on the lake
let sentance5 = helpers[8] + helpers[7] + nouns[7] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[6]

console.log(sentance5)

// his sister is with him at the lake
let sentance6 = helpers[8] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[9] + helpers[7] + helpers[10] + helpers[7] + helpers[6] + nouns[6]

console.log(sentance6)

// my food is ready to eat

let sentance7 = helpers[3] + helpers[7] + nouns[8] + helpers[7] + helpers[4] + helpers[7] + helpers[11] + helpers[7] + helpers[12] + helpers[7] + helpers[13] 

console.log(sentance7)

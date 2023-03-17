//your code here
const bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

const strip = (bandName) => bandName.replace(/^(a |the |an )/i, "").trim();
// use space between a, the or and to make sure that you catch whole word or not miss any word in the actual band name!

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector("#bands").innerHTML = sortedBands.map(band =>`<li>${band}</li>`).join(""); // join will join the array into a big string rather than a bunch of strings with a comma in between!

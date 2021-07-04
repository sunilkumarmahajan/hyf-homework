//peter house calculation
const width = 8;
const height = 10;
const depth = 10;
const gardenSizeInM2 = 100;
const actualhousePrise = 2500000;
const volumeInMeters;
const housePrice;
volumeInMeters = width * height * depth;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > actualhousePrise) {
console.log ("peter is paying exess price");
}
else
{console.log("peter is paying less than the actual price");
}
//Julia house calculation
const width = 5;
const height = 8;
const depth = 11;
const gardenSizeInM2 = 70;
const actualhousePrise = 1000000;
const volumeInMeters;
const housePrice;
volumeInMeters = width * height * depth;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > actualhousePrise) {
console.log ("Julia is paying too much than the actual price");
}
else
{console.log("Julia is paying less than the actual price");
}

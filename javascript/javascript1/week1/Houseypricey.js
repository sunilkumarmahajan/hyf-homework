//peter house calculation
var width = 8;
var height = 10;
var depth = 10;
var gardenSizeInM2 = 100;
var actualhousePrise = 2500000;
var volumeInMeters;
var housePrice;
volumeInMeters = width * height * depth;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > actualhousePrise) {
console.log ("peter is paying exess price");}
else
{console.log("peter is paying less than the actual price");}
//Julia house calculation
var width = 5;
var height = 8;
var depth = 11;
var gardenSizeInM2 = 70;
var actualhousePrise = 1000000;
var volumeInMeters;
var housePrice;
volumeInMeters = width * height * depth;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > actualhousePrise) {
console.log ("Julia is paying too much than the actual price");}
else
{console.log("Julia is paying less than the actual price");}
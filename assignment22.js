
var Productname=prompt(" Enter Product Name: ");
var Quanity=prompt("Enter Quantity Amout:");
var Price=prompt("Enter Product Price");
var tax= .0777;


var SubTotal=(Quanity * Price);
var taxAmount=(SubTotal * tax);
var Total=(SubTotal + taxAmount);

 

alert( "Information Stored" );

console.log(`Productname: ${Productname}`);
console.log(`Quanity: ${Quanity}`);
console.log(`Price: $` + Price);
console.log(`SubTotal: $` + SubTotal);
console.log(`Total: $` + Total);











 
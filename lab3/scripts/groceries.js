	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic Brocoli (100g)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Bread (100g)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon (400g)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99
	},
	{
		name: "Organic Apple (1 piece)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.99
	},
	{
		name: "Apple (1 piece)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 0.79
	},
	{
		name: "Chicken (500g)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.99
	},
	{
		name: "Organic Chicken (500g)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 18.99
	},
	{
		name: "Cheese (400g)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.99
	},
	{
		name: "Organic Brown Rice (1kg)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 12.99
	},
	{
		name: "White Rice (1kg)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 9.99
	},
	{
		name: "Organic Oatmeal (500g)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Macaroni (1kg)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 15.99
	},
	{
		name: "Spaghetti (1kg)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 14.99
	},
	{
		name: "Organic Chicken (1kg)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 14.99
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, hasToBeOrganic) {
	let productList = [];
	for (let i=0; i<prods.length; i+=1) {

		if (hasToBeOrganic){
			
			if(prods[i].organic == true){
				if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
					productList.push(prods[i]);
				}
				else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
					productList.push(prods[i]);
				}
				else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
					productList.push(prods[i]);
				}
				else if (restriction == "None"){
					productList.push(prods[i]);
				}
			}
		} else {

			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				productList.push(prods[i]);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				productList.push(prods[i]);
			}
			else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
				productList.push(prods[i]);
			}
			else if (restriction == "None"){
				productList.push(prods[i]);
			}
		}
	}

	// Sort list by prices
	sortByPrice(productList);

	return productList;
}

// This function sorts the list of products by pricing
// Idea gotten from: https://stackoverflow.com/questions/35576041/sort-json-by-value
function sortByPrice(productList){
	productList.sort(function(a, b) {
		return a.price - b.price;
	})
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

var hasToBeOrganic = false;
var currentProductList;
var currentRestriction;
var customerName;
var currentCart = [];
var currentTotalPrice = 0;

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(categoryRestriction, slct2) {
    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// filter list based on category
	var productListWithCatergoryFilter = getProductBasedOnCategory(products, categoryRestriction)
	
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(productListWithCatergoryFilter, currentRestriction, hasToBeOrganic);

	// save list
	currentProductList = optionArray;
	
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productPrice = optionArray[i].price;

		var productLabel = optionArray[i].name + " - " + productPrice + "$";
		var photoLink = optionArray[i].photoLink;

		// create the checkbox and add in HTML DOM
		var radiobox = document.createElement("input");
		radiobox.type = "radio";
		radiobox.name = "product";
		radiobox.id = "product";
		radiobox.value = optionArray[i].name;
		s2.appendChild(radiobox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productLabel;
		label.appendChild(document.createTextNode(productLabel));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));  

		// put image
		var img = document.createElement("img");
		img.src = photoLink;
		img.width = 150;
		s2.appendChild(img);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}

	// add button to add to cart
	var buttonToAddToCart = document.getElementById("addCart");
	buttonToAddToCart.style.display = "block";
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItem(){
	
	var chosenProduct;
	var radios = document.getElementsByName('product');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			chosenProduct = radios[i].value;
			break;
		}
	}

	currentCart.push(chosenProduct);
	
	var displayCart = document.getElementById('displayCart');
	displayCart.innerHTML = "";
	
	// build list of selected item
	var paragraph = document.createElement("P");

	if(customerName){
		paragraph.innerHTML = customerName +", you selected : ";
	} else {
		paragraph.innerHTML = "You selected : ";
	}

	paragraph.appendChild(document.createElement("br"));

	alert("Product Added To Cart!");

	var priceOfProduct = 0;
	for (i = 0; i < currentCart.length; i++) { 

		priceOfProduct = getPriceOfProduct(currentCart[i]);
		paragraph.appendChild(document.createTextNode(currentCart[i] + " - " + priceOfProduct + "$"));
		paragraph.appendChild(document.createElement("br"));
	}

	// Add new product to total price
	currentTotalPrice = currentTotalPrice + priceOfProduct;
	
	// Make sure you do not have more than 2 decimals in the total price
	currentTotalPrice = currentTotalPrice * 100;
	Math.trunc(currentTotalPrice);
	currentTotalPrice = currentTotalPrice / 100;
	
	// add paragraph and total price
	displayCart.appendChild(paragraph);
	displayCart.appendChild(document.createTextNode("Total Price is " + currentTotalPrice));
		
}

// This function changes the food list to only display organic ones
// Idea retrieved from: https://stackoverflow.com/questions/32438068/perform-an-action-on-checkbox-checked-or-unchecked-event-on-html-form
function GetCheckBoxValue(textboxEle) {
	if (textboxEle.checked) {
		hasToBeOrganic = true;
	} else {
		hasToBeOrganic = false;
	}

	populateListProductChoices("grains", 'displayProduct');
}

function changeDietarySelection(dietarySelection){
	currentRestriction = dietarySelection;
}

function changeCustomerName(slct1){
	var str = document.getElementById(slct1).value;
	customerName = str;
	alert("Name registered as " + str);
}
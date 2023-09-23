let cartItems = [];
const mi = {
	name:"Redmi Note 10 5g",
	price:11000,
}
const infinix = {
	name: "Infinix Hot 30 5g",
	price: 13000,
}

const realme = {
	name: "Realme C55",
	price: 9000,
}

const prices = document.getElementsByClassName('price');

for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
        prices[i].textContent = `Redmi Price: $ ${mi.price}`;
    } else if (i === 1) {
        prices[i].textContent = `Infinix Price: $ ${infinix.price}`;
    } else if (i === 2) {
         prices[i].textContent = `Realme Price: $ ${realme.price}`;
    }
}

function addToCart(item){
	cartItems.push(item);
	document.getElementById("itemCounter").innerHTML=cartItems.length;
	console.log(cartItems);
	
	let productList = document.getElementById('productList');
	let newSpan = document.createElement('span');
	newSpan.textContent = `${item.name}  -  ` 
	let newSpan1 = document.createElement('span');
	newSpan1.textContent = `$ ${item.price}` 
	let newLine = document.createElement('br')


	productList.appendChild(newSpan);
	productList.appendChild(newSpan1);
	productList.appendChild(newLine)

	showTotal();
	showItems();
}


function showTotal(){
	let orderTotal=document.getElementById("orderTotal");
	orderTotal.innerHTML = "";
	var total=0;
	for (let i = 0; i < cartItems.length; i++) {
		total += cartItems[i].price;
	}
	orderTotal.innerHTML += total;
}

function showItems(){
	let quantity = document.getElementById('quantity');
	quantity.innerHTML = `x ${cartItems.length}`

}

function checkout() {
    if (cartItems.length === 0) {
        alert("You haven't selected any items yet.");
		
    } else {
        alert("Thank you for Purchasing!");
		emptyCart();
    }
}

const button = document.getElementById('checkOut');
button.addEventListener('click', checkout);

function emptyCart(){
	cartItems = [];
	document.getElementById('itemCounter').innerHTML = '0';
	showItems();
	showTotal();

	let productList = document.getElementById('productList');
    productList.innerHTML = '';
}

const emptyCartTotal = document.getElementById('emptyCart');
emptyCartTotal.addEventListener('click', emptyCart);



const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

})


window.addEventListener('resize', function () {
    //  close when size >768
    if (window.innerWidth < 768) { 
        sidebar.classList.add('hide');
    }
});

window.addEventListener('resize', function () {
    // open when size >768
    if (window.innerWidth >= 768) { 
        sidebar.classList.remove('hide');
    }
});





const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})




//number of massages



let MessagesCount;
//localstorage has data
if(localStorage.formData != null){
    MessagesCount=JSON.parse(localStorage.formData);
}


document.addEventListener("DOMContentLoaded", function () {
	
	//number of masseges


	let countOfOMessages = 0;

	// Assuming productData is an array of products
	for (let i = 0; i < MessagesCount.length; i++) {
		
		countOfOMessages++;
		
	}

	console.log(countOfOMessages);

	// Update HTML element content
	let numberOfMessagesElement =	document.getElementById("numOfMessages");
	numberOfMessagesElement.innerHTML = `<span>${countOfOMessages}</span>`;

});





let userCount;
//localstorage has data
if(localStorage.users != null){
    userCount=JSON.parse(localStorage.users);
}



document.addEventListener("DOMContentLoaded", function() {
	let countCustomer = 0;
	let countSeller=0;
	// Count the number of elements with type "customer"
	for (let i = 0; i < userCount.length; i++) {
		if (userCount[i].type === "customer") {
			countCustomer++;
		}else if(userCount[i].type === "seller"){
			countSeller++;
		}
	}

	//console.log(countCustomer);


	// Update HTML element content
	let numberOfCustomerElement = document.getElementById("numberOfCustomer");
	let numberOfSellerElement = document.getElementById("numberOfSeller");
	if (numberOfCustomerElement) {
		numberOfCustomerElement.innerHTML = `<span>${countCustomer}</span>`;
	} 
	if (numberOfSellerElement) {
		numberOfSellerElement.innerHTML = `<span>${countSeller}</span>`;
	} 

});


let productCount;
//localstorage has data
if(localStorage.products != null){
    productCount=JSON.parse(localStorage.products);
}




document.addEventListener("DOMContentLoaded", function () {
	let countOfProducts = 0;

	// Assuming productData is an array of products
	for (let i = 0; i < productCount.length; i++) {
		// Example: Count only products with a certain condition (e.g., count products with price > 50)
			countOfProducts++;
		
	}

	console.log(countOfProducts);

	// Update HTML element content
	let numberOfProductElement = document.getElementById("numberOfProduct");
	numberOfProductElement.innerHTML = `<span>${countOfProducts}</span>`;
});



//count of orders

let ordersCount;
//localstorage has data
if(localStorage.OrderData != null){
    ordersCount=JSON.parse(localStorage.OrderData);
}



document.addEventListener("DOMContentLoaded", function () {
	let countOfOrders = 0;

	// Assuming productData is an array of products
	for (let i = 0; i <ordersCount.length; i++) {
		// Example: Count only products with a certain condition (e.g., count products with price > 50)
		countOfOrders++;
		
	}

	console.log(countOfOrders);

	// Update HTML element content
	let numberOfOrdersElement = document.getElementById("numberOfOrders");
	numberOfOrdersElement.innerHTML = `<span>${countOfOrders}</span>`;


	//number of masseges


	let countOfOMessages = 0;

	// Assuming productData is an array of products
	for (let i = 0; i < MessagesCount.length; i++) {
		// Example: Count only products
		countOfOMessages++;
		
	}

	console.log(countOfOMessages);

	// Update HTML element content
	let numberOfMessagesElement =	document.getElementById("numOfMessages");
	numberOfMessagesElement.innerHTML = `<span>${countOfOMessages}</span>`;



});




//logout

document.addEventListener("DOMContentLoaded", function () {
    // ... (Your existing code)

    // Get the logout button element
    const logoutBtn = document.getElementById("logoutBtn");

    // Add an event listener for the logout button
    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Perform logout logic here if needed (e.g., clearing session, etc.)

        // Redirect to the home page (replace 'home.html' with your actual home page URL)
        window.location.href = '../index.html';
    });
});




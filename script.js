// script.js

async function authenticateUser() {
    const loginId = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials for comparison
    const validLoginId = "test@sunbasedata.com";
    const validPassword = "Test@123";

    if (loginId === validLoginId && password === validPassword) {
        // Authentication successful
        // Redirect to another page or perform additional actions after successful authentication
        // For example, you might load the customer list page
        window.location.href = 'customer-list.html';
    } else {
        // Handle authentication error
        console.error('Authentication failed');
        alert('Invalid credentials. Please try again.');
    }
}
// script.js
// script.js

// Sample array to store customer data
let customerData = [];

function redirectToAddCustomer() {
    window.location.href = 'add-customer.html';
}

function addCustomer() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const street = document.getElementById('street').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create a customer object
    const customer = {
        firstName: firstName,
        lastName: lastName,
        street: street,
        address: address,
        city: city,
        state: state,
        email: email,
        phone: phone,
    };

    // Add the customer to the array
    customerData.push(customer);

    // Update the customer list on the main page
    updateCustomerList();

    // Clear the input fields
    clearInputFields();
}

function updateCustomerList() {
    const customerListContainer = document.getElementById('customerList');
    customerListContainer.innerHTML = ''; // Clear existing content

    // Loop through the customerData array and display each customer
    customerData.forEach((customer, index) => {
        const customerItem = document.createElement('div');
        customerItem.className = 'customerItem';

        // Display customer details
        customerItem.innerHTML = `
            <strong>Name:</strong> ${customer.firstName} ${customer.lastName}<br>
            <strong>Address:</strong> ${customer.address}, ${customer.city}, ${customer.state}<br>
            <strong>Email:</strong> ${customer.email}<br>
            <strong>Phone:</strong> ${customer.phone}<br>
            <button onclick="updateCustomer(${index})">Update</button>
            <button onclick="deleteCustomer(${index})">Delete</button>
        `;

        // Append the customer item to the container
        customerListContainer.appendChild(customerItem);
    });
}

function clearInputFields() {
    // Clear input fields after adding a customer
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('street').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function updateCustomer(index) {
    // Implement update logic if needed
    console.log('Update customer at index:', index);
}

function deleteCustomer(index) {
    // Remove the customer at the specified index
    customerData.splice(index, 1);

    // Update the customer list on the main page
    updateCustomerList();
}





  


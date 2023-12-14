async function authenticateUser() {
    const loginId = 'test@sunbasedata.com';
    const password = 'Test@123';

    const authenticationApiUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp';

    try {
        const response = await fetch(authenticationApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login_id: loginId,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            const authToken = data.token;

            // Store the Bearer token for future API calls (you might use localStorage or sessionStorage)
            localStorage.setItem('bearerToken', authToken);

            // Redirect to another page or perform additional actions after successful authentication
            // For example, you might load the customer list page
            window.location.href = 'customer-list.html';
        } else {
            // Handle authentication error
            console.error('Authentication failed:', response.status);
            alert('Invalid credentials. Please try again.');
        }
    } catch (error) {
        console.error('Error during authentication:', error);
    }
}

// Call the authenticateUser function when the page is loaded or when the user clicks a button
// For example, you can use an event listener on a button click
// document.getElementById('loginButton').addEventListener('click', authenticateUser);

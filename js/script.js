const username = 'joel-joy';

// Get user details
async function getUserDetails() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        // Display user details
        document.getElementById('user-id').textContent = data.id;
        document.getElementById('user-name').textContent = data.login;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

// Call the function
getUserDetails();

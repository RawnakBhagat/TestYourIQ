document.getElementById('button').addEventListener('click', (event) => {
    // Prevent form submission if needed
    event.preventDefault();

    // Get input values
    let name = document.getElementById('name').value.toLowerCase();
    let age = document.getElementById('age').value;
    let Class = document.getElementById('class').value;
    // Set the result based on the class value
    if (Class ==  8 || name == 'aritra') {
        document.getElementById('results').innerText = " Your IQ is Down to earth";
    } else {
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        // Generate a random number between 80 and 100
        let randomNumber = getRandomNumber(80, 100);
        
        
        document.getElementById('results').innerText = `Your IQ is ${randomNumber}`;
    }
});

let currentInput = ""; // To store the current input

// Function to handle key press
function pressKey(key) {
    currentInput += key;
    document.getElementById("display").value = currentInput;
}

// Function to calculate the result
function calculate() {
    try {
        // Use eval to calculate the result
        const result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString(); // Update the input for further operations
    } catch (error) {
        document.getElementById("display").value = "Error";
        currentInput = "";
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

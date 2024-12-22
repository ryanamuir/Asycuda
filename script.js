function calculate() {
    // Get the user input values
    const itemCode = document.getElementById("item").value.trim();
    const quantityIM7 = parseFloat(document.getElementById("quantityIM7").value);  // Total quantity
    const quantityIM4 = parseFloat(document.getElementById("quantityIM4").value);  // Duty paid quantity
    const volumeIM7 = parseFloat(document.getElementById("volumeIM7").value);  // Total volume
    const weightIM7 = parseFloat(document.getElementById("weightIM7").value);  // Total weight

    // Check for valid inputs
    if (!itemCode) {
        alert("Please enter a valid item code.");
        return;
    }

    if (isNaN(quantityIM7) || isNaN(quantityIM4) || isNaN(volumeIM7) || isNaN(weightIM7)) {
        alert("All fields must contain valid numerical values.");
        return;
    }

    if (quantityIM7 <= 0 || quantityIM4 <= 0 || volumeIM7 <= 0 || weightIM7 <= 0) {
        alert("Please enter positive values for all fields.");
        return;
    }

    // Calculate the index (the ratio of duty paid quantity to total quantity)
    const index = quantityIM4 / quantityIM7;

    // Calculate the duty paid volume and weight using the index
    const volumeIM4 = volumeIM7 * index;  // Duty paid volume = total volume * index
    const weightIM4 = weightIM7 * index;  // Duty paid weight = total weight * index

    // Display the results
    document.getElementById("result-item").textContent = `Item Code: ${itemCode.toUpperCase()}`;
    document.getElementById("result-volumeIM4").textContent = `Duty Paid Volume: ${volumeIM4.toFixed(3)} sup. units`;
    document.getElementById("result-weightIM4").textContent = `Duty Paid Weight: ${weightIM4.toFixed(3)} net mass`;

    // Show the result section
    document.getElementById("result").style.display = "block";
}

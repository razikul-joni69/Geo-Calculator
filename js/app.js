//CalculateTotal
function calculateTotal(isTrue, firstId, secondId) {
    let firstInput = document.getElementById(firstId);
    let secondInput = document.getElementById(secondId);

    let firstNumber = parseFloat(firstInput.value);
    let secondNumber = parseFloat(secondInput.value);

    let calculateTotal;

    if (isTrue) {
        calculateTotal = 0.5 * firstNumber * secondNumber;
    } else {
        calculateTotal = firstNumber * secondNumber;
    }

    if (firstInput.value == "" || secondInput.value == "") {
        console.log("Input can't be blank. Please Enter Two Numbers.");
    } else {
        let calculationArea = document.getElementById("calculation-area");

        let newCalculation = document.createElement("div");
        newCalculation.innerHTML = `
        <p class="d-flex justify-content-between">

                ${calculateTotal} <button type="button" class="btn btn-primary">Primary</button>

        </p>
    `;
        calculationArea.appendChild(newCalculation);
    }
}
document
    .getElementById("triangle__calculate")
    .addEventListener("click", function () {
        calculateTotal(true, "triangle__first-input", "triangle__second-input");
    });

document
    .getElementById("rectangle__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            false,
            "rectangle__first-input",
            "rectangle__second-input"
        );
    });

//Parallelogram Calculate
document
    .getElementById("parallelogram__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            false,
            "parallelogram__first-input",
            "parallelogram__second-input"
        );
    });

// Rhombus Calculate
document
    .getElementById("rhombus__calculate")
    .addEventListener("click", function () {
        calculateTotal(true, "rhombus__first-input", "rhombus__second-input");
    });

// Pentagon Calculate
document
    .getElementById("pentagon__calculate")
    .addEventListener("click", function () {
        calculateTotal(true, "pentagon__first-input", "pentagon__second-input");
    });

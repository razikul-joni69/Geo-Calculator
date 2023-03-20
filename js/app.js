//CalculateTotal
function calculateTotal(calculateFor, firstId, secondId) {
    let firstInput = document.getElementById(firstId);
    let secondInput = document.getElementById(secondId);

    let firstNumber = parseFloat(firstInput.value);
    let secondNumber = parseFloat(secondInput.value);

    let calculateTotal;

    if (
        calculateFor === "Triangle" ||
        calculateFor === "Rhombus" ||
        calculateFor === "Pentagon"
    ) {
        calculateTotal = 0.5 * firstNumber * secondNumber;
    } else if (
        calculateFor === "Rectangle" ||
        calculateFor === "Parallelogram"
    ) {
        calculateTotal = firstNumber * secondNumber;
    } else {
        calculateEllipse = 3.14 * firstNumber * secondNumber;
        calculateTotal = calculateEllipse.toFixed(2);
    }

    if (firstInput.value == "" || secondInput.value == "") {
        console.log("Input can't be blank. Please Enter Two Numbers.");
    } else if (firstNumber < 1 || secondNumber < 1) {
        console.log("Value Can't be Negative or Zero.");
    } else {
        let calculationArea = document.getElementById("calculation-area");

        let newCalculation = document.createElement("div");
        newCalculation.innerHTML = `
        <p class="d-flex justify-content-between">

               ${calculateFor} - ${calculateTotal} <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>

        </p>
    `;
        calculationArea.appendChild(newCalculation);
    }
}

// Triangle Calculate
document
    .getElementById("triangle__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Triangle",
            "triangle__first-input",
            "triangle__second-input"
        );
    });

// Rectangle Calculate
document
    .getElementById("rectangle__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Rectangle",
            "rectangle__first-input",
            "rectangle__second-input"
        );
    });

//Parallelogram Calculate
document
    .getElementById("parallelogram__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Parallelogram",
            "parallelogram__first-input",
            "parallelogram__second-input"
        );
    });

// Rhombus Calculate
document
    .getElementById("rhombus__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Rhombus",
            "rhombus__first-input",
            "rhombus__second-input"
        );
    });

// Pentagon Calculate
document
    .getElementById("pentagon__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Pentagon",
            "pentagon__first-input",
            "pentagon__second-input"
        );
    });

// Ellipse Calculate
document
    .getElementById("ellipse__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Ellipse",
            "ellipse__first-input",
            "ellipse__second-input"
        );
    });

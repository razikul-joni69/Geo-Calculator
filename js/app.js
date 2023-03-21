//CalculateTotal
let count = 1;
function calculateTotal(calculateFor, firstId, secondId, errorIndex) {
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

    let test = document.getElementsByClassName("empty__value")[errorIndex];
    console.log(test);
    // Hide the previous errors
    document.getElementsByClassName("empty__value")[errorIndex].style.display =
        "none";
    document.getElementsByClassName("negative__value")[
        errorIndex
    ].style.display = "none";
    if (firstInput.value == "" || secondInput.value == "") {
        document.getElementsByClassName("empty__value")[
            errorIndex
        ].style.display = "block";
    } else if (firstNumber < 1 || secondNumber < 1) {
        document.getElementsByClassName("negative__value")[
            errorIndex
        ].style.display = "block";
    } else {
        let calculationArea = document.getElementById("calculation-area");

        let newCalculation = document.createElement("div");
        newCalculation.innerHTML = `
        <p class="d-flex justify-content-between fs-5">

              ${count}. ${calculateFor} - <span>${calculateTotal}cm<sup>2</sup> </span>
               <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>

        </p>
    `;
        calculationArea.appendChild(newCalculation);
        count++;
    }
}

// Triangle Calculate
document
    .getElementById("triangle__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Triangle",
            "triangle__first-input",
            "triangle__second-input",
            0
        );
    });

// Rectangle Calculate
document
    .getElementById("rectangle__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Rectangle",
            "rectangle__first-input",
            "rectangle__second-input",
            1
        );
    });

//Parallelogram Calculate
document
    .getElementById("parallelogram__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Parallelogram",
            "parallelogram__first-input",
            "parallelogram__second-input",
            2
        );
    });

// Rhombus Calculate
document
    .getElementById("rhombus__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Rhombus",
            "rhombus__first-input",
            "rhombus__second-input",
            3
        );
    });

// Pentagon Calculate
document
    .getElementById("pentagon__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Pentagon",
            "pentagon__first-input",
            "pentagon__second-input",
            4
        );
    });

// Ellipse Calculate
document
    .getElementById("ellipse__calculate")
    .addEventListener("click", function () {
        calculateTotal(
            "Ellipse",
            "ellipse__first-input",
            "ellipse__second-input",
            5
        );
    });


//Change background color function
function changeBackground(cardNo) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(cardNo).style.backgroundColor = "#" + randomColor;
}

//Changing background color for every card
document.getElementById("card__01").addEventListener("mouseenter", function () {
    changeBackground("card__01");
});
document.getElementById("card__02").addEventListener("mouseenter", function () {
    changeBackground("card__02");
});
document.getElementById("card__03").addEventListener("mouseenter", function () {
    changeBackground("card__03");
});
document.getElementById("card__04").addEventListener("mouseenter", function () {
    changeBackground("card__04");
});
document.getElementById("card__05").addEventListener("mouseenter", function () {
    changeBackground("card__05");
});
document.getElementById("card__06").addEventListener("mouseenter", function () {
    changeBackground("card__06");
});

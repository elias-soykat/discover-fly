//to increase Input value
function increase(numberOfTicket){
    numberOfTicket++;
    return numberOfTicket;
}


//to decrease Input value
function decrease(numberOfTicket){
    //Prevent the value become negative. because, Number of Ticket never be a negative value
    if(numberOfTicket > 0){
        numberOfTicket--;
    }
    return numberOfTicket;
}


//to get value from Input Element
function getValue(inputId){
    const value = parseInt(document.getElementById(inputId).value);
    return value;
}


//to set Text into HTML Element
function setInnerText(id, text){
    document.getElementById(id).innerText = text;
}

//variable declared outside functions because of re-use them [updateCost() & addBookBtnEventHandler()]
let firstClassTicket = 0;
let economyTicket = 0;
let firstClassCost = 0;
let economyCost = 0;
let subTotalCost = 0;
let vat = 0;
let totalCost = 0;

//function to Update Sub-total, Vat & Total Cost
function updateCost(){
    firstClassTicket = getValue("firstClass-numberOfTicket");
    economyTicket = getValue("economy-numberOfTicket");
    firstClassCost = 150 * firstClassTicket;
    economyCost = 100 * economyTicket;

    subTotalCost = firstClassCost + economyCost;
    vat = Math.round(subTotalCost * 0.1);
    totalCost = subTotalCost + vat;

    setInnerText("sub-total", subTotalCost);
    setInnerText("vat", vat);
    setInnerText("total", totalCost);
}


// Function to add Event Listener to plus & minus Button
function addEventHandler(btnId, inputId, purpose){
    document.getElementById(btnId).addEventListener("click", function(){
        let numberOfTicket = getValue(inputId);
        numberOfTicket = purpose(numberOfTicket);
        document.getElementById(inputId).value = numberOfTicket;
        updateCost();
    });
}


// to add Event Listener to the Book Now Button
function addBookBtnEventHandler(btnId){
    document.getElementById(btnId).addEventListener("click", function(){
        if(firstClassTicket == 0 && economyTicket == 0){
   
        }
        else{
            document.getElementById("ticket-confirmation-area").style.display = "flex";
            document.getElementById("ticket-booking-area").style.display = "none";

            setInnerText("confirm-total-cost", totalCost);
            setInnerText("confirm-firstClass-totalTicket", firstClassTicket);
            setInnerText("confirm-firstClass-totalCost", firstClassCost);
            setInnerText("confirm-economy-totalTicket", economyTicket);
            setInnerText("confirm-economy-totalCost", economyCost);
            setInnerText("confirm-total-vat", vat);
        }
    });
}

// add event handler to plus button of first class ticket
addEventHandler("firstClass-plusBtn", "firstClass-numberOfTicket", increase);

//add event handler to minus button of first class ticket
addEventHandler("firstClass-minusBtn", "firstClass-numberOfTicket", decrease);

// add event handler to plus button of economy ticket
addEventHandler("economy-plusBtn", "economy-numberOfTicket", increase);

//add event handler to minus button of economy ticket
addEventHandler("economy-minusBtn", "economy-numberOfTicket", decrease);

//add event handler to the Book Now button
addBookBtnEventHandler("bookNow-Btn");
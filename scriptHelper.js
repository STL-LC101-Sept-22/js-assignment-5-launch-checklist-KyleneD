// Write your helper functions here!
require('isomorphic-fetch');





function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter:${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons:${moons} </li>
    </ol>
    <img src="${imageUrl}">`
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

}

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty"
    }
    else if (!isNaN(testInput)) {
        return "Is a number"
    }
    else if (isNaN(testInput)) {
        return "Not a number"

    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let launchStatus = document.getElementById('launchStatus');

    if (validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" || validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty") {

        alert("All fields are required")
    }
    else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number" || validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {

        alert("Invalid information")
    }
    //console.log(pilot);
    //else {
    pilotStatus.innerText = `Pilot ${pilot} is ready`;
    copilotStatus.innerText = `Copilot ${copilot} is ready`;
    list.style.visibility = 'visible';

    //}

    if (Number(fuelLevel) < 10000 && Number(cargoLevel) <= 10000) {
        console.log("Fuel low Cargo low")
        fuelStatus.innerText = "Not enough fuel for journey";
        list.style.visibility = 'visible';
        launchStatus.innerText = 'Shuttle not ready for launch';
        cargoStatus.innerText = 'Cargo mass low enough for launch'
        launchStatus.style.color = `red`;
    }
    else if (Number(cargoLevel) > 10000 && Number(fuelLevel) > 10000) {
        console.log("Cargo high and 10000 fuel high")
        cargoStatus.innerText = `Cargo too heavy for takeoff`;
        list.style.visibility = `visible`;
        launchStatus.innerText = `Shuttle not ready for launch`;
        fuelStatus.innerText = "Fuel level high enough for launch";
        launchStatus.style.color = `red`;
    }
    else if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
        console.log("Cargo less Fuel high")
        list.style.visibility = "visible";
        fuelStatus.innerText = "Enough fuel for journey";
        cargoStatus.innerText = 'Cargo mass low enough for launch';
        fuelStatus.innerText = "Fuel level high enough for launch";
        launchStatus.innerText = "Shuttle ready for launch";
        launchStatus.style.color = "green";
    }
    else if (Number(cargoLevel) > 10000 && Number(fuelLevel) < 10000) {
        console.log("Cargo less Fuel less")
        cargoStatus.innerText = `Cargo too heavy for takeoff`;
        list.style.visibility = `visible`;
        launchStatus.innerText = `Shuttle not ready for launch`;
        fuelStatus.innerText = "Fuel level not enough for launch";
        launchStatus.style.color = `red`;
    }
}

async function myFetch() {
    let planetsReturned;
    //You need to add the URL and return response.json().
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

        return (response.json())

        // return json

    })



    return planetsReturned;
}

function pickPlanet(planets) {
    let planetInput = Math.floor(Math.random() * planets.length)

    return planets[planetInput]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

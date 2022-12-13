// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");





window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
    })

    let form = document.querySelector("form");
    let list = document.getElementById('faultyItems');
    list.style.visibility = 'hidden';

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let items = document.getElementById('faultyItems');
        let launchStatus = document.getElementById('launchStatus');

        let ready = true;
        //list DOM
        let pilotInput = document.querySelector("input[name=pilotName]").value;
        let copilotInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');
        console.log(pilotInput)

        formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoMassInput)
    })



    //  })
    //})
    //})


});
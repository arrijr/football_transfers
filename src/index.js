"use scrict"



    /*const axios = require("axios")

    const options = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/premierleague/transfers',
    headers: {
        'X-RapidAPI-Key': '574eab0e69msh022866c49bc7a17p1913c2jsn5391f4f55e29',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        const data = response.data
        console.log(data);


        const newTransfer = data[0]
        const playerName = newTransfer.playerName
        const playerRole = newTransfer.playerRole
        const oldClub = newTransfer.oldClub
        const newClub = newTransfer.newClub
        const price = newTransfer.price

        

        console.log("Der letzte Transfer:" + playerName)

        player.innerText = playerName
    }).catch(function (error) {
        console.error(error);
    });*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '574eab0e69msh022866c49bc7a17p1913c2jsn5391f4f55e29',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
}; 
    
fetch('https://football98.p.rapidapi.com/premierleague/transfers', options)

    

    .then(response => response.json().then(data =>{
        

        const newTransfer = data[0]
        console.log(newTransfer)
        const playerName = newTransfer.playerName
        const playerRole = newTransfer.playerRole
        const newClub = newTransfer.newClub
        const oldClub = newTransfer.oldClub
        const price = newTransfer.price
        console.log("Spieler: " + playerName)

        document.getElementById("playername").innerText = playerName
        document.getElementById("playerrole").innerText = playerRole
        document.getElementById("newclub").innerText = newClub
        document.getElementById("oldclub").innerText = oldClub
        document.getElementById("price").innerText = price

        

    }))
    .then(response => console.log(response))

    

    .catch(err => console.error(err));

  
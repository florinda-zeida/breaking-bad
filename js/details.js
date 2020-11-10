const queryString = document.location.search;
const paramater = new URLSearchParams(queryString);

const nem = paramater.get("name");

const url = "https://www.breakingbadapi.com/api/characters";

async function getCharacterByName() {
    const tittle = document.querySelector("h2");
    const container = document.querySelector(".container_detail");

    try {
        const response = await fetch(url);
        const res = await response.json();
        tittle.innerHTML = res[0].nem
        console.log(res);
        html = `<div class="card_detail">
                <div class="details-img">
                <img class="img-detail" src="${res[0].img}"alt="${res[0].img}"/>
                </div>
                <div class="detail-detail">
               <h2>${res[0].name}</h2>
                    <div class="text"><h4>Birthday:</h4> <div class="value"><b>${res[0].birthday}</b></div></div>
                    <div class="text"><h4>Status:</h4><div><b>${res[0].status}</b></div></div> 
                    <h4>Occupation:</h4> <div><b>${res[0].occupation}</b></div>
                </div>
            </div>`;
        container.innerHTML = html;
    } catch (error) {
        tittle.innerHTML = "There is an error";
        console.log(error);
    } finally {
        const load = document.querySelector(".loading");
        load.style.display = "none";
        console.log("evrything is done!");
    }
}

getCharacterByName()
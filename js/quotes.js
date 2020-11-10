const urlBreakingBadQuotes = "https://www.breakingbadapi.com/api/quotes";

async function getBreakingBadQuotes() {
    try {
        const response = await fetch(urlBreakingBadQuotes);
        const jsonResult = await response.json();
        displayQuotes(jsonResult);
    } catch (error) {
        console.log(error + "Something is wrong");
    } finally {
        const load = document.querySelector(".loading");
        load.style.display = "none";
        console.log("evrything is done!");
    }
}

getBreakingBadQuotes();

function displayQuotes(quotes) {
    const container = document.querySelector(".quotes");
    let html = "";
    for (let i = 0; i < quotes.length; i++) {
        console.log("html", html);
        if (i === 20) {
            break;
        }
        html += `<div class="card-quotes">
                      
                      <div class="details">
                      <h3 class="name">${quotes[i].author}</h3>
                        <q class="quotes">${quotes[i].quote}</q>
                      </div>
                  </div>`;
    }

    container.innerHTML = html;
}
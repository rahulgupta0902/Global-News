let country = `us`;
let apikey = `b9f027eec7514486a16bf4996d0c9919`;
let newsaccordian = document.getElementById(`newsaccordian`);
let btn = document.getElementById(`India`);
console.log(btn);
console.log(country);







const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function (element,index) {
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h3>${element["title"]}</h3>
                </button>
              </h2>
            </div>
        
            <div id="collapse${index}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <h5>${element["content"]}</h5>.<a class="urllinkg" href="${element["url"]}" target="_blank">Read More Here></a>
              </div>
            </div>
          </div>`;
        newshtml+=news;
        });
        newsaccordian.innerHTML=newshtml;


    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();

let searchitem=document.getElementById(`searchitem`);
console.log(searchitem.value);


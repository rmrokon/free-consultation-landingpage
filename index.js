async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    showData(data);
}

getData('review.json');



function showData(reviews) {
    let singleReview = ``;

    for (let r of reviews) {
        singleReview += `<div>
        <img src=${r.picture} alt="">
                        <h3>${r.name}</h3>
                        <p>${r.review}</p>
        </div>`;
    }

    document.getElementById('testimonials').innerHTML = singleReview;
}



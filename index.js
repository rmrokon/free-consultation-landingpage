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

function timer() {
    const end = new Date("aug 25, 2022 10:00:00").getTime();




    const tickingTimer = setInterval(() => {
        const start = new Date().getTime();
        const diff = end - start;
        const days = Math.floor(diff / (24 * 60 * 60 * 1000));
        const hrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        const sec = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `<h4> <span>${days} d</span> : <span>${hrs} h</span> : <span>${mins} m</span> : <span>${sec} s</span></h4>`
    });


}
timer();



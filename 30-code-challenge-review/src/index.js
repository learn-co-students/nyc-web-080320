// Code here

const baseUrl = " http://localhost:3000/beers/"

const getBeer = beerId => {
    fetch(baseUrl + beerId)
    .then(res => res.json())
    .then(beer => {
        renderBeer(beer)
    })
}

const renderBeer = beer => {
    const beerDetailsContainer = document.querySelector('.beer-details')
    beerDetailsContainer.dataset.beerId = beer.id
    
    const name = document.querySelector('.beer-details h2')
    name.textContent = beer.name

    const img = document.querySelector('.beer-details img')
    img.src = beer.image_url

    const textarea = document.querySelector('.beer-details textarea')
    textarea.value = beer.description

    renderReviews(beer.reviews)
}

const renderReviews = reviews => {
    const ul = document.querySelector('.reviews')
    ul.innerHTML = ''

    for(let review of reviews){
        const reviewLi = document.createElement('li')
        reviewLi.textContent = review
        ul.append(reviewLi)
    }
}

const submitHandler = () => {
    document.addEventListener('submit', e => {
        e.preventDefault()

        if(e.target.matches('.description')){
            const descriptionForm = e.target
            const description = descriptionForm[0].value
            const beerId = document.querySelector('.beer-details').dataset.beerId

            const options = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({ description: description })
            }
            
            fetch(baseUrl + beerId, options)
            .then(res => res.json())
            .then(console.log)

        } else if(e.target.matches('.review-form')){
            const reviewForm = e.target
            const review = reviewForm[0].value

            const ul = document.querySelector('.reviews')

            const reviewLi = document.createElement('li')
            reviewLi.textContent = review

            ul.prepend(reviewLi)
        }
    })
}

getBeer(1)
submitHandler()

/*

* See the first beer's details, including its name, image, description, and reviews, when the page loads

    * fetch the first beer
    * render that beer
    
* Change the beer's description and still see that change when reloading the page

*Add a review for the beer (no persistence needed)


*/
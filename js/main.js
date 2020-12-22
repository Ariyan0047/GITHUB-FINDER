const userProfile = document.querySelector(".users")

// API KEY
const client_id = "7bbda6ea044defa7ac71"
const client_secret = "d7e30f5ed6ab61fc02fb134e542f11e6d1ab22e2"

const httpRequest = new Library(client_id, client_secret)
const updateUi = new Profile(userProfile)

const search = document.querySelector("#search")

const searchUser = (event) => {
    event.preventDefault()
    const userInput = search.value.trim().toLowerCase()

    if (userInput !== "") {
        httpRequest.getUser(userInput)
            .then(data => {
                if (data.userProfile.message === "Not Found") alert("USER NOT FOUND")
                else updateUi.showProfile(data.userProfile)
            })
            .catch(err => console.log(err))
    } else {

    }
}

search.addEventListener("keyup", searchUser)
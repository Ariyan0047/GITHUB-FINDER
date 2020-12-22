// CUSTOM LIBRARY CLASS
class Library {
    constructor(client_id, client_secret) {
        this.client_id = client_id
        this.client_secret = client_secret
        this.getUser = async (usr) => {
            const response = await fetch(`https://api.github.com/users/${usr}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            const userProfile = await response.json()
            return {
                userProfile
            }
        }
    }
}
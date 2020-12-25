// CUSTOM LIBRARY CLASS
class Library {
    constructor(client_id, client_secret) {
        this.client_id = client_id
        this.client_secret = client_secret
        this.repos = 5
        this.sorted = "created:asc"
        this.getUser = async (usr) => {
            const response = await fetch(`https://api.github.com/users/${usr}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            const repositoryResponse = await fetch(`https://api.github.com/users/${usr}/repos?per_page=${this.repos}&sort=${this.sorted}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
            const userProfile = await response.json()
            const repository = await repositoryResponse.json()
            return {
                userProfile,
                repository
            }

        }
    }
}
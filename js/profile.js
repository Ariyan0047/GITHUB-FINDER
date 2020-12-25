// UPDATING UI
class Profile {
    constructor(profile1, profile2) {
        this.profile1 = profile1
        this.profile2 = profile2
        this.showProfile = (usr) => {
            this.profile1.innerHTML = `
            <div class="container p-4 m-4 mx-auto">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${usr.avatar_url}">
                        <a href="${usr.html_url}" target="_blank" class="btn btn-outline-info btn-block btn-lg">VIEW PROFILE</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-info">PUBLIC REPOSITORY : ${usr.public_repos}</span>
                        <span class="badge badge-info">PUBLIC GISTS : ${usr.public_gists}</span>
                        <span class="badge badge-info">FOLLOWER : ${usr.followers}</span>
                        <span class="badge badge-info">FOLLOWING : ${usr.following}</span>
                        <br>
                        <ul class="list-group text-muted text-center mt-3">
                            <li class="list-group-item list-group-item-secondary p-3">COMPANY: ${usr.company}</li>
                            <li class="list-group-item list-group-item-secondary p-3">WEBSITE: 
                                <a href="${usr.blog}" target="_blank">${usr.blog}</a>
                            </li>
                            <li class="list-group-item list-group-item-secondary p-3">LOCATION: ${usr.location}</li>
                            <li class="list-group-item list-group-item-secondary p-3">STARTED FROM: ${usr.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>`
        }


        this.showRepository = (repos) => {
            let html = ""
            repos.forEach(repo => {
                html += `
                <div class="container p-1 m-4 mx-auto">
                    <h1 class="display-4 text-center text-muted">LATEST REPOSITORY<h1>
                    <div class="row m-2">
                        <div class="col-md-6">
                            <p class="text-muted">REPO: ${repo.name}</p>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-info">STARS : ${repo.stargazers_count}</span>
                            <span class="badge badge-info">WATCHERS : ${repo.watchers_count}</span>
                            <span class="badge badge-info">FORKS : ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
                `
            })
            this.profile2.innerHTML = html
        }

        this.clearProfile = () => {
            this.profile1.innerHTML = ""
            this.profile2.innerHTML = ""
        }
    }
}
function setUsername(username){
    this.username = username
    console.log("called");
    

}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "Chai@google.com", "125685")

console.log(chai);

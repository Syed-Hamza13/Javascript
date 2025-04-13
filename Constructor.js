class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encrypPassword(){
        return `${this.password}abc`
    }
    changeCase(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "5896445")
console.log(chai.encrypPassword());
console.log(chai.changeCase());

// behind the scene 

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encrypPassword = function(){
    return `${this.password}fdfsajf`
}

User2.prototype.changeCase = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User2("Tea", "tea@google.com", "34244323")
console.log(tea.changeCase())
console.log(tea.encrypPassword())

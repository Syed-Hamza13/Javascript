class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
     constructor(username, email, pasword){
        super(username)
        this.email = email;
        this.password = pasword;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "85623489")
chai.logMe()
chai.addCourse()

const tea = new User("Tea@google.com")
tea.logMe()

console.log(Teacher instanceof User);

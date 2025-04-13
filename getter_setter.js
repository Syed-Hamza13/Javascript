class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
    
    get password(){
        return `${this._password}hamza`
    }
    set password(value){
        this._password = value
    }
}

const hamza = new User("h@hamza.ai", "abc")



console.log(hamza.password);
console.log(hamza.email);

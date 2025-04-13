const user = {
    username: 'hamza',
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this);

 function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
    
 }

 const UserOne =  new User("hamza", 15, true)
 const UserTwo = new User("Chai aur code", 85, false)

//  console.log(UserOne);
//  console.log(UserTwo);


 console.log(UserOne.instanceOf);




 
class Users {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail(){
    console.log(`O email do ususario é: ${this.email}`)
  }

}


const user1 = new Users("Isaque","isaqueemailofc@confia.com")
console.log(user1)
user1.sendEmail();
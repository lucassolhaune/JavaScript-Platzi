//Social media Profile

//1- User information
const username = "alvarez"
const fullName = "raul"
const age = 23
const isStudent = true
const dog = 'Bruno'

//2- Address -> OBJETO
const address = {
    street : "calle 1234",
    city: "Rosario",
    state: "Codingland",
    zipCode: 2000,

}
//3- hobbies
const hobbies = ["coding", "reading", "gaming"]

//4- generating personalized bio
const personalizedBio = `Hola mi nombre es ${fullName},
 tengo ${age}, vivo en la ciudad ${address.city}, 
 en la calle ${address.street}, me encanta mis hobbies ${hobbies.join(", ")}.`

 console.log(personalizedBio)
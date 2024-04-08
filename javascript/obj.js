console.log("-Esercizio 1-")
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }
  ageComparaison(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`
    }
  }
}

const user1 = new User("Gigi", "Malu", 30, "Cagliari")
const user2 = new User("Paolo", "Dinu", 36, "Roma")
const user3 = new User("Vittorio", "Ponzi", 21, "Venezia")
console.log(user1.ageComparaison(user2))

console.log("-Esercizio 2-")
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }
  sameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName
  }
}
let recent = []
function addRequest(pet) {
  const requests = document.getElementById("pending")
  const request = document.createElement("li")
  request.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`
  recent.push(pet)
  requests.appendChild(request)
}
document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault()
  const petName = document.getElementById("petName").value
  const ownerName = document.getElementById("ownerName").value
  const species = document.getElementById("species").value
  const breed = document.getElementById("breed").value
  let newPet = new Pet(petName, ownerName, species, breed)
  document.getElementById("petForm").reset()
  addRequest(newPet)
})

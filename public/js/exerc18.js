class User {
    constructor(firstName, lastName, id) {
        this.firstName = firstName
        this.lastName = lastName
        this.userId = id
    }
    getName = () => {
        const firstName = this.firstName
        const lastName = this.lastName
        const userId = this.userId
        console.log(firstName, lastName, userId)
        sendName({ firstName, lastName, userId })
    }
}

function sendName(data) {
    fetch('http://localhost:3000/persons', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
}

function inputsValSend() {
    const formRef = document.querySelector('#form')
    const inputsValue = {
        firstName: formRef.elements.firstName.value,
        lastName: formRef.elements.lastName.value,
        userId: formRef.elements.userId.value,
    }
    const user = new User(inputsValue.firstName ,inputsValue.lastName,inputsValue.userId)
    user.getName()
}


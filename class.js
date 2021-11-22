class User {
    constructor(email, name) {
        this.email = email
        this.name = name
    }
    registeR = (credentials) => {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((data) => {
                return (data.json())
            })
            .then((userOrMsgResponse) => {
                if (userOrMsgResponse.message === 'Email Alreay taken.') {
                    $('#confirm').html('User Email already taken')
                }
                else {
                    users.push(new User(userOrMsgResponse.email, userOrMsgResponse.name))
                    $('#confirm').html('User Registered')
                    console.log(users)
                }
            })
    }
    logIn() {
        console.log(this.email, 'Just logged out')
        return this
    }
    logOut() {
        console.log(this.email, 'Just logged out')
        return this
    }
}
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email
        })
    }
}

const admin = new Admin()
let users = [
    new Admin('synexprox@gmail.com', 'Nir')
]

class UiRender {
    constructor() {

        this.userRender = function () {

            const userNameLabel = $('<div/>').attr('id', 'userNameLabel').html('User Name: ')
            const userNameInput = $('<input/>').attr('type', 'text')
                .attr('id', 'userName')
            const emailLabel = $('<div/>').attr('id', 'emailLabel').html('Email: ')
            const emailInput = $('<input/>').attr('type', 'text').attr('name', 'email')
                .attr('id', 'email')
            $('#mainDiv').append(userNameLabel, userNameInput, emailLabel, emailInput)
            $('#mainDiv2').append(emailLabel, emailInput)
        }
        this.sendForVerifyRegister = function () {
            const formRef = document.querySelector('#details')
            const btn = $('<button/>').attr('id', 'btn').html("Click")
            btn.on('click', (event) => {
                event.preventDefault()
                const inputValue =
                {
                    email: formRef.elements.email.value,
                    name: formRef.elements.userName.value
                }

                const user = new User()
                user.registeR({ inputValue, users })
            })

            const confirmation = $('<div/>').attr('id', 'confirm')
            $('#mainDiv2').append(btn)
            $('body').append(confirmation)
        }
    }
}
const render = new UiRender()

render.userRender()
render.sendForVerifyRegister()


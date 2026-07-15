const User = {
    _email: 'h@ibc.com',
    _password: "abcdbw",


    get email() {
        return this._email.toLocaleUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

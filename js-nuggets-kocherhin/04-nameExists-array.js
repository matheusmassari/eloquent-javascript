// Check that user with such name exists in array of objects

const users = [
    {
        id: 1,
        name: 'John',
        isActive: true,
    },
    {
        id: 2,
        name: 'Jane',
        isActive: false,
    },
    {
        id: 3,
        name: 'Mary',
        isActive: true,
    },
]

const checkName = (name) => {
    let suchUser = users.find((user) => user.name === name)
    return console.log(suchUser)
}

checkName('John')

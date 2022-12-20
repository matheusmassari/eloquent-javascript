const backendErrors = {
    email: {
        errors: [
            {
                message: "Cant be blank",
            },
        ],
    },
    password: {
        errors: [
            {
                message: "Must contain symbols in different case",
            },
            {
                message: "Must be at least 8 symbols in length",
            },
        ],
    },
    passwordConfirmation: {
        errors: [
            {
                message: "Must match with password",
            },
        ],
    },
};

// ["Email: Cant be blank", "Password: Must contain symbols, Must be at least 8 symbols in length", "PasswordConfirmation: Must match with password"]

const backendErrorsArray = Object.entries(backendErrors);

const formattedData = backendErrorsArray.map(([key, value]) => {
    const fieldMessages = value.errors.map((error) => error.message).join(', ');
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1)
    return `${capitalizedKey}: ${fieldMessages}`
});

console.log(formattedData);

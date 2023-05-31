const momgoose = require('mongoose');

const UserSchema = new momgoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email:{
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
            ]
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        match: [
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            'Please add a valid password'
            ],
            // one example of a valid password is: 12345678aA, 
        select: false
    },
});

module.exports = momgoose.model('User', UserSchema);
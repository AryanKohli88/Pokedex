const mongoose = require("mongoose");
const teamschema = mongoose.Schema({
    team_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    team_name:{
        type: String,
        required: [true, "Please add"],
    },
    pokemonArray: {
        type: String,
        required: [true, "Please add"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Contact", teamschema);
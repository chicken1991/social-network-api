const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Enable email validation 
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: true,
    },
    thoughts: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'thought' 
    }],        //  ================ Not 100% about this one
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;

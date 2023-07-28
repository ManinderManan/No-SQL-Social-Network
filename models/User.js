const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
   {
      reactionId: {
         type: Schema.Types.ObjectId,
         default: () => new Types.ObjectId(),
   },
   reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
   },
   createdAt:{
      type: Date,
      default: Date.now,
   },

   username: {
      type: String,
      required: true,
   },

   },
   {
      toJSON: {
         virtuals: true,
   },
   id: false,
   }
);

const Reaction = model('Reaction', reactionSchema);
// 2 - code validations for passwords etc
var Schema = mongoose.Schema;   /* not sure if we need this line */
var ActionSchema = new Schema ({
    
    _userId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    goalType: { type: String, required: true },
    goalEnum: ['TRACK SMOKING', 'TRACK EXERCISE', 'TRACK SLEEP', 'TRACK WEIGHT','IMPROVE SOCIAL INTERACTIONS'],
    smokingMethod: { type: String, required: true }, 
    smokingEnum: ['CIGARETTE', 'CIGAR', 'E-CIGARETTE', 'PIPE'],
    cigarettesSmokedPerDay: { type: Number, required: true },
    cigarsSmokedPerDay: { type: Number, required: true },
    howManyOneGramCatridgesPerWeek: { type: Number, required: true },
    howManyPipesSmokedPerDay: { type: Number, required: true },
    exerciseEnum: ['HIGH INTENSITY', 'MEDIUM INTENSITY', 'LOW INTENSITY'],
    currentExerciseMinutes: {type: Number, required: true },
    currenSleepHours: {type: Number, required: true },
    currentWeight: {type: Number, required: true },
    currentSocialOutings: {type: Number, required: true },
    currentSocialHours: {type: Number, required: true },
});
///
const Activities = mongoose.model('Activities', ActionsSchema)
module.exports = Activities;
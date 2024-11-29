const mongoose = require('mongoose');

// Candidate schema
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  addedOn: {
    type: String,
    required: true
  },
});

// SkillZone schema
const skillZoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  candidates: [candidateSchema], // Array of candidates
});

// Create model for SkillZone
const SkillZone = mongoose.model('SkillZone', skillZoneSchema);

module.exports = SkillZone;

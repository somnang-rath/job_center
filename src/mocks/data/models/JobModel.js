// models/job.js

export const JobModel = {
  id: Number,
  title: String,
  company: String,
  companyLogo: String,
  location: {
    country: String,
    city: String,
  },
  category: String,
  type: String, // e.g. "Full-Time", "Part-Time"
  salary: String,
  description: String,
  requirements: [String],
  postedBy: Number, // user id
  postedAt: String, // ISO date string
};

export const userModel = {
  id: Number,
  username: String,
  fullname: String,
  email: String,
  password: String,
  photo: String, // URL or base64 image
  profile: String,
  // eslint-disable-next-line no-constant-binary-expression
  role: "employer" || "jobseeker",
  term: Boolean,
};

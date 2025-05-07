export const formatUserResponse = (user) => {
  const userResponse = user.toJSON();
  delete userResponse.password;
  delete userResponse.__v;
  delete userResponse.createdAt;
  delete userResponse.updatedAt;

  return userResponse;
};

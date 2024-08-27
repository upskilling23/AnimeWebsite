export const validateContent = (
  isLogin: boolean,
  loginName?: string,
  loginPassword?: string,
  regName?: string,
  regPassword?: string,
  reEnterRegPassword?: string,
  regFullName?: string,
): string | null => {
  // Validate username or email
  const emailIdValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(
    isLogin ? loginName ?? "" : regName ?? "",
  );
  const passwordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
      isLogin ? loginPassword ?? "" : regPassword ?? "",
    );

  if (!isLogin && !regFullName) {
    return "Enter your full name";
  }
  if (isLogin ? !loginName : !regName) {
    return "Enter your username";
  }

  // Validate passwords
  else if (isLogin ? !loginPassword : !regPassword) {
    return "Enter your password";
  } else if (!isLogin && !reEnterRegPassword) {
    return "Enter your password again in re-enter field";
  }
  // Validate email format
  else if (!emailIdValid) {
    return "Email is invalid";
  }

  // Validate password strength
  else if (!passwordValid) {
    return "Password is invalid";
  }

  // Check password match for registration
  else if (!isLogin && regPassword !== reEnterRegPassword) {
    return "Your passwords do not match";
  }

  // If no issues, return null (no error)
  return null;
};

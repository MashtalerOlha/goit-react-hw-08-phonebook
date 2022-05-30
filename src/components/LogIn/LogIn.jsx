export const Login = () => {
  return (
    <form>
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>

      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

function LoginPage() {
  return (
    <form>
      <h2>Đăng nhập</h2>
      <input type='text' name='account' placeholder='Nhập vào tài khoản' />
      <input type='password' name='password' placeholder='Nhập vào mật khẩu' />
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginPage;

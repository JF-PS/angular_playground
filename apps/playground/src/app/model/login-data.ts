class LoginData {
  constructor(
    readonly email: string,
    readonly password: string,
    readonly login: string | null
  ) {}
}

export default LoginData;

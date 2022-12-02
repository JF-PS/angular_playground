class ProfileData {
  constructor(
    readonly id: string,
    readonly login: string,
    readonly playStyle: string,
    readonly description: string,
    readonly age: string,
    readonly picture: string | null
  ) {}
}

export default ProfileData;

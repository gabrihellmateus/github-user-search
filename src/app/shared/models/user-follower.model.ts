export class UserFollower {
  login: string;
  avatar_url: string;
  html_url: string;

  constructor(
    {
      login,
      avatar_url,
      html_url
    }: {
      login: string,
      avatar_url: string,
      html_url: string
    }
  ) {
    this.login = login;
    this.avatar_url = avatar_url;
    this.html_url = html_url;
  }
}

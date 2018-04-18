export class User {
  login: string;
  avatar_url: string;

  constructor({login, avatar_url}: {login: string, avatar_url: string}) {
    this.login = login;
    this.avatar_url = avatar_url;
  }
}

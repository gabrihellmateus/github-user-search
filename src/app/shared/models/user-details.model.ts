import { User } from './user.model';

export class UserDetails extends User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  email: string;
  blog: string;
  location: string;
  company: string;
  public_repos: string;
  UserFollowers: string;

  constructor(
    {
      login,
      avatar_url,
      name,
      bio,
      email,
      blog,
      location,
      company,
      public_repos,
      UserFollowers
    }: {
      login: string,
      avatar_url: string
      name: string
      bio: string
      email: string
      blog: string
      location: string
      company: string
      public_repos: string
      UserFollowers: string}) {
    super({login, avatar_url});
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.blog = blog;
    this.location = location;
    this.company = company;
    this.public_repos = public_repos;
    this.UserFollowers = UserFollowers;
  }
}

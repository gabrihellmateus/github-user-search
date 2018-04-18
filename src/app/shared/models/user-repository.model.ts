export class UserRepository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;

  constructor(
    {
      name,
      description,
      html_url,
      language,
      stargazers_count,
      forks_count,
      updated_at
    }: {
      name: string,
      description: string,
      html_url: string,
      language: string,
      stargazers_count: number,
      forks_count: number,
      updated_at: string
    }) {
    this.name = name;
    this.description = description;
    this.html_url = html_url;
    this.language = language;
    this.stargazers_count = stargazers_count;
    this.forks_count = forks_count;
    this.updated_at = updated_at;
  }
}

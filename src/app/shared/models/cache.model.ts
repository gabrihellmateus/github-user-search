import { UserRepository, UserFollower, UserDetails, User } from '@app/shared/models';

export interface Cache {
  search: User;
  profile: UserDetails;
  followers: UserFollower;
  respositories: UserRepository;
}

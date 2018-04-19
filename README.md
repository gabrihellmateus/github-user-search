# Github User Search

An Angular project to search users via the [Github Search API](https://developer.github.com/v3/search/).

Some requests are cached in session storage (this will be improved) to limit the use of the API.

#### GitHub API Rate Limit
> For API requests using Basic Authentication or OAuth, you can make up to 5000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether Basic Authentication or an OAuth token was used. This means that all OAuth applications authorized by a user share the same quota of 5000 requests per hour when they authenticate with different tokens owned by the same user. For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

#### GitHub Search API Rate Limit
> The Search API has a custom rate limit. For requests using Basic Authentication, OAuth, or client ID and secret, you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.

## Development server
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Themes
There're two themes available: *Dark Theme* and the deufalt *GitHub Theme*.

To create a new theme see how `src/assets/scss/themes/` are structured and create the same files with your styles.

To apply a new theme simply import it on `src/assets/scss/themes/themes.scss`.


On *each component* you need need to make this import at the top of the `.scss` file:

```
@import 'themes';
```

## To Do
- Centralize cache data in one object sessionStorage
- Save search results on sessionStorage
- Create search URL with query params
- Add logic to Loading component
- Create Pagination component
- Validation of search form field
- Improve Alert component
- Tests

## License
Copyright (c) Gabriel Lima Licensed under the MIT license.

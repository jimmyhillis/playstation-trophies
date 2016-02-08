# Playstation Trophies

A `nodejs` module for pulling all of a user's games and trophies from the [Playstation website](https://www.playstation.com/en-us/my/public-trophies/).

## Usage

To use the API within your code you can use `#request` to return all the games that have been attached to a user's account.

```
import { Trophies } from 'playstation-trophies';

Trophies.request('{{username}}', (err, games) => {
  console.log(`{{username}} has ${games.length} games`);
})
```

Each `Game` may contain:

```json
{
  "title": "Name of the game",
  "platforms": "[PS3|PS4|VITA]",
  "trophies": "[list of trophies]"
}
```

## CLI

A CLI is also available for quickly searching users data to use in your shell.

```bash
# return all games belonging to {{username}} in JSON format
npm run cli {{username}} -- --format json
```

# License

MIT

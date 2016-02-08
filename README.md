# Playstation Trophies

A `nodejs` API to retrieve a user's Playstation trophy data from the [Playstation website](https://www.playstation.com/en-us/my/public-trophies/).

## Usage

To use the API within your code you can use `#request` to return all the games that have been attached to a user's account.

```js
import { Trophies } from 'playstation-trophies';

Trophies.request('{{username}}', (err, games) => {
  console.log(`{{username}} has ${games.length} games`);
})
```

Each `Game` may contain:

```json
{
  "id": "Playstation Game ID",
  "title": "Name of the game",
  "platforms": "[PS3|PS4|VITA]",
  "progress": "Completion percentage for trophies",
  "trophies": "[list of trophies completed]",
  "avatar": "URL for game avatar"
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

import minimist from 'minimist';
import { Trophies } from '../lib/';

const argv = minimist(process.argv.slice(2));
const user = argv.user || argv._[0];
const format = argv.format || null;

if (user === null) {
  console.error('A username must be provided');
  process.exit(1);
}

// Format and output the games returned from the API
// to stdout with the user selected format.
Trophies.request(user, (err, games) => {
  switch (format) {
    case 'json':
      console.log(JSON.stringify(games));
      break;
    default:
      games.forEach(game => {
        console.log(`${game.title} for ${game.platforms.join('|')} ` +
          `is ${game.progress}% complete`);
      });
      break;
  }
});

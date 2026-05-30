// @ts-ignore
import prompt from "awt-prompt";
import chalk from "chalk";
import Song from "./classes/Song.js";
import Config from "./classes/Config.js";

const main = async (): Promise<void> => {
  console.log(
    chalk.greenBright(`\nType the ${chalk.magentaBright("artist")} name:`),
  );
  const resArtist: string = await prompt("> ");

  console.log(
    chalk.greenBright(`\nType the ${chalk.magentaBright("song")} name:`),
  );
  const resSong: string = await prompt("> ");

  const lyrics: string | void = await Song.getLyrics(resArtist, resSong);

  if (!lyrics) {
    failed();
    return;
  } else {
    sucess(lyrics);
    return;
  }
};

const sucess = async (lyrics: string): Promise<void> => {
  console.log(chalk.yellowBright(`\n${lyrics}`));
  console.log(
    chalk.gray("\nSong found! Do you want to try another song? Type y or n:"),
  );
  const res: string = await prompt("> ");
  const newReS: string = await Config.verifyInput(
    res,
    "\nDo you want to try another song? Type y or n:",
  );

  if (newReS === "y") {
    main();
    return;
  } else {
    return;
  }
};

const failed = async (): Promise<void> => {
  console.log(chalk.gray("\nDo you want to try again? Type y or n:"));
  const res: string = await prompt("> ");
  const newReS: string = await Config.verifyInput(
    res,
    "\nDo you want to try again? Type y or n:",
  );

  if (newReS === "y") {
    main();
    return;
  } else {
    return;
  }
};

console.log(chalk.bgBlueBright("\nWelcome to Lyrics Finder!"));
main();

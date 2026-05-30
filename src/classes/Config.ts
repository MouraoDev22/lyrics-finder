// @ts-ignore
import prompt from "awt-prompt";
import chalk from "chalk";

class Config {
  static treatError(error: unknown, message: string): void {
    const newMessage: string = message;

    if (error instanceof Error) {
      console.error(`${chalk.redBright(`\n${newMessage}${error.message}`)}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }

  static async verifyInput(input: string, message: string): Promise<string> {
    let newInput: string = input;

    while (newInput !== "y" && newInput !== "n") {
      console.log(chalk.redBright("\nInvalid input. Please try again."));
      console.log(chalk.gray(message));
      newInput = await prompt("> ");
    }

    return newInput;
  }
}

export default Config;

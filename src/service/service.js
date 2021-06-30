`use strict`;

const {Cli} = require(`./cli`);

const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  COMMAND_ARGV_INDEX,
  ExitCode,
} = require(`./cli/constants`);

const userArgs = process.argv.slice(USER_ARGV_INDEX);
const commandArgs = process.argv.slice(COMMAND_ARGV_INDEX);
const [command] = userArgs;

if (userArgs.length === 0 || !Cli[command]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.SUCCESS);
}

Cli[command].run(commandArgs);

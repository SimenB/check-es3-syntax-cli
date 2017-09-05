#!/usr/bin/env node

import path from 'path';
import yargs from 'yargs';
import chalk from 'chalk';
import check from 'check-es3-syntax';

const { argv } = yargs
  .usage('Usage: $0 [options] file_or_directory_name(s)')
  .demand(1, 'Must be called with at least one file')
  .option('patch', {
    describe: 'print patch-file to disk',
    default: false,
    type: 'boolean',
  })
  .option('d', {
    alias: 'directory',
    describe:
      'if `file` is used, this sets a directory to write the files to. defaults to `process.cwd()`',
    type: 'string',
  })
  .option('k', {
    alias: 'kill',
    describe: 'exit the process with -1 if differences are found',
    default: false,
    type: 'boolean',
  })
  .option('p', {
    alias: 'print',
    describe: 'print a colorized diff to the console',
    default: false,
    type: 'boolean',
  })
  .implies('directory', 'patch')
  .alias('h', 'help');

const colorize = part => {
  if (part.added) return chalk.green(part.value);
  if (part.removed) return chalk.red(part.value);

  return chalk.grey(part.value);
};

check(argv._, {
  directory: argv.directory || process.cwd(),
  savePatchToDisk: argv.patch,
})
  .tap(arr => {
    if (arr.length === 0) return;

    console.log(
      'There are differences between input version and the ES3 version'
    );

    if (!argv.print) {
      if (argv.patch) {
        console.log('Patch file written to disk');
      } else {
        console.log(
          'Pass `-p` to the cli to print the difference, or `--patch` to create a patch file'
        );
      }

      return;
    }

    const output = arr
      .map(({ textDiff, ...rest }) => {
        const text = textDiff.reduce(
          (memo, part) => `${memo}${colorize(part)}`,
          ''
        );

        return {
          ...rest,
          text,
        };
      })
      .reduce(
        (memo, { filename, text }) =>
          `${memo}${path.resolve(filename)}\n${text}\n\n`,
        ''
      )
      .trim();

    console.log(output);
  })
  .tap(arr => {
    if (argv.kill && arr.length > 0) process.exit(-1);
  })
  .catch(e => {
    console.error(e);
    process.exit(-1);
  });

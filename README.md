# check-es3-syntax-cli
> CLI tool for check-es3-syntax

[![NPM Version][npm-image]][npm-url]
[![Codeclimate Status][codeclimate-image]][codeclimate-url]

[![bitHound Dependencies][bithound-image]][bithound-url]
[![Dependency Status][david-image]][david-url]
[![Dev Dependency Status][david-dev-image]][david-dev-url]
[![Peer Dependency Status][david-peer-image]][david-peer-url]

## Usage

```bash
$ check-es3-syntax file1.js file2.js [options]
```

## Options

```
Usage: check-es3-syntax [options] file_or_directory_name(s)

Options:
  --patch          print patch-file to disk           [boolean] [default: false]
  -d, --directory  if `file` is used, this sets a directory to write the files
                   to. defaults to `process.cwd()`                      [string]
  -k, --kill       exit the process with -1 if differences are found
                                                      [boolean] [default: false]
  -p, --print      print a colorized diff to the console
                                                      [boolean] [default: false]
  -h, --help       Show help                                           [boolean]
```

## Tool
[`check-es3-syntax`][check-es3-syntax-link]

[check-es3-syntax-link]: https://github.com/SimenB/check-es3-syntax
[codeclimate-url]: https://codeclimate.com/github/SimenB/check-es3-syntax-cli
[codeclimate-image]: https://img.shields.io/codeclimate/github/SimenB/check-es3-syntax-cli.svg
[npm-url]: https://npmjs.org/package/check-es3-syntax-cli
[npm-image]: https://img.shields.io/npm/v/check-es3-syntax-cli.svg
[bithound-url]: https://www.bithound.io/github/SimenB/check-es3-syntax-cli/master/dependencies/npm
[bithound-image]: https://www.bithound.io/github/SimenB/check-es3-syntax-cli/badges/dependencies.svg
[david-url]: https://david-dm.org/SimenB/check-es3-syntax-cli
[david-image]: https://img.shields.io/david/SimenB/check-es3-syntax-cli.svg
[david-dev-url]: https://david-dm.org/SimenB/check-es3-syntax-cli#info=devDependencies
[david-dev-image]: https://img.shields.io/david/dev/SimenB/check-es3-syntax-cli.svg
[david-peer-url]: https://david-dm.org/SimenB/check-es3-syntax-cli#info=peerDependencies
[david-peer-image]: https://img.shields.io/david/peer/SimenB/check-es3-syntax-cli.svg

# Müller Project & Services GmbH

This project contains the static site for [http://www.muellerps.ch](http://www.muellerps.ch/) and makes use of the
following tools:

* [Middleman](http://middlemanapp.com/) to generate the static web page.
* [HTML5 Boilderplate](http://html5boilerplate.com/) as front-end template.
* [Foundation](http://foundation.zurb.com/) as responsive front-end framework.

## Installation

Install the following software:

* [GitHub for Windows](http://windows.github.com/)
* [Ruby](http://rubyinstaller.org/)

Now visit the project website at [https://github.com/mksoft/muellerps](https://github.com/mksoft/muellerps) and press
the `Clone in Windows` button and select the target directory where you want to store the project. When the project is
cloned, select `open in command prompt` when pressing on the gear-wheel. In the command prompt, install all
dependencies:

```
$ npm install
```

## Prepare

To install all dependencies, bundle the project:

```Bash
$ bundle

## Run

Before editing, start middleman in the command prompt:

```
$ bundle exec middleman server
```

and open the browser at [http://localhost:4567/](http://localhost:4567/).

## Build

To build the final site:

```Bash
$ bundle exec middleman build
```

The site will be generated to the `build` directory.

## Deploy

To deploy the site `ncftp` needs to be installed:

```
$ brew install ncftp
```

To deploy the static site use the following commands:

```
$ cd build
$ ncftpput -u web229 -R www.muellerps.ch html .
```

## License

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/.

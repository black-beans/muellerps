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
C:\muellerps\npm install
```

## Editing

Before editing, start DocPad in the command prompt:

```
C:\muellerps\bundle exec middleman server
```

and open the browser at [http://localhost:4567/](http://localhost:4567/). You can watch your site while editing.

## Build & Deploy

To generate and deploy the static site use the following commands:

```
C:\muellerps\bundle exec middleman build
```

If all is fine, deploy the site with:

```
C:\muellerps\MUELLERPS_PWD='password' bundle exec middleman deploy
```

## License

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/.

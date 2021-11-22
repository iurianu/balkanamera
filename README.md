## Required Technology
The project is created in the **React.js** framework, which needs node.js, in order to run.
The syntax used for styles is **SCSS**.

First, you need to check if you have *node*, and  *yarn* installed, therefore, open a terminal, and run the following commands:

> `node -v`

and

> `yarn -v`

#### Main Packages
Before installing the main packages, we must update the *node package manager (npm)* that came with *node.js* to the latest version.
In the terminal, run the following command:

`npm update npm`

## Available Scripts

After you have downloaded the files on your computer, you have to add the **node_modules** used for development.
In the terminal, navigate to the project direcytory, and run:

`npm install`

After installing, you must go to the terminal, back in the project directory, and run:

`yarn start`

This command will start running the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Note

In case you don't have everything installed, you can find the installer package for *node* here:

* [node.js](https://nodejs.org/en/download/)

For *yarn*, you must open a terminal, and run the following command, in the project folder:

> `npm install yarn --save-dev`

## Third Party Libraries

* Twitter Bootstrap 5 - _used for styles, and animations_

> The project uses [React Helmet](https://www.npmjs.com/package/react-helmet) to set proper _title, and meta tags_ for each page

> The project uses [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar) for SCSS compiling

## Project Structure
<pre>
public
    - images
    - scripts
    - style
        → scss
            → partials
src
    - components
    - pages
.gitignore
package.json
package-lock.json
README.md
yarn.lock
</pre>

***Code carefully!***
---
title: Gatsby Starterkit
---

## Getting Started

- run `npm ci` to install the site site
- make sure you have an environment file `.env.development` with a variable for `GATSBY_DRUPAL_SOURCE` that links to the instance of Drupal with your content (e.g. http://annertech.docksal)
- - (You can also create an environment file for `.env.production` which will be used if you run any build commands.)
- Make sure you set your ESLint to use the ESLint file from this project, so we all automatically follow the same coding standards. (If using VS Code, there's probably a little "ESLint" link in the bottom left of your window, which you can click to switch this on.)
- - Our coding standards follow AirBnB in general, though we are using the Wes Bos package, so we follow AirBnB via Wes Bos overrides. If you follow the Wes Bos Master Gatsby course, this will all be nice an familiar to you.
- There are a number of instances of `CHANGEME`. Make sure you update those (e.g. in `gatsby-config.js`).

## Creating "Stuff"

All the "stuff" we create is in the `./src` directory.

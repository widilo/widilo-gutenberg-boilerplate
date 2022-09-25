widilo-gutenberg-boilerplate

A boilerplate for the time-saving creation of WordPress Gutenberg Blocks or plugins for the Gutenberg Block Editor.

Installation:

1. Login to your WP installation via SSH/Terminal

2. Switch to the WP plugin directory (wp-content/plugins)

3. Install our boilerplate plugin using the following command: 

   ```js
   npm i @widilo/widilo-gutenberg-boilerplate
   ```

   

4. After installation you can activate the boilerplate plugin in your WordPress backend or via WP-CLI.

   

   With our plugin framework you can add Gutenberg blocks, custom fields and other functionalities to the Gutenberg editor or your WordPress site very quickly, effectively and easily.
   
CHANGELOG:

v1.0.0

- 

1.0.1

- Update README.md

1.0.2

- Update README.md
- Update "devDependencies" in package.json 
- Add license.txt
   
   FAQ 
How to update each dependency in package.json to the latest version? 
   
On npm <3.11:

Simply change every dependency's version to *, then run npm update --save. (Note: broken in recent (3.11) versions of npm).

Before:

  "dependencies": {
    "express": "*",
    "mongodb": "*",
    "underscore": "*",
    "rjs": "*",
    "jade": "*",
    "async": "*"
  }

After:

  "dependencies": {
    "express": "~3.2.0",
    "mongodb": "~1.2.14",
    "underscore": "~1.4.4",
    "rjs": "~2.10.0",
    "jade": "~0.29.0",
    "async": "~0.2.7"
  }

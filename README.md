# widilo® Gutenberg Boilerplate (widilo-gutenberg-boilerplate)

A boilerplate for the time-saving creation of WordPress Gutenberg Blocks or plugins for the Gutenberg Block Editor.

## Installation:

1. Login to your WP installation via SSH/Terminal
2. Switch to the WP plugin directory (wp-content/plugins)
3. Install our boilerplate plugin using the following command:<br> 
   `npm i @widilo/widilo-gutenberg-boilerplate`
4. After installation you can activate the boilerplate plugin in your WordPress backend or via WP-CLI.

With **widilo-gutenberg-boilerplate** you can add Gutenberg blocks, custom fields and other functionalities to the Gutenberg editor or your WordPress site very quickly, effectively and easily.

## Usage

All gutenberg blocks are organized in the plugins folder **wp-content/plugins/widilo-gutenberg-boilerplate/blocks**. Inside the **blocks** folder you can create individual folders and files for every block you want to add. <br>
As an example we have created a block called **widilo Boilerplate Block** -> widilo-gutenberg-boilerplate/blocks/boilerplate-block/boilerplate_block.js. 

Feel free to change the **widilo Boilerplate Block** to your needs. Therefore open **boilerplate_block.js** -> widilo-gutenberg-boilerplate/blocks/boilerplate-block/boilerplate-block.js. You can change the title of your block, the block icon, the category and the block content as you wish.<br>
After you have finished your changes, run `npm run dev` in the plugin folder to make the magic happen.

boilerplate_block.js:
```javascript
const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

registerBlockType( 'widilo-gutenberg-boilerplate/block-boilerplate-block', {

    title: __( 'widilo Boilerplate Block', 'widilo_gutenberg_boilerplate' ), 
    icon: 'marker', 
    category: 'common', 
    keywords: [
        __( 'widilo Boilerplate Block', 'widilo_gutenberg_boilerplate' ),
        __( 'boilerplate-block', 'widilo_gutenberg_boilerplate' ),
    ],

    edit: function( props ) {
        return (
            <div className={ props.className }>
                <p>{ __(`This is an example Gutenberg Block. Feel free to change it to your needs. Therefore open your plugins folder -> widilo-gutenberg-boilerplate -> blocks -> boilerplate-block -> boilerplate-block.js. You can change the title of your block, the block icon, the category and the block content as you wish. After you have finished your changes, run 'npm run dev' in the plugin folder to make the magic happen.`, 'widilo_gutenberg_boilerplate') }</p>
            </div>
        );
    },

    save: function( props ) {
        return (
            <div>
                <p>{ __(`This is an example Gutenberg Block. Feel free to change it to your needs. Therefore open your plugins folder -> widilo-gutenberg-boilerplate -> blocks -> boilerplate-block -> boilerplate-block.js. You can change the title of your block, the block icon, the category and the block content as you wish. After you have finished your changes, run 'npm run dev' in the plugin folder to make the magic happen.`, 'widilo_gutenberg_boilerplate') }</p>
            </div>
        );
    },
} );
```

If you want to create your own block you can simply make a copy of the **boilerplate-block** folder. Please make sure to change the name of the folder and the name of the js file inside your new, renamed block folder after copying.

## npm

https://www.npmjs.com/package/@widilo/widilo-gutenberg-boilerplate
   
## Changelog:

1.0.0

- 

1.0.1

- Update README.md

1.0.2

- Update README.md
- Update "devDependencies" in package.json 
- Add license.txt


## License

GPL v.3

**widilo® Gutenberg Boilerplate** (widilo-gutenberg-boilerplate) <br>
Copyright (C) 2022 widilo® Muennecke & Vollmers GbR

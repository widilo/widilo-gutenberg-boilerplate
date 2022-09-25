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
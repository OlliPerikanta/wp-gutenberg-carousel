import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'wp-gutenberg/carousel-item', {
	title: 'Carousel Item',
	icon: 'admin-comments',
	category: 'text',
	parent: ['wp-gutenberg/carousel'],
	description: "Example block scaffolded with Create Block tool.",
	example: {},
	attributes: {
		articleId: {
		  type: 'string',
		  default: '',
		},
		testTitle: {
			type: 'string',
			default: '',
		  },
	  },
	edit: Edit,
	save,
} );

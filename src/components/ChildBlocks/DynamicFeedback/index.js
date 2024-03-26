import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'wp-gutenberg/carousel-dynamic-feeback', {
	title: 'Carousel Item',
	icon: 'admin-comments',
	category: 'text',
	parent: ['wp-gutenberg/carousel'],
	description: "",
	example: {},
	attributes: {
		articleId: {
		  type: 'string',
		  default: '',
		},
	  },
	edit: Edit,
	save,
} );

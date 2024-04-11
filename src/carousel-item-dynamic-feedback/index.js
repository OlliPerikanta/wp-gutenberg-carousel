import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	icon: 'admin-comments',
	category: 'text',
	parent: ['wp-gutenberg/carousel-container'],
	description: "Display CPT 'feedback' content and auto update content when CPT is updated",
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

import { __ } from '@wordpress/i18n';

import { 
	useBlockProps,
	InnerBlocks,
	InspectorControls,
 } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	const allowedBlocksList = ['wp-gutenberg/carousel-item'];
	return (
		<button { ...useBlockProps() }>
			<InnerBlocks renderAppender={InnerBlocks.ButtonBlockAppender}  />
		</button>
	);
}

import { __ } from '@wordpress/i18n';


import { 
	useBlockProps,
	InnerBlocks,
	InspectorControls,
 } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	const allowedBlocksList = ['wp-gutenberg/carousel-item-dynamic-feeback'];
	return (
		<div{ ...useBlockProps() }>
			<InnerBlocks renderAppender={InnerBlocks.ButtonBlockAppender} allowedBlocks={[allowedBlocksList]} />
		</div>
	);
}

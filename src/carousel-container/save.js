import { 
	useBlockProps,
	InnerBlocks,
 } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() } className="swiper swiper-container">
   
    	<div className="swiper-wrapper">
			<InnerBlocks.Content />
		</div>
		<div class="swiper-button-prev"></div>
    	<div class="swiper-button-next"></div>
		</div>
	);
}

import { 
	useBlockProps,
	InnerBlocks,
 } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() } className="swiper-container">
   
    	<div className="swiper-wrapper">
			<InnerBlocks.Content />
		</div>
		<button class="swiper-plugin-navigation-prevEl">
      PREV
    </button>
    <button class="swiper-plugin-navigation-nextEl">
      NEXT
    </button>
		</div>
	);
}

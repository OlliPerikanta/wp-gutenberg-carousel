import { useBlockProps } from '@wordpress/block-editor';


export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Wp Gutenberg Carousel – hello from the saved content!' }
		</p>
	);
}

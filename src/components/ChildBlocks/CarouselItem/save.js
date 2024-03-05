import { useBlockProps } from '@wordpress/block-editor';


export default function save({ attributes, setAttributes }) {
	console.log(attributes.testTitle);
	return (
		<div { ...useBlockProps.save() }>
			<p>{attributes.testTitle}</p>
		</div>
	);
}

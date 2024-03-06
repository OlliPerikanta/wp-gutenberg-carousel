import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { testemonialTitle } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<p>{testemonialTitle}</p>
		</div>
	);
}

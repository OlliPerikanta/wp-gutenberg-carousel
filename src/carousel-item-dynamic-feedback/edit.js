import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { 
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import './editor.scss';

// Component for selecting an article
const ArticleSelector = ({ value, onChange, articles }) => {
	// Convert article data to the format required by SelectControl
	const options = [{ label: __('Select article'), value: '', disabled: true }, ...articles.map((article) => ({
		label: article.title.rendered,
		value: article.id,
	}))];

	return (
		<InspectorControls>
			<SelectControl
				label={__('Select article')}
				value={value}
				options={options}
				onChange={onChange}
			/>
		</InspectorControls>
	);
};

// Main editing component
export default function Edit({ attributes, setAttributes }) {
	// Destructure attributes
	const { articleId } = attributes;
	const [selectedArticle, setSelectedArticle] = useState(null);

	// Fetch articles data using useSelect hook
	const articles = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'feedbacks', {
			per_page: -1,
		});
	}, []);

	// Handle article selection
	const onChangeArticle = (newArticleId) => {
		const selected = articles.find(article => article.id === parseInt(newArticleId));
		setSelectedArticle(selected);
		setAttributes({ 
			articleId: newArticleId,
		});
	};

	// Effect to handle changes when articleId or articles change
	useEffect(() => {
		if (!articleId || !articles) return;
		const selected = articles.find(article => article.id === parseInt(articleId));
		setSelectedArticle(selected);
	}, [articleId, articles]);

	// Get title and content of selected article
	const articleTitle = selectedArticle ? selectedArticle.title.rendered : '';
	const articleContent = selectedArticle ? selectedArticle.acf.feedback_text : '';

	// Return the edit component
	return (
		<div { ...useBlockProps() }>
			<ArticleSelector
				value={articleId}
				onChange={onChangeArticle}
				articles={articles || []}
			/>
			<p>{__('Selected article')}: {articleTitle}</p>
			<p>{articleContent}</p>
		</div>
	);
}

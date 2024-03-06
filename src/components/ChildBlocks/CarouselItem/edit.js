// Import necessary functions and components from WordPress packages
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { 
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

// Import custom styles
import './editor.scss';

// Define a component for selecting an article from a list
const ArticleSelector = ({ value, onChange, articles }) => {
	// Map articles data to options format required by SelectControl
	const options = [{ label: 'Select Testemonial', value: '', disabled: true }, ...articles.map((article) => ({
		label: article.title.rendered,
		value: article.id,
	  }))];
  
	// Return InspectorControls component containing SelectControl
	return (
	  <InspectorControls>
		<SelectControl
		  label="Valitse artikkeli"
		  value={value}
		  options={options}
		  onChange={onChange}
		/>
	  </InspectorControls>
	);
};

// Define the main Edit function for the block
export default function Edit({ attributes, setAttributes }) {
	// Destructure articleId from attributes
	const { articleId } = attributes;

	const [testemonialTitle, setPostTitle] = useState(attributes.testemonialTitle || '');

	// Fetch articles data using useSelect hook
	const articles = useSelect((select) => {
	  return select('core').getEntityRecords('postType', 'recommenders', {
		per_page: -1,
	  });
	}, []);

	const onChangeArticle = (newArticleId) => {
		const selectedArticle = articles.find(article => article.id === parseInt(newArticleId));
		const newTitle = selectedArticle ? selectedArticle.title.rendered : '';
		setAttributes({ 
		  articleId: newArticleId,
		  testemonialTitle: newTitle 
		});
		setPostTitle(newTitle);
	  };

	// Set default value for articles variable if it's null or undefined
	const articlesToDisplay = articles || [];

	// Check if articleId and articles data are loaded before performing find operation
	const selectedArticle = articlesToDisplay.find(article => article.id === parseInt(articleId));
	const articleTitle = selectedArticle ? selectedArticle.title.rendered : '';
	
	// Return block's Edit component
	return (
		<div { ...useBlockProps() } style={{height: '50px', width: '100%'}}>
			<ArticleSelector
				value={articleId}
				onChange={onChangeArticle}
				articles={articlesToDisplay}
			/>
			<p>Valittu artikkeli: {articleTitle}</p>
		</div>
	);
}

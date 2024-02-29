import { registerBlockType } from '@wordpress/blocks';
import './components/ChildBlocks/CarouselItem';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );

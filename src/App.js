import './App.css';
import CharacterSheet from "./CharacterSheetViewer";

export default function App() {
	const characterId = '123';

	return (
		<div className='app'>
			<h1>DnD Character Sheet</h1>
			<CharacterSheet characterId={characterId}/>
		</div>
	)
}

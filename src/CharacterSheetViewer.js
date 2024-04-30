import {useEffect, useState} from "react";
import DnD5eView from "./Sheets/DnD5eView";
import {fetchCharacterSheetData, saveCharacterSheetData} from "./PerstanceData"

export default function CharacterSheet(characterId) {
	const [characterData, setCharacterData] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchCharacterSheetData(characterId)
			if (data) {
				setCharacterData(data)
			}
		}
		fetchData()
	}, [characterId]);


	const handleDataChange = (fieldName, newValue) => {
		const oldData = characterData
		const newData = {}
		Object.assign(newData, oldData)
		newData[fieldName] = newValue
		setCharacterData(newData);
	};

	const handleDataUpdate = () => {
		saveCharacterSheetData(characterId, characterData);
	}
	if (!characterData) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<DnD5eView
				characterData={characterData}
				handleDataChange={handleDataChange}
				handleDataUpdate={handleDataUpdate}
			/>
		</div>
	);
}
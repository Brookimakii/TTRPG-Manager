import DnD5eData from "./Sheets/DnD5eData";

const API_URL = ""

// export const fetchCharacterSheetData = async (characterId) => {
// 	try {
// 		const response = await fetch(`${API_URL}/characters/${characterId}`);
// 		if (!response.ok) {
// 			throw new Error('Failed to fetch character sheet data');
// 		}
// 		return await response.json();
// 	} catch (error) {
// 		console.error(error);
// 		return null;
// 	}
//
// }
export const fetchCharacterSheetData = async (characterId) => {
	let data = require("./dnd5eMockCharacterSheet.json")
	const characterData = new DnD5eData()
	console.log("Fetched Data: ", data)


	for (let prop in data) {
		if (Object.getPrototypeOf(characterData).hasOwnProperty(prop)) {
			characterData[prop] = data[prop]

		} else {
			console.error("Unknown property: ", prop)
		}
	}
	console.log("Hydrated Data: ", characterData)
	return characterData
}

// export const saveCharacterSheetData = async (characterId, newData) => {
// 	try {
// 		const response = await fetch(`${API_URL}/characters/${characterId}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(newData),
// 		});
// 		if (!response.ok) {
// 			throw new Error('Failed to save character sheet data');
// 		}
// 		return true;
// 	} catch (error) {
// 		console.error(error);
// 		return false;
// 	}
// }
export const saveCharacterSheetData = async (characterId, newData) => {
	console.info("Updated Data")
	console.info(newData)
}

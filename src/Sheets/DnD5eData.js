export default class DnD5eData {
	// Character Stats -----------------------------------------------------------
	// ------- Character Infos -------
	_name: string;
	_classes: string;
	_background: string;
	_playerName: string;
	_race: string;
	_alignment: string;
	_exp: number;

// ------- Character Ability Scores -------
	// ------- Character Saving Throws -------
	// ------- Character Skills -------
	// ------- Character Proficiencies -------
	// ------- Character Passives -------
	// ------- Character Defense -------
	// ------- Character Offense -------
	// ------- Character Équipment -------
	// ------- Character Personality -------
	// ------- Character Abilities & Traits -------
	// Character Profile ---------------------------------------------------------
	// ------- Character Physical Apparence -------
	// ------- Character Physical Allies & Organisation -------
	// ------- Character History -------
	// ------- Character Treasure -------
	// Character Spell -----------------------------------------------------------
	// ------- Character SpellCasting -------
	// ------- Character Casting per Levels -------


	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get classes(): string {
		return this._classes;
	}

	set classes(value: string) {
		this._classes = value;
	}

	get background(): string {
		return this._background;
	}

	set background(value: string) {
		this._background = value;
	}

	get playerName(): string {
		return this._playerName;
	}

	set playerName(value: string) {
		this._playerName = value;
	}

	get race(): string {
		return this._race;
	}

	set race(value: string) {
		this._race = value;
	}

	get alignment(): string {
		return this._alignment;
	}

	set alignment(value: string) {
		this._alignment = value;
	}

	get exp(): number {
		return this._exp;
	}

	set exp(value: number) {
		this._exp = value;
	}

}

export interface PokemonData {
	species: string;
	ability: string | string[];
	item: string | string[];
	gender: GenderName;
	moves: (string | string[])[];
	signatureMove: string;
	evs?: {hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number};
	ivs?: {hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number};
	nature?: string | string[];
	shiny?: number | boolean;
	level?: number;
	happiness?: number;
	skip?: string;
}

interface PokemonDatas {[k: string]: PokemonData}

export const pokemonDatas: PokemonDatas = {
	Test: {
		species: 'Celebi', 
        ability: 'Water Absorb', item: 'Focus Sash', gender: 'M',
		moves: ['Eruption', 'Earth Power', 'Fire Blast'],
		signatureMove: 'Earthquake',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
		skip: 'originbase',
	},
	jorigin: {
		species: 'Jirachi', 
        ability: 'Origin Legacy', item: 'Focus Sash', gender: 'M',
		moves: [/*Jirachi*/ 'Iron Head', 'Wish', 'Thunder Wave', 'Zen Headbutt',/*Manaphy*/ 'Rain Dance', 'Sleep Talk', 'Aqua Ring', 'Tail Glow',/*Zeraora*/ 'Work Up', 'Drain Punch', 'Grass Knot', 'Plasma Fists',/*Victini*/ 'Searing shot', 'Scorching Sands', 'Rest', 'Psychic',/*Genesect*/ 'Techno Blast', 'Fell Stinger', 'Bug Buzz', 'Flash Cannon',/*Mew base*/ 'Cosmic Power', 'Stored Power', 'Dark Pulse', 'Shadow Ball'],
		signatureMove: 'JIRACHI',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
		skip: 'originbase',
	},
	morigin: {
		species: 'Manaphy', 
        ability: 'Origin Legacy', item: 'Focus Sash', gender: 'M',
		moves: [/*Jirachi*/ 'Iron Head', 'Wish', 'Thunder Wave', 'Zen Headbutt',/*Manaphy*/ 'Rain Dance', 'Sleep Talk', 'Aqua Ring', 'Tail Glow',/*Zeraora*/ 'Work Up', 'Drain Punch', 'Grass Knot', 'Plasma Fists',/*Victini*/ 'Searing shot', 'Scorching Sands', 'Rest', 'Psychic',/*Genesect*/ 'Techno Blast', 'Fell Stinger', 'Bug Buzz', 'Flash Cannon',/*Mew base*/ 'Cosmic Power', 'Stored Power', 'Dark Pulse', 'Shadow Ball'],
		signatureMove: 'MANAPHY',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
	},
	zorigin: {
		species: 'Zeraora', 
        ability: 'Origin Legacy', item: 'Focus Sash', gender: 'M',
		moves: [/*Jirachi*/ 'Iron Head', 'Wish', 'Thunder Wave', 'Zen Headbutt',/*Manaphy*/ 'Rain Dance', 'Sleep Talk', 'Aqua Ring', 'Tail Glow',/*Zeraora*/ 'Work Up', 'Drain Punch', 'Grass Knot', 'Plasma Fists',/*Victini*/ 'Searing shot', 'Scorching Sands', 'Rest', 'Psychic',/*Genesect*/ 'Techno Blast', 'Fell Stinger', 'Bug Buzz', 'Flash Cannon',/*Mew base*/ 'Cosmic Power', 'Stored Power', 'Dark Pulse', 'Shadow Ball'],
		signatureMove: 'ZERAORA',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
		skip: 'originbase',
	},
	vorigin: {
		species: 'Victini', 
        ability: 'Origin Legacy', item: 'Focus Sash', gender: 'M',
		moves: [/*Jirachi*/ 'Iron Head', 'Wish', 'Thunder Wave', 'Zen Headbutt',/*Manaphy*/ 'Rain Dance', 'Sleep Talk', 'Aqua Ring', 'Tail Glow',/*Zeraora*/ 'Work Up', 'Drain Punch', 'Grass Knot', 'Plasma Fists',/*Victini*/ 'Searing shot', 'Scorching Sands', 'Rest', 'Psychic',/*Genesect*/ 'Techno Blast', 'Fell Stinger', 'Bug Buzz', 'Flash Cannon',/*Mew base*/ 'Cosmic Power', 'Stored Power', 'Dark Pulse', 'Shadow Ball'],
		signatureMove: 'VICTINI',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
		skip: 'originbase',
	},
	gorigin: {
		species: 'Genesect', 
        ability: 'Origin Legacy', item: 'Chill Drive', gender: 'M',
		moves: [/*Jirachi*/ 'Iron Head', 'Wish', 'Thunder Wave', 'Zen Headbutt',/*Manaphy*/ 'Rain Dance', 'Sleep Talk', 'Aqua Ring', 'Tail Glow',/*Zeraora*/ 'Work Up', 'Drain Punch', 'Grass Knot', 'Plasma Fists',/*Victini*/ 'Searing shot', 'Scorching Sands', 'Rest', 'Psychic',/*Genesect*/ 'Techno Blast', 'Fell Stinger', 'Bug Buzz', 'Flash Cannon',/*Mew base*/ 'Cosmic Power', 'Stored Power', 'Dark Pulse', 'Shadow Ball'],
		signatureMove: 'GENESECT',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
		skip: 'originbase',
	},
	originbase: {
		species: 'Mew', 
        ability: 'Origin Legacy', item: 'Focus Sash', gender: 'M',
		moves: [/*Jirachi*/ 'Iron Head', 'Wish', 'Thunder Wave', 'Zen Headbutt',/*Manaphy*/ 'Rain Dance', 'Sleep Talk', 'Aqua Ring', 'Tail Glow',/*Zeraora*/ 'Work Up', 'Drain Punch', 'Grass Knot', 'Plasma Fists',/*Victini*/ 'Searing shot', 'Scorching Sands', 'Rest', 'Psychic',/*Genesect*/ 'Techno Blast', 'Fell Stinger', 'Bug Buzz', 'Flash Cannon',/*Mew base*/ 'Cosmic Power', 'Stored Power', 'Dark Pulse', 'Shadow Ball'],
		signatureMove: 'MEW',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
	},
	mewevolved: {
		species: 'Mew', 
        ability: 'Origin Legacy 2', item: 'Oran Berry', gender: 'M',
		moves: ['Colorful Beam', 'Elemental Charge', 'Psychic'],
		signatureMove: 'Cosmic Power',
		evs: {hp: 2000, spd: 172, spe: 84}, nature: 'Calm',
	},
}
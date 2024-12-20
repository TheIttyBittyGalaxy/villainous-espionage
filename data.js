const data = [
	{
		name: "Veronica Valentine",
		objective: "",
		style: {
			color: "#B450A4",
			border: "double",
		},
		guide: [
			{
				heading: "Veronica Valentine's Objective",
				body: ["To achieve Veronica Valentine's objective, you must "],
			},
		],
		locations: [
			{
				name: "Location A",
				upper: "Play Card | Gain 2 ",
				lower: "Fate      | Discard",
			},
			{
				name: "Location B",
				upper: "Discard | Fate     ",
				lower: "Gain 1  | Play Card",
			},
			{
				name: "Location C",
				upper: "Activate | Play Card",
				lower: "Gain 3   | Play Card",
			},
			{
				name: "Location D",
				upper: "Play Card | Activate         ",
				lower: "Vanquish  | Move Item or Ally",
			},
		],
		villain_deck: [
			{
				name: "Double Agent",
				kind: "Ally",
				ability:
					"When Double Agent is played, play them to a location another Villain's Realm. Double Agent is under that Villain's control.",
				strength: 1,
				cost: 2,
			},
		],
		fate_deck: [
			{
				name: "Detective",
				kind: "Hero",
				strength: 4,
			},
		],
	},
	{
		name: "Skull",
		objective: "",
		style: {
			color: "#292130",
			border: "double",
		},
		guide: [
			{
				heading: "Skull's Objective",
				body: ["To achieve Skull's objective, you must "],
			},
		],
		locations: [
			{
				name: "Location A",
				upper: "Play Card | Discard",
				lower: "Gain 2    | Fate   ",
			},
			{
				name: "Location B",
				upper: "Play Card | Move Item or Ally",
				lower: "Gain 3    | Play Card        ",
			},
			{
				name: "Location C",
				upper: "Play Card | Gain 1  ",
				lower: "Discard   | Vanquish",
			},
			{
				name: "Location D",
				upper: "Fate      | Play Card        ",
				lower: "Move Hero | Move Item or Ally",
			},
		],
		villain_deck: [
			{
				name: "Double Agent",
				kind: "Ally",
				ability:
					"When Double Agent is played, play them to a location another Villain's Realm. Double Agent is under that Villain's control.",
				strength: 1,
				cost: 2,
			},
		],
		fate_deck: [
			{
				name: "Detective",
				kind: "Hero",
				strength: 4,
			},
		],
	},
	{
		name: "The Underdog",
		objective: "",
		style: {
			color: "#BF2131",
			border: "double",
		},
		guide: [
			{
				heading: "The Underdog's Objective",
				body: ["To achieve The Underdog's objective, you must "],
			},
		],
		locations: [
			{
				name: "Location A",
				upper: "Play Card         | Move Item or Ally",
				lower: "Move Item or Ally | Gain 1           ",
			},
			{
				name: "Location B",
				upper: "Gain 1 | Discard ",
				lower: "Fate   | Activate",
			},
			{
				name: "Location C",
				upper: "Play Card | Move Item or Ally",
				lower: "Gain 3    | Play Card        ",
			},
			{
				name: "Location D",
				upper: "Gain 2    | Fate   ",
				lower: "Play Card | Discard",
			},
		],
		villain_deck: [
			{
				name: "Double Agent",
				kind: "Ally",
				ability:
					"When Double Agent is played, play them to a location another Villain's Realm. Double Agent is under that Villain's control.",
				strength: 1,
				cost: 2,
			},
		],
		fate_deck: [
			{
				name: "Detective",
				kind: "Hero",
				strength: 4,
			},
		],
	},
];

function sortDeck(a, b) {
    if (a.copies == b.copies) {
        if (a.kind == b.kind) {
            return a.name.localeCompare(b.name);
        }
        return a.kind.localeCompare(b.kind);
    }
    return a.copies < b.copies;
}

// data.sort((a, b) => a.name.localeCompare(b.name));

for (const villain of data) {
    for (const card of villain.villain_deck) {
        if (!card.name) {
            card.name = "untitled";
            console.warn(`One of ${villain.name}'s Villain cards doesn't have a name.`);
        }

        if (!card.kind)
            console.warn(`${card.name} does not have a Kind`)

        if (card.cost === undefined && card.kind != "Condition")
            console.warn(`${card.name} does not have a cost`)

        if (card.strength === undefined && card.kind == "Ally")
            console.warn(`${card.name} does not have a Strength`)

        card.ability = card.ability;
        card.copies = card.copies || 1;
        card.fate_card = false;
    }

    for (const card of villain.fate_deck) {
        if (!card.name) {
            card.name = "untitled";
            console.warn(`One of ${villain.name}'s Fate cards doesn't have a name.`);
        }

        if (!card.kind)
            console.warn(`${card.name} does not have a Kind`)

        if (card.strength === undefined && card.kind == "Hero")
            console.warn(`${card.name} does not have a Strength`)

        card.ability = card.ability;
        card.copies = card.copies || 1;
        card.fate_card = true;
    }

    villain.villain_deck.sort(sortDeck)
    villain.fate_deck.sort(sortDeck)

    for (const location of villain.locations) {
        location.upper = location.upper.split("|").map(s => s.trim())
        location.lower = location.lower.split("|").map(s => s.trim())
    }
}
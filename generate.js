const keywords = [
    "Ally", "Allies",
    "Item", "Items",
    "Hero", "Heros",
    "Effect", "Effects",
    "Condition", "Conditions",

    "Realm", "Realms",
    "Board", "Boards",
    "Power",

    "Ability", "Abilities",
    "Strength", "Strengths",
    "Cost", "Costs",

    "Vanquish",
    "Fate",
    "Activate",
]

function create(parent, kind, ...classList) {
    const e = document.createElement(kind);
    if (parent)
        parent.appendChild(e);
    if (classList.length > 0)
        e.classList.add(...classList);
    return e;
}

function setKeywordText(e, text) {
    let first_part = false
    for (const part of text.split("/")) {
        const words = part.split(" ");
        let remainingText = ""

        for (const word of words) {
            let capitalised = word.charAt(0).toUpperCase() + word.slice(1);
            let punctuation = false;
            let plural = false;

            if (capitalised.substr(-2) == "'s") {
                capitalised = capitalised.slice(0, -2)
                plural = true
            } else if (")],.!'".includes(capitalised.substr(-1))) {
                punctuation = capitalised.substr(-1);
                capitalised = capitalised.slice(0, -1)
            }

            if (keywords.includes(capitalised)) {
                if (remainingText) {
                    const text = document.createTextNode(remainingText);
                    e.appendChild(text);
                }
                if (punctuation) {
                    remainingText = punctuation + " "
                } else {
                    remainingText = " "
                }

                const keyword = create(e, "span", "keyword", "keyword-" + capitalised.toLowerCase())
                keyword.innerText = capitalised;
                if (plural) {
                    keyword.innerText += "'s"
                }
                e.appendChild(keyword);

            } else {
                remainingText += word + " ";
            }
        }

        if (remainingText) {
            const text = document.createTextNode(remainingText);
            e.appendChild(text);
        }

        if (first_part) {
            first_part = false
        } else {
            e.appendChild(document.createElement("br"))
        }
    }
}

function createCardElement(villain, card) {
    const e = document.createElement("div");
    e.classList.add("card");
    if (card.fate_card)
        e.classList.add("fate");
    e.style.setProperty("--villain-color", villain.style.color);
    e.style.setProperty("--villain-border-style", villain.style.border);

    const name = create(e, "span", "name");
    name.innerText = card.name;

    const kind_container = create(e, "div", "kind");
    const kind = create(kind_container, "span");
    kind.classList.add("keyword");
    kind.classList.add("keyword-" + card.kind.toLowerCase());
    kind.innerText = card.kind;

    const ability = create(e, "span", "ability");
    const ability_div = create(ability, "div");
    if (card.ability) {
        setKeywordText(ability_div, card.ability);
    } else {
        ability_div.innerText = "No additional Ability.";
        ability.classList.add("no-ability");
    }

    if (card.font == "small") {
        ability.classList.add("small")
    }

    if (card.cost !== undefined) {
        const cost = create(e, "span", "cost");
        cost.innerText = card.cost;
    }

    if (card.strength !== undefined) {
        const strength = create(e, "span", "strength");
        strength.innerText = card.strength;
    }

    return e;
}

function createBackingElement(villain, card) {
    const e = document.createElement("div");
    e.classList.add("backing");
    if (card.fate_card)
        e.classList.add("fate");
    e.style.setProperty("--villain-color", villain.style.color);
    e.style.setProperty("--villain-border-style", villain.style.border);

    e.innerText = villain.name.substr(0, 1);
    return e;
}

function createBoardElement(villain) {
    const e = document.createElement("div");
    e.classList.add("board");
    e.style.setProperty("--villain-color", villain.style.color);
    e.style.setProperty("--villain-border-style", villain.style.border);

    const p = create(e, "div", "portrait");
    const n = create(p, "span", "name");
    n.innerText = villain.name;

    {
        const d = create(p, "div", "desc");
        const c = create(d, "div", "content");
        const t = create(c, "span", "title");
        if (villain.name.substr(-1) == "s")
            t.innerText = villain.name + "' Objective"
        else
            t.innerText = villain.name + "'s Objective"
        const o = create(c, "span", "objective");
        o.innerText = villain.objective
    }

    const locations = create(e, "div", "locations");

    for (const location of villain.locations) {
        const l = create(locations, "div", "location");

        const upper = create(l, "div", "upper");
        const uppers = create(upper, "div", "actions")
        for (const action of location.upper) {
            const a = create(uppers, "div", "action");
            a.innerText = ({
                "Gain 1": "1",
                "Gain 2": "2",
                "Gain 3": "3",
                "Vanquish": "V",
                "Play Card": "C",
                "Fate": "F",
                "Move Hero": "H",
                "Move Item or Ally": "M",
                "Discard": "D",
                "Activate": "A"
            })[action];
        }

        const lower = create(l, "div", "lower");
        const lowers = create(lower, "div", "actions")
        for (const action of location.lower) {
            const a = create(lowers, "div", "action");
            a.innerText = ({
                "Gain 1": "1",
                "Gain 2": "2",
                "Gain 3": "3",
                "Vanquish": "V",
                "Play Card": "C",
                "Fate": "F",
                "Move Hero": "H",
                "Move Item or Ally": "M",
                "Discard": "D",
                "Activate": "A"
            })[action];
        }

        const n = create(l, "span", "name");
        n.innerText = location.name;

        create(l, "div", "bottom-card");
        create(l, "div", "top-card");
        create(l, "img", "image");
    }

    return e;
}
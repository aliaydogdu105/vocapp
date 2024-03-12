
const wordPairs = [
  ["altar", "altar"],
  ["altar", "alter"],
  ["alter", "alter"],
  ["bass", "bass"],
  ["base", "base"],
  ["bass", "base"],
  ["bear", "bear"],
  ["bear", "bare"],
  ["bare", "bare"],
  ["berry", "berry"],
  ["berry", "bury"],
  ["blew", "blew"],
  ["blew", "blue"],
  ["blue", "blue"],
  ["boar", "boar"],
  ["boar", "bore"],
  ["bore", "bore"],
  ["born", "born"],
  ["born", "borne"],
  ["borne", "borne"],
  ["bough", "bough"],
  ["bough", "bow"],
  ["bow", "bow"],
  ["bread", "bread"],
  ["bread", "bred"],
  ["bred", "bred"],
  ["break", "break"],
  ["break", "brake"],
  ["brake", "brake"],
  ["bridal", "bridal"],
  ["bridal", "bridle"],
  ["bridle", "bridle"],
  ["caught", "caught"],
  ["caught", "court"],
  ["court", "court"],
  ["cell", "cell"],
  ["cell", "sell"],
  ["sell", "sell"],
  ["cereal", "cereal"],
  ["cereal", "serial"],
  ["serial", "serial"],
  ["chord", "chord"],
  ["chord", "cord"],
  ["cord", "cord"],
  ["coarse", "coarse"],
  ["coarse", "course"],
  ["course", "course"],
  ["complement", "complement"],
  ["complement", "compliment"],
  ["compliment", "compliment"],
  ["core", "core"],
  ["core", "corps"],
  ["corps", "corps"],
  ["council", "council"],
  ["council", "counsel"],
  ["counsel", "counsel"],
  ["creak", "creak"],
  ["creak", "creek"],
  ["creek", "creek"],
  ["queue", "queue"],
  ["curb", "curb"],
  ["curb", "kerb"],
  ["kerb", "kerb"],
  ["currant", "currant"],
  ["currant", "current"],
  ["current", "current"],
  ["cymbal", "cymbal"],
  ["cymbal", "symbol"],
  ["symbol", "symbol"],
  ["dear", "dear"],
  ["dear", "deer"],
  ["deer", "deer"],
  ["Desert", "Dessert"],
  ["Desert", "Desert"],
  ["Dessert", "Dessert"],
  ["dew", "dew"],
  ["dew", "due"],
  ["due", "due"],
  ["die", "die"],
  ["die", "dye"],
  ["dye", "dye"],
  ["draught", "draught"],
  ["draught", "draft"],
  ["draft", "draft"],
  ["earn", "earn"],
  ["earn", "urn"],
  ["urn", "urn"],
  ["fair", "fair"],
  ["fair", "fare"],
  ["fare", "fare"],
  ["feat", "feat"],
  ["feat", "feet"],
  ["feet", "feet"],
  ["fir", "fir"],
  ["fir", "fur"],
  ["fur", "fur"],
  ["flaw", "flaw"],
  ["flaw", "floor"],
  ["floor", "floor"],
  ["flea", "flea"],
  ["flea", "flee"],
  ["flee", "flee"],
  ["flour", "flour"],
  ["flour", "flower"],
  ["flower", "flower"],
  ["fort", "fort"],
  ["fort", "fought"],
  ["fought", "fought"],
  ["foul", "foul"],
  ["foul", "fowl"],
  ["fowl", "fowl"],
  ["gorilla", "gorilla"],
  ["gorilla", "guerrilla"],
  ["guerrilla", "guerrilla"],
  ["grate", "grate"],
  ["grate", "great"],
  ["great", "great"],
  ["hair", "hair"],
  ["hair", "hare"],
  ["hare", "hare"],
  ["hangar", "hangar"],
  ["hangar", "hanger"],
  ["hanger", "hanger"],
  ["heal", "heal"],
  ["heal", "heel"],
  ["heel", "heel"],
  ["heard", "heard"],
  ["heard", "herd"],
  ["herd", "herd"],
  ["here", "here"],
  ["here", "hear"],
  ["hear", "hear"],
  ["heroin", "heroin"],
  ["heroin", "heroine"],
  ["heroine", "heroine"],
  ["hoarse", "hoarse"],
  ["hoarse", "horse"],
  ["horse", "horse"],
  ["hole", "hole"],
  ["hole", "whole"],
  ["whole", "whole"],
  ["key", "key"],
  ["key", "quay"],
  ["quay", "quay"],
  ["knead", "knead"],
  ["knead", "need"],
  ["need", "need"],
  ["knew", "knew"],
  ["knew", "new"],
  ["new", "new"],
  ["knight", "knight"],
  ["knight", "night"],
  ["night", "night"],
  ["knot", "knot"],
  ["knot", "not"],
  ["not", "not"],
  ["know", "know"],
  ["know", "no"],
  ["no", "no"],
  ["lain", "lain"],
  ["lain", "lane"],
  ["lane", "lane"],
  ["leak", "leak"],
  ["leak", "leek"],
  ["leek", "leek"],
  ["lessen", "lessen"],
  ["lessen", "lesson"],
  ["lesson", "lesson"],
  ["loan", "loan"],
  ["loan", "lone"],
  ["lone", "lone"],
  ["made", "made"],
  ["made", "maid"],
  ["maid", "maid"],
  ["mail", "mail"],
  ["mail", "male"],
  ["male", "male"],
  ["main", "main"],
  ["main", "mane"],
  ["mane", "mane"],
  ["maize", "maize"],
  ["maize", "maze"],
  ["maze", "maze"],
  ["medal", "medal"],
  ["medal", "meddle"],
  ["meddle", "meddle"],
  ["miner", "miner"],
  ["miner", "minor"],
  ["minor", "minor"],
  ["moan", "moan"],
  ["moan", "mown"],
  ["mown", "mown"],
  ["morning", "morning"],
  ["morning", "mourning"],
  ["mourning", "mourning"],
  ["naval", "naval"],
  ["naval", "navel"],
  ["navel", "navel"],
  ["none", "none"],
  ["none", "nun"],
  ["nun", "nun"],
  ["one", "one"],
  ["one", "won"],
  ["won", "won"],
  ["packed", "packed"],
  ["packed", "pact"],
  ["pact", "pact"],
  ["pain", "pain"],
  ["pain", "pane"],
  ["pane", "pane"],
  ["peace", "peace"],
  ["peace", "piece"],
  ["piece", "piece"],
  ["peal", "peal"],
  ["peal", "peel"],
  ["peel", "peel"],
  ["pedal", "pedal"],
  ["pedal", "peddle"],
  ["peddle", "peddle"],
  ["peer", "peer"],
  ["peer", "pier"],
  ["pier", "pier"],
  ["place", "place"],
  ["place", "plaice"],
  ["plaice", "plaice"],
  ["plain", "plain"],
  ["plain", "plane"],
  ["plane", "plane"],
  ["pole", "pole"],
  ["pole", "poll"],
  ["poll", "poll"],
  ["pore", "pore"],
  ["pore", "pour"],
  ["pour", "pour"],
  ["pour", "poor"],
  ["poor", "poor"],
  ["pray", "pray"],
  ["pray", "prey"],
  ["prey", "prey"],
  ["principal", "principal"],
  ["principal", "principle"],
  ["principle", "principle"],
  ["profit", "profit"],
  ["profit", "prophet"],
  ["prophet", "prophet"],
  ["raise", "raise"],
  ["raise", "raze"],
  ["raze", "raze"],
  ["rap", "rap"],
  ["rap", "wrap"],
  ["wrap", "wrap"],
  ["raw", "raw"],
  ["raw", "roar"],
  ["roar", "roar"],
  ["retch", "retch"],
  ["retch", "wretch"],
  ["wretch", "wretch"],
  ["ring", "ring"],
  ["ring", "wring"],
  ["wring", "wring"],
  ["Race", "Raise"],
  ["Race", "Race"],
  ["Raise", "Raise"],
  ["road", "road"],
  ["road", "rode"],
  ["rode", "rode"],
  ["role", "role"],
  ["role", "roll"],
  ["roll", "roll"],
  ["root", "root"],
  ["root", "route"],
  ["route", "route"],
  ["sail", "sail"],
  ["sail", "sale"],
  ["sale", "sale"],
  ["sauce", "sauce"],
  ["sauce", "source"],
  ["source", "source"],
  ["scene", "scene"],
  ["scene", "seen"],
  ["seen", "seen"],
  ["sea", "sea"],
  ["sea", "see"],
  ["see", "see"],
  ["seam", "seam"],
  ["seam", "seem"],
  ["seem", "seem"],
  ["shear", "shear"],
  ["shear", "sheer"],
  ["sheer", "sheer"],
  ["sole", "sole"],
  ["sole", "soul"],
  ["soul", "soul"],
  ["some", "some"],
  ["some", "sum"],
  ["sum", "sum"],
  ["son", "son"],
  ["son", "sun"],
  ["sun", "sun"],
  ["sow", "sow"],
  ["sow", "sew"],
  ["sew", "sew"],
  ["stair", "stair"],
  ["stair", "stare"],
  ["stare", "stare"],
  ["stake", "stake"],
  ["stake", "steak"],
  ["steak", "steak"],
  ["stalk", "stalk"],
  ["stalk", "stork"],
  ["stork", "stork"],
  ["stationary", "stationary"],
  ["stationary", "stationery"],
  ["stationery", "stationery"],
  ["steal", "steal"],
  ["steal", "steel"],
  ["steel", "steel"],
  ["storey", "storey"],
  ["storey", "story"],
  ["story", "story"],
  ["tail", "tail"],
  ["tail", "tale"],
  ["tale", "tale"],
  ["tear", "tear"],
  ["tear", "tier"],
  ["tier", "tier"],
  ["there", "there"],
  ["there", "their"],
  ["their", "their"],
  ["threw", "threw"],
  ["threw", "through"],
  ["through", "through"],
  ["throne", "throne"],
  ["throne", "thrown"],
  ["thrown", "thrown"],
  ["toe", "toe"],
  ["toe", "tow"],
  ["tow", "tow"],
  ["too", "too"],
  ["too", "two"],
  ["two", "two"],
  ["vain", "vain"],
  ["vain", "vein"],
  ["vein", "vein"],
  ["wail", "wail"],
  ["wail", "whale"],
  ["whale", "whale"],
  ["waist", "waist"],
  ["waist", "waste"],
  ["waste", "waste"],
  ["wait", "wait"],
  ["wait", "weight"],
  ["weight", "weight"],
  ["war", "war"],
  ["war", "wore"],
  ["wore", "wore"],
  ["warn", "warn"],
  ["warn", "worn"],
  ["worn", "worn"],
  ["way", "way"],
  ["way", "weigh"],
  ["weigh", "weigh"],
  ["weak", "weak"],
  ["weak", "week"],
  ["week", "week"],
  ["whether", "whether"],
  ["whether", "weather"],
  ["weather", "weather"],
  ["which", "which"],
  ["which", "witch"],
  ["witch", "witch"],
  ["whine", "whine"],
  ["whine", "wine"],
  ["wine", "wine"],
];


export default wordPairs;
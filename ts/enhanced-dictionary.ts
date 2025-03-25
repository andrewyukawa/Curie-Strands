// Enhanced Dictionary for word validation
// This will be used to validate word submissions beyond the explicit solutions list

export class Dictionary {
    private words: Set<string> = new Set<string>();
    private minLength: number = 4;
    
    constructor(wordList?: string[]) {
        if (wordList) {
            this.addWords(wordList);
        } else {
            // Add common English words (4+ letters) by default
            this.addWords(COMMON_ENGLISH_WORDS);
            
            // Add additional medical and cardiology-related words
            this.addWords(MEDICAL_WORDS);
            
            // Add board-specific words
            this.addWords(BOARD_SPECIFIC_WORDS);
            
            console.log(`Dictionary initialized with ${this.words.size} words`);
        }
    }
    
    public addWords(wordList: string[]): void {
        for (const word of wordList) {
            if (word.length >= this.minLength) {
                this.words.add(word.toUpperCase());
            }
        }
    }
    
    public isValidWord(word: string): boolean {
        return this.words.has(word.toUpperCase()) && word.length >= this.minLength;
    }
    
    public getWordCount(): number {
        return this.words.size;
    }
}

// List of common English words (4+ letters)
const COMMON_ENGLISH_WORDS: string[] = [
    // A
    "ABLE", "ACID", "ALSO", "AREA", "ARMY", "AWAY", "ABOUT", "ABOVE", "ACROSS", "AFTER", "AGAIN", "AGAINST", "AHEAD", "ALLOW", "ALONE", "ALONG", "AMONG", "ANGLE", "ANGRY", "ANIMAL", "ANSWER", "APART", "APPLE", "APPLY",
    
    // B
    "BACK", "BASE", "BEEN", "BEST", "BODY", "BOOK", "BOTH", "BUSY", "BABY", "BALL", "BAND", "BANK", "BARE", "BARN", "BASE", "BATH", "BEAM", "BEAN", "BEAR", "BEAT", "BELT", "BEND", "BENT", "BIKE", "BILL", "BIRD", "BITE", "BLOW", "BLUE", "BOAT", "BOLD", "BONE", "BOWL", "BURN", "BUSH",
    
    // C
    "CALL", "CAME", "CARE", "CASE", "CITY", "COLD", "COME", "COST", "CART", "CATS", "CASH", "CELL", "CENT", "CHAIN", "CHAIR", "CHALK", "CHART", "CHECK", "CHEST", "CHIEF", "CHILD", "CLAIM", "CLASS", "CLEAN", "CLEAR", "CLIMB", "CLOCK", "CLOSE", "CLOUD", "COLOR", "CORAL", "COULD", "COUNT", "COURT", "COVER", "CRAFT", "CRASH", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN", "CURVE", "CYCLE",
    
    // D
    "DARK", "DATA", "DATE", "DEAL", "DEAR", "DEEP", "DESK", "DOOR", "DOWN", "DASH", "DAWN", "DAYS", "DEAD", "DEAF", "DECK", "DENY", "DISH", "DISK", "DIVE", "DOCK", "DOES", "DONE", "DOSE", "DOTS", "DRAW", "DREW", "DROP", "DRUG", "DRUM", "DUAL", "DUCK", "DUST", "DUTY",
    
    // E
    "EACH", "EAST", "EASY", "EDGE", "ELSE", "EVEN", "EVER", "EYES", "EARN", "EARS", "ECHO", "EDIT", "EVIL", "EXIT",
    
    // F
    "FACE", "FACT", "FAIR", "FALL", "FAST", "FEAR", "FEEL", "FELT", "FILE", "FILL", "FILM", "FIND", "FINE", "FIRE", "FIRM", "FISH", "FIVE", "FOOD", "FOOT", "FOUR", "FREE", "FROM", "FULL", "FAIL", "FARM", "FEED", "FELL", "FELT", "FINE", "FLAT", "FLOW", "FOLD", "FOLK", "FORM", "FORT", "FROG", "FUEL", "FUND",
    
    // G
    "GAME", "GAVE", "GETS", "GIVE", "GOAL", "GOES", "GOLD", "GOOD", "GREW", "GROW", "GAIN", "GATE", "GIRL", "GIVE", "GLAD", "GLOW", "GLUE", "GONE", "GRAY", "GREW", "GRID", "GRIM", "GULF",
    
    // H
    "HAIR", "HALF", "HALL", "HAND", "HARD", "HAVE", "HEAD", "HEAR", "HEAT", "HELD", "HELP", "HERE", "HIGH", "HILL", "HOLD", "HOLE", "HOME", "HOPE", "HOUR", "HUGE", "HANG", "HARM", "HATE", "HAUL", "HAWK", "HEAL", "HEAP", "HERO", "HIDE", "HINT", "HIRE", "HOLY", "HOST", "HOUR", "HUNT", "HURT",
    
    // I
    "IDEA", "INTO", "IRON", "ITEM", "ICON", "INCH", "INFO",
    
    // J
    "JOIN", "JOKE", "JUMP", "JUST", "JURY",
    
    // K
    "KEEP", "KEPT", "KIND", "KNEW", "KNOW", "KNOT",
    
    // L
    "LADY", "LAID", "LAKE", "LAND", "LAST", "LATE", "LEAD", "LEFT", "LESS", "LIFE", "LIKE", "LINE", "LIST", "LIVE", "LONG", "LOOK", "LOSE", "LOST", "LOVE", "LUCK", "LAMP", "LANE", "LARK", "LEAD", "LEAF", "LEAN", "LEND", "LENS", "LENT", "LEST", "LETS", "LEVY", "LIED", "LIES", "LIFT", "LINK", "LION", "LIPS", "LIVE", "LOAD", "LOAN", "LOCK", "LOGO", "LONE", "LONG", "LORD", "LOSE", "LOUD", "LOVE", "LUCK", "LUMP", "LUNG",
    
    // M
    "MADE", "MAIL", "MAIN", "MAKE", "MANY", "MARK", "MASS", "MEAN", "MEET", "MILE", "MIND", "MINE", "MISS", "MORE", "MOST", "MOVE", "MUCH", "MUST", "MEAT", "MENU", "MESH", "MIGHT", "MILD", "MILK", "MILL", "MINE", "MINT", "MIST", "MOCK", "MODE", "MOOD", "MOON", "MOST", "MOVE", "MYTH",
    
    // N
    "NAME", "NEAR", "NEED", "NEWS", "NEXT", "NICE", "NINE", "NODE", "NONE", "NOTE", "NAIL", "NAVY", "NECK", "NEST", "NETS", "NOON", "NORM", "NOSE", "NULL", "NUTS",
    
    // O
    "OFFS", "ONCE", "ONLY", "ONTO", "OPEN", "ORAL", "OVER", "OVEN", "OVAL", "OURS",
    
    // P
    "PACK", "PAGE", "PAID", "PAIN", "PAIR", "PART", "PASS", "PAST", "PATH", "PLAN", "PLAY", "PLUS", "POOR", "PORT", "POST", "PULL", "PURE", "PUSH", "PUTS", "PACE", "PALE", "PALM", "PARK", "PAWN", "PEAK", "PICK", "PIER", "PILE", "PINE", "PINK", "PIPE", "PLAN", "PLAY", "PLOT", "PLUG", "PLUS", "POEM", "POET", "POLE", "POLL", "POLO", "POND", "POOL", "POOR", "POPE", "PORT", "POSE", "POST", "POUR", "PRAY", "PREY", "PROF", "PUMP", "PURE",
    
    // Q
    "QUIT", "QUITE", "QUIZ",
    
    // R
    "RACE", "RAIN", "RATE", "READ", "REAL", "REST", "RICE", "RICH", "RIDE", "RING", "RISE", "RISK", "ROAD", "ROCK", "ROLE", "ROLL", "ROOM", "ROOT", "ROSE", "RULE", "RUSH", "RACK", "RAGE", "RAIL", "RANK", "RARE", "RASH", "RATE", "RAYS", "READ", "REAL", "RELY", "RENT", "RICH", "RIDE", "RING", "RIOT", "RISE", "RISK", "RITE", "ROAD", "ROCK", "ROLE", "ROLL", "ROOF", "ROOM", "ROOT", "ROPE", "ROSE", "RULE", "RUSH", "RUST",
    
    // S
    "SAFE", "SAID", "SALE", "SAME", "SAND", "SAVE", "SAYS", "SEAT", "SEED", "SEEK", "SEEM", "SEEN", "SELF", "SELL", "SEND", "SENT", "SETS", "SHIP", "SHOP", "SHOT", "SHOW", "SHUT", "SICK", "SIDE", "SIGN", "SITE", "SIZE", "SKIN", "SLOW", "SNOW", "SOFT", "SOIL", "SOLD", "SOME", "SONG", "SOON", "SORT", "SOUL", "SPOT", "STAR", "STAY", "STEP", "STOP", "SUCH", "SUIT", "SURE", "SAFE", "SAIL", "SAKE", "SANE", "SCAN", "SEAL", "SEAM", "SEAT", "SEED", "SEEK", "SEEM", "SEEN", "SELF", "SELL", "SEND", "SENT", "SETS", "SHIP", "SHOP", "SHOT", "SHOW", "SICK", "SIDE", "SIGN", "SILK", "SING", "SINK", "SITE", "SIZE", "SKIN", "SKIP", "SLAB", "SLAM", "SLAP", "SLIM", "SLIP", "SLOW", "SNAP", "SNOW", "SOAP", "SOAR", "SOCK", "SOFT", "SOIL", "SOLE", "SOME", "SONG", "SOON", "SORE", "SORT", "SOUL", "SOUP", "SOUR", "SPAN", "SPIN", "SPOT", "SPUR", "STAB", "STAR", "STAY", "STEM", "STEP", "STEW", "STIR", "STOP", "SUCH", "SUIT", "SUNG", "SUNK", "SURE", "SURF", "SWIM", "SWUM",
    
    // T
    "TAKE", "TALK", "TALL", "TANK", "TAPE", "TASK", "TEAM", "TELL", "TEND", "TENS", "TERM", "TEST", "TEXT", "THAN", "THAT", "THEM", "THEN", "THEY", "THIN", "THIS", "THUS", "TIME", "TINY", "TOLD", "TONE", "TONY", "TOOK", "TOOL", "TOUR", "TOWN", "TREE", "TRIP", "TRUE", "TUNE", "TURN", "TYPE", "TABS", "TAIL", "TAKE", "TALE", "TALK", "TALL", "TANK", "TAPE", "TASK", "TAXI", "TEAM", "TEAR", "TECH", "TEEN", "TELL", "TENT", "TERM", "TEST", "TEXT", "THAN", "THAT", "THEM", "THEN", "THIN", "THIS", "THUS", "TIDY", "TIED", "TIER", "TIES", "TILE", "TIME", "TINY", "TIRE", "TOLD", "TOLL", "TONE", "TOOK", "TOOL", "TORN", "TOUR", "TOWN", "TRAM", "TRAP", "TRAY", "TREE", "TREK", "TRIM", "TRIO", "TRIP", "TRUE", "TUNE", "TURF", "TURN", "TWIN", "TYPE",
    
    // U
    "UNIT", "UPON", "USED", "USER", "URGE",
    
    // V
    "VARY", "VAST", "VERY", "VIEW", "VOTE", "VAIN", "VALE", "VASE", "VEAL", "VEIN", "VENT", "VERB", "VERY", "VEST", "VIAL", "VICE", "VIEW", "VINE", "VISA", "VOID", "VOLT", "VOTE",
    
    // W
    "WAGE", "WAIT", "WALK", "WALL", "WANT", "WARM", "WASH", "WAVE", "WAYS", "WEAK", "WEAR", "WEEK", "WELL", "WENT", "WERE", "WEST", "WHAT", "WHEN", "WIDE", "WIFE", "WILD", "WILL", "WIND", "WINE", "WIRE", "WISE", "WISH", "WITH", "WOOD", "WORD", "WORK", "WAGE", "WAIT", "WAKE", "WALK", "WALL", "WAND", "WANT", "WARD", "WARE", "WARM", "WARN", "WARY", "WASH", "WATT", "WAVE", "WAYS", "WEAK", "WEAR", "WEED", "WEEK", "WEEP", "WELL", "WENT", "WERE", "WEST", "WHAT", "WHEN", "WHIP", "WIDE", "WIFE", "WILD", "WILL", "WIND", "WINE", "WING", "WIPE", "WIRE", "WISE", "WISH", "WITH", "WOKE", "WOLF", "WOOD", "WOOL", "WORD", "WORE", "WORK", "WORM", "WORN", "WRAP",
    
    // X
    "XRAY",
    
    // Y
    "YARD", "YEAH", "YEAR", "YOUR", "YOGA", "YOLK",
    
    // Z
    "ZERO", "ZONE", "ZOOM"
];

// Medical and cardiology-related words
const MEDICAL_WORDS: string[] = [
    // Anatomy terms
    "AORTA", "ARTERY", "ATRIUM", "BLOOD", "BRAIN", "CARDIAC", "CAROTID", "CHAMBER", "CHEST", "CORONARY", "CORONA", "FEMORAL", "HEART", "JUGULAR", "LUNG", "MITRAL", "MUSCLE", "NERVE", "ORGAN", "PULMONARY", "SEPTUM", "TISSUE", "VALVE", "VEIN", "VENTRICLE",
    
    // Conditions and diseases
    "ACUTE", "ANGINA", "ARREST", "ATTACK", "BLOCKAGE", "CHRONIC", "CLOT", "COLLAPSE", "DAMAGE", "DEFICIT", "DEFECT", "DISEASE", "DISORDER", "EDEMA", "FAILURE", "FIBROSIS", "HYPERTENSION", "INFARCT", "INFECTION", "ISCHEMIA", "LESION", "MURMUR", "OCCLUSION", "PALPITATION", "PAIN", "STENOSIS", "STROKE", "SYNCOPE", "SYNDROME", "TACHYCARDIA", "THROMBOSIS",
    
    // Procedures and tests
    "ANGIOGRAM", "BIOPSY", "BYPASS", "CATHETER", "DIURETIC", "DOSE", "DRUG", "ECHO", "EXAM", "INJECTION", "MEDICINE", "MONITOR", "PACE", "PLASMA", "PROBE", "RATE", "SCAN", "STENT", "SURGERY", "TEST", "THERAPY", "TRANSPLANT", "TREATMENT", "XRAY",
    
    // Measurements and vital signs
    "BEAT", "FLOW", "LEVEL", "PEAK", "PRESSURE", "PULSE", "READING", "RHYTHM", "SIGN", "SYSTOLE", "DIASTOLE", "TENSION", "VOLUME", "WAVE",
    
    // Medical professionals and settings
    "AIDE", "CARE", "CLINIC", "DOCTOR", "DOSE", "DRUG", "EMERGENCY", "HOSPITAL", "INTENSIVE", "NURSE", "PATIENT", "PHYSICIAN", "SURGEON", "THERAPY", "WARD"
];

// Additional words specific to this board that we want to ensure are recognized
const BOARD_SPECIFIC_WORDS: string[] = [
    "NETS", "DOTS", "CORONA", "CORE", "COREY", "STORE", "STOVE", "TOES", "HOSE", "HORSE", "THOSE", "TOOTH", "TOTE", "TONE", "TONES", "STONE", "STORES", 
    "STORY", "STOREY", "STARE", "STARS", "STAIR", "STAIRS", "STARE", "STARES", "START", "STARTS", "STAT", "STATE", "SLAT", "SLATE", "SLATES", 
    "SLATE", "LATER", "LATTE", "LATTES", "LATTER", "LATER", "SLATER", "RELATE", "ELATE", "ELATED", "DATING", "DATA", "DATE", "DATES", "DATED", 
    "DEAR", "DEER", "DEAL", "DEALS", "DEALT", "DEALER", "DEALING", "DEALINGS", "DELTA", "DEALT", "DETAIL", "DETAILS", "DETAILED", "DETAIN", 
    "DRAIN", "TRAINER", "TRAINED", "TRAILS", "TRIAL", "TRIALS", "TRAIN", "TRAINS", "TRAIT", "TRAITS", "TRAITOR", "TRAITORS",
    
    // Other commonly formed words on this board
    "ACTS", "ARTS", "CART", "CATS", "COAT", "CORE", "CORN", "COTS", "DART", "DIET", "DOTS", "EARS", "EAST", "EATS", "GATE", "HATS", "HEAL", "HEAT", "LANE", "LATE", "LEAN", "LENT", "LENS", "LEST", "LETS", "LICE", "LIDS", "LIED", "LIES", "LINT", "LION", "LIPS", "LIST", "NETS", "NEAT", "NEAR", "NEAT", "NEST", "NOTE", "OATS", "ORAL", "ORES", "OVAL", "RATE", "RATS", "ROTS", "SANE", "SEAR", "SEAT", "SEEN", "SENT", "SETS", "SLAT", "SLIT", "SLOT", "STAR", "STAT", "STAY", "STIR", "TALE", "TEAL", "TEAR", "TEAS", "TENS", "TIES", "TILE", "TILT", "TOIL", "TONE", "VASE", "VEAL", "VEIN", "VENT", "VINE", "VISE", 
    
    // Additional common words for this game
    "ALIVE", "ALONE", "ALONG", "ANGLE", "ANGRY", "ARISE", "ASIDE", "AUDIO", "AVOID", "BASED", "BASIC", "BEACH", "BEGAN", "BEGIN", "BLACK", "BLAME", "BLIND", "BLOCK", "BLOOD", "BOARD", "BOOST", "BOOTH", "BOUND", "BRAIN", "BRAND", "BREAD", "BREAK", "BREED", "BRIEF", "BRING", "BROAD", "BROKE", "BROWN", "BUILD", "BUILT", "BUYER", "CABLE", "CALIF", "CARRY", "CATCH", "CAUSE", "CHAIN", "CHAIR", "CHART", "CHASE", "CHEAP", "CHECK", "CHEST", "CHIEF", "CHILD", "CHINA", "CHOSE", "CIVIL", "CLAIM", "CLASS", "CLEAN", "CLEAR", "CLICK", "CLOCK", "CLOSE", "COACH", "COAST", "COULD", "COUNT", "COURT", "COVER", "CRAFT", "CRASH", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN", "CURVE", "CYCLE", "DAILY", "DANCE", "DATED", "DEALT", "DEATH", "DEBUT", "DELAY", "DEPTH", "DOING", "DOUBT", "DOZEN", "DRAFT", "DRAMA", "DRAWN", "DREAM", "DRESS", "DRINK", "DRIVE", "DROVE", "DYING", "EAGER", "EARLY", "EARTH", "EIGHT", "ELITE", "EMPTY", "ENEMY", "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERROR", "EVENT", "EVERY", "EXACT", "EXIST", "EXTRA", "FAITH", "FALSE", "FAULT", "FIBER", "FIELD", "FIFTH", "FIFTY", "FIGHT", "FINAL", "FIRST", "FIXED", "FLASH", "FLEET", "FLOOR", "FLUID", "FOCUS", "FORCE", "FORTH", "FORTY", "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH", "FRONT", "FRUIT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GOING", "GRACE", "GRADE", "GRAND", "GRANT", "GRASS", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN", "GUARD", "GUESS", "GUEST", "GUIDE", "HAPPY", "HARRY", "HEART", "HEAVY", "HENCE", "HENRY", "HORSE", "HOTEL", "HOUSE", "HUMAN", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "ISSUE", "JAPAN", "JIMMY", "JOINT", "JONES", "JUDGE", "KNOWN", "LABEL", "LARGE", "LASER", "LATER", "LAUGH", "LAYER", "LEARN", "LEASE", "LEAST", "LEAVE", "LEGAL", "LEVEL", "LEWIS", "LIGHT", "LIMIT", "LINKS", "LIVES", "LOCAL", "LOGIC", "LOOSE", "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC", "MAJOR", "MAKER", "MARCH", "MARIA", "MATCH", "MAYBE", "MAYOR", "MEANT", "MEDIA", "METAL", "MIGHT", "MINOR", "MINUS", "MIXED", "MODEL", "MONEY", "MONTH", "MORAL", "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVIE", "MUSIC", "NEEDS", "NEVER", "NEWLY", "NIGHT", "NOISE", "NORTH", "NOTED", "NOVEL", "NURSE", "OCCUR", "OCEAN", "OFFER", "ORDER", "OTHER", "OUGHT", "PAINT", "PANEL", "PAPER", "PARTY", "PEACE", "PETER", "PHASE", "PHONE", "PHOTO", "PIECE", "PILOT", "PITCH", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", "POINT", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF", "PROUD", "PROVE", "QUEEN", "QUICK", "QUIET", "QUITE", "RADIO", "RAISE", "RANGE", "RAPID", "RATIO", "REACH", "READY", "REFER", "RIGHT", "RIVAL", "RIVER", "ROBIN", "ROGER", "ROMAN", "ROUGH", "ROUND", "ROUTE", "ROYAL", "RURAL", "SCALE", "SCENE", "SCOPE", "SCORE", "SENSE", "SERVE", "SEVEN", "SHALL", "SHAPE", "SHARE", "SHARP", "SHEET", "SHELF", "SHELL", "SHIFT", "SHIRT", "SHOCK", "SHOOT", "SHORT", "SHOWN", "SIGHT", "SINCE", "SIXTH", "SIXTY", "SIZED", "SKILL", "SLEEP", "SLIDE", "SMALL", "SMART", "SMILE", "SMITH", "SMOKE", "SOLID", "SOLVE", "SORRY", "SOUND", "SOUTH", "SPACE", "SPARE", "SPEAK", "SPEED", "SPEND", "SPENT", "SPLIT", "SPOKE", "SPORT", "STAFF", "STAGE", "STAKE", "STAND", "START", "STATE", "STEAM", "STEEL", "STICK", "STILL", "STOCK", "STONE", "STOOD", "STORE", "STORM", "STORY", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWEET", "TABLE", "TAKEN", "TASTE", "TAXES", "TEACH", "TEETH", "TEXAS", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "TIGHT", "TIMES", "TIRED", "TITLE", "TODAY", "TOPIC", "TOTAL", "TOUCH", "TOUGH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT", "TREND", "TRIAL", "TRIED", "TRIES", "TRUCK", "TRULY", "TRUST", "TRUTH", "TWICE", "UNDER", "UNDUE", "UNION", "UNITY", "UNTIL", "UPPER", "UPSET", "URBAN", "USAGE", "USUAL", "VALID", "VALUE", "VIDEO", "VIRUS", "VISIT", "VITAL", "VOICE", "WASTE", "WATCH", "WATER", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE", "WHOLE", "WHOSE", "WOMAN", "WOMEN", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WRITE", "WRONG", "WROTE", "YIELD", "YOUNG", "YOUTH"
]; 
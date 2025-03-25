// Common 4+ letter English words dictionary
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
}

// List of common English words (4+ letters)
// This is just a starter list - in a production app, you'd use a more comprehensive dictionary
const COMMON_ENGLISH_WORDS: string[] = [
    // A
    "ABLE", "ACID", "ALSO", "AREA", "ARMY", "AWAY",
    // B
    "BACK", "BASE", "BEEN", "BEST", "BODY", "BOOK", "BOTH", "BUSY", 
    // C
    "CALL", "CAME", "CARE", "CASE", "CITY", "COLD", "COME", "COST", 
    // D
    "DARK", "DATA", "DATE", "DEAL", "DEAR", "DEEP", "DESK", "DOOR", "DOWN", 
    // E
    "EACH", "EAST", "EASY", "EDGE", "ELSE", "EVEN", "EVER", "EYES", 
    // F
    "FACE", "FACT", "FAIR", "FALL", "FAST", "FEAR", "FEEL", "FELT", "FILE", "FILL", "FILM", "FIND", "FINE", "FIRE", "FIRM", "FISH", "FIVE", "FOOD", "FOOT", "FOUR", "FREE", "FROM", "FULL", 
    // G
    "GAME", "GAVE", "GETS", "GIVE", "GOAL", "GOES", "GOLD", "GOOD", "GREW", "GROW", 
    // H
    "HAIR", "HALF", "HALL", "HAND", "HARD", "HAVE", "HEAD", "HEAR", "HEAT", "HELD", "HELP", "HERE", "HIGH", "HILL", "HOLD", "HOLE", "HOME", "HOPE", "HOUR", "HUGE", 
    // I
    "IDEA", "INTO", "IRON", "ITEM", 
    // J
    "JOIN", "JOKE", "JUMP", "JUST", 
    // K
    "KEEP", "KEPT", "KIND", "KNEW", "KNOW", 
    // L
    "LADY", "LAID", "LAKE", "LAND", "LAST", "LATE", "LEAD", "LEFT", "LESS", "LIFE", "LIKE", "LINE", "LIST", "LIVE", "LONG", "LOOK", "LOSE", "LOST", "LOVE", "LUCK", 
    // M
    "MADE", "MAIL", "MAIN", "MAKE", "MANY", "MARK", "MASS", "MEAN", "MEET", "MILE", "MIND", "MINE", "MISS", "MORE", "MOST", "MOVE", "MUCH", "MUST", 
    // N
    "NAME", "NEAR", "NEED", "NEWS", "NEXT", "NICE", "NINE", "NODE", "NONE", "NOTE", 
    // O
    "OFFS", "ONCE", "ONLY", "ONTO", "OPEN", "ORAL", "OVER", 
    // P
    "PACK", "PAGE", "PAID", "PAIN", "PAIR", "PART", "PASS", "PAST", "PATH", "PLAN", "PLAY", "PLUS", "POOR", "PORT", "POST", "PULL", "PURE", "PUSH", "PUTS", 
    // Q
    "QUIT", "QUITE", 
    // R
    "RACE", "RAIN", "RATE", "READ", "REAL", "REST", "RICE", "RICH", "RIDE", "RING", "RISE", "RISK", "ROAD", "ROCK", "ROLE", "ROLL", "ROOM", "ROOT", "ROSE", "RULE", "RUSH", 
    // S
    "SAFE", "SAID", "SALE", "SAME", "SAND", "SAVE", "SAYS", "SEAT", "SEED", "SEEK", "SEEM", "SEEN", "SELF", "SELL", "SEND", "SENT", "SETS", "SHIP", "SHOP", "SHOT", "SHOW", "SHUT", "SICK", "SIDE", "SIGN", "SITE", "SIZE", "SKIN", "SLOW", "SNOW", "SOFT", "SOIL", "SOLD", "SOME", "SONG", "SOON", "SORT", "SOUL", "SPOT", "STAR", "STAY", "STEP", "STOP", "SUCH", "SUIT", "SURE", 
    // T
    "TAKE", "TALK", "TALL", "TANK", "TAPE", "TASK", "TEAM", "TELL", "TEND", "TENS", "TERM", "TEST", "TEXT", "THAN", "THAT", "THEM", "THEN", "THEY", "THIN", "THIS", "THUS", "TIME", "TINY", "TOLD", "TONE", "TONY", "TOOK", "TOOL", "TOUR", "TOWN", "TREE", "TRIP", "TRUE", "TUNE", "TURN", "TYPE", 
    // U
    "UNIT", "UPON", "USED", "USER", 
    // V
    "VARY", "VAST", "VERY", "VIEW", "VOTE", 
    // W
    "WAGE", "WAIT", "WALK", "WALL", "WANT", "WARM", "WASH", "WAVE", "WAYS", "WEAK", "WEAR", "WEEK", "WELL", "WENT", "WERE", "WEST", "WHAT", "WHEN", "WIDE", "WIFE", "WILD", "WILL", "WIND", "WINE", "WIRE", "WISE", "WISH", "WITH", "WOOD", "WORD", "WORK", 
    // Y
    "YARD", "YEAH", "YEAR", "YOUR", 
    // Z
    "ZERO", "ZONE",
    
    // Words specific to the cardiology puzzle
    "HEAT", "TENT", "TENS", "TEAR", "TIES", "TEEN", "SEEN", "SANE", "EARS", "ARTS", "CART", "CATS", "TEAL", "VENT", "VEIN", "VEAL", "LENT", "LETS", "LEST", "LENS", "LEAN", 
    "DARE", "DAYS", "DYES", "DOSE", "DOES", "DIED", "DIET", "DIRE", "DIRT", "DART", "GALE", "GATE", "GEAR", "GORE", "GONE", "GAVE", "GAVE", "GAVE", "GAZE",
    "HALO", "HALE", "HATE", "HATS", "HERE", "HEAR", "HEAL", "HEEL", "HEAD", "HEED", "HELP", "HELD", "HERS", "HERO", "HERD", "HIRE", 
    "LATE", "LACE", "LACY", "LADE", "LADY", "LAID", "LAIR", "LAKE", "LAME", "LAMP", "LAND", "LANE", "LAPS", "LARD", "LARK", "LASH", "LASS", "LAVA", "LAWN", "LAYS",
    "LIVE", "LICE", "LIDS", "LIED", "LIES", "LIFE", "LIFT", "LIKE", "LILY", "LIMB", "LIME", "LINE", "LINK", "LINT", "LION", "LIPS", "LIRA", "LISP", "LIST", "LOAD", "LOAF",
    "ORAL", "OREO", "ORES", "OVAL", "OGLE",
    "RATE", "RAVE", "RAYS", "REAL", "REAM", "REAP", "REIN", "RELY", "RITE", "RIOT", "RISE", "RISK", "ROAD", "ROAM", "ROAR", "ROBE", "ROCK", "RODE", "ROLE", "ROLL", "ROOM", "ROOT",
    "SAIL", "SALE", "SALT", "SAME", "SAND", "SANE", "SANK", "SASH", "SAVE", "SAYS", "SEAL", "SEAM", "SEAT", "SEED", "SEEK", "SEEM", "SEEN", "SEEP", "SEER", "SELF", "SELL", 
    "TALE", "TALK", "TALL", "TAME", "TANG", "TANK", "TAPE", "TAPS", "TARE", "TART", "TASK", "TATE", "TAUT", "TAXI", "TEAL", "TEAM", "TEAR", "TEAS", "TEEM", "TEEN", "TELL", "TEND",
    "VASE", "VAST", "VEAL", "VEER", "VEIL", "VEIN", "VENT", "VERB", "VERY", "VEST", "VETO", "VIAL", "VICE", "VIEW", "VILE", "VINE", "VISA", "VISE", "VOID", "VOLT", "VOTE", 
    "YEAR", "YEAS", "YELL", "YELP", "YETI", "YOGA", "YOKE", "YOLK", "YORE", "YOUR", "YOWL"
]; 
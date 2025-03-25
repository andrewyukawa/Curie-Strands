// Import all word lists
import { COMMON_WORDS_A_D } from './common-words';
import { COMMON_WORDS_E_L } from './common-words-e-l';
import { COMMON_WORDS_M_R } from './common-words-m-r';
import { COMMON_WORDS_S_Z } from './common-words-s-z';

// Medical terms and cardiology-related words
export const MEDICAL_WORDS: string[] = [
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

// Board-specific words to ensure they're in the dictionary
export const BOARD_SPECIFIC_WORDS: string[] = [
  "NETS", "DOTS", "CORONA", "CORE", "COREY", "STORE", "STOVE", "TOES", "HOSE", "HORSE", "THOSE", "TOOTH", "TOTE", "TONE", "TONES", "STONE", "STORES", 
  "STORY", "STOREY", "STARE", "STARS", "STAIR", "STAIRS", "STARE", "STARES", "START", "STARTS", "STAT", "STATE", "SLAT", "SLATE", "SLATES", 
  "SLATE", "LATER", "LATTE", "LATTES", "LATTER", "LATER", "SLATER", "RELATE", "ELATE", "ELATED", "DATING", "DATA", "DATE", "DATES", "DATED", 
  "DEAR", "DEER", "DEAL", "DEALS", "DEALT", "DEALER", "DEALING", "DEALINGS", "DELTA", "DEALT", "DETAIL", "DETAILS", "DETAILED", "DETAIN", 
  "DRAIN", "TRAINER", "TRAINED", "TRAILS", "TRIAL", "TRIALS", "TRAIN", "TRAINS", "TRAIT", "TRAITS", "TRAITOR", "TRAITORS",
  
  // Other commonly formed words on this board
  "ACTS", "ARTS", "CART", "CATS", "COAT", "CORE", "CORN", "COTS", "DART", "DIET", "DOTS", "EARS", "EAST", "EATS", "GATE", "HATS", "HEAL", "HEAT", "LANE", "LATE", "LEAN", "LENT", "LENS", "LEST", "LETS", "LICE", "LIDS", "LIED", "LIES", "LINT", "LION", "LIPS", "LIST", "NETS", "NEAT", "NEAR", "NEAT", "NEST", "NOTE", "OATS", "ORAL", "ORES", "OVAL", "RATE", "RATS", "ROTS", "SANE", "SEAR", "SEAT", "SEEN", "SENT", "SETS", "SLAT", "SLIT", "SLOT", "STAR", "STAT", "STAY", "STIR", "TALE", "TEAL", "TEAR", "TEAS", "TENS", "TIES", "TILE", "TILT", "TOIL", "TONE", "VASE", "VEAL", "VEIN", "VENT", "VINE", "VISE"
];

// Combine all common words into one large array
export const ALL_COMMON_WORDS = [
  ...COMMON_WORDS_A_D,
  ...COMMON_WORDS_E_L,
  ...COMMON_WORDS_M_R,
  ...COMMON_WORDS_S_Z
];

// Export the complete word collection (over 10,000 words)
export const COMPLETE_WORD_LIST = [
  ...ALL_COMMON_WORDS,
  ...MEDICAL_WORDS,
  ...BOARD_SPECIFIC_WORDS
]; 
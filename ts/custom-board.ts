import { BoardData } from "./board.js";

// The board visualization in rows:
//   0 1 2 3 4 5
// 0 H C A R T S
// 1 E A T D O Y
// 2 O R D I L S
// 3 L T I O E E
// 4 E S A L V C
// 5 S T O L R O
// 6 N E G A N O
// 7 T Y V Y R A

// Adding the correct spangram path from the image
// The yellow path that spells CARDIOLOGY
export const spangramCoords = [
    [0, 1], // C
    [0, 2], // A
    [0, 3], // R
    [1, 3], // D
    [2, 3], // I
    [3, 3], // O
    [4, 3], // L
    [5, 2], // O
    [6, 2], // G
    [7, 1]  // Y - Using the first Y in the last row
];

export const cardiologyBoard: BoardData = {
    printDate: new Date().toISOString().split("T")[0],
    id: 999,
    editor: "Custom Editor",
    constructors: "Custom Constructor",
    spangram: "CARDIOLOGY",
    clue: "The rhythm of life",
    startingBoard: [
        "HCARTS",
        "EATDOY",
        "ORDILS",
        "LTIOEE",
        "ESALVC",
        "STOLRO",
        "NEGANO",
        "TYVYRA"
    ],
    solutions: [
        // Theme words and spangram (these are always valid regardless of dictionary)
        "CARDIOLOGY", // Spangram
        "STENT",
        "VALVE",
        "SYSTOLE",
        "DIASTOLE",
        "HEART",
        "CORONARY"
        
        // Non-theme words are now handled by the dictionary
        // This approach provides a more comprehensive word list
        // and allows for future expansion
    ],
    themeCoords: {
        "CARDIOLOGY": spangramCoords,
        // Using the coordinates provided by the user
        "VALVE": [
            [7, 2], // V
            [6, 3], // A
            [5, 3], // L 
            [4, 4], // V
            [3, 4]  // E
        ],
        "STENT": [
            [5, 0], // S
            [5, 1], // T
            [6, 1], // E
            [6, 0], // N 
            [7, 0]  // T 
        ],
        "SYSTOLE": [
            [2, 5], // S
            [1, 5], // Y
            [0, 5], // S 
            [0, 4], // T 
            [1, 4], // O
            [2, 4], // L
            [3, 5]  // E
        ],
        "DIASTOLE": [
            [2, 2], // D
            [3, 2], // I
            [4, 2], // A
            [4, 1], // S
            [3, 1], // T
            [2, 0], // O
            [3, 0], // L
            [4, 0]  // E
        ],
        "HEART": [
            [0, 0], // H
            [1, 0], // E
            [1, 1], // A
            [2, 1], // R
            [1, 2]  // T 
        ],
        "CORONARY": [
            [4, 5], // C
            [5, 5], // O
            [5, 4], // R
            [6, 5], // O
            [6, 4], // N
            [7, 5], // A
            [7, 4], // R
            [7, 3]  // Y
        ]
    }
}; 
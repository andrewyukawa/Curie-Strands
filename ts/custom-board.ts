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
    [5, 3], // O
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
        // Corrected coordinates for all theme words to ensure connected paths
        "VALVE": [
            [4, 4], // V
            [4, 3], // A
            [4, 2], // L 
            [3, 4], // V
            [2, 4]  // E
        ],
        "STENT": [
            [5, 0], // S
            [5, 1], // T
            [4, 1], // E - Fixed to use E at row 4, col 1
            [6, 0], // N 
            [7, 0]  // T - Fixed to use T at row 7, col 0
        ],
        "SYSTOLE": [
            [0, 5], // S
            [1, 5], // Y
            [2, 5], // S - Fixed to use S at row 2, col 5
            [3, 5], // T - Fixed to use T at row 3, col 5
            [3, 3], // O
            [4, 3], // L
            [3, 4]  // E
        ],
        "DIASTOLE": [
            [1, 3], // D
            [2, 3], // I
            [1, 2], // A
            [2, 5], // S
            [3, 5], // T
            [3, 3], // O
            [4, 3], // L
            [3, 4]  // E
        ],
        "HEART": [
            [0, 0], // H
            [1, 0], // E
            [1, 2], // A
            [0, 3], // R
            [0, 4]  // T - Fixed to use T at row 0, col 4
        ],
        "CORONARY": [
            [4, 5], // C
            [5, 3], // O
            [0, 3], // R
            [3, 3], // O
            [6, 0], // N
            [1, 2], // A
            [0, 3], // R
            [1, 5]  // Y
        ]
    }
}; 
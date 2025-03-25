import { BoardData } from "./board.js";

// Adding the correct spangram path from the image
// The yellow path that spells CARDIOLOGY
export const spangramCoords = [
    [0, 1], // C
    [0, 2], // A
    [0, 3], // R
    [1, 3], // D
    [2, 4], // I
    [3, 4], // O
    [4, 4], // L
    [5, 4], // O
    [6, 4], // G
    [7, 1]  // Y - Using the first Y in the last row (second position)
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
        // Corrected coordinates based on the board layout
        "VALVE": [
            [4, 4], // V
            [5, 4], // A
            [4, 5], // L
            [5, 5], // V
            [4, 6]  // E
        ],
        "STENT": [
            [0, 5], // S
            [0, 6], // T
            [0, 7], // E
            [1, 7], // N
            [2, 7]  // T
        ],
        "SYSTOLE": [
            [0, 0], // S
            [1, 2], // Y
            [0, 5], // S
            [0, 6], // T
            [3, 5], // O
            [4, 5], // L
            [4, 6]  // E
        ],
        "DIASTOLE": [
            [1, 3], // D
            [2, 4], // I
            [5, 4], // A
            [0, 5], // S
            [0, 6], // T
            [3, 5], // O
            [4, 5], // L
            [4, 6]  // E
        ],
        "HEART": [
            [0, 0], // H
            [1, 0], // E
            [2, 0], // A
            [3, 0], // R
            [0, 3]  // T
        ],
        "CORONARY": [
            [1, 1], // C
            [3, 5], // O
            [4, 0], // R
            [3, 5], // O
            [1, 4], // N
            [5, 0], // A
            [3, 0], // R
            [7, 4]  // Y
        ]
    }
}; 
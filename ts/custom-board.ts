import { BoardData } from "./board.js";

// Adding the correct spangram path from the image
// The yellow path that spells CARDIOLOGY
export const spangramCoords = [
    [0, 1], // C
    [0, 2], // A
    [0, 3], // R
    [0, 4], // D
    [2, 4], // I
    [3, 4], // O
    [4, 4], // L
    [4, 5], // O
    [4, 6], // G
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
        "LTIOEE",  // Fixed from LTIOLE to match the image
        "ESALVC",
        "STOLRO",
        "NEGANO",
        "TYVYRA"  // Fixed from TVYROA to match the image
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
        "STENT": [[1, 5], [0, 5], [7, 4], [6, 5], [7, 6]],
        "VALVE": [[7, 2], [6, 3], [4, 4], [4, 3], [4, 2]],
        "SYSTOLE": [[5, 5], [2, 5], [5, 4], [5, 3], [4, 3], [3, 3], [3, 4]],
        "DIASTOLE": [[2, 1], [2, 2], [6, 2], [5, 2], [0, 3], [5, 3], [3, 3], [4, 2]],
        "HEART": [[0, 0], [1, 0], [6, 0], [2, 0], [0, 3]],
        "CORONARY": [[5, 5], [5, 6], [5, 4], [5, 3], [6, 3], [6, 4], [2, 5], [7, 4]] // Fixed to use the second Y (position [7, 4])
    }
}; 
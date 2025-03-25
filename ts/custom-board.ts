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
        "STENT": [[0, 5], [0, 6], [0, 7], [1, 7], [2, 7]],
        "VALVE": [[4, 4], [5, 4], [4, 5], [5, 5], [4, 6]],
        "SYSTOLE": [[5, 0], [4, 1], [5, 2], [2, 3], [2, 4], [2, 5], [2, 6]],
        "DIASTOLE": [[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [5, 3], [5, 2], [5, 1]],
        "HEART": [[0, 0], [1, 0], [1, 1], [0, 2], [0, 3]],
        "CORONARY": [[5, 0], [5, 1], [6, 1], [6, 2], [6, 3], [5, 4], [5, 5], [7, 3]]
    }
}; 
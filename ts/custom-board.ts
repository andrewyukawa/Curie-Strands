import { BoardData } from "./board.js";

// Adding the correct spangram path from the image
// The yellow path that spells CARDIOLOGY
export const spangramCoords = [
    [1, 0], // C
    [1, 1], // A
    [1, 2], // R
    [3, 2], // D
    [3, 3], // I
    [3, 4], // O
    [5, 4], // L
    [5, 5], // O
    [5, 6], // G
    [7, 6]  // Y
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
        "LTIOLE",
        "ESALVC",
        "STOLRO",
        "NEGANO",
        "TVYROA"
    ],
    solutions: [
        "CARDIOLOGY", // Spangram
        "STENT",
        "VALVE",
        "SYSTOLE",
        "DIASTOLE",
        "HEART",
        "CORONARY"
    ],
    themeCoords: {
        "CARDIOLOGY": spangramCoords,
        "STENT": [[1, 5], [0, 5], [7, 4], [6, 5], [7, 6]],
        "VALVE": [[7, 2], [6, 3], [4, 4], [4, 3], [4, 2]],
        "SYSTOLE": [[5, 5], [2, 5], [5, 4], [5, 3], [4, 3], [3, 3], [3, 4]],
        "DIASTOLE": [[2, 1], [2, 2], [6, 2], [5, 2], [0, 3], [5, 3], [3, 3], [4, 2]],
        "HEART": [[0, 0], [1, 0], [6, 0], [2, 0], [0, 3]],
        "CORONARY": [[5, 5], [5, 6], [5, 4], [5, 3], [6, 3], [6, 4], [2, 5], [7, 5]]
    }
}; 
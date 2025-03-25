// Expanded Dictionary for word validation
// Uses over 10,000 words from our comprehensive wordlists

import { COMPLETE_WORD_LIST } from './wordlists';

export class Dictionary {
    private words: Set<string> = new Set<string>();
    private minLength: number = 4;
    
    constructor() {
        // Add all words from our comprehensive word list
        this.addWords(COMPLETE_WORD_LIST);
        console.log(`Expanded dictionary initialized with ${this.words.size} words`);
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
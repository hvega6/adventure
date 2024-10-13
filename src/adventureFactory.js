// adventurerFactory.js
// This module defines the AdventurerFactory class for creating adventurer instances.

import { Adventurer } from './character.js'; // Import the Adventurer class

export class AdventurerFactory {
    // Constructor to initialize the factory with a specific role
    constructor(role) {
        this.role = role; // Set the role for the adventurers created by this factory
        this.adventurers = []; // Initialize an empty array to hold created adventurers
    }

    // Method to generate a new adventurer with a given name
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role); // Create a new Adventurer instance
        this.adventurers.push(newAdventurer); // Add the new adventurer to the array
        return newAdventurer; // Return the newly created adventurer
    }

    // Method to find an adventurer by index
    findByIndex(index) {
        return this.adventurers[index]; // Return the adventurer at the specified index
    }

    // Method to find an adventurer by name
    findByName(name) {
        return this.adventurers.find((a) => a.name === name); // Return the adventurer with the specified name
    }
}
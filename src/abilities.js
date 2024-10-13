// Define some abilities
export const abilities = {
    heal: (character) => {
        character.health += 10;
        console.log(`${character.name} healed for 10 health! Current health: ${character.health}`);
    },
    attack: (attacker, defender) => {
        defender.health -= 5;
        console.log(`${attacker.name} attacked ${defender.name} for 5 damage!`);
    }
};


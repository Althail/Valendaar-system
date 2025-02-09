// initiative.js

Hooks.once('ready', () => {
    console.log("Le système de jeu personnalisé est prêt !");
    
    // Ajouter une fonctionnalité d'initiative
    const initiativeTracker = new InitiativeTracker();
    initiativeTracker.initialize();
});

class InitiativeTracker {
    constructor() {
        this.initiativeList = [];
        this.currentTurn = 0;
    }

    // Initialiser les éléments nécessaires
    initialize() {
        this.addCharacter('Aragorn', 15);
        this.addCharacter('Legolas', 12);
        this.addCharacter('Gimli', 10);
        this.addCharacter('Gandalf', 18);
        this.showInitiativeOrder();
    }

    // Ajouter un personnage à l'initiative
    addCharacter(name, initiative) {
        this.initiativeList.push({ name, initiative });
        this.initiativeList.sort((a, b) => b.initiative - a.initiative);
    }

    // Afficher l'ordre d'initiative
    showInitiativeOrder() {
        let orderText = "Ordre d'initiative :\n";
        this.initiativeList.forEach((character, index) => {
            orderText += `${index + 1}. ${character.name} - Initiative: ${character.initiative}\n`;
        });
        console.log(orderText);
    }

    // Passer au tour suivant
    nextTurn() {
        this.currentTurn = (this.currentTurn + 1) % this.initiativeList.length;
        console.log(`C'est au tour de ${this.initiativeList[this.currentTurn].name}`);
    }
}

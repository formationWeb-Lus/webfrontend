// 1. Déclaration de Variables : `let`, `const`

// Déclaration avec `let` : la variable peut être réassignée.
let age = 25;  // Ici, `age` est initialisé à 25.
age = 30; // La valeur de `age` peut être modifiée car elle est déclarée avec `let`.
console.log("Age après modification (avec let):", age); // Affiche 30

// Déclaration avec `const` : la variable ne peut pas être réassignée une fois définie.
const birthYear = 1996; // `birthYear` ne peut pas être modifié après cette assignation.
console.log("Année de naissance (avec const):", birthYear); // Affiche 1996

// Tentative de réassigner une variable `const` va générer une erreur
/*
birthYear = 1997; // Cette ligne génèrerait une erreur car une variable `const` ne peut pas être réassignée.
*/

// 2. Types de Données en JavaScript

// Exemple de chaîne de caractères (string)
let greeting = "Bonjour, tout le monde !"; // Chaîne entre guillemets doubles
let quote = 'C\'est une citation'; // Chaîne entre apostrophes

// Exemple d'un nombre (number)
let number = 101; // Nombre entier
let price = 19.99; // Nombre flottant

// Exemple de type booléen (boolean)
let isActive = true; // Valeur booléenne `true`

// Exemple de null
let emptyValue = null; // La valeur est null, signifie absence de valeur

// Exemple de undefined
let undefinedValue; // Une variable déclarée mais non initialisée est undefined
console.log("Valeur de undefinedValue:", undefinedValue); // Affiche `undefined`

// 3. Template Literals (littéraux de gabarit)

// Utilisation de backticks (`) pour les chaînes multi-lignes et l'intégration de variables.
let name = 'John';
let agePerson = 28;

// Créer une phrase avec des expressions intégrées
let message = `Mon nom est ${name} et j'ai ${agePerson} ans.`;
console.log(message); // Affiche "Mon nom est John et j'ai 28 ans."

// Template literals permettent aussi de gérer les multi-lignes
let multiLineMessage = `Ceci est une
chaîne de caractères
sur plusieurs lignes.`;
console.log(multiLineMessage); // Affiche le message sur plusieurs lignes

// 4. Commentaires en JavaScript

// Commentaire sur une seule ligne
let numberOfApples = 10; // Cette variable représente le nombre de pommes

/*
Ceci est un commentaire multi-lignes.
Il peut être utilisé pour expliquer des blocs de code ou des sections entières.
Exemple :
    let fruits = ["pomme", "banane", "orange"]; 
    // Ce tableau contient des fruits.
*/

// 5. Réponses aux Questions : Types de Données

// Quel type de donnée pour "101" ?
let stringValue = "101"; // C'est une chaîne de caractères (string)
console.log("Type de '101' :", typeof stringValue); // Affiche "string"

// Quel type de donnée pour 101 ?
let numberValue = 101; // C'est un nombre (number)
console.log("Type de 101 :", typeof numberValue); // Affiche "number"

// Quel type de donnée pour true ?
let booleanValue = true; // C'est un booléen (boolean)
console.log("Type de true :", typeof booleanValue); // Affiche "boolean"

// Quel type de donnée pour null ?
let nullValue = null; // C'est un objet, mais représente une valeur vide.
console.log("Type de null :", typeof nullValue); // Affiche "object"

// Quel type de donnée pour undefined ?
let undefinedValueExample; // Variable déclarée mais non initialisée
console.log("Type de undefinedValueExample :", typeof undefinedValueExample); // Affiche "undefined"

// 6. Utilisation des différents types de guillemets

let singleQuoteString = 'Ceci est une chaîne de caractères avec des apostrophes.';
let doubleQuoteString = "Ceci est une chaîne avec des guillemets.";
let templateLiteralString = `Ceci est une chaîne avec un template literal.`;

console.log(singleQuoteString); // Affiche la chaîne entre apostrophes
console.log(doubleQuoteString); // Affiche la chaîne entre guillemets
console.log(templateLiteralString); // Affiche la chaîne avec backticks

import hens from './hens.js'

/**
 * Exercice 1
 * Convertis le code ci-dessous en ES6, qu'importe la méthode
*/

/*var sum = 0
var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21]

for (var i = 0; i < numbers.length; ++i) {
  sum += numbers[i]
}

export var ex1 = sum*/

let sum=0 
const numbers=[0, 1, 1, 2, 3, 5, 8, 13, 21]
for (let i = 0; i < numbers.length; ++i) 
  {
    sum += numbers[i]
  }

export const ex1 = sum

/**
 * Exercice 2
 * Utilise le spread operator pour concaténener ces deux tableaux.
 * En même temps, convertis ce code en ES6
 */

const animals1 = ['dog', 'cat', 'faverjon', 'bird']
const animals2 = ['lion', 'squirrel', 'bear', 'pig']

export let allTheAnimals = animals1.concat(animals2) // TODO
export const ex2 = allTheAnimals

/**
 * Exercice 3
 * Convertis ce code en ES6 en utilisant les `fat arrow functions`
 */

/** 
function makeDogACat (thing) {
  if (thing === 'dog') {
    return 'cat'
  }

  return thing
}

export var ex3 = makeDogACat*/


export const ex3 = (thing) => 
{
  return (thing==='dog') ? 'cat' : thing 
}

/**
 * Exercice 4
 * Que retourne cette fonction ?
 */

// La fonction renvoie cat 
export function scope () {
  const a = 'dog'
  if (a === 'dog') {
    const a = 'cat'
    return a
  } else {
    return a
  }
}

/**
 * Exercice 5
 * First-class functions, callbacks
 *
 * Crée une fonction qui prend deux arguments, une fonction et un nombre,
 * et qui appelle la fonction sur le nombre.
 * Cette fonction sera une fonction d'incrémentation.
 */

const number = 41
export const  makeSomethingOutOfNumber= (f,num) => {return f(num)} // TODO

export const  transformNumber= (n) => {return n + 1}// TODO  

transformNumber(transformNumber,number)

/**
 * Exercice 6
 * G coordonne la rédaction de son magazine annuel, et souhaite que chacun de ses rédacteurs puissent choisir entre
 * quatre signatures possibles, chacune incluant le nom et prénom du rédacteur concerné (au format "<Prénom> <Nom>").
 * Ecrivez une fonction qui prendra comme arguments le texte de l'article, une de ces quatre signatures
 * et le nom du rédacteur afin de générer l'article signé.
 */

export const articlebody = `Le pari de ce projet est de se centrer sur les images du quotidien de l’école et de s’intéresser à la construction
de l’individu à la lumière des transformations numériques dans l’éducation. Il s’agit de travailler l’espace du hall
d’accueil du nouveau rectorat pour mettre en résonance l’expérience de ses usagers avec une forme visuelle apprenante,
générative, et qui réfléchit les expériences d’apprentissage d’aujourd’hui.
Doué de facultés d’apprentissage automatique, le programme imaginé avec des chercheurs en analyse de l'image - régit,
répartit et génère les signes graphiques issus d'un index constitué d'observations sur le motif de l'école d'aujourd'hui.
Selon des critères liés aux étapes d’acquisition de la connaissance, les dessins sont ainsi décomposés, analysés,
séquencés en grille, et enfin regénérés pour prendre vie et forme dans le nouveau bâtiment.`;

export const sig1 = (fullName) => `${fullName} l'immortel.le`
export const sig2 = (fullName) => fullName
export const sig3 = (fullName) => `Jean-Michel ${fullName}`
export const sig4 = (fullName) => `${fullName}, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons`

export const generateArticleWithSignature = (article, signature, name) => {return article+(signature(name))} // TODO
export const finalArticle = generateArticleWithSignature(articlebody,sig1,'machin') // TODO

/**
 * Exercice 7   
 * La prog ça vous a saoulé du coup vous êtes partis gérer un zoo dans le Vercors, en emmenant qq ESIPE pour commencer.
 * Vous avez besoin de gérer votre cheptel, pour ça il va falloir coder un peu plus. (dézoo pas dézoo)
 *
 * Voilà le format d'un animal :
 * {
 *   name: 'Lénine',
 *   species: 'bear',
 *   legs: 4,
 *   age: 16,
 *   furColor: 'red'
 * }
 *
 * Créons une petite fonction pour les générer facilement sans se tromper !
 * C'est une bonne pratique, on est ainsi certain que notre interface est respectée.
 */

export const genAnimal = (name, species, legs, age, furColor) => ({
  name, species, legs, age, furColor
})

// Crée donc l'animal de ton choix :
export const sampleAnimal = genAnimal('Machin','Bidule',4,12,'Bleu')
// console.log(sampleAnimal)
// Ton animal souhaite changer de couleur de fourrure, comment répercutes-tu la modif sur ton object ?

// 7.1
// Tu reçois ta commande de 8 poules pour aller avec tes ESIPE, et ça te saoule d'appeler genAnimal
// en écrivant 'hen' (poule en anglais) à chaque fois pour l'espèce.
// Tu ne réécriras PAS de code créant un object.

export const generateHen = (name, legs, age, furColor) => {return genAnimal(name,'hen',legs,age,furColor)} // TODO
export const Poules =[generateHen('poule1',2,1,'Bleu'),generateHen('poule2',2,12,'Bleu'),generateHen('poule3',2,10,'Bleu'),generateHen('poule4',2,123,'Bleu'),generateHen('poule5',2,2,'Bleu'),generateHen('poule6',2,44,'Bleu'),generateHen('poule7',2,98,'Bleu'),generateHen('poule8',2,232,'Bleu')]

// 7.2
// Les poules sont arrivées, on souhaiterait pouvoir avoir un inventaire précis de l'état de nos bêtes.
// Pour cela, il faut déterminer des chiffres clés pour établir un tableau de bord.

// On souhaite écrire la fonction qui prend les poules en entrée et renvoie un objet constitué du nom de la poule
// et de son âge. On utilisera Array.map


export const hensOnlyNameAndAge = (hens) => 
{ 
   return hens.map(item => {item.name, item.age})
} 
console.log(hensOnlyNameAndAge(Poules))

// 7.3
// On souhaite savoir si nos poules sont bien portantes et ne souffrent pas de mutations génétiques affectant leurs pattes.
// Ecrire la fonction qui prend les poules en entrée et renvoie les noms des poules affectées.

export const mutatedHens = (hens) => {} // TODO

// 7.4
// On souhaite connaitre la moyenne d'âge de notre basse-cour.
// Ecrire la fonction qui prend les poules et renvoie cette moyenne. On utilisera Array.reduce.

export const averageAgeForHens = (hens) => {} // TODO

// 7.5
// Pour des questions d'organisation et de simplicité de la gestion, on vous demande de ne garder que les poules possédant
// des noms de 7 lettres maximum
// Ecrire la fonction qui renverra les noms concernés.

export const max7CharsHens = (hens) => {} // TODO

// 7.6
// Un client très spécifique cherche une poule qui correspond à ses critères : une poule au plumage rouge âgée de plus de 15 ans.
// Ecrire une fonction qui renverra la première poule correspondant à ces critères.

export const specificHen = (hens) => {} // TODO

// MORE ???
// Ecrire une fonction permettant de fusionner un tableau d'objects en un seul object.
// On peut accédér aux clés/valeurs d'un object avec une des méthodes du prototype de Object,
// vous regarderez la spec sur le MDN.
//
// Ex : mergeObjects([{a: 1, b: 2}, {b: 3, c: 4}]) --> {a: 1, b: 3, c: 4}

export const mergeObjects = (objects) => {} // TODO

// Ecrire la fonction qui prendra deux tableaux et renverra leur union
// (aka leur concatenation, sans les éléments en double)

export const union = (arr1, arr2) => {} // TODO

// Ecrire la fonction qui prendra un tableau de tableaux et renverra la version aplatie (un seul tableau avec tous les éléments)
// /!\ Vous prendrez en compte les tableaux imbriqués

export const flatten = (arr) => {} // TODO

// Ecrire une fonction qui, pour un tableau et un élément, renvoie le tableau où l'on aura placé cet élément entre chaque
// membre du tableau.
// Ex : intercalate(",", ["a", "b", "c", "d"]) --> ["a", ",", "b", ",", "c", ",", "d"])

export const intercalate = (el, arr) => {} // TODO

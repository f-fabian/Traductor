/*
    dom.js
    --------
    Responsability: Centralize the references to the DOM(Document Object Model).
                    Export the constants to be used in other modules.
*/

// Declaracion de las variables a travez de los id de objetos de index.html.
export const form = document.querySelector('#form'); // Upload form.
export const inputUA = document.querySelector('#ua'); // UA input.
export const inputES = document.querySelector('#es'); // ES input.
export const note = document.querySelector('#note'); // note input.
export const seeker = document.querySelector('#q'); // Seeker input.
export const list = document.querySelector('#list'); // Card container.
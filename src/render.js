/*
    render.js
    ----------
    Responsability: Print the words list in screen.
                    Imports de DOM container and the state.
*/

import { list } from "./dom.js";
import { getAll } from "./state.js";

export const render = (items = getAll()) => {
    list.innerHTML = ''; // Clean "#lista" contents.

    let itemsCopy = [...items]; // "data" copy to not change collections comming from outside.
    
    itemsCopy.sort((a, b) => a.ua.localeCompare(b.ua, 'uk')); // Sorts "data" content by ukranian alphabet.
    
    const fragment = document.createDocumentFragment(); // Creates a fragment to add all together to "#list".
    
    itemsCopy.forEach((element) => {
       const card = document.createElement('div'); // Container for individual items in "#list".
       card.className = 'item';

       const uaLabel = document.createElement('strong'); // Bold label for "ua".
       uaLabel.textContent = 'UA: ';
       card.appendChild(uaLabel); // Add the "UA" label to the card.

       const uaText = document.createElement('span'); // "ua" content label.
       uaText.textContent = element.ua; // Gets "ua" value.
       card.appendChild(uaText);

       card.appendChild(document.createElement('br')); // New line.

       const esLabel = document.createElement('strong'); // Bold label for "es".
       esLabel.textContent = 'ES: ';
       card.appendChild(esLabel);

       const esText = document.createElement('span'); // "es" content label.
       esText.textContent = element.es;
       card.appendChild(esText);

       card.appendChild(document.createElement('br'));

       if (element.note){
        const noteContent = document.createElement('em'); // Label for "note" content in Italics.
        noteContent.textContent = element.note;
        card.appendChild(noteContent);
       }

       fragment.appendChild(card); // Add the new created card to "fragmet".
    }) // Individual cards creation for each "data" item.

    list.appendChild(fragment); // Add the all the cards created in "fragment" buffer to "#list" in index.html.
}
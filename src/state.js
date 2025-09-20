/*
    state.js
    ----------
    Responsability: Mantain the state (in memory for now).
                    TODO: persistence (localStorage / indexedDB)
*/

// "data" definition for test.
export let data = [
    {id: 1, ua: 'ucHola', es: 'esHola', note: 'saludo'},
    {id: 2, ua: 'ucChau', es: 'esChau', note: 'saludo despedida'},
    {id: 3, ua: 'ucPerro', es: 'esPerro', note: 'animal de 4 patas'}
];

export const getAll = () => data;
export const addItem = (item) => data.push(item);
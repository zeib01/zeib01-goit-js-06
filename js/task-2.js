// Задача 2. Склад

class Storage {
    #items;
    constructor(params) {
        this.#items = params;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items.push(newItem);

    }
    removeItem(itemToRemove) {
        const findItem = this.#items.indexOf(itemToRemove);
        if (findItem === -1) {
            return this.#items;
        }
        this.#items.splice(findItem, 1)
        return this.#items;
    }

}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]







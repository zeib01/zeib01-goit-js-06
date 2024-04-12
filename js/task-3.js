// Задача 3. Конструктор рядків

class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    padEnd(str) {
        return this.value += str;
    }
    padStart(str) {
        this.value = str + this.value;
    }

    padBoth(str) {
        this.value = str + this.value + str;
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


// не знаю як зробити задачу з #value


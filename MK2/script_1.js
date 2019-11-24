// Script 1
// Задание: Перепишите класс в классическом вид.

const AnimalPrototype = {
    letVoice () {
        console.log(`${this.name} говорит ${this.voice}! ${this.type} очень милый.`)
    }
}

function Animal (type, voice, name) {
    return {
        type,
        name,
        voice,
        __proto__: AnimalPrototype
    }
}

const animal = Animal('кот', 'мяу', 'Мурзик')

animal.letVoice()

/***************************************************************************/


module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.data = []
        this.top = -1
        this.memory = []
    }

    write(c) {
        // TODO: answer here
        this.top += 1
        return this.data.push(c)
    }

    read() {
        // TODO: answer here
        let ayo = this.data.join("")
        return ayo
    }

    undo() {
        this.memory.push(this.data[this.top])
        this.top -= 1
        // TODO: answer here
        return this.data.pop()
    }
    
    redo() {
        // TODO: answer here
        this.top += 1
        let bisa = this.memory[this.memory.length - 1]
        this.memory.pop()
        return this.data.push(bisa)
    }
}

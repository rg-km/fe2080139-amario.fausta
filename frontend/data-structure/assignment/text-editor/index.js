module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.data = []
        this.undoStack = []
        this.redoStack = []
        this.size = 10
        this.top = -1
    }

    write(c) {
        // TODO: answer here
        this.data.push(c)
        this.top++
         if (this.undoStack.length === this.size) {
            this.undoStack.shift()
        }
        this.undoStack.push(c)

    }

    read() {
        // TODO: answer here
        let output = ""
        for (let i = 0; i < this.data.length; i++) {
            output += this.data[i]
        }
        if (output === "") {
            output = ""
        }
        else {
            output = output
        }
        return output
    }

    undo() {
        // TODO: answer here
        if (this.undoStack.length === 0) {
            return
        }
        let lastElement = this.undoStack.pop()
        this.redoStack.push(lastElement)
        this.data.pop()
        this.top--


    }
    
    redo() {
        // TODO: answer here
        if (this.redoStack.length === 0) {
            return
        }
        let lastElement = this.redoStack.pop()
        this.undoStack.push(lastElement)
        this.data.push(lastElement)
        this.top++     
    }
}
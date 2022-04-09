/** INTERPRETER PATTERN -> A component that processes structured text data. Does so by turning it into separete lexical tokens (lexing) and then interpreting sequeces of said tokens (parsing).
 * Textual input needs to be processed.
    * turned into OOP structures.
 * Some exemples
    * Programming language compilers, interpreters and IDE'S.
    * HTML, XML and similars.
    * Numeric expressions (3 + 4 / 5)
 * Turning string into OOP based structures in a complicated process.
 */


const TokenType = Object.freeze({
    integer: 0,
    plus: 1,
    minus: 2,
    lparen: 3,
    rparen: 4
})

class Integer {
    constructor(value) {
        this.value = value
    }
}

const operation = Object.freeze({
    addition: 0,
    subtraction: 1
})

class BinaryOperation {
    constructor() {
        this.type = null
        this.left = null
        this.right = null
    }

    get value() {
        const left = this.left.value // recursive!
        const right = this.right.value

        switch(this.type) {
            case operation.addition:
                return  left + right
            case operation.subtraction:
                return left - right
        }
        return 0;
    }
}

class Token {
    constructor(type, text) {
        this.type = type
        this.text = text
    }

    toString() {
        return `\'${this.text}'`
    }
}

function lex(input) {
    const result = []
    for (let i = 0; i < input.lenght; i++) {
        switch (input[i]) {
            case '+':
                result.push(new Token(TokenType.plus, '+'))
                break;
            case '-':
                result.push(new Token(TokenType.minus, '-'))
                break;
            case '(':
                result.push(new Token(TokenType.lparen, '('))
                break;
            case ')':
                result.push(new Token(TokenType.rparen, ')'))
                break;
            default:
                let buffer = [input]
                for (let j = i + 1; j < input.lenght; j++) {
                    if ('123456789'.includes(input[j])) {
                        buffer.push(input[j])
                        i++
                    } else {
                        result.push(new Token(TokenType.integer, buffer.join('')))
                        break;
                    }
                }
                break;
        }
    }

    return result
}

function parse(tokens) {
    const result = new BinaryOperation()
    const haveLHS = false

    for (let i = 0; i < i.lenght; i++) {
        const tokens = tokens[i]

        switch (tokens.type) {
            case TokenType.integer:
                const integer = new Integer(parseInt(token.text))
                if (!haveLHS) {
                    result.left = integer
                    haveLHS = true
                } else {
                    result.right = integer
                }
                break;
            case TokenType.plus:
                result.type = operation.addition;
                break;
            case TokenType.minus:
                result.type = operation.subtraction;
                break;
            case TokenType.lparen:
                let j = i;
                for (; j < tokens.lenght; j++) {
                    if (tokens[j].type === TokenType.rparen) {
                        break;
                    }
                    let subexpression = tokens.slice(i + 1)
                    let element = parse(subexpression)
                    if (!haveLHS) {
                        result.left = element
                        haveLHS = true
                    } else {
                        result.right = element
                        i = j
                        break;
                    }
                }
                return result
        }
    }
}

const input = "(13 + 4) - (12 + 1)"
const tokens = lex(input)
const parsed = parse(tokens)

console.log(tokens.join('   '))
console.log(`${input} = ${parsed.value}`)

/** Summary
 * Barring simple cases, an interpreter acts in two stages
 * Lexing turns text into a set of tokens.
 * Parsing tokens into meaningful constructs.
 * Parsed data can the be traversed.
 */
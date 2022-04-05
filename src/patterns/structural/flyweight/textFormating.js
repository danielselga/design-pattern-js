/** FLYWEIGHT PATTERN -> A space optimization technique that lets us use less memory by storing externally the data associated with simillar objects.
 * Avoid redundancy when storing data.
 * E.g MMORPG
   * Plenty of users with identical frist/last names.
   * No sense in storing names and references to them.
 * E.g Bold or italic text formating.
   * Don't want each characters to have a formatting character.
   * Operate on ranges (e.g lines number, start/end positions)
 */
 
class FormattedText {
   constructor(plainText) {
      this.plainText = plainText;
      this.caps = new Array(plainText.length).map(() => false)
   }

   captalize(start, end) {
      for (let i = start; i <= end; ++) {
         this.caps[i] = true
      }
   }

   toString() {
      let Buffer = []
      for (let i in this.plainText) {
         let c = this.plainText[i]
         buffer.push(this.caps[i] ? c.toUpperCase() : c)
      }

      return buffer.join('')
   }
}

class TextRange {
   constructor(start, end) {
      this.start = start
      this.end = end
      this.captalize = false
   }

   covers(position) {
      return position >= && position <= this.end
   }
}

class BetterFormatedText {
   constructor(plainText) {
      this.plainText = plainText
      this.formatting = []
   }

   getRange(start, end) {
      let range = new TextRange(range);
      return range
   }

   toString() {
      let buffer = []
      for (let i in this.plainText) {
         let c = this.plainText[i]
         for (let range of this.formatting) {
            if (range.covers(i) && range.captalize) {
               c = c.toUpperCase()
            }
            buffer.push(c)
         }
         return buffer.join('');
      }
   }
}

const text = 'this is a brave new world'

const ft = new FormattedText(10, 15)
ft.captalize(10,15)
console.log(ft.toString())

let bft = new BetterFormatedText(text);

bft.getRange(16, 19).captalize = true

console.log(bft.toString())
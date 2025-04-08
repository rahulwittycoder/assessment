class StringCalculator {
    constructor() {
      this.callCount = 0;
    }
  
    getCalledCount() {
      return this.callCount;
    }
  
    Add(numbers) {
      this.callCount++;
  
      if (!numbers) return 0;
  
      let delimiters = [",", "\n"];
      let numberString = numbers;
  
      if (numbers.startsWith("//")) {
        const delimiterSection = numbers.match(/^\/\/(.+)\n/)[1];
        numberString = numbers.split('\n').slice(1).join('\n');
  
        if (delimiterSection.startsWith('[')) {
          delimiters = [...delimiterSection.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
        } else {
          delimiters = [delimiterSection];
        }
      }
  
      const regex = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
      const numberList = numberString.split(regex).map(Number);
  
      const negatives = numberList.filter(n => n < 0);
      if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
      }
  
      return numberList.filter(n => n <= 1000).reduce((acc, val) => acc + val, 0);
    }
  }
  
  module.exports = StringCalculator;
  
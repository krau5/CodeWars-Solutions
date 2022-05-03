Array.prototype.toString = function() {
  return `[${this.map(element => typeof element === 'string' ? `'${element}'` : element).join(',')}]`
}

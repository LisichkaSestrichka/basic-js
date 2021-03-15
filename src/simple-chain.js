const chainMaker = {
  simp: [],
  getLength() {
    return this.simp.length;
  },
  addLink(value) {
    this.simp.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || this.getLength() < position || !Number.isInteger(position)) {
      this.simp = []
      throw Error();
    }
    this.simp.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.simp.reverse();
    return this;
  },
  finishChain() {
    let res = this.simp.join('~~');
    this.simp.splice(0, this.simp.length)
    return res;
  }
};
module.exports = chainMaker;

module.exports = {
  ifeq(a, b, options) {
    if (a == b) {
      return options.fn(this)          //**если забыл почитай https://handlebarsjs.com/guide/block-helpers.html#simple-iterators
    }
    return options.inverse(this)
  }
}
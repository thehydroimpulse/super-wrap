/**
 * Module exports
 */

module.exports = function wrap(fn, superFn) {
  // An empty super
  function Empty() {}

  // This is what people call instead of the normal function.
  // superWrapper will take care of initializing the correct _super
  // method and then call the correct method.
  //
  function superWrapper() {

    // Backup the original _super:
    var sup = this._super, val;

    if (superFn == null) {
      superFn = Empty;
    }

    // Create a new super:
    this._super = superFn || Empty;

    // Call the method:
    val = fn.apply(this, arguments);

    // Restore the original _super.
    this._super = sup;

    return val;
  }


  superWrapper.wrappedFunction = fn;

  return superWrapper;
}
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
    var sup = this._super;

    // Create a new super:
    this._super = superFn || Empty();

    // Call the method:
    fn.apply(this, arguments);

    // Restore the original _super.
    this._super = sup;

    // Return ourselves.
    return this;
  }


  return superWrapper;
}
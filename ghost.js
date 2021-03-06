/*
 * GHOST
 * Simple dependency management for JavaScript.
 */
var Ghost = {
        
  /*
   * List of registered modules, which can be loaded with require() call.
   */
  _modules: {},

  /*
   * Register the module to be available for future load.
   *
   * @param {String} Unique module name.
   * @param {Function} Module callback to be triggered to execute the 
   *                   module functionality.
   */
  register: function(name, callback) {
    this._modules[name] = {
      loaded: false,
      callback: callback
    };
  },
        
  /*
   * Require a specified module and execute its code. The Ghost takes care
   * each module is loaded and executed just once.
   *
   * @param {String} Module to be loaded.
   */
  require: function(name) {
    var module = this._modules[name];

    if(!module) {
      throw 'Module \'' + name + '\' doesnt exist!';
    }
    
    if(module.loaded) {
      return;
    }

    module.callback();
    this._modules[name].loaded = true;
  }        
};

/*
 * Sugaring to make Ghost functions available in window namespace so 
 * require(), register() can be called freely and be proxied to Ghost.
 */
window.require = function(name) { Ghost.require(name); }
window.register = function(name, callback) { Ghost.register(name, callback); }
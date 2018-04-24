/**
 * Module with constants
 * @namespace Constants
 * @memberOf IL
 * @author Bastien Eichenberger
 */
IL.Constants = (function (my) {

    /**
     * Object with constants
     * @private
     * @memberOf IL.Constants
     * @type {Object}
     * @property {String} MY_CONST
     * @property {Number} MY_INTEGER
     */
    var MY_CONSTANTS = {
        VERSION: 1.0
    };

    /**
     * Function to get a constant
     * @function get
     * @memberOf IL.Constants
     * @param {string} name
     * @returns {*}
     */
    my.get = function (name) {
        return MY_CONSTANTS[name];
    }

    return my;
})(IL.Constants || {});

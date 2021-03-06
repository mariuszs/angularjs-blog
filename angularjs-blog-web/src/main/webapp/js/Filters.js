/**
 * Filters module
 *
 * @author Till Hermsen
 * @date 09.01.13
 */

'use strict';

angular.module('Filters', []).

    filter('blogPostPreview', function() {
        return function(input) {
            if (input.length > 300) {
                input = input.substring(0, 300)
                    .split(" ").slice(0, -1).join(" ") + "...";
            }
            return input;
        };
    });

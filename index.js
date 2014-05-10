'use strict';


module.exports = function(assemble) {
  var middlware = function (params, next) {
    assemble.log.debug('\t[middlware]: ', 'assemble-middleware-drafts', params.event);
    assemble.log.debug('\t[params]:', params);

    var meta = params.page.data;
    if (meta.published === false || meta.draft === true) {
      var key = params.page.name || params.page.src || 'page_' + (meta.index + 1);
      delete assemble.pages[key];
    }
    next();
  };


  // Define the event to use
  middleware.event = 'page:after:build';
  return {
    'assemble-middleware-drafts': middleware
  };
};


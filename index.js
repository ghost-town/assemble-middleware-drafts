'use strict';


module.exports = function(assemble) {


  // The plugin
  var plugin = function (params, done) {
    // logging
    assemble.log.debug('\t[plugin]: ', 'assemble-middleware-drafts', params.event);
    assemble.log.debug('\t[params]:', params);

    var meta = params.page.data;
    if (meta.published === false || meta.draft === true) {
      var key = params.page.name || params.page.src || 'page_' + (meta.index + 1);
      delete assemble.pages[key];
    }
    done();
  };


  // Define the event to use
  middleware.event = 'page:after:build';
  return {
    'assemble-middleware-drafts': middleware
  };
};


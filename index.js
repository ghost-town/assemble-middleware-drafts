'use strict';

module.exports = function(assemble) {
  var plugin = function (params, done) {
    assemble.log.debug('\t[plugin]: ', 'drafts', params.event);
    assemble.log.debug('\t[params]:', params);

    var meta = params.page.metadata;
    if (meta.published === false || meta.draft === true) {
      var key = params.page.name || params.page.src || 'page_' + (meta.index + 1);
      delete assemble.pages[key];
    }
    done();
  };

  plugin.options = {
    name: 'assemble-drafts',
    description: 'Core plugin for excluding pages from rendering.',
    events: ['page:after:build']
  };

  var config = {};
  config[plugin.options.name] = plugin;
  return config;
};

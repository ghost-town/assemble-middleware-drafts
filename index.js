'use strict';

module.exports = function(assemble) {
  var plugin = function (params, done) {
    assemble.log.debug('\t[plugin]: ', 'drafts', params.event);
    assemble.log.debug('\t[params]:', params);

    for(var page in assemble.pages) {
      var meta = assemble.pages[page].metadata;
      if (meta.published === false || meta.draft === true) {
        delete assemble.pages[page];
      }
    }
    done();
  };

  plugin.options = {
    name: 'assemble-drafts',
    description: 'Core plugin for excluding pages from rendering.',
    events: ['page:before:build']
  };

  var config = {};
  config[plugin.options.name] = plugin;
  return config;
};

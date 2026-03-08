'use strict';

// Patch fs.unlink/unlinkSync to retry on EBUSY errors (Windows file locking issue)
if (process.platform === 'win32') {
  const fs = require('fs');
  const originalUnlink = fs.unlink;
  fs.unlink = function (path, callback) {
    let retries = 0;
    const maxRetries = 5;
    const attempt = () => {
      originalUnlink(path, (err) => {
        if (err && (err.code === 'EBUSY' || err.code === 'EPERM') && retries < maxRetries) {
          retries++;
          setTimeout(attempt, 100 * retries);
        } else {
          callback(err);
        }
      });
    };
    attempt();
  };

  const originalUnlinkSync = fs.unlinkSync;
  fs.unlinkSync = function (path) {
    let retries = 0;
    const maxRetries = 5;
    while (true) {
      try {
        return originalUnlinkSync(path);
      } catch (err) {
        if ((err.code === 'EBUSY' || err.code === 'EPERM') && retries < maxRetries) {
          retries++;
          const start = Date.now();
          while (Date.now() - start < 100 * retries) { /* wait */ }
        } else {
          throw err;
        }
      }
    }
  };
}

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    // Configure Product admin layout
    const contentTypeService = strapi.plugin('content-manager').service('content-types');

    try {
      await contentTypeService.updateConfiguration(
        { uid: 'api::product.product' },
        {
          layouts: {
            edit: [
              [{ name: 'name', size: 6 }, { name: 'slug', size: 6 }],
              [{ name: 'tagline', size: 6 }, { name: 'productCategory', size: 6 }],
              [{ name: 'description', size: 12 }],
              [{ name: 'image', size: 6 }, { name: 'brochure', size: 6 }],
              [{ name: 'features', size: 12 }],
              [{ name: 'areasOfApplication', size: 12 }],
              [{ name: 'standardCompliance', size: 12 }],
              [{ name: 'howToUse', size: 12 }],
              [{ name: 'highlight', size: 12 }],
              [{ name: 'faqs', size: 12 }],
            ],
          },
        }
      );
      strapi.log.info('Product admin layout configured.');

      // Configure Highlight component layout
      // Force update by resetting stored config in core_store
      const existingConfig = await strapi.store.get({ type: 'plugin', name: 'content_manager', key: `configuration_components::product.highlight` });

      const highlightLayout = {
        edit: [
          [{ name: 'title', size: 12 }],
          [{ name: 'description', size: 12 }],
          [{ name: 'image', size: 12 }],
          [{ name: 'buttonText', size: 6 }, { name: 'buttonLink', size: 6 }],
        ],
      };

      if (existingConfig) {
        existingConfig.layouts = highlightLayout;
        await strapi.store.set({
          type: 'plugin',
          name: 'content_manager',
          key: `configuration_components::product.highlight`,
          value: existingConfig,
        });
      } else {
        await contentTypeService.updateConfiguration(
          { uid: 'product.highlight' },
          { layouts: highlightLayout }
        );
      }
      strapi.log.info('Highlight component layout configured.');
    } catch (err) {
      strapi.log.warn('Could not configure layout: ' + err.message);
    }
  },
};

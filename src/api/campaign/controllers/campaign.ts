// /**
//  * campaign controller
//  */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::campaign.campaign');


/**
 * campaign controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::campaign.campaign',
  ({ strapi }) => ({

    async find(ctx) {
      // 1️⃣ Fetch campaigns with full populate
      const entities = await strapi.entityService.findMany(
        'api::campaign.campaign',
        {
          populate: {
            heroHeader: {
              populate: ['image', 'buttons'],
            },

            features: {
              populate: ['featureList'],
            },
            features2: {
              populate: ['featureList'],
            },
            features3: {
              populate: ['featureList'],
            },

            bottomBanner1: true,
            bottomBanner2: true,

            worldClassHealth: true,

            testimonials: {
              populate: ['image'],
            },

            prices: true,
            metaImage: true,
          },
        }
      );

      // 2️⃣ Return Strapi-standard shape
      return {
        data: entities,
        meta: {
          count: entities.length,
        },
      };
    },

  })
);

import type { Schema, Struct } from '@strapi/strapi';

export interface TagsTags extends Struct.ComponentSchema {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'Tags';
    icon: 'bulletList';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tags.tags': TagsTags;
    }
  }
}

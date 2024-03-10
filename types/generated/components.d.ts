import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsRealisations extends Schema.Component {
  collectionName: 'components_components_realisations';
  info: {
    displayName: 'Realisations';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsServices extends Schema.Component {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Services';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    link: Attribute.String;
  };
}

export interface ComponentsSocialLink extends Schema.Component {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    bottom: Attribute.String;
    social: Attribute.Component<'components.social-link', true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
    index: Attribute.Boolean & Attribute.DefaultTo<false>;
    follow: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.realisations': ComponentsRealisations;
      'components.services': ComponentsServices;
      'components.social-link': ComponentsSocialLink;
      'sections.hero': SectionsHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}

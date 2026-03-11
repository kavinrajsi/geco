import type { Schema, Struct } from '@strapi/strapi';

export interface BlogEmbed extends Struct.ComponentSchema {
  collectionName: 'components_blog_embeds';
  info: {
    description: 'Embed external content (iframe, tweet, etc.)';
    displayName: 'Embed';
    icon: 'code';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogFile extends Struct.ComponentSchema {
  collectionName: 'components_blog_files';
  info: {
    description: 'Downloadable file attachment';
    displayName: 'File';
    icon: 'paperclip';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface BlogHeading extends Struct.ComponentSchema {
  collectionName: 'components_blog_headings';
  info: {
    description: 'Section heading';
    displayName: 'Heading';
    icon: 'heading';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'h2'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_images';
  info: {
    description: 'Image block with optional caption';
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    file: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlogRichText extends Struct.ComponentSchema {
  collectionName: 'components_blog_rich_texts';
  info: {
    description: 'Text content block';
    displayName: 'Rich Text';
    icon: 'align-left';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface BlogTable extends Struct.ComponentSchema {
  collectionName: 'components_blog_tables';
  info: {
    description: 'Table content as markdown or HTML';
    displayName: 'Table';
    icon: 'table';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlogVideo extends Struct.ComponentSchema {
  collectionName: 'components_blog_videos';
  info: {
    description: 'Video embed via URL';
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductFaq extends Struct.ComponentSchema {
  collectionName: 'components_product_faqs';
  info: {
    description: 'Frequently asked question with answer';
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_features';
  info: {
    description: 'Product feature with icon and text';
    displayName: 'Feature';
    icon: 'check-circle';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductHighlight extends Struct.ComponentSchema {
  collectionName: 'components_product_highlights';
  info: {
    description: 'Promotional highlight/CTA section';
    displayName: 'Highlight';
    icon: 'star';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Learn more'>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    linkedBlog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductHowToUseStep extends Struct.ComponentSchema {
  collectionName: 'components_product_how_to_use_steps';
  info: {
    description: 'Step in the how-to-use guide';
    displayName: 'How To Use Step';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.embed': BlogEmbed;
      'blog.file': BlogFile;
      'blog.heading': BlogHeading;
      'blog.image': BlogImage;
      'blog.rich-text': BlogRichText;
      'blog.table': BlogTable;
      'blog.video': BlogVideo;
      'product.faq': ProductFaq;
      'product.feature': ProductFeature;
      'product.highlight': ProductHighlight;
      'product.how-to-use-step': ProductHowToUseStep;
    }
  }
}

import { SITE } from '@/configs/site.config';
import { APP_METADATA } from '@/configs/metadata.config';

// ----------------------------------------------------------------------

interface MetaTagsProps {
  description?: string;
  image?: string;
  keywords?: string;
  by?: string;
  title?: string;
}

function MetaTags({
  by = APP_METADATA.author,
  description = APP_METADATA.description,
  image = APP_METADATA.ogImage,
  keywords = APP_METADATA.keywords,
  title = APP_METADATA.title,
}: MetaTagsProps) {
  return (
    <>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <link href={window.location.href} rel='canonical' />
      <meta content={description} name='description' />
      <meta content={keywords} name='keywords' />

      {/* Open Graph tags (OG) */}
      <meta content={window.location.href} property='og:url' />
      <meta content='website' property='og:type' />
      <meta content='en_US' property='og:locale' />
      <meta content={title} property='og:title' />
      <meta content={SITE.name} property='og:site_name' />
      <meta content={description} property='og:description' />

      {/* OG image tags */}
      <meta content={image} property='og:image' />
      <meta content={image} property='og:image:secure_url' />
      <meta content='image/jpeg' property='og:image:type' />
      <meta content={`Image of ${title} site`} property='og:image:alt' />

      {/* Twitter tags */}
      <meta content={by} name='twitter:creator' />
      <meta content='summary' name='twitter:card' />
      <meta content={title} name='twitter:title' />
      <meta content={description} name='twitter:description' />
    </>
  );
}

export default MetaTags;

import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  keywords,
  description,
  name = "Sencilla Consultancy Services Inc",
  SocialMediatype = 'website',
  fbImage,
  twImage,
  owaiswiz="@owaiswiz",
  card="summary_large_image"
})  => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content={SocialMediatype} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} /> 
      <meta property="og:image" content={fbImage} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:site" content={owaiswiz} />
      <meta name="twitter:creator" content={owaiswiz} />
      <meta name="twitter:card" content={card} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={twImage} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

export default SEO;

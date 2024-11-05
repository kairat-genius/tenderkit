import React from 'react';
import { Helmet } from 'react-helmet';
import metaData from '../../json/metaData.json';

const MetaTags = ({ page, title="", slug="", article=""  }) => {
  const meta = metaData[page];
  const titleEnd = meta.titleEnd || "";
  const descriptionEnd = meta.descriptionEnd || "";
  return (
    <Helmet>
      <title>{`${meta.title}${title}${titleEnd}`}</title>
      <meta name="title" content={`${meta.title}${title}${titleEnd}`} />
      <meta name="description" content={`${meta.description}${title}${descriptionEnd}`} />

      <meta property="og:title" content={`${meta.title}${title}${titleEnd}`} />
      <meta property="og:description" content={`${meta.description}${title}${descriptionEnd}`} />
      <meta property="og:url" content={`https://tenderkit.kz/${meta.ogUrl || ""}${slug ? `/${slug}` : ""}/${article ? `/${article}` : ""}`} />

      <meta name="twitter:title" content={`${meta.title}${title}${titleEnd}`}  />
      <meta name="twitter:description" content={`${meta.description}${title}${descriptionEnd}`} />
    </Helmet>
  );
}

export default MetaTags;

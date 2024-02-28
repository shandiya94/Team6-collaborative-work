import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaTags = ({ title, description }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  </HelmetProvider>
);

export default MetaTags;

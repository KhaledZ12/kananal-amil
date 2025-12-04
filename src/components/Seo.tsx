import { useEffect } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  robots?: string;
};

const defaultTitle = 'مكتب كنان الأمل للتنازل عن العاملات المنزلية';
const defaultDescription = 'أفضل مكتب للتنازل عن العاملات المنزلية في الرياض: تنازل عن خادمات، طباخات، مربيات، نقل كفالة بخبرة وثقة.';
const defaultImage = '/images/logo.png';
const baseUrl = 'https://kanan-alamil.com';

const setMeta = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setOG = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (url: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
};

export default function Seo({ title, description, image, url, keywords, robots = 'index, follow' }: SeoProps) {
  useEffect(() => {
    const finalTitle = title ? `${title}` : defaultTitle;
    document.title = finalTitle;

    const finalDesc = description || defaultDescription;
    const finalImg = image ? `${baseUrl}${image}` : `${baseUrl}${defaultImage}`;
    const finalUrl = url ? `${baseUrl}${url}` : `${baseUrl}${window.location.pathname}`;

    // Basic meta tags
    setMeta('description', finalDesc);
    setMeta('robots', robots);
    if (keywords) {
      setMeta('keywords', keywords);
    }

    // Canonical URL
    setCanonical(finalUrl);

    // Open Graph tags
    setOG('og:title', finalTitle);
    setOG('og:description', finalDesc);
    setOG('og:image', finalImg);
    setOG('og:url', finalUrl);
    setOG('og:type', 'website');
    setOG('og:locale', 'ar_SA');
    setOG('og:site_name', defaultTitle);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', finalTitle);
    setMeta('twitter:description', finalDesc);
    setMeta('twitter:image', finalImg);
    setMeta('twitter:url', finalUrl);
  }, [title, description, image, url, keywords, robots]);

  return null;
}



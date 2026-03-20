import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export function useSEO(meta: SEOMeta) {
  useEffect(() => {
    // Title
    document.title = `${meta.title} | Trợ lý Creator`;

    // Meta tags
    setMeta('description', meta.description);
    setMeta('og:title', meta.ogTitle || meta.title);
    setMeta('og:description', meta.ogDescription || meta.description);
    setMeta('og:image', meta.ogImage || 'https://autobrand.vn/og-image.jpg');
    setMeta('og:type', 'website');
    setMeta('og:site_name', 'Trợ lý Creator');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.ogTitle || meta.title);
    setMeta('twitter:description', meta.ogDescription || meta.description);
  }, [meta.title, meta.description]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(
    `meta[property="${name}"], meta[name="${name}"]`
  ) as HTMLMetaElement;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

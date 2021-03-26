const createTag = ({ tagName, style = {}, attributes = {} }) => {
  const domElm = document.createElement(tagName);
  Object.assign(domElm.style, style);
  Object.keys(attributes).forEach((attributeKey) => {
      domElm.setAttribute(attributeKey, attributes[attributeKey]);
  });
  return domElm;
};

function myFunction(){
  const dynamicBannersElm = document.getElementById(
      'bl-modal'
  );

  const iframeSrc = 'https://m.preproduction.bukalapak.com/live-streaming/widgets/shopping';
  
//   const iframeSrc = 'https://review.bukalapak.com/widgets/dynamic_banners_v2?product-category-id=8&keywords=iphone&dimension=760x365&sort=bestratingratio&rating=3&utm=source%3Dkly%2Cmedium%3Dreferral-affiliate&theme=&compact-product=false&show-banner=true&logo-style=dark&background-color=%23ffffff';
  
//   const iframeSrc = 'http://m.local.host:5004/live-streaming/widgets/shopping';

//   const iframeSrc = 'https://m.preproduction.bukalapak.com/mweb-games/minigames-viewer';

  const iframeContainer = createTag({
  tagName: 'div',
  style: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '610px',
  }
  });
  const iframe = createTag({
  tagName: 'iframe',
  style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      border: 0,
      overflow: 'hidden'
  },
  attributes: {
      scrolling: 'no',
      loading: 'lazy'
  }
  });

  if (!navigator.userAgent.includes('MSIE')) {
  iframe.src = iframeSrc;
  } else {
  iframe.location = iframeSrc;
  }

  iframeContainer.appendChild(iframe);
  dynamicBannersElm.appendChild(iframeContainer);
}
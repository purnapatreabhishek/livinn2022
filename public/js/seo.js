// const head = document.querySelector('head');
// const body = document.querySelector('body');

// const constructMeta = (title, description, keyword, faviconImg) => {
//   // const metaTitle = document.createElement('title');
//   // metaTitle.textContent = title || 'Wesettle';

//   // const metaDescription = document.createElement('meta');
//   // metaDescription.name = 'description';
//   // metaDescription.content = description || '';

//   // const metaKeyword = document.createElement('meta');
//   // metaKeyword.name = 'keyword';
//   // metaKeyword.content = keyword || '';

//   const favicon = document.createElement('link');
//   favicon.rel = 'icon';
//   if (favicon) favicon.href = faviconImg;

//   // head.appendChild(metaTitle);
//   // head.appendChild(metaDescription);
//   // head.appendChild(metaKeyword);
//   head.appendChild(favicon);
// };

// const fetchSeo = async () => {
//   try {
//     const res = await fetch(`/api/v1/seo`);
//     const data = await res.json();
//     if (data.status === 'fail' || data.status === 'error') {
//       throw new Error(data?.message);
//     }
//     const seo = data?.seo;
//     if (!seo) return;

//     constructMeta(
//       seo?.metaTitle,
//       seo?.metaDescription,
//       seo?.metaKeyword,
//       seo?.favicon?.url
//     );
//   } catch (error) {}
// };

// fetchSeo();

// const genScript = (script) => `
//   try {
// ${script}
//   }catch(e){}
// `;
// const fetchScript = async () => {
//   try {
//     const res = await fetch(`/api/v1/script`);
//     const data = await res.json();
//     if (data.status === 'fail' || data.status === 'error') {
//       throw new Error(data?.message);
//     }

//     const header = document.createElement('script');
//     header.append(genScript(data?.script?.header));
//     head.append(header);
//     const footer = document.createElement('script');
//     footer.append(genScript(data?.script?.footer));
//     console.log(body, footer);
//     body.append(footer);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchScript();

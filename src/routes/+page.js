// // import sanityClient from "@sanity/client";
// // export const prerender = true

// // const client = sanityClient({
// //   projectId: "ilayca33",
// //   dataset: "production",
// //   apiVersion: "2021-10-21",
// //   useCdn: false
// // });

// export async function load() {
//     // const data = await client.fetch(`*[_type == "project"]{
//     //     Desc,
//     //     title,
//     //     "imageUrl": poster.asset->url
//     //   }`);
//     // // console.log(data);
//     // if (data) {
//     //   return {
//     //     project: data,
//     //     client: client
//     //   };
//     // }
//     let BlogPosts = await getPosts("https://content.ionicbyte.com", 4);
//     let blogPostsWithImages = await getImages(BlogPosts, "https://content.ionicbyte.com")
//     // https://case.ionicbyte.com/wp
//     let caseStudy = await getPosts("https://case.ionicbyte.com/wp", 4);
//     // // console.log(caseStudy);
//     let caseStudyWithImages = await getImages(caseStudy, "https://case.ionicbyte.com/wp")

//     // // console.log(caseStudyWithImages);
//     return {
//         // project: data,
//         // client: client
//         // posts: blogPostsWithImages,
//         blogPosts: blogPostsWithImages,
//         caseStudy : caseStudyWithImages 
//     };
//     // return {
//     //   status: 500,
//     //   body: new Error("Internal Server Error")
//     // };
// }
// // // get()








// const getPosts = async (domain, number) => {
//     let dataRes = await fetch(
//         `${domain}/wp-json/wp/v2/posts?per_page=${number}`
//     );
//     let datas = await dataRes.json();
//     return datas;
// };

// const getImages = async (posts, domain) => {
//     const result = await Promise.all(posts.map(async (post) => {
//         const imgDetailsRes = await fetch(
//             `${domain}/wp-json/wp/v2/media/${post.featured_media}`
//         );
//         const imgDetails = await imgDetailsRes.json();
//         let img;
//         if (imgDetails.guid) {
//             img = {
//                 src: imgDetails.guid.rendered,
//                 alt: imgDetails.alt_text
//             };
//         } else {
//             img = {
//                 src: "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000",
//                 alt:"ionicbyte blog"
//             }
//         }
//         return { data: post, imageDetails: img }
//     }));
//     return result;
// };



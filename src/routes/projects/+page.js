

import sanityClient from "@sanity/client";
export const prerender = true

const client = sanityClient({
  projectId: "ilayca33",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export async function load() {
    const data = await client.fetch(`*[_type == "project"]{
        Desc,
        title,
        "imageUrl": poster.asset->url
      }`);
    if (data) {
      return {
        projects: data,
      };
    }

}
// // get()

    // let BlogPosts = await getPosts("https://content.ionicbyte.com", 4);
    // let blogPostsWithImages = await getImages(BlogPosts, "https://content.ionicbyte.com")
    // // https://case.ionicbyte.com/wp
    // let caseStudy = await getPosts("https://case.ionicbyte.com/wp", 4);
    // // console.log(caseStudy);
    // let caseStudyWithImages = await getImages(caseStudy, "https://case.ionicbyte.com/wp")

    // // console.log(caseStudyWithImages);
    // return {
    //     // project: data,
    //     // client: client
    //     // posts: blogPostsWithImages,
    //     blogPosts: blogPostsWithImages,
    //     caseStudy : caseStudyWithImages 
    // };
    // return {
    //   status: 500,
    //   body: new Error("Internal Server Error")
    // };
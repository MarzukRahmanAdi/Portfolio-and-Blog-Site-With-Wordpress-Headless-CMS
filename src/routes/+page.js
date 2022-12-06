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
    console.log(data);
    if (data) {
      return {
        project: data,
        client: client
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }
// get()
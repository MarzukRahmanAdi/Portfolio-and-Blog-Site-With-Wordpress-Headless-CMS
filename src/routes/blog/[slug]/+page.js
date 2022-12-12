export async function load({params}) {

    const blogPost = await getOneBlog("https://content.ionicbyte.com", params.slug)
    return {
        post: blogPost
    }
}



const getOneBlog = async (domain, postId) => {
    const response = await fetch(`${domain}/wp-json/wp/v2/posts/${postId}`);
    const post = await response.json();
    const mediaId = post.featured_media;
    const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${mediaId}`);
    const media = await mediaResponse.json();
    const mediaLink = {imgSrc : media.guid.rendered, altText: media.alt_text}
    return { data: post, imageDetails: mediaLink }
}
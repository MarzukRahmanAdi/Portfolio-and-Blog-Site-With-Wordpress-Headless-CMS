// const fetchPosts = async () => {
//     await fetch('https://content.ionicbyte.com/wp-json/wp/v2/posts?per_page=4')
//     .then((response) => response.json())
//         .then((data) =>{
//             data.map(async (d) =>{
//                 const imgDetails = await fetch(`https://content.ionicbyte.com/wp-json/wp/v2/media/${d.featured_media}`).then( res => res.json()).then(data2 => { 
//                 if (data2.guid) return {src : data2.guid.rendered, alt : data2.alt_text}
//                 });
//                 if(!imgDetails) return;
//                 blogs = [ ...blogs, {data :d, imageDetails :imgDetails} ]
//             })
//         });
//         }
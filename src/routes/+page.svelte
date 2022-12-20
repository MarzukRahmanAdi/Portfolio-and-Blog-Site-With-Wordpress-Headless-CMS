
<script>
  import { onMount } from "svelte";






    const getPosts = async (domain, number) => {
        let dataRes = await fetch(
            `${domain}/wp-json/wp/v2/posts?per_page=${number}`
        );
        let datas = await dataRes.json();
        return datas;
    };

    const getImages = async (posts, domain) => {
        const result = await Promise.all(posts.map(async (post) => {
            const imgDetailsRes = await fetch(
                `${domain}/wp-json/wp/v2/media/${post.featured_media}`
            );
            const imgDetails = await imgDetailsRes.json();
            let img;
            if (imgDetails.guid) {
                img = {
                    src: imgDetails.guid.rendered,
                    alt: imgDetails.alt_text
                };
            } else {
                img = {
                    src: "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=2000",
                    alt:"ionicbyte blog"
                }
            }
            return { data: post, imageDetails: img }
        }));
        return result;
    };



    let blogPosts;
    let caseStudy;

    onMount(async() => {
        let BlogPosts = await getPosts("https://content.ionicbyte.com", 4);
        let blogPostsWithImages = await getImages(BlogPosts, "https://content.ionicbyte.com")
        blogPosts = blogPostsWithImages;
        let caseStudies = await getPosts("https://case.ionicbyte.com/wp", 4);
        let caseStudyWithImages = await getImages(caseStudies, "https://case.ionicbyte.com/wp")
        caseStudy = caseStudyWithImages;
        console.log(caseStudy)
    })
    let seeMore = false;


</script>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>A Digital agency - improving businesses presence through virtual solutionst</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <link rel="shortcut icon" type="image/x-icon" href="assets/media/favicon.png">
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/vendor/font-awesome.css">
    <link rel="stylesheet" href="assets/css/vendor/slick.css">
    <link rel="stylesheet" href="assets/css/vendor/slick-theme.css">
    <link rel="stylesheet" href="assets/css/vendor/sal.css">
    <link rel="stylesheet" href="assets/css/vendor/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/vendor/green-audio-player.min.css">
    <link rel="stylesheet" href="assets/css/app.css">
</head>

<style>
    .btn-seeMore{
        padding-left:20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; background-color: #7200ea; color: white; border-radius: 50px; text-align: center; 
    }
    .btn-seeMore:hover{
        transition: 500ms ease-in-out;
        transform: scale(1.2);
        color: rgb(236, 244, 255);
    }
    .btn-seeMoreContainer{
        display: flex; justify-content: center; width: 100%;
    }
</style>

<body class="sticky-header"><a href="#main-wrapper" id="backto-top" class="back-to-top"><i
            class="far fa-angle-double-up"></i></a>

    <div id="app"></div>

    <div id="preloader"></div>
    <div class="my_switcher d-none d-lg-block">
        <ul>
            <li title="Light Mode"><a href="javascript:void(0)" class="setColor light" data-theme="light"><i
                        class="fal fa-lightbulb-on"></i></a></li>
            <li title="Dark Mode"><a href="javascript:void(0)" class="setColor dark" data-theme="dark"><i
                        class="fas fa-moon"></i></a></li>
        </ul>
    </div>
    <div id="main-wrapper" class="main-wrapper">
        <header class="header axil-header header-style-1">
            <div id="axil-sticky-placeholder"></div>
            <div class="axil-mainmenu">
                <div class="container">
                    <div class="header-navbar">
                        <div class="header-logo"><a href="/"><img class="light-version-logo"
                                    src="IonicByte-png.png" style="width:200px;" alt="logo"></a><a
                                href="/"><img class="dark-version-logo" width="150" src="IonicByte-png.png"
                                    alt="logo"></a><a href="/"><img class="sticky-logo" width="150"
                                    src="IonicByte-png.png" alt="logo"></a></div>
                        <div class="header-main-nav">
                            <nav class="mainmenu-nav" id="mobilemenu-popup">
                                <div class="d-block d-lg-none">
                                    <div class="mobile-nav-header">
                                        <div class="mobile-nav-logo"><a href="/"><img class="light-mode"
                                                    width="150" src="assets/media/logo-2.png" alt="Site Logo"> <img
                                                    class="dark-mode" src="assets/media/logo-3.png" width="150"
                                                    alt="Site Logo"></a>
                                        </div><button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i
                                                class="fas fa-times"></i></button>
                                    </div>
                                </div>
                                <ul class="mainmenu">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#projects">Why Us</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#blogs">Stories</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-action">
                            <ul class="list-unstyled">
                                <li class="sidemenu-btn d-lg-block d-none"><button class="btn-wrap"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasMenuRight"><span></span><span></span><span></span></button>
                                </li>
                                <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block"><button class="btn-wrap"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#mobilemenu-popup"><span></span><span></span><span></span></button>
                                </li>
                                <li class="my_switcher d-block d-lg-none">
                                    <ul>
                                        <li title="Light Mode"><a href="javascript:void(0)" class="setColor light"
                                                data-theme="light"><i class="fal fa-lightbulb-on"></i></a></li>
                                        <li title="Dark Mode"><a href="javascript:void(0)" class="setColor dark"
                                                data-theme="dark"><i class="fas fa-moon"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="banner banner-style-1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-content" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                            <h1 class="title">Web & Marketing agency</h1><span class="subtitle">Unravel your business's
                                potential with our web design, development and marketing services</span><a
                                href="#contact" class="axil-btn btn-fill-primary btn-large">Contact Us</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-thumbnail">
                            <div class="large-thumb" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300">
                                <img src="assets/media/banner/laptop.png" alt="Laptop">
                            </div>
                            <ul class="list-unstyled shape-group">
                                <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500"
                                    data-sal-delay="400"><img src="assets/media/banner/marker.png" alt="Marker"></li>
                                <li class="shape shape-2" data-sal="slide-right" data-sal-duration="500"
                                    data-sal-delay="500"><img src="assets/media/banner/chat-icon.png" alt="Chat"></li>
                                <li class="shape shape-3" data-sal="slide-left" data-sal-duration="500"
                                    data-sal-delay="600"><img src="assets/media/banner/sticker.png" alt="sticker"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-13">
                <li class="shape shape-1" data-sal="slide-down" data-sal-duration="500" data-sal-delay="100"><img
                        src="assets/media/others/bubble-18.png" alt="Bubble"></li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200"><img
                        src="assets/media/others/bubble-19.png" alt="Bubble"></li>
                <li class="shape shape-3" data-sal="slide-left" data-sal-duration="500" data-sal-delay="700"><img
                        src="assets/media/others/hand-2.png" alt="Hand"></li>
                <li class="shape shape-4" data-sal="slide-left" data-sal-duration="500" data-sal-delay="700"><img
                        src="assets/media/others/bubble-14.png" alt="Bubble"></li>
                <li class="shape shape-5" data-sal="slide-left" data-sal-duration="500" data-sal-delay="700"><img
                        src="assets/media/others/bubble-14.png" alt="Bubble"></li>
            </ul>
        </section>
        <section class="section section-padding-equal bg-color-dark" id="services">
            <div class="container">
                <div class="section-heading heading-light-left"><span class="subtitle">What We Can Do For You</span>
                    <h2 class="title">Services we can help you with</h2>
                    <p class="opacity-50">Get Ahead of the Competition with Our Top-Notch Web Design and Markerting
                        Services</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid active">
                            <div class="thumbnail"><img src="assets/media/icon/icon-1.png" alt="icon"></div>
                            <div class="content">
                                <h5 class="title"><a href="/">Web Development</a></h5>
                                <p>An aesthetic website or webapp is mandatory to create your brand awareness. Without an extra ordinary user experience they won't be permanent loyal customers.
                                    Lets give them a better place to ride on.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid">
                            <div class="thumbnail"><img src="assets/media/icon/icon-2.png" alt="icon"></div>
                            <div class="content">
                                <h5 class="title"><a href="/">SEO</a></h5>
                                <p>SEO is the process of improving the visibility and ranking of a website or web page in search engines through the use of various techniques and strategies. 
                                    In simple terms, SEO is just the way to show people your products on google search when they search certain words.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="services-grid">
                            <div class="thumbnail"><img src="assets/media/icon/icon-3.png" alt="icon"></div>
                            <div class="content">
                                <h5 class="title"><a href="/">Online marketing</a></h5>
                                <p>You can create a working time machine and be proud about it. But without marketing or
                                    branding, no one will know or will hear about your products. Lets boost your
                                    presence with out talented digital marketers. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid">
                            <div class="thumbnail"><img src="assets/media/icon/icon-4.png" alt="icon"></div>
                            <div class="content">
                                <h5 class="title"><a href="/">App development</a></h5>
                                <p>An app takes a permanent place in a user's mobile. So with an app you can create a
                                    loyal customer for your product or brand in an instant</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid">
                            <div class="thumbnail"><img src="assets/media/icon/icon-5.png" alt="icon"></div>
                            <div class="content">
                                <h5 class="title"><a href="/">Digital marketing</a></h5>
                                <p>We also provide various types of Digital marketing solutions like SEO, social media
                                    marketing, content writing, Ecommerce marketing etc..</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="services-grid">
                            <div class="thumbnail"><img src="assets/media/icon/icon-6.png" alt="icon"></div>
                            <div class="content">
                                <h5 class="title"><a href="/">Design</a></h5>
                                <p>We provide different types of design services like Graphics design, Ui Design, poster
                                    design, etc.. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-10">
                <li class="shape shape-1"><img src="assets/media/others/circle-1.png" alt="Circle"></li>
                <li class="shape shape-2"><img src="assets/media/others/line-3.png" alt="Circle"></li>
                <li class="shape shape-3"><img src="assets/media/others/bubble-5.png" alt="Circle"></li>
            </ul>
        </section>
        <section class="section section-padding-equal case-study-featured-area" id="projects">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6" data-sal="slide-right" data-sal-duration="800">
                        <div class="slick-slider slick-dot-nav featured-content"
                            >
                            <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left"><span class="subtitle">Why us?</span>
                                        <h2 class="title">Why would you choose us?</h2>
                                        <p>We offer a comprehensive suite of website and marketing services that are
                                            designed to help businesses grow online. Our services are affordable and
                                            easy to use, and they are backed by a team of experts who are dedicated to
                                            helping businesses succeed. </p>
                                        <p>We offer a wide range of services, including website design, development, and
                                            maintenance, SEO, social media marketing, and email marketing.</p>
                                        <a href="#contact" class="axil-btn btn-fill-primary btn-large">Contact Us</a>
                                    </div>
                                    <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number"><span class="number count">400</span><span
                                                    class="symbol">&nbsp;+</span></h2><span
                                                class="counter-title">Projects</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number"><span class="number count">260</span><span
                                                    class="symbol">&nbsp;+</span></h2><span
                                                class="counter-title">Satisfied clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left"><span class="subtitle">Featured Case
                                            Study</span>
                                        <h2 class="title">Website and web Development, Design</h2>
                                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel
                                            hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui
                                            sodales, et placerat orci lobortis.</p>
                                        <p>Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                                        <a href="single-case-study.html"
                                            class="axil-btn btn-fill-primary btn-large">Read Case Study</a>
                                    </div>
                                    <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number"><span class="number count">15</span><span
                                                    class="symbol">%</span></h2><span class="counter-title">ROI
                                                increase</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number"><span class="number count">60</span><span
                                                    class="symbol">k</span></h2><span class="counter-title">Monthly
                                                website visits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left"><span class="subtitle">Featured Case
                                            Study</span>
                                        <h2 class="title">Branding, website &amp; digital marketing for Apple</h2>
                                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel
                                            hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui
                                            sodales, et placerat orci lobortis.</p>
                                        <p>Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                                        <a href="single-case-study.html"
                                            class="axil-btn btn-fill-primary btn-large">Read Case Study</a>
                                    </div>
                                    <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number"><span class="number count">15</span><span
                                                    class="symbol">%</span></h2><span class="counter-title">ROI
                                                increase</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number"><span class="number count">60</span><span
                                                    class="symbol">k</span></h2><span class="counter-title">Monthly
                                                website visits</span>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 d-none d-lg-block" data-sal="slide-left" data-sal-duration="800">
                        <div class="slick-slider slick-dot-nav featured-thumbnail"
                            >
                            <div class="slick-slide">
                                <div class="case-study-featured-thumb"><img src="assets/media/others/case-study-4.png"
                                        alt="travel"></div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured-thumb"><img src="assets/media/others/case-study-5.png"
                                        alt="travel"></div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured-thumb"><img src="assets/media/others/case-study-6.png"
                                        alt="travel"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="section section-padding-equal bg-color-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800">
                        <div class="about-us">
                            <div class="section-heading heading-left mb-0"><span class="subtitle">About Us</span>
                                <h2 class="title mb--40">What we do and specialize in</h2>
                                <p>IonicByte is a creative agency specializing in design, development and marketing. We
                                    believe in making things that are not only beautiful and functional but also
                                    memorable and unique. We strive to create experiences that people will love and
                                    remember.</p>
                                <p>We work with clients of all sizes, from startups to Fortune 500 companies. No matter
                                    what your project is, we have the experience and expertise to help you achieve your
                                    goals. So please don't hesitate to get in touch – we would love to hear from you!
                                </p>
                                <p>Knock us on your Facebook page to get instant reply</p>
                            </div>
                        </div>
                        <a href="https://www.facebook.com/ionicbyte/" class="axil-btn btn-fill-primary btn-large">Visit
                            FB page</a>
                    </div>
                    <div class="col-xl-5 col-lg-6 offset-xl-1" data-sal="slide-up" data-sal-duration="800"
                        data-sal-delay="100">
                        <div class="contact-form-box">
                            <h3 class="title">Contact Us</h3>
                            <form method="POST" onsubmit="sendMail()" action="https://mailserver-3ymf.onrender.com/" class="axil-contact-form">
                                <div class="form-group"><label>Name</label><input required type="text" id="contactName"
                                        class="form-control" name="contact-name" placeholder="John Smith"></div>
                                <div class="form-group"><label>Email</label><input required type="email" id="contactEmail"
                                        class="form-control" name="contact-email" placeholder="example@mail.com"></div>
                                <div class="form-group mb--40"><label>Phone</label><input type="number" id="contactNumber"
                                        class="form-control" name="contact-number" required placeholder="+123456789">
                                </div>
                                <div class="form-group mb--40"><label>Message</label><input type="text" id="contactMessage"
                                        class="form-control" name="contact-message" required placeholder="Message">
                                </div>
                                <div style="display:none ;" class="form-group mb--40"><label>Website name</label><input type="text" id="contactMessage"
                                    class="form-control" name="contact-websiteName" value="ionicbyte.com" placeholder="Message">
                                </div>
                                <div class="form-group"><button type="submit"
                                        class="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Send Message</button></div><input type="hidden" class="form-control"
                                    name="contact-message" value="Null">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-6 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/bubble-7.png" alt="Bubble"></li>
                <li class="shape shape-2"><img src="assets/media/others/line-4.png" alt="line"></li>
                <li class="shape shape-3"><img src="assets/media/others/line-5.png" alt="line"></li>
            </ul>
        </section>

        <section class="section section-padding-2">
            <div class="container">
                <div class="section-heading heading-left mb--40"><span class="subtitle">Featured case-study</span>
                    <h2 class="title">Some of our<br>finest work.</h2>
                </div>
                <div class="axil-isotope-wrapper">
                    <!-- <div class="isotope-button isotope-project-btn"><button data-filter="*" class="is-checked"><span
                                class="filter-text">All Works</span></button><button data-filter=".branding"><span
                                class="filter-text">Branding</span></button><button data-filter=".mobile"><span
                                class="filter-text">Mobile</span></button></div> -->
                    <div class="row row-35 ">
                        <div class="col-md-6 project branding">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/blur.jpg" alt="project"></div>
                                <div class="content">
                                    <h4 class="title">A Cryptography Website</h4><span
                                        class="subtitle">A website where people can come and create, buy and sell their own Crypto [ Nextjs(Front-end), Expressjs(RestApi), Laravel(Websocket and Storage) ] </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/web-2.jpg" alt="project"></div>
                                <div class="content">
                                    <h4 class="title">Digital Art Learning Site</h4><span
                                        class="subtitle">A website where people reads and learns digital art and admin uploads content from our
                                        hand made CMS [ Reactjs, TailwindCSS, Expressjs, MongoDB ]
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project branding">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/3.webp" alt="project"></div>
                                <div class="content">
                                    <h4 class="title">Fitness Website</h4><span
                                        class="subtitle">A web app where people buys membership and completes tasks, 
                                        gets diet plan and watches videos of workout [Nextjs, Laravel, PostgreSQL, Cloudinary]
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/4.png" alt="project"></div>
                                <div class="content">
                                    <h4 class="title">Ecommerce App</h4><span
                                        class="subtitle">A app where people orders products from. An Admin uploads products and manages orders from another
                                        Admin App [ Flutter, Firebase ]
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project branding">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/DM-1.jpg" alt="project"></div>
                                <div class="content">
                                    <h4 class="title">Facebook Marketing</h4><span
                                        class="subtitle">A Facebook Ads campaign which gave them more ROI than their expectations.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/DM-2.jpg" alt="project"></div>
                                <div class="content">
                                    <h4 class="title">Google Ads Marketing</h4><span
                                        class="subtitle">A Google ads campaign where we made the perfect ad and it blew their stock in just 100$ investment.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail"><img
                                            src="assets/media/project/poster.jpg" style="width:610x; height:460px; object-fit: cover;"  alt="project"></div>
                                <div class="content">
                                    <h4 class="title">Social Media Marketing</h4><span
                                        class="subtitle">We designed their all the posters and did organic marketing as well as Paid Boosting 
                                        to grow brand awareness about their coaching centre.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <video style=" background-color: black;" width="610" height="460" controls>
                                        <source src="assets/media/project/cyan.mp4" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div class="content">
                                    <h4 class="title">Video ad</h4><span
                                        class="subtitle">Our marketing team made this video with Adobe After Effects <aside></aside> their facebook ad.</span>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="btn-seeMoreContainer">
                        <a href="/projects"><button class="btn btn-seeMore" >See more</button></a>
                    </div>
                </div>
            </div>
            <ul class="shape-group-7 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="assets/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </section>

        <section class="section section-padding-2">
            <div class="container">
                <div class="section-heading heading-left mb--40"><span class="subtitle">Case Studies</span>
                    <h2 class="title">Some of our<br>Case Studies.</h2>
                </div>
                <div class="axil-isotope-wrapper row">
                    <!-- <div class="isotope-button isotope-project-btn"><button data-filter="*" class="is-checked"><span
                                class="filter-text">All Works</span></button><button data-filter=".branding"><span
                                class="filter-text">Branding</span></button><button data-filter=".mobile"><span
                                class="filter-text">Mobile</span></button></div> -->
                                {#if caseStudy}
                                    {#each caseStudy as dt}
                                        <div class="col-md-6 project branding">
                                            <a href="/case?id={dt.data.id}">
                                                asdasdsa
                                                <div class="project-grid">
                                                    <div class="thumbnail"><img
                                                                src={dt.imageDetails.src} alt={dt.imageDetails.src}></div>
                                                    <div class="content">
                                                        <h4 class="title">{@html dt.data.title.rendered.substring(0,90)}</h4><span
                                                            class="subtitle" style="">{@html dt.data.content.rendered.substring(0,150).replace(/<[^>]*>/g, '')}...</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    {/each}
                                        {:else}
                                        Loading...
                                {/if}
                   
                  
            </div>
            <ul class="shape-group-7 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="assets/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </section>
        <!-- <section class="section section-padding bg-color-dark">
            <div class="container">
                <div class="section-heading heading-light"><span class="subtitle">Featured Case Study</span>
                    <h2 class="title">Design startup movement</h2>
                    <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi
                        ac tellus.</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="counterup-progress active">
                            <div class="icon"><img src="assets/media/icon/icon-7.png" alt="Apple"></div>
                            <div class="count-number h2"><span class="number count">15</span><span
                                    class="symbol">+</span></div>
                            <h6 class="title">Years of operation</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="counterup-progress">
                            <div class="icon"><img src="assets/media/icon/icon-8.png" alt="Apple"></div>
                            <div class="count-number h2"><span class="number count">360</span><span
                                    class="symbol">+</span></div>
                            <h6 class="title">Projects deliverd</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="counterup-progress">
                            <div class="icon"><img src="assets/media/icon/icon-9.png" alt="Apple"></div>
                            <div class="count-number h2"><span class="number count">600</span><span
                                    class="symbol">+</span></div>
                            <h6 class="title">Specialist</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
                        <div class="counterup-progress">
                            <div class="icon"><img src="assets/media/icon/apple.png" alt="Apple"></div>
                            <div class="count-number h2"><span class="number count">64</span><span
                                    class="symbol">+</span></div>
                            <h6 class="title">Years of operation</h6>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-5 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/circle-1.png" alt="line"></li>
                <li class="shape shape-2"><img src="assets/media/others/line-3.png" alt="line"></li>
                <li class="shape shape-3"><img src="assets/media/others/bubble-5.png" alt="line"></li>
                <li class="shape shape-4"><img src="assets/media/others/bubble-6.png" alt="line"></li>
            </ul>
        </section> -->
        <section class="section section-padding">
            <div class="container">
                <div class="section-heading heading-left"><span class="subtitle">Testimonial</span>
                    <h2 class="title">What previous clients have to say about us</h2>
                    <p></p>
                </div>
                <div class="row">
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div class="testimonial-grid active"><span class="social-media"><img
                                    src="assets/media/nik.png"  style="width: 100px; border-radius: 100px; " alt="Yelp"></span>
                            <p>“ IonicByte team have shown great efficiency and professionalism while developing the website of Nikunjo. We're quite impressed with their determination and positive attitude in their activities. Best wishes for them.”</p>
                            <div class="author-info">
                                <div class="thumb"></div>
                                <div class="content"><span class="name">Nafisa Noor Ahona
                                </span><span
                                        class="designation">Nikunjo Official
                                    </span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                        <div class="testimonial-grid"><span class="social-media"><img
                                    src="assets/media/upward.png" style="width: 70px; border-radius: 100px; " alt="google"></span>
                            <p>“  Our website was created and developed by IonicByte. We are very much satisfied with their professional service and wish them a good luck for their upcoming journey ”</p>
                            <div class="author-info">
                                <div class="thumb"></div>
                                <div class="content"><span class="name">Tanzim Islam Ushan
                                </span><span
                                        class="designation">Upward Bangladesh
                                    </span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ul class="shape-group-4 list-unstyled">
                <li class="shape-1"><img src="assets/media/others/bubble-1.png" alt="Bubble"></li>
            </ul>
        </section>
        <!-- <section class="section bg-color-light section-padding">
            <div class="container">
                <div class="section-heading mb-0"><span class="subtitle">Pricing Plan</span>
                    <h2 class="title">Find the Right Plan.</h2>
                    <p>Flexible pricing options for freelancers<br>and design teams.</p>
                </div>
                <div class="pricing-billing-duration">
                    <ul>
                        <li class="nav-item"><button class="nav-link active" id="yearly-plan-btn" type="button">Billed
                                yearly</button></li>
                        <li class="nav-item billed-check-box"><input type="checkbox" id="pricing-checkbox"><label
                                for="pricing-checkbox"></label></li>
                        <li class="nav-item"><button class="nav-link" id="monthly-plan-btn" type="button">Billed
                                monthly</button></li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="pricing-table active">
                            <div class="star-icon"><i class="fas fa-star"></i></div>
                            <div class="pricing-header">
                                <h3 class="title">Professional</h3><span class="subtitle">A beautiful, simple
                                    website</span>
                                <div class="price-wrap">
                                    <div class="yearly-pricing"><span class="amount">$119.99</span><span
                                            class="duration">/yearly</span></div>
                                    <div class="monthly-pricing"><span class="amount">$19.00</span><span
                                            class="duration">/monthly</span></div>
                                </div>
                                <div class="pricing-btn"><a href="#" class="axil-btn btn-large-fluid btn-borderd">Get
                                        Started Today</a></div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-unstyled">
                                    <li>10 Pages Responsive Website</li>
                                    <li>5 PPC Campaigns</li>
                                    <li>10 SEO Keywords</li>
                                    <li>5 Facebook Camplaigns</li>
                                    <li>2 Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3 class="title">Standard</h3><span class="subtitle">Small Team</span>
                                <div class="price-wrap">
                                    <div class="yearly-pricing"><span class="amount">$219.99</span><span
                                            class="duration">/yearly</span></div>
                                    <div class="monthly-pricing"><span class="amount">$29.00</span><span
                                            class="duration">/monthly</span></div>
                                </div>
                                <div class="pricing-btn"><a href="#" class="axil-btn btn-large-fluid btn-borderd">Get
                                        Started Today</a></div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-unstyled">
                                    <li>50 Pages Responsive Website</li>
                                    <li>Unlimited PPC Campaigns</li>
                                    <li>Unlimited SEO Keywords</li>
                                    <li>Unlimited Facebook Camplaigns</li>
                                    <li>Unlimited Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3 class="title">Ultimate</h3><span class="subtitle">Large Team</span>
                                <div class="price-wrap">
                                    <div class="yearly-pricing"><span class="amount">$559.99</span><span
                                            class="duration">/yearly</span></div>
                                    <div class="monthly-pricing"><span class="amount">$59.00</span><span
                                            class="duration">/monthly</span></div>
                                </div>
                                <div class="pricing-btn"><a href="#" class="axil-btn btn-large-fluid btn-borderd">Get
                                        Started Today</a></div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-unstyled">
                                    <li>10 Pages Responsive Website</li>
                                    <li>5 PPC Campaigns</li>
                                    <li>10 SEO Keywords</li>
                                    <li>5 Facebook Camplaigns</li>
                                    <li>2 Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-3 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/line-1.png" alt="shape"></li>
                <li class="shape shape-2"><img src="assets/media/others/bubble-4.png" alt="shape"></li>
                <li class="shape shape-3"><img src="assets/media/others/hand-1.png" alt="shape"></li>
            </ul>
        </section> -->
        <!-- <section class="section section-padding bg-color-dark">
            <div class="container">
                <div class="section-heading heading-light-left"><span class="subtitle">Top Clients</span>
                    <h2 class="title">We’ve built solutions for...</h2>
                    <p>Design anything from simple icons to fully featured websites and applications.</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500">
                        <div class="brand-grid active"><img src="assets/media/brand/brand-1.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                        <div class="brand-grid"><img src="assets/media/brand/brand-2.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                        <div class="brand-grid"><img src="assets/media/brand/brand-3.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                        <div class="brand-grid"><img src="assets/media/brand/brand-4.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400">
                        <div class="brand-grid"><img src="assets/media/brand/brand-5.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        <div class="brand-grid"><img src="assets/media/brand/brand-6.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600">
                        <div class="brand-grid"><img src="assets/media/brand/brand-7.png" alt="Brand"></div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700">
                        <div class="brand-grid"><img src="assets/media/brand/brand-8.png" alt="Brand"></div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-2 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/circle-1.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/media/others/line-3.png" alt="circle"></li>
                <li class="shape shape-3"><img src="assets/media/others/bubble-3.png" alt="circle"></li>
            </ul>
        </section> -->
        <!-- <section class="section section-padding-equal">
            <div class="container">
                <div class="section-heading"><span class="subtitle">What's Going On</span>
                    <h2 class="title">Blogs</h2>
                    <p></p>
                </div>
                <div class="row g-0">
                    <div class="col-xl-6" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                        <div class="blog-list active">
                            <div class="post-thumbnail"><a href="single-blog-2.html"><img
                                        src="assets/media/blog/blog-1.png" alt="Blog Post"></a></div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-2.html">YouTube Monetization: How to Make Money from Your Videos
                                </a></h5>
                                <p>It may seem like an impossible task to make money from the videos you share on YouTube...</p><a href="single-blog-2.html" class="more-btn">Learn more<i
                                        class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                        <div class="blog-list border-start">
                            <div class="post-thumbnail"><a href="single-blog-3.html"><img
                                        src="assets/media/blog/blog-2.png" alt="Blog Post"></a></div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-3.html">How to Make SEO contents for Youtube Videos: The Ultimate Guide</a></h5>
                                <p>Want to improve your search engine rankings and get more views on YouTube? It might be time to make...</p><a href="single-blog-3.html" class="more-btn">Learn more<i
                                        class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-1 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/bubble-1.png" alt="bubble"></li>
                <li class="shape shape-2"><img src="assets/media/others/line-1.png" alt="bubble"></li>
                <li class="shape shape-3"><img src="assets/media/others/line-2.png" alt="bubble"></li>
                <li class="shape shape-4"><img src="assets/media/others/bubble-2.png" alt="bubble"></li>
            </ul>
        </section> -->
        <section class="section call-to-action-area">
            <div class="container">
                <div class="call-to-action">
                    <div class="section-heading heading-light"><span class="subtitle">Let's Work Together</span>
                        <h2 class="title">Need a successful project?</h2><a href="#contact"
                            class="axil-btn btn-large btn-fill-white">Estimate Project</a>
                    </div>
                    <div class="thumbnail">
                        <div class="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100"><img
                                src="assets/media/others/pc.png" alt="Computer"></div>
                        <ul class="list-unstyled small-thumb">
                            <li class="shape shape-1" data-sal="slide-right" data-sal-duration="800"
                                data-sal-delay="400"><img src="assets/media/others/comment.png" alt="Comments"></li>
                            <li class="shape shape-2" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                                <img src="assets/media/others/keyboard.png" alt="Comments">
                            </li>
                            <li class="shape shape-3" data-sal="slide-right" data-sal-duration="800"
                                data-sal-delay="300"><img src="assets/media/others/mouse.png" alt="Comments"></li>
                            <li class="shape shape-4" data-sal="slide-left" data-sal-duration="800"
                                data-sal-delay="300"><img src="assets/media/others/bell-icon.png" alt="Comments"></li>
                            <li class="shape shape-5" data-sal="zoom-in" data-sal-duration="800" data-sal-delay="200">
                                <img src="assets/media/others/chat-bot.png" alt="Comments">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-9">
                <li class="shape shape-1"><img src="assets/media/others/bubble-12.png" alt="Comments"></li>
                <li class="shape shape-2"><img src="assets/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-3"><img src="assets/media/others/bubble-13.png" alt="Comments"></li>
                <li class="shape shape-4"><img src="assets/media/others/bubble-14.png" alt="Comments"></li>
                <li class="shape shape-5"><img src="assets/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-6"><img src="assets/media/others/bubble-15.png" alt="Comments"></li>
                <li class="shape shape-7"><img src="assets/media/others/bubble-16.png" alt="Comments"></li>
            </ul>
        </section>
        <section id="blogs" class="section section-padding-equal">
            <div class="container">
                <div class="section-heading"><span class="subtitle">What's Going On</span>
                    <h2 class="title">Latest Blogs</h2>
                    <p></p>
                </div>
                <div class="row g-0" id="blogSection">
                    {#if blogPosts}
                        {#each blogPosts as blog}
                        <!-- <p>{blog.data.title.rendered.substring(0,90)}</p> -->
                                <div class="col-xl-6">
                                    <div class="blog-list active">
                                        <div class="post-thumbnail"><a href="/blog?id={blog.data.id}"><img style="width: 300px !important; height: 240px !important;   object-fit: cover;"
                                                    src={blog.imageDetails.src} alt={blog.imageDetails.alt}></a></div>
                                        <div class="post-content">
                                            <h5 class="title"><a href="/blog?id={blog.data.id}">{blog.data.title.rendered}</a></h5>
                                            <p>{@html blog.data.content.rendered.substring(0,90)}...</p><a href="/blog?id={blog.data.id}" class="more-btn">Learn more<i
                                                    class="far fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                        {/each}
                    {:else}
                            Loading....
                    {/if}
                   
                </div>
            </div>
            <ul class="shape-group-1 list-unstyled">
                <li class="shape shape-1"><img src="assets/media/others/bubble-1.png" alt="bubble"></li>
                <li class="shape shape-2"><img src="assets/media/others/line-1.png" alt="bubble"></li>
                <li class="shape shape-3"><img src="assets/media/others/line-2.png" alt="bubble"></li>
                <li class="shape shape-4"><img src="assets/media/others/bubble-2.png" alt="bubble"></li>
            </ul>
        </section>

        <footer class="footer-area">
            <div class="container">
                <div class="footer-top">
                    <div class="footer-social-link">
                        <ul class="list-unstyled">
                            <li><a href="https://www.facebook.com/ionicbyte/" target="_blank" data-sal="slide-up"
                                    data-sal-duration="500" data-sal-delay="100"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/company/80868818/" data-sal="slide-up"
                                    data-sal-duration="500" data-sal-delay="400"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="https://www.instagram.com/ionicbyte/" target="_blank" data-sal="slide-up"
                                    data-sal-duration="500" data-sal-delay="500"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-main">
                    <div class="row">
                        <div class="col-xl-6 col-lg-5" data-sal="slide-right" data-sal-duration="800"
                            data-sal-delay="100">
                            <div class="footer-widget border-end">
                                <div class="footer-newsletter">
                                    <h2 class="title">Get in touch!</h2>
                                    <p>Subscribe to our newsletter!</p>
                                    <form>
                                        <div class="input-group"><input type="email" class="form-control"
                                                placeholder="Email address"><button class="subscribe-btn"
                                                type="submit">Subscribe</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7" data-sal="slide-left" data-sal-duration="800"
                            data-sal-delay="100">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="footer-widget">
                                        <h6 class="widget-title">Services</h6>
                                        <div class="footer-menu-link">
                                            <ul class="list-unstyled">
                                                <li><a href="/">Logo &amp; Branding</a></li>
                                                <li><a href="/">Website Development</a></li>
                                                <li><a href="/">Mobile App Development</a></li>
                                                <li><a href="/">Search Engine Optimization</a></li>
                                                <li><a href="/">Digital Marketing</a></li>
                                                <li><a href="/">Social Media Marketing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-sm-3">
                                    <div class="footer-widget">
                                        <h6 class="widget-title">Resourses</h6>
                                        <div class="footer-menu-link">
                                            <ul class="list-unstyled">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="case-study.html">Case Studies</a></li>
                                                <li><a href="project.html">Portfolio</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-sm-3">
                                    <div class="footer-widget">
                                        <h6 class="widget-title">Support</h6>
                                        <div class="footer-menu-link">
                                            <ul class="list-unstyled">
                                                <li><a href="#contact">Contact</a></li>
                                                <li><a href="/privacy">Privacy Policy</a></li>
                                                <li><a href="/terms">Terms & Condition</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="footer-copyright"><span class="copyright-text">© 2022 All rights reserved by <a
                                        href="#">IonicByte</a>.</span></div>
                        </div>
                        <div class="col-md-6">
                            <div class="footer-bottom-link">
                                <ul class="list-unstyled">
                                    <li><a href="/privacy">Privacy Policy</a></li>
                                    <li><a href="/terms">Terms & Condition</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="offcanvas offcanvas-end header-offcanvasmenu" tabindex="-1" id="offcanvasMenuRight">
            <div class="offcanvas-header"><button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button></div>
            <div class="offcanvas-body">
                <form action="#" class="side-nav-search-form">
                    <div class="form-group"><input type="text" class="search-field" name="search-field"
                            placeholder="Search..."><button class="side-nav-search-btn"><i
                                class="fas fa-search"></i></button></div>
                </form>
                <div class="row">

                    <div class="col-lg-7 col-xl-6">
                        <div class="contact-info-wrap">
                            <div class="contact-inner">
                                <address class="address"><span class="title">Contact Information</span>
                                    <p>Mirpur 1<br>Dhaka, Bangladesh</p>
                                </address>
                                <address class="address"><span class="title">We're Available 24/7. Call Now.</span><a
                                        class="tel" href="tel:8884562790"><i class="fas fa-phone"></i>(880)
                                        1833-297633</a><a class="tel" href="tel:12125553333"><i
                                            class="fas fa-fax"></i>(880) 1759-670492</a></address>
                            </div>
                            <div class="contact-inner">
                                <h5 class="title">Find us here</h5>
                                <div class="contact-social-share">
                                    <ul class="social-share list-unstyled">
                                        <li><a href="https://www.facebook.com/ionicbyte/"><i
                                                    class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/80868818/"><i
                                                    class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://www.instagram.com/ionicbyte/"><i
                                                    class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/vendor/bootstrap.min.js"></script>
    <script src="assets/js/vendor/isotope.pkgd.min.js"></script>
    <script src="assets/js/vendor/imagesloaded.pkgd.min.js"></script>
    <script src="assets/js/vendor/waypoints.min.js"></script>
    <script src="assets/js/vendor/counterup.js"></script>
    <script src="assets/js/vendor/slick.min.js"></script>
    <script src="assets/js/vendor/sal.js"></script>
    <script src="assets/js/vendor/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/vendor/js.cookie.js"></script>
    <script src="assets/js/vendor/jquery.style.switcher.js"></script>
    <script src="assets/js/vendor/jquery.countdown.min.js"></script>
    <script src="assets/js/vendor/tilt.js"></script>
    <script src="assets/js/vendor/green-audio-player.min.js"></script>
    <script src="assets/js/vendor/jquery.nav.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js" integrity="sha512-0qU9M9jfqPw6FKkPafM3gy2CBAvUWnYVOfNPDYKVuRTel1PrciTj+a9P3loJB+j0QmN2Y0JYQmkBBS8W+mbezg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/wordpress-api-client@0.4.8/dist/index.min.js"></script> -->
    <script src="assets/js/app.js"></script>
</body>
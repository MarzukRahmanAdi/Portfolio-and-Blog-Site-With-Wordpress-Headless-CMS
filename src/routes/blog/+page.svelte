<script>
    import { page } from '$app/stores';
  import { onMount } from 'svelte';
//   // console.log($page.params)

    const getOneBlog = async (domain, postId) => {
        const response = await fetch(`${domain}/wp-json/wp/v2/posts/${postId}`);
        const post = await response.json();
        const mediaId = post.featured_media;
        const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${mediaId}`);
        const media = await mediaResponse.json();
        const mediaLink = {imgSrc : media.guid.rendered, altText: media.alt_text}
        return { data: post, imageDetails: mediaLink }
    }

    let blogPost;
    onMount(async()=>{
        blogPost = await getOneBlog("https://content.ionicbyte.com", $page.url.searchParams.get("id"))
    })

    console.log(blogPost)
//   // console.log(blogPost);
    // // console.log(contents);
   
    // if (typeof window !== 'undefined') {
    //     window.$("#BlogPara").html(contents) 
    // }
</script>


<head>
    <!-- Meta Data -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>IonicByte | Blog Details</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="/assets/media/favicon.png">
    <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/vendor/font-awesome.css">
    <link rel="stylesheet" href="/assets/css/vendor/slick.css">
    <link rel="stylesheet" href="/assets/css/vendor/slick-theme.css">
    <link rel="stylesheet" href="/assets/css/vendor/sal.css">
    <link rel="stylesheet" href="/assets/css/vendor/magnific-popup.css">
    <link rel="stylesheet" href="/assets/css/vendor/green-audio-player.min.css">

    <!-- Site Stylesheet -->
    <link rel="stylesheet" href="/assets/css/app.css">

</head>

<body class="sticky-header">
    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  	<![endif]-->
    <a href="#main-wrapper" id="backto-top" class="back-to-top">
        <i class="far fa-angle-double-up"></i>
    </a>

    <!-- Preloader Start Here -->
    <div id="preloader"></div>
    <!-- Preloader End Here -->

    <div class="my_switcher d-none d-lg-block">
        <ul>
            <li title="Light Mode">
                <a href="javascript:void(0)" class="setColor light" data-theme="light">
                    <i class="fal fa-lightbulb-on"></i>
                </a>
            </li>
            <li title="Dark Mode">
                <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
                    <i class="fas fa-moon"></i>
                </a>
            </li>
        </ul>
    </div>

    <div id="main-wrapper" class="main-wrapper">

        <!--=====================================-->
        <!--=        Header Area Start       	=-->
        <!--=====================================-->
        <header class="header axil-header header-style-1">
            <div id="axil-sticky-placeholder"></div>
            <div class="axil-mainmenu">
                <div class="container">
                    <div class="header-navbar">
                        <div class="header-logo"><a href="/"><img class="light-version-logo"
                                    src="/IonicByte-png.png"
                                    style="width:200px;" alt="logo"></a><a href="/"><img
                                    class="dark-version-logo" width="150" src="/IonicByte-png.png" alt="logo"></a><a
                                href="/"><img class="sticky-logo" width="150" src="/IonicByte-png.png"
                                    alt="logo"></a></div>
                        <div class="header-main-nav">
                            <nav class="mainmenu-nav" id="mobilemenu-popup">
                                <div class="d-block d-lg-none">
                                    <div class="mobile-nav-header">
                                        <div class="mobile-nav-logo"><a href="/"><img class="light-mode" width="150"
                                                    src="/assets/media/logo-2.png" alt="Site Logo"> <img
                                                    class="dark-mode" src="/assets/media/logo-3.png" width="150" alt="Site Logo"></a>
                                        </div><button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i
                                                class="fas fa-times"></i></button>
                                    </div>
                                </div>
                                <ul class="mainmenu">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/">Stories</a></li>
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
        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area">
            <div class="container">
                <div class="breadcrumb">
                    <ul class="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li class="active">Blog</li>
                    </ul>
                    {#if blogPost}
                        <h1 id="BlogTitle" class="title h2">{blogPost.data.title.rendered}</h1>  
                    {:else}
                        <h1 id="BlogTitle" class="title h2">Loading....</h1>
                    {/if}
                </div>
            </div>
            <ul class="shape-group-8 list-unstyled">
                <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100"><img src="/assets/media/others/bubble-9.png" alt="Bubble"></li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200"><img src="/assets/media/others/bubble-11.png" alt="Bubble"></li>
                <li class="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300"><img src="/assets/media/others/line-4.png" alt="Line"></li>
            </ul>
        </div>
        <!--=====================================-->
        <!--=        Blog Area Start       	    =-->
        <!--=====================================-->
        <section class="section-padding-equal">
            <div class="container">
                <div class="row row-40">
                    <div class="col-lg-8">
                        <div class="single-blog">
                            <div class="single-blog-content blog-grid">
                                <div class="post-thumbnail">
                                   
                                    {#if blogPost}
                                        <img src={blogPost.imageDetails.imgSrc} style="width: 850px !important ;height: 450px !important; object-fit: cover;" id="BlogImage" alt="Blog">
                                    {:else}
                                        <img src="/assets/media/placeholder.webp" style="width: 850px !important ;height: 450px !important; object-fit: cover;" id="BlogImage" alt="Blog">    
                                    {/if}
                                </div>
                                <div id="BlogPara">
                                    {#if blogPost}
                                        {@html blogPost.data.content.rendered}
                                    {/if}
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="axil-sidebar">
                            <div class="widget widget-search">
                                <h4 class="widget-title">Search</h4>
                                <form action="#" class="blog-search">
                                    <input type="text" placeholder="Search…">
                                    <button class="search-button"><i class="fal fa-search"></i></button>
                                </form>
                            </div>
                            <div class="widget widget-categories">
                                <h4 class="widget-title">Categories</h4>
                                <ul class="category-list list-unstyled" id="categoriesContent">
                                </ul>
                            </div>
                            <div class="widget widge-social-share">
                                <div class="blog-share">
                                    <h5 class="title">Follow:</h5>
                                    <ul class="social-list list-unstyled">
                                        <li><a href="https://www.facebook.com/ionicbyte/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.instagram.com/ionicbyte/"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/80868818/"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget widget-recent-post">
                                <h4 class="widget-title" >Recent post</h4>
                                <div class="post-list-wrap" id="recentPost">

                                </div>
                            </div>
                            <div class="widget widget-banner-ad">
                                <a href="#">
                                    <img src="https://i.ibb.co/1vSwx4v/Frame-1.png" alt="banner">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=====================================-->
        <!--=       Recent Post Area Start      =-->
        <!--=====================================-->
        
        <!--=====================================-->
        <!--=     Call To Action Area Start     =-->
        <!--=====================================-->
        <section class="section call-to-action-area">
            <div class="container">
                <div class="call-to-action">
                    <div class="section-heading heading-light">
                        <span class="subtitle">Let's Work Together</span>
                        <h2 class="title">Need a successful project?</h2>
                        <a href="/#contact" class="axil-btn btn-large btn-fill-white">Estimate Project</a>
                    </div>
                    <div class="thumbnail">
                        <div class="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img src="/assets/media/others/pc.png" alt="Computer">
                        </div>
                        <ul class="list-unstyled small-thumb">
                            <li class="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                                <img src="/assets/media/others/comment.png" alt="Comments">
                            </li>
                            <li class="shape shape-2" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                                <img src="/assets/media/others/keyboard.png" alt="Comments">
                            </li>
                            <li class="shape shape-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="300">
                                <img src="/assets/media/others/mouse.png" alt="Comments">
                            </li>
                            <li class="shape shape-4" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                                <img src="/assets/media/others/bell-icon.png" alt="Comments">
                            </li>
                            <li class="shape shape-5" data-sal="zoom-in" data-sal-duration="800" data-sal-delay="200">
                                <img src="/assets/media/others/chat-bot.png" alt="Comments">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-9">
                <li class="shape shape-1"><img src="/assets/media/others/bubble-12.png" alt="Comments"></li>
                <li class="shape shape-2"><img src="/assets/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-3"><img src="/assets/media/others/bubble-13.png" alt="Comments"></li>
                <li class="shape shape-4"><img src="/assets/media/others/bubble-14.png" alt="Comments"></li>
                <li class="shape shape-5"><img src="/assets/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-6"><img src="/assets/media/others/bubble-15.png" alt="Comments"></li>
                <li class="shape shape-7"><img src="/assets/media/others/bubble-16.png" alt="Comments"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=        Footer Area Start       	=-->
        <!--=====================================-->
        <footer class="footer-area">
            <div class="container">
                <div class="footer-top">
                    <div class="footer-social-link">
                        <ul class="list-unstyled">
                            <li><a href="https://www.facebook.com/ionicbyte/" target="_blank" data-sal="slide-up" data-sal-duration="500"
                                    data-sal-delay="100"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/80868818/" data-sal="slide-up" data-sal-duration="500"
                                    data-sal-delay="400"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/ionicbyte/" target="_blank" data-sal="slide-up" data-sal-duration="500"
                                    data-sal-delay="500"><i class="fab fa-instagram"></i></a></li>
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
                                                <li><a href="/">Contact</a></li>
                                                <li><a href="/">Privacy Policy</a></li>
                                                <li><a href="/">Terms of Use</a></li>
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
                                        href="https://iam-adi.xyz/">Adi</a>.</span></div>
                        </div>
                        <div class="col-md-6">
                            <div class="footer-bottom-link">
                                <ul class="list-unstyled">
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>




        <!--=====================================-->
        <!--=       Offcanvas Menu Area       	=-->
        <!--=====================================-->
        <div class="offcanvas offcanvas-end header-offcanvasmenu" tabindex="-1" id="offcanvasMenuRight">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form action="#" class="side-nav-search-form">
                    <div class="form-group">
                        <input type="text" class="search-field" name="search-field" placeholder="Search...">
                        <button class="side-nav-search-btn"><i class="fas fa-search"></i></button>
                    </div>
                </form>
                <div class="row ">
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
                                        <li><a href="https://www.facebook.com/ionicbyte/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/80868818/"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://www.instagram.com/ionicbyte/"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Jquery Js -->
    <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="/assets/js/vendor/bootstrap.min.js"></script>
    <script src="/assets/js/vendor/isotope.pkgd.min.js"></script>
    <script src="/assets/js/vendor/imagesloaded.pkgd.min.js"></script>
    <script src="/assets/js/vendor/waypoints.min.js"></script>
    <script src="/assets/js/vendor/counterup.js"></script>
    <script src="/assets/js/vendor/slick.min.js"></script>
    <script src="/assets/js/vendor/sal.js"></script>
    <script src="/assets/js/vendor/jquery.magnific-popup.min.js"></script>
    <script src="/assets/js/vendor/js.cookie.js"></script>
    <script src="/assets/js/vendor/jquery.style.switcher.js"></script>
    <script src="/assets/js/vendor/jquery.countdown.min.js"></script>
    <script src="/assets/js/vendor/tilt.js"></script>
    <script src="/assets/js/vendor/green-audio-player.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.0/moment.min.js"></script>
    <script src="/assets/js/vendor/jquery.nav.js"></script>

    <!-- Site Scripts -->
    <script src="/assets/js/app.js"></script>
</body>


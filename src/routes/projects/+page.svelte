<script>
    import { onMount } from 'svelte/internal';

    onMount(() => {
        var my_time;
		var count = 0;
		function pageScroll() {
      // If condition to set repeat 
			if (count < 2 ) {
				var objDiv = window.document.getElementById("data");
				objDiv.scrollTop = objDiv.scrollTop + 1;
				if (objDiv.scrollTop == (objDiv.scrollHeight - 61)) {
          setTimeout(function() {
						objDiv.scrollTop = 0;
						count++;
            }, 1200);
				}
        //set scrolling time start
				my_time = setTimeout(pageScroll, 10);
        //set scrolling time end
			}
		}

		setTimeout(pageScroll, 1200);
    });


    const array = new Array(30).fill(0);

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
        body{
            text-align:center;
        }
    .scroll-blk{
		/* background-color: #739fff; */
		height: 100vh;
		width:100vw;
		padding: 8px 8px 0px;
		position: relative;
		margin:15px auto;
		display: flex;
		box-sizing: border-box;
        justify-content: center;
	}
	.scroll-text{
		overflow-y: auto;
        height: 100vh;
		width:100vw;
		overflow-x: hidden;
		background-color: #fff;
		text-align: left;
		padding: 5px;
		box-sizing: border-box;
		font-family: 'MyriadPro-Regular';
	}
    /* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #480083;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(160, 119, 255);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    footer{
        border-top: 1px solid #480083 ;
        margin-top: 5px;
    }
    </style>
    
    <body class="sticky-header"><a href="#main-wrapper" id="backto-top" class="back-to-top"><i
                class="far fa-angle-double-up"></i></a>
    
    
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
            <header class="header axil-header header-style-1" style="height: 100px; margin-top:-10px">
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
            <div class="scroll-blk">
                <div class="scroll-text" id="data">
                
                    <div class="row row-35 ">
                    
                    {#each array as x}
                    <div class="col-md-4 project branding" style="display: flex; justify-content:center;">
                        <div class="project-grid" style="width: 80%;">
                            <div class="thumbnail"><img
                                        src="assets/media/project/blur.jpg" alt="project"></div>
                            <div class="content">
                                <h4 class="title">A Cryptography Website</h4><span
                                    class="subtitle">A website where people can come and create, buy and sell their own Crypto [ Nextjs(Front-end), Expressjs(RestApi), Laravel(Websocket and Storage) ] </span>
                            </div>
                        </div>
                    </div>
                    {/each}
                        
                    </div>
                </div>
            </div>
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



    
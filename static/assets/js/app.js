

(function(window, document, $, undefined) {
    'use strict';

    var axilInit = {
        i: function(e) {
            axilInit.s();
            axilInit.methods();
        },

        s: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function(e) {
            axilInit.w();
            axilInit.contactForm();
            axilInit.axilBackToTop();
            axilInit.stickyHeaderMenu();
            axilInit.mobileMenuActivation();
            axilInit.salActivation();
            axilInit.axilMasonary();
            axilInit.counterUp();
            axilInit.axilSlickActivation();
            axilInit.magnificPopupActivation();
            axilInit.countdownInit('.countdown', '2021/12/01');
            axilInit.tiltAnimation();
            axilInit.menuLinkActive();
            axilInit.audioPlayerActivation();
            axilInit.onePageNav();
            axilInit.pricingPlan();
            axilInit.marqueImages();
            axilInit.axilHover();
            axilInit.onePageTopFixed();
           
        },

        w: function(e) {
            this._window.on('load', axilInit.l).on('scroll', axilInit.res)
        },

        contactForm: function() {
            $('.axil-contact-form').on('submit', function(e) {
                e.preventDefault();
                var _self = $(this);
                var _selector = _self.closest('input,textarea');
                _self.closest('div').find('input,textarea').removeAttr('style');
                _self.find('.error-msg').remove();
                _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
                var data = $(this).serialize();
                $.ajax({
                    url: 'https://mailserver-3ymf.onrender.com/',
                    type: 'post',
                    dataType: 'json',
                    data: data,
                    success: function(data) {
                        _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                        if (data.code === false) {
                            _self.closest('div').find('[name="' + data.field + '"]');
                            _self.find('.btn-primary').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
                        } else {
                            $('.error-msg').hide();
                            $('.form-group').removeClass('focused');
                            _self.find('.btn-primary').after('<div class="success-msg"><p>' + data.success + '</p></div>');
                            _self.closest('div').find('input,textarea').val('');

                            setTimeout(function() {
                                $('.success-msg').fadeOut('slow');
                            }, 5000);
                        }
                    }
                });
            });
        },

        axilBackToTop: function() {
            var btn = $('#backto-top');
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });
            btn.on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, '300');
            });
        },

        stickyHeaderMenu: function() {

            $(window).on('scroll', function() {
                // Sticky Class Add
                if ($('body').hasClass('sticky-header')) {
                    var stickyPlaceHolder = $('#axil-sticky-placeholder'),
                        menu = $('.axil-mainmenu'),
                        menuH = menu.outerHeight(),
                        topHeaderH = $('.axil-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        menu.addClass('axil-sticky');
                        stickyPlaceHolder.height(menuH);
                    } else {
                        menu.removeClass('axil-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

        mobileMenuActivation: function(e) {

            function resizeClassAdd() {
                if (window.matchMedia('(max-width: 991px)').matches) {
                    $('.main-wrapper').on('click','.menu-item-has-children a', function(e) {

                        var targetParent = $(this).parents('.mainmenu-nav'),
                            target = $(this).siblings('.axil-submenu'),
                            targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.axil-submenu');

                        $(target).slideToggle(400);

                        $(targetSiblings).slideUp(400);

                        $(this).parent('.menu-item-has-children').toggleClass('open');
                        
                    });
                    $('#mobilemenu-popup').addClass('offcanvas');
                }else {
                    $('#mobilemenu-popup').removeClass('offcanvas');
                    
                }
            }

            resizeClassAdd();
        },

        salActivation: function() {
            sal({
                threshold: 0.1,
                once: true
            });
        },

        axilMasonary: function () {
            $('.axil-isotope-wrapper').imagesLoaded(function () {
                // filter items on button click
                $('.isotope-button').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                
                // init Isotope
                var $grid = $('.isotope-list').isotope({
                    itemSelector: '.project',
                    percentPosition: true,
                    transitionDuration: '0.7s',
                    layoutMode: 'fitRows',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 1,
                    }
                });
            });
        
            $('.isotope-button button').on('click', function (event) {
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                event.preventDefault();
            });

            // Masonry
            var galleryIsoContainer = $('#no-equal-gallery');
            if (galleryIsoContainer.length) {
                var blogGallerIso = galleryIsoContainer.imagesLoaded(function () {
                    blogGallerIso.isotope({
                        itemSelector: '.no-equal-item',
                        masonry: {
                            columnWidth: '.no-equal-item'
                        }
                    });
                });
            }
        },

        counterUp: function () {
			var _counter = $('.count');
			if (_counter.length) {
				_counter.counterUp({
					delay: 10,
					time: 1000,
					triggerOnce: true
				});
			}
        },

        axilSlickActivation: function(e) {
            $('.slick-slider').slick();
        },

        magnificPopupActivation: function() {

            var yPopup = $('.popup-youtube');
            if (yPopup.length) {
                yPopup.magnificPopup({
                    disableOn: 300,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }
        },

        countdownInit: function(countdownSelector, countdownTime) {
            var eventCounter = $(countdownSelector);
            if (eventCounter.length) {
                eventCounter.countdown(countdownTime, function(e) {
                    $(this).html(
                        e.strftime(
                            "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Seconds</div> </div></div>"
                        )
                    );
                });
            }
        },
        
        tiltAnimation: function () {
            var _tiltAnimation = $('.paralax-image');
            if (_tiltAnimation.length) {
                _tiltAnimation.tilt({
                    max: 12,
                    speed: 1e3,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    transition: !1,
                    perspective: 1e3,
                    scale: 1
                })
            }
        },

        menuLinkActive: function () {
            var currentPage = location.pathname.split("/"),
                current = currentPage[currentPage.length-1];
            $('.mainmenu li a, .main-navigation li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.menu-item-has-children').addClass('menu-item-open')
                }
            });
        },

        audioPlayerActivation: function () {
            GreenAudioPlayer.init({
                selector: '.green-player',
                stopOthersOnPlay: true
            })
        },

        onePageNav: function () {
            $('#onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: '',
                easing: 'swing',
            });
        },

        pricingPlan: function () {
            var yearlySelectBtn = $('#yearly-plan-btn'),
                monthlySelectBtn = $('#monthly-plan-btn'),
                monthlyPrice = $('.monthly-pricing'),
                yearlyPrice = $('.yearly-pricing'),
                buttonSlide = $('#pricing-checkbox');
            
            $(monthlySelectBtn).on('click', function() {
                buttonSlide.prop('checked', true);
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'block');
                yearlyPrice.css('display', 'none');

            });
            
            $(yearlySelectBtn).on('click', function() {
                buttonSlide.prop('checked', false);
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'none');
                yearlyPrice.css('display', 'block');
            });

            $(buttonSlide).change(function() {
                if ($('input[id="pricing-checkbox"]:checked').length > 0) {
                    monthlySelectBtn.addClass('active');
                    yearlySelectBtn.removeClass('active');
                    monthlyPrice.css('display', 'block');
                    yearlyPrice.css('display', 'none');

                }else {
                    yearlySelectBtn.addClass('active');
                    monthlySelectBtn.removeClass('active');
                    monthlyPrice.css('display', 'none');
                    yearlyPrice.css('display', 'block');
                    
                }
            });
        },

        marqueImages: function () {
            $('.marque-images').each(function () {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function () {
                    t += i;
                    $this.css('background-position-x', -t + 'px');
                }, 10);
            });
        },

        axilHover : function () {
            $('.services-grid, .counterup-progress, .testimonial-grid, .pricing-table, .brand-grid, .blog-list, .about-quality, .team-grid, .splash-hover-control').mouseenter(function() {
                var self = this;
                setTimeout(function() {
                    $('.services-grid.active, .counterup-progress.active, .testimonial-grid.active, .pricing-table.active, .brand-grid.active, .blog-list.active, .about-quality.active, .team-grid.active, .splash-hover-control.active').removeClass('active');
                    $(self).addClass('active');
                }, 0);
                
            });
        },

        onePageTopFixed : function () {
            if ($('.onepagefixed').length) {
                var fixedElem = $('.onepagefixed'),
                    distance = fixedElem.offset().top - 100,
                    $window = $(window),
                    totalDistance = $('.service-scroll-navigation-area').outerHeight() + distance;

                $(window).on('scroll', function () {
                    if ( $window.scrollTop() >= distance ) {
                        fixedElem.css({
                            position: 'fixed',
                            left: '0',
                            right: '0',
                            top: '0',
                            zIndex: '5'
                        });
                    }else {
                        fixedElem.removeAttr('style');
                    }

                    if ($window.scrollTop() >= totalDistance ) {
                        fixedElem.removeAttr('style');
                    }
                });
            }
        },
    }
    axilInit.i();

})(window, document, jQuery);


// api = https://content.ionicbyte.com/wp-json/wp/v2/posts

// const ContentData = fetch('https://content.ionicbyte.com/wp-json/wp/v2/posts').then( data => {
//     $('#app').append(data.json())
//     // console.log(data.json())
//     // console.log(data.json().length)

// })

// $("#blogs").append("<h1>Appended item---------------------------------------------------------------------</h1>");
// async function showAllBlogs(){
//     fetch('https://content.ionicbyte.com/wp-json/wp/v2/posts')
//         .then((response) => response.json())
//         .then((data) =>{
//         // console.log(data);

//         data.map(async (d) =>{
//             const imgDetails = await fetch(`https://content.ionicbyte.com/wp-json/wp/v2/media/${d.featured_media}`).then( res => res.json()).then(data2 => { // console.log(data2) ;
//             if (data2.guid) return {src : data2.guid.rendered, alt : data2.alt_text}
//             });
//             // console.log(imgDetails);
//             if(!imgDetails) return;

//             // $("#blogs").append(`hola hola 
//             // hola hola
//             // `);
//             $("#blogSection").append(`
//             <div class="col-xl-6">
//                 <div class="blog-list active">
//                     <div class="post-thumbnail"><a href="/blog?id=${d.id}"><img style="width: 300px !important; height: 240px !important;   object-fit: cover;"
//                                 src="${imgDetails.src}" alt="${imgDetails.alt}"></a></div>
//                     <div class="post-content">
//                         <h5 class="title"><a href="/blog.html?id=${d.id}">${d.title.rendered}</a></h5>
//                         <p>${d.title.rendered.substring(0,90)}...</p><a href="/blog.html?id=${d.id}" class="more-btn">Learn more<i
//                                 class="far fa-angle-right"></i></a>
//                     </div>
//                 </div>
//             </div>
//             `);
//         })
//     });
// // } 
// async function showBlog(id){
//     fetch(`https://content.ionicbyte.com/wp-json/wp/v2/posts/${id}`)
//         .then((response) => response.json())
//         .then(async(data) =>{
//             // console.log(data);
//             $("#BlogTitle").html(data.title.rendered)
//             $("#BlogPara").html(data.content.rendered)

//             const imgDetails = await fetch(`https://content.ionicbyte.com/wp-json/wp/v2/media/${data.featured_media}`).then( res => res.json()).then(data2 => { // console.log(data2) ;
//             if (data2.guid) return {src : data2.guid.rendered, alt : data2.alt_text}
//             });
//             $("#BlogImage").attr("src", imgDetails.src);
//             $("#BlogImage").attr("alt", imgDetails.alt);
//         })

//         fetch(`https://content.ionicbyte.com/wp-json/wp/v2/posts?exclude=${id}&per_page=3`)
//         .then((response) => response.json())
//         .then(async(data) =>{
//             // console.log(id)
//             // console.log(data);
//             data.map(async (d) =>{
//                 const imgDetails = await fetch(`https://content.ionicbyte.com/wp-json/wp/v2/media/${d.featured_media}`).then( res => res.json()).then(data2 => { // console.log(data2) ;
//                 if (data2.guid) return {src : data2.guid.rendered, alt : data2.alt_text}
//                 });
//                 // console.log(imgDetails);
//                 if(!imgDetails) return;
                
//                 $("#recentTitle").html(d.title.rendered)
//                 $("#recentTitle").attr("href", `/blog.html/${d.id}`)
//                 const newDate = moment(d.date).format('MMMM D Y')
//                 $("#recentDate").html(newDate)

//                 $("#recentPost").append(`
//                 <div class="single-post" >
//                                         <div class="post-thumbnail">
//                                             <a href="/blog?id=${d.id}" id="recentLink"><img src="${imgDetails.src}" id="recentImage" style="width:100px; height:80px;" alt="${imgDetails.src}"></a>
//                                         </div>
//                                         <div class="post-content">
//                                             <h6 class="title"><a href="/blog.html?id=${d.id}" id="recentLink" id="recentTitle">${d.title.rendered}</a></h6>
//                                             <ul class="blog-meta list-unstyled">
//                                                 <li id="recentDate">${newDate}</li>
//                                                 <li id="recentTimeTORead">9 min to read</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                 `);

//             })
//         }
//         )

//         fetch("https://content.ionicbyte.com/wp-json/wp/v2/categories/")
//         .then((response) => response.json())
//         .then(async(data) =>{
//             data.map(d=>{
//                 $("#categoriesContent").append(`
//                     <li><a href="#">${d.name}</a></li>
//                 `)
//             })
//         })
    
// }

// if(window.location.search === ''){
//     // showAllBlogs()
// } else{
//     showBlog(window.location.search.substring(window.location.search.lastIndexOf('=') + 1))
// }

// // const client = new WpApiClient('https://content.ionicbyte.com/wp-json/wp/v2/posts')

// // const ctdatas = await client.post().find()
// // // console.log(ctdatas);

// function sendMail(){
//     // var name = $('#contactName').val();
//     // var email = $('#contactEmail').val();
//     // var number = $('#contactNumber').val();
//     // var message = $('#contactMessage').val();
//     // // console.log(name, email, number, message);
//     // axios({
//     //     method: 'post',
//     //     url: 'http://localhost:3000',
//     //     data: {
//     //         name, email, number, message
//     //     }
//     //   });
//       alert("Email sent. We will contact you soon")

//     }

//     // http://ionicbyte.rf.gd/
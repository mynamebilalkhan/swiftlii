jQuery(document).ready(function ($) {

	// Mobile BG Slider

	$('.bubble-bg-slider-init-slick').slick({

		dots: false,

		arrows: false,

		infinite: true,

		speed: 300,

		slidesToShow: 1,

		autoplay: true,

		autoplaySpeed: 1500,

	});

	

	// Testimonials Slider

	$('.testimonials-slider').slick({

		centerMode: true,

		centerPadding: '100px',

		slidesToShow: 3,

  		slidesToScroll: 5,

		arrows: false,

		responsive: [

			{

				breakpoint: 768,

				settings: {

					arrows: false,

					// centerMode: true,

					centerPadding: '100px',

					slidesToShow: 3,

					slidesToScroll: 5,

				}

			},

			{

				breakpoint: 480,

				settings: {

					arrows: false,

					// centerMode: true,

					centerPadding: '40px',

					slidesToShow: 1

				}

			}

		]

    });

    

    // Blog Listing Slider    

    $('.blog-listing-slider').slick({

        mobileFirst: true,

        infinite: true,

        slidesToShow: 3,

        slidesToScroll: 3,

        draggable: true,

        arrows: true,

        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",

        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

        responsive: [

			{

				breakpoint: 1023,

				settings: {

					slidesToShow: 3,

				}

			},

            {

				breakpoint: 767,

				settings: {

					slidesToShow: 2,

				}

			},

			{

				breakpoint: 320,

				settings: {

                slidesToScroll: 1,

					// arrows: false,

					slidesToShow: 1

				}

			}

		]

    });

    

    // Blog Listing Slider Related  

    $('.blog-listing-slider-related').slick({

		mobileFirst: true,

		infinite: true,

		slidesToShow: 4,

		slidesToScroll: 1,

		draggable: true,

		arrows: false,

		autoplay: true,

		autoplaySpeed: 3000,

		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",

		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

		responsive: [

			{

				breakpoint: 1023,

				settings: {

					slidesToShow: 4,

				}

			},

            {

				breakpoint: 767,

				settings: {

					slidesToShow: 2,

				}

			},

			{

				breakpoint: 320,

				settings: {

                slidesToScroll: 1,

					// arrows: false,

					slidesToShow: 1

				}

			}

		]

    });

	

	// Blog Listing Slider Related  

    $('.pharmacy-products-slider').slick({

		mobileFirst: true,

		infinite: true,

		slidesToShow: 6,

		slidesToScroll: 1,

		draggable: true,

		arrows: true,

		autoplay: true,

		autoplaySpeed: 3000,

		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",

		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

		responsive: [

			{

				breakpoint: 1023,

				settings: {

					slidesToShow: 6,

				}

			},

            {

				breakpoint: 767,

				settings: {

					slidesToShow: 2,

				}

			},

			{

				breakpoint: 320,

				settings: {

                slidesToScroll: 1,

					// arrows: false,

					slidesToShow: 1

				}

			}

		]

    });
	
	/**
	 * Add Class on Scroll
	 */
	$(window).scroll(function() {    
    		var scroll = $(window).scrollTop();

		//>=, not <=
		if (scroll >= 1) {
			//clearHeader, not clearheader - caps H
			$("header").addClass("header_bg");
			$(".navbar-brand img").attr("src","assets/images/logo.png");
		} else {
			$("header").removeClass("header_bg");
			$(".navbar-brand img").attr("src","assets/images/footer-logo.png");
		}
	}); //missing );

});





/**

 * Request Demo Section Animation

 */



// const images = document.querySelectorAll('.bubble-bg-slider-img');

// let originalPositions = [];

// let animations1 = [];

// let animations2 = [];

// let animations3 = [];

// let animationPlayed1 = false;

// let animationPlayed2 = false;

// let animationPlayed3 = false;



// // Function to store the original positions of the images

// function storeOriginalPositions() {

//     images.forEach(img => {

//         originalPositions.push({ x: img.offsetLeft, y: img.offsetTop });

//     });

// }



// // Function to animate the first image

// function animateImage1(img, direction) {

// 	const distance =

// 		0; // Adjust the distance the image should move

//     const animation = gsap.to(img, {

//         x: direction === 'right' ? '+=' + distance : direction === 'left' ? '-=' + distance : 0,

//         y: direction === 'up' ? '-=' + distance : 0,

//         duration: 0.5

//     });



//     animations1.push(animation);

// }



// // Function to animate the second image

// function animateImage2(img, direction) {

//     const distance = 60; // Adjust the distance the image should move

//     const animation = gsap.to(img, {

//         x: direction === 'right' ? '+=' + distance : direction === 'left' ? '-=' + distance : 0,

//         y: direction === 'up' ? '-=' + distance : 0,

//         duration: 0.5

//     });



//     animations2.push(animation);

// }



// // Function to animate the third image

// function animateImage3(img, direction) {

//     const distance = 50; // Adjust the distance the image should move

//     const animation = gsap.to(img, {

//         x: direction === 'right' ? '+=' + distance : direction === 'left' ? '-=' + distance : 0,

// 	    y: direction === 'up' ? '-=' + distance : 0,

// 	   rotate: -4,

//         duration: 0.5

//     });



//     animations3.push(animation);

// }



// // Function to handle scroll event

// function handleScroll() {

//     const section = document.querySelector('.bubble-bg-slider');

//     const sectionTop = section.offsetTop;

//     const sectionHeight = section.offsetHeight;

//     const halfViewportHeight = window.innerHeight / 2;

//     const scrollPosition = window.scrollY;



//     const sectionEnd = sectionTop + sectionHeight;



//     // Check if the section is in the middle of the viewport

//     const isSectionInMiddle = scrollPosition + halfViewportHeight >= sectionTop && scrollPosition + halfViewportHeight <= sectionEnd;



//     if (isSectionInMiddle) {

//         if (!animationPlayed1) {

//             animateImage1(images[0], images[0].getAttribute('data-animation'));

//             animationPlayed1 = true;

//         }



//         if (!animationPlayed2) {

//             animateImage2(images[1], images[1].getAttribute('data-animation'));

//             animationPlayed2 = true;

//         }



//         if (!animationPlayed3) {

//             animateImage3(images[2], images[2].getAttribute('data-animation'));

//             animationPlayed3 = true;

//         }

//     } else {

//         if (animationPlayed1) {

//             animations1.forEach(animation => animation.reverse());

//             animations1 = [];

//             animationPlayed1 = false;

//         }



//         if (animationPlayed2) {

//             animations2.forEach(animation => animation.reverse());

//             animations2 = [];

//             animationPlayed2 = false;

//         }



//         if (animationPlayed3) {

//             animations3.forEach(animation => animation.reverse());

//             animations3 = [];

//             animationPlayed3 = false;

//         }

//     }

// }



// // Event listener for scroll

// window.addEventListener('scroll', handleScroll);



// // Store original positions when the window loads

// window.addEventListener('load', storeOriginalPositions);


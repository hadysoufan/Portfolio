var data;
function setCurrentYear() {
  var t = new Date().getFullYear();
  document.getElementById('currentYear').innerHTML = t;
}

!(function (t) {
  'use strict';
  var e = t('nav').outerHeight();
  let a = document.querySelectorAll('img[data-src]'),
    o = function (t, e) {
      let [a] = t;
      a.isIntersecting &&
        ((a.target.src = a.target.dataset.src),
        a.target.addEventListener('load', function () {
          a.target.classList.remove('lazy-img');
        }),
        e.unobserve(a.target));
    },
    s = new IntersectionObserver(o, {
      root: null,
      threshold: 0,
      rootMargin: '-200px',
    });
  if (
    (a.forEach((t) => s.observe(t)),
    t('.container_mouse').click(function () {
      t('html, body').animate(
        {
          scrollTop:
            t('#about').find('.about-img').offset().top -
            t('nav').outerHeight(),
        },
        2e3,
        'easeInOutCubic'
      );
    }),
    t('span:contains("hady.a.soufan@gmail.com")').click(function () {
      window.open('mailto:' + t(this).text(), '_blank');
    }),
    t('span:contains("+96176740521")').hover(
      function () {
        t(this).addClass('hover-blue-pointer');
      },
      function () {
        t(this).removeClass('hover-blue-pointer');
      }
    ),
    t('.navbar-toggler').on('click', function () {
      t('#mainNav').hasClass('navbar-reduce') ||
        t('#mainNav').addClass('navbar-reduce');
    }),
    t(window).on('load', function () {
      t('#preloader').length &&
        t('#preloader')
          .delay(100)
          .fadeOut('slow', function () {
            t(this).remove();
          });
    }),
    t(window).scroll(function () {
      t(this).scrollTop() > 100
        ? t('.back-to-top').fadeIn('slow')
        : t('.back-to-top').fadeOut('slow');
    }),
    t('.back-to-top').click(function () {
      return (
        t('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo'), !1
      );
    }),
    t('.scrolltop-mf').on('click', function () {
      t('html, body').animate({ scrollTop: 0 }, 1e3);
    }),
    t('.counter').counterUp({ delay: 15, time: 2e3 }),
    t('a.js-scroll[href*="#"]:not([href="#"])').on('click', function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var a = t(this.hash);
        if ((a = a.length ? a : t('[name=' + this.hash.slice(1) + ']')).length)
          return (
            t('html, body').animate(
              { scrollTop: a.offset().top - e + 5 },
              1e3,
              'easeInOutExpo'
            ),
            !1
          );
      }
    }),
    t('.js-scroll').on('click', function () {
      t('.navbar-collapse').collapse('hide');
    }),
    t('body').scrollspy({ target: '#mainNav', offset: e }),
    t(window).trigger('scroll'),
    t(window).on('scroll', function () {
      t(window).scrollTop() > 50
        ? (t('.navbar-expand-md').addClass('navbar-reduce'),
          t('.navbar-expand-md').removeClass('navbar-trans'))
        : (t('.navbar-expand-md').addClass('navbar-trans'),
          t('.navbar-expand-md').removeClass('navbar-reduce')),
        t(window).scrollTop() > 1200
          ? t('.scrolltop-mf').fadeIn(1e3, 'easeInOutExpo')
          : t('.scrolltop-mf').fadeOut(1e3, 'easeInOutExpo');
    }),
    1 == t('.text-slider').length)
  ) {
    var n = t('.text-slider-items').text();
    new Typed('.text-slider', {
      strings: n.split(','),
      typeSpeed: 80,
      loop: !0,
      backDelay: 1100,
      backSpeed: 30,
    });
  }
  t('#testimonial-mf').owlCarousel({
    margin: 20,
    autoplay: !0,
    autoplayTimeout: 4e3,
    autoplayHoverPause: !0,
    responsive: { 0: { items: 1 } },
  });
})(jQuery),
  setInterval(setCurrentYear, 1e3),
  fetch('articles.json')
    .then((t) => t.json())
    .then((t) => {
      (data = t), displayArticles();
    }),
  window.addEventListener('load', displayArticles),
  $('.site-navigation').affix({ offset: { top: $('.hero').height() } }),
  $(
    (function () {
      $('.site-navigation').affix({ offset: { top: $('.hero').height() } });
      var t = $(window);
      function e() {
        768 > t.width() &&
          $('.nav a').on('click', function () {
            $('.navbar-toggle').click();
          });
      }
      e(),
        $(window).resize(e),
        $('body').scrollspy({ target: '.site-header', offset: 10 }),
        $(document).on('click', '.page-scroll a', function (t) {
          var e = $(this);
          $('html, body')
            .stop()
            .animate(
              { scrollTop: $(e.attr('href')).offset().top },
              1e3,
              'easeInOutExpo'
            ),
            t.preventDefault();
        }),
        $('.counter-start').length > 0 &&
          $('.counter-start').each(function () {
            var t = $(this),
              e = t.offset().top;
            $(window).scroll(function () {
              $(window).scrollTop() > e - 1e3 &&
                !t.hasClass('counting') &&
                (t.addClass('counting'), t.countTo());
            });
          });
      var a,
        o,
        s,
        n,
        r,
        i = $('.section-skills');
      $(document).bind('scroll', function (t) {
        var e;
        $(document).scrollTop() > i.offset().top - window.innerHeight &&
          ($('.progress .progress-bar').progressbar({
            transition_delay: 500,
            display_text: 'center',
          }),
          $(document).unbind('scroll'));
      }),
        $('#services-carousel').carousel({ interval: !1 }),
        $('.carousel-inner').length &&
          $('.carousel-inner').swipe({
            swipeLeft: function (t, e, a, o, s) {
              $(this).parent().carousel('next');
            },
            swipeRight: function () {
              $(this).parent().carousel('prev');
            },
            threshold: 50,
          }),
        $('.review-carousel').slick({
          nextArrow:
            '<button class="slick rectangle slick-next"><i class="fa fa-angle-right" aria-hidden="true"></button>',
          prevArrow:
            '<button class="slick rectangle slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></button>',
        }),
        $('.clients-carousel').slick({
          arrows: !1,
          slidesToShow: 5,
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ],
        });
      var l =
        ((o = (a = jQuery)('#grid')),
        (s = a('.portfolio-sorting li')),
        (n = function () {
          var t = s.children();
          t.on('click', function (t) {
            t.preventDefault();
            var e = a(this),
              s = e.hasClass('active'),
              n = s ? 'all' : e.data('group');
            s || a('.portfolio-sorting li a').removeClass('active'),
              e.toggleClass('active'),
              o.shuffle('shuffle', n);
          }),
            (t = null);
        }),
        (r = function () {
          var t = a.throttle(300, function () {
            o.shuffle('update');
          });
          o.find('img').each(function () {
            var e;
            (!this.complete || void 0 === this.naturalWidth) &&
              ((e = new Image()),
              a(e).on('load', function () {
                a(this).off('load'), t();
              }),
              (e.src = this.src));
          }),
            setTimeout(function () {
              t();
            }, 500);
        }),
        {
          init: function () {
            setTimeout(function () {
              r(), n();
            }, 100),
              o.shuffle({
                itemSelector: '[class*="col-"]',
                group: Shuffle.ALL_ITEMS,
              });
          },
        });
      $('#grid').length > 0 && l.init();
    })()
  );

$(document)
.ready(function() {
  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    });
  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

    //dropdown
    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      });

    // service modal
    $('.service_hours_modal.modal')
      .modal({
        inverted: true
      })
      .modal('setting', 'transition', 'vertical flip')
      .modal('attach events', '.service_hours_modal_button', 'show');

    // navbar sticky
    $('.ui.sticky')
      .sticky({
        pushing: true,
        context: '#context',
        onStick: function() {
            $('.ui.attached.compact.menu')
            .transition()
            .transition('fade down')
            ;
        }/*,
        onUnstick: function() {
            $('.ui.attached.compact.menu')
            .transition()
            .transition('fade');
        }*/
      });

    // checkbox
    $('.ui.checkbox').checkbox();

    // user_index dashmenu popup
    $('.menu .browse')
      .popup({
        inline     : true,
        hoverable  : true,
        position   : 'bottom center',
        transition : 'slide down',
        delay: {
          show: 50,
          hide: 50
        }
      });

    // toggle add comment textarea
    $('.fluid.card').on('click', '.add_comment', function () {
      $(this).parent().parent().find('.ui.comments')
      .transition('vertical flip', '500ms')
      .transition('clear queue');
    });

    // post actions popup
    $('.post_btn')
    .popup({
      on: 'hover'
    });
    // for share btn
    $('.post_share_btn')
    .popup({
      transition: 'horizontal flip'
    })
    .popup({
      on: 'hover'
    });

    // profile image "edit photo" on hover
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
    
});
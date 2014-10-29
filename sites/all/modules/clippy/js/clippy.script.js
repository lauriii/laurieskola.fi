(function ($) {
  "use strict";
  Drupal.behaviors.clippy = {
    attach: function (context, settings) {
      if ($('.messages').length) {
        clippy.BASE_PATH = Drupal.settings.clippy.basepath;
        var agent = Drupal.settings.clippy.agent;
        clippy.load(agent, function(agent){
          agent.moveTo(200, 200);

          // Set 1.5 seconds timeout to let agent move to user's screen.
          window.setTimeout(function () {
            agent.speak($('.messages').text());
            agent.animate();

            // Animate clippy every 7 seconds.
            window.setInterval(function () {
              agent.animate();
            }, 7000);

            // Read messages again every 20 seconds.
            window.setInterval(function () {
              agent.speak($('.messages').text());
            }, 20000);

          }, 1500);

          // Animate Clippy everytime user clicks something
          $(document).click(function (event) {
            agent.animate();
          });
        });

      }
    }
  };
})(jQuery);

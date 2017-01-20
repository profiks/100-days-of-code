System.register((void 0), [], function() {
  "use strict";
  var $__default = (function() {
    var runningLine = function runningLine(nav) {
      this.line = document.createElement('div');
      this.line.className = 'nav__line';
      this.marquee = document.createElement('span');
      this.marquee.className = 'nav__marquee';
      this.line.appendChild(this.marquee);
      nav.appendChild(this.line);
      this.list = nav.getElementsByTagName('li');
      {
        try {
          throw undefined;
        } catch ($_i) {
          $_i = 0;
          for (; $_i < this.list.length; ++$_i) {
            try {
              throw undefined;
            } catch (_i) {
              _i = $_i;
              try {
                this.over(this.list[$traceurRuntime.toProperty(_i)]);
                this.leave(this.list[$traceurRuntime.toProperty(_i)]);
              } finally {
                $_i = _i;
              }
            }
          }
        }
      }
    };
    return ($traceurRuntime.createClass)(runningLine, {
      over: function(listItem) {
        listItem.addEventListener('mouseover', this.init.bind(this), false);
      },
      leave: function(listItem) {
        listItem.addEventListener('mouseleave', this.clear.bind(this));
      },
      init: function(e) {
        this.marquee.style.left = (e.toElement.offsetLeft + "px");
        this.marquee.style.width = (e.target.clientWidth + "px");
      },
      clear: function(e) {
        this.marquee.style.width = 0;
      }
    }, {});
  }());
  return {get default() {
      return $__default;
    }};
});

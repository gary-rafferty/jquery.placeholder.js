(function($) {
  $.fn.placeholder = function() {
    function valueIsPlaceholder(input) {
      return ($(this).val() == $(input).attr("placeholder"));
    }
    return this.each(function() {
      $(this).find(":input").each(function() {
        if($(this).attr("type") == "password") {
          var new_field = $("<input type='text'>");
          new_field.attr("rel",$(this).attr("id"));
          new_field.attr("value",$(this).attr("placeholder"));
          $(this).parent().append(new_field);
          new_field.hide();

          function showPasswordPlaceholder(input) {
            if($(input).val() == "" || valueIsPlaceholder(input)) {
              $(input).hide();
              $('input[rel='+ $(input).attr("id") + ']').show();
            };
          };
          new_field.focus(function(){
            $(this).hide();
            $('input#' + $(this).attr("rel")).show().focus();
          });
          $(this).blur(function() {
            showPasswordPlaceholder(this,false);
          });
          showPasswordPlaceholder(this);
        } else {
          function showPlaceholder(input,reload) {
            if($(input).val() == "" || (reload && valueIsPlaceholder(input))) {
              $(input).val($(input).attr("placeholder"));
            }
          };
          $(this).focus(function() {
            if($(this).val() == $(this).attr("placeholder")) {
              $(this).val("");
            };
          });
          $(this).blur(function() {
            showPlaceholder($(this),false)
          });
          showPlaceholder(this,true);
        };
      });
      $(this).submit(function() {
        $(this).find(":input").each(function() {
          if($(this).val() == $(this).attr("placeholder")) {
            $(this).val("");
          }
        });
      });
    });
  };
})(jQuery);

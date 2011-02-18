jquery.placeholder.js

=== about
jQuery plugin to add HTML5 placeholder support for browser yet to implement it

=== usage
  <html>
    <head>
      <script type="text/javascript" src="jquery.js"></script>
      <script type="text/javascript" src="jquery.placeholder.js"></script>
      <script type="text/javascript">
        $(function() {
          function hasPlaceholderSupport() {
            var i = document.createElement('input');
            return 'placeholder' in i;
          }
          if(!hasPlaceholderSupport()) {
            $("#loginform").placeholder();
          }
        })
      </script>
      <style type="text/css">
        li {list-style-type:none;}
      </style>
    </head>
    <body>
      <ul>
        <form id="loginform">
          <li><input type="text" name="username" id="username" placeholder="Username" /></li>
          <li><input type="password" name="password" id="password" placeholder="Password" /></li>
          <li><input type="Submit" value="Login" /></li>
        </form>
      </ul>
    </body>
  </html>

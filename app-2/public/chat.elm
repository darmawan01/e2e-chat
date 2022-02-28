<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
      content="default-src 'self' data: gap: ws: ssl.gstatic.com 'unsafe-inline';">
  <link rel="stylesheet" href="./css/chat.css">
  <title>Chat App</title>
</head>

<body>
  <div class="sidenav">
    <div class="nav-search">
      <input type="text" placeholder="Search..." />
    </div>


    <div class="nav-foot">
      <a href="index.html">Logout</a>
    </div>
  </div>
  <div class="main">
    <div class="main-body" id="main-body">

    </div>

    <div class="main-footer">
      <input id="inputmsg" type="text" placeholder="Your message here..." />
    </div>
  </div>


  <script src="../src/renderer.js"></script>
  <script src="./js/chat.js"></script>
</body>

</html>
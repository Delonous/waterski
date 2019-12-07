var time;
window.addEventListener('load', function(){
    var allimages = document.getElementsByTagName('img');
    var iframes = document.getElementsByTagName('iframe');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
    for (var i=0; i<iframes.length; i++) {
        if (iframes[i].getAttribute('data-src')) {
            iframes[i].setAttribute('src', iframes[i].getAttribute('data-src'));
        }
    }
}, false)
function size() {
    
    if (window.innerWidth < 992) {
        document.getElementById('spartyhead1').style.display = 'none';
        document.getElementById('spartyhead2').style.display = 'none';
        document.getElementById('twit2').style.display = 'none';
        document.getElementById('insta2').style.display = 'none';
        document.getElementById('fb2').style.display = 'none';
        document.getElementById('twit1').style.display = 'inline';
        document.getElementById('fb1').style.display = 'inline';
        document.getElementById('insta1').style.display = 'inline';
    } else {
        document.getElementById('spartyhead1').style.display = 'inline';
        document.getElementById('spartyhead2').style.display = 'inline';
        document.getElementById('twit2').style.display = 'inline';
        document.getElementById('fb2').style.display = 'inline';
        document.getElementById('insta2').style.display = 'inline';
        document.getElementById('twit1').style.display = 'none';
        document.getElementById('insta1').style.display = 'none';
        document.getElementById('fb1').style.display = 'none';
    }
}

 $(window).on('load', function () {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      
      var count = 0
      var formal = setInterval(function() {
          count++
          if (count > 10)
          {
              clearInterval(formal)
          }
          var color = getRandomColor();
          document.getElementById('formal').style.color = color;
          document.getElementById('formal').style.textShadow = "0 0 20px" + color;          
      }, 500);
 });


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
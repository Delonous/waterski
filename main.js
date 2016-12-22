function size() {
    if (window.innerWidth < 768) {
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
      document.getElementById('content').style.display = 'block';
      $('#content').addClass('router');    
      document.getElementById('loader').style.display = 'none';
      document.getElementById('iSlalom').src = 'https://www.youtube.com/embed/7Necm9_6wrs';
      document.getElementById('iTrick').src = 'https://www.youtube.com/embed/3Og3B_E2HrY';
      document.getElementById('iJump').src = 'https://www.youtube.com/embed/t4ZGKI8vpcg';
 });

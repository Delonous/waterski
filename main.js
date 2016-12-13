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
function iframeLoaded() {
      let iFrameRes = document.getElementsByClassName('iframexd');
      if (iFrameRes) {
            if (screen.width > 1366){
                  // here you can make the height, I delete it first, then I make it again
                  iFrameRes.height = "";
                  iFrameRes.height = 640;
                  iFrameRes.width = "";
                  iFrameRes.width = 360;
            }
      }
}
/* ===== VIDEO SETTINGS: edit these two lines =====
   VIDEO_URL can be:
   - a YouTube link (https://www.youtube.com/watch?v=XXXX or https://youtu.be/XXXX)
   - a video file in this folder (for example "video.mp4")
   Leave it empty ("") and the video section stays hidden. */
const VIDEO_URL = "https://www.youtube.com/watch?v=wKDjfPMek3k";
const VIDEO_CAPTION = "This video looks at students with emotional and behavioral disorders (EBD), the research term for students served under IDEA's Emotional Disturbance category. As you watch, notice how the strategies connect to the supports described on this site.";

(function () {
  const section = document.getElementById("video");
  const navItem = document.getElementById("nav-video");
  const frame = document.getElementById("video-frame");
  const url = VIDEO_URL.trim();
  if (!url) { section.hidden = true; navItem.hidden = true; return; }

  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + yt[1];
    iframe.title = VIDEO_CAPTION || "Video about emotional disability";
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);
  } else {
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.preload = "metadata";
    frame.appendChild(video);
  }
  document.getElementById("video-caption").textContent = VIDEO_CAPTION;
})();
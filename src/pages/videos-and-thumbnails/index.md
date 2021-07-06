---
title: "Managing videos and thumbnails"
guideNo: 16
path: "/videos-and-thumbnails"
---

As the website is not hosting a few videos, which need a refresh for every call, here is a guide on how to manage video files and the thumbnails for each of them:

**1.** All video files (compressed) can be found in the `assets/res/videos` folder.

**2.** If you're uploading a new video, either upload it in the folder which best suits it (EXPERIMENT, PULL, etc.) or create a new folder for it if there's no good matches.

**3.** Upload the video thumbnail (if you have one) alongside the video in the same folder.

**4.** Each video is placed within a `<video>` tag like and has a `poster` attribute which points to the thumbnail like so:

```
  <video
    // Gives it the rounded corners
    class="video"
    // This is where you point to the thumbnail
    poster="../../assets/res/videos/PULL/thumbnail_PULL.jpg"
    // This tells the browser to include its native video player controls
    controls
  >
    // For each format of the video you have (MP4, WEBM) - it needs to be placed
    // within a separate source tag
    <source
      // Points to the video file
      src="../../assets/res/videos/PULL/HUBCAP_PULL_SUBS.mp4"
      // Change this depending on the format (MP4, WEBM, etc.)
      type="video/mp4"
    />
    // This is fallback text
    Your browser does not support embedded videos.
  </video>

```

**5.** For the homepage video - it's located in `home.component.html`under the intro paragraph. Each of the call videos is located within its respectful component (PULL, EXPERIMENT or INNOVATE) at the bottom of the page.

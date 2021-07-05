---
title: "Adding a news item"
guideNo: 9
path: "/adding-a-news-item"
---

To add a news item to the "Latest News" page feed:

**1.** Open the `news.component.ts` file in the `news` folder.

**2.** Locate the `localArticles` array.

**3.** Add an item of the following structure to the array:

```
 {
      title: "",
      summary: "",
      date: new Date("YYYY-MM-DD"),
      displayDate: "YYYY.MM.DD",
      // Can be anything like "OPEN CALLS", "WEBINAR", etc.
      type: "RECORDING",
      // Caption to appear below the image (most cases should be empty)
      caption: "",
      // Text which appears on the button/link at the bottom
      buttonText: "Watch recording",
      // URL to redirect to when button/link clicked
      url: "/content/open-calls/1.2-webinar",
      // Optional (if there is a video to embed)
      videoURL: "https://www.youtube.com/embed/qsokDLHRORc",
      // Optional (if there is an image)
      // Should have a distinct value (used as an ID of sorts)
      modalTarget: "2.1webinar1",
      // Optional (the link to the image to be shown)
      thumbnail:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/Q&AWebinar_1.png",
      // Optional / Must be included if thumbnail is included (Alt text for the image)
      thumbnailAlt: "Call #2.1 EXPERIMENT Q&A Webinar on 13 January 2021",
}

```

---
title: "Adding a newsletter"
guideNo: 12
path: "/adding-a-newsletter"
---

To add a newsletter to the "Newsletters" page the process is quite simple:

**1.** Upload the newsletter PDF to the `assets/res/files/newsletters` folder.

**2.** Take a screenshot of the first page and upload it to the `assets/res/files/newsletters/thumbnails` folder.

**3.** Open the `newsletter-list.component.ts` file, located in the `newsletter-list` folder.

**4.** Locate the `newsletters` array.

**5.** Add an item of the following structure to the array (all fields are required):

```
 {
      // This serves as the title of the list item
      month: "June 2021",
      // Short description
      description: '',
      // Path to the newsletter PDF to enable downloads
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_June_2021.pdf",
      // Path to the thumbnail image
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N3_thumb.png",
      // Thumbnail Alt text
      thumbnailAlt: "June 2021 Newsletter Front Page",
      // ID for the modal (zoomed in image on click) / Just do "N" + number of newsletter
      modalTarget: "N3",
 }

```

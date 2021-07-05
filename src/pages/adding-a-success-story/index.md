---
title: "Adding a success story"
guideNo: 11
path: "/adding-a-success-story"
---

To add a success story to the "Success Stories" listing page and to have a page such as "www.hubcap.eu/success-stories/success-story-title", you just need to do the following:

**1.** Open the `success-stories.ts` file, located in the `success-stories-list` folder.

**2.** Locate the `stories` array.

**3.** Add an item of the following structure to the array (all fields are required):

```
{
    // Title of the story
    title: "Networked Traffic Management",
    // Story highlight image/thumbnail
    image: "../../assets/res/images/image.png",
    // The path to be included in the link "www.hubcap.eu/success-stories/success-story-name"
    urlName: "success-story-name",
    // List of sections for the story
    // Each section has its own heading and a list
    // of paragraphs (which could contain 1 or more paragraphs, doesn't matter)
    sections: [
      {
        // Example of a section with multiple paragraphs
        sectionHeading: "Section Heading",
        paragraphs: [
          "",
          "",
        ],
      },
      {
        // Example of a section with only one paragraph
        sectionHeading: "Section Heading",
        paragraphs: [
          "",
        ],
      }
    ],
    // Information for the "Quick info box"
    info: {
      // Array of the end-users (1 or more)
      endUsers: [
        {
          name: "End User",
          website: "https://www.somewebsite.com",
        },
        {
          name: "End User",
          website: "https://www.somewebsite.com",
        },
      ],
      // Array of tech providers (1 or more)
      techProviders: [
        {
          name: "Technology Provider",
          website: "https://www.somewebsite.com",
        },
        {
          name: "Technology Provider",
          website: "https://www.somewebsite.com",
        },
      ],
      // DIH information
      dih: {
        name: "Digital Innovation Hub",
        website: "https://www.somewebsite.com"
      },
    },
  }

```

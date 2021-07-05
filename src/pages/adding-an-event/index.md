---
title: "Adding an event"
guideNo: 10
path: "/adding-an-event"
---

To add an event to the "Events" page lists and calendar:

**1.** Open the `events-list.ts` file in the `events` folder.

**2.** Locate the `events` array.

**3.** Add an item of the following structure to the array (all fields are required):

```
 {
    start: new Date("07 July 2021 9:00"),
    end: new Date("07 July 2021 23:59"),
    title: 'Call #3 INNOVATE Final Webinar',
    // Colors are accessed from the colors variable above
    // For open calls, they should be the call name
    color: colors.innovate,
    meta: {
      description:"",
      location: "Zoom | Teams | Whatever else",
      time: "11:00 AM - 12:30 PM",
      // Link to sign-up (usually LinkedIn)
      link: "https://www.link.to/the/event",
      // Add this following the release of a recording (leave empty in the beginning)
      recordingLink: "",
    }
  }

```

**NOTE:** The component knows how to handle events going in the past, so there's no need to worry about it, it will self-manage and place the event in the "upcoming" or "past" events list after you include it in the events array.

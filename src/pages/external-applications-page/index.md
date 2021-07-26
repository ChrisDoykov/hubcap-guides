---
title: "External Applications Page"
guideNo: 22
path: "/external-applications-page"
---

The page for external applicants that (sort of like the PULL call for non-SMEs who want to add their assets to HUBCAP) is already prepared, but needs to be enabled (from previous discussions it was decided that it should not be in the menu but just as a link for distribution). In order to do that:

**1.** Make sure that the form for external applications is finished and up to date (current link is [this](https://docs.google.com/forms/d/1gyKxFlb0QTEyGLfIbbcKiCNGjJLD-OUsXBV_td3ZZX0/edit)).

**2.** Open the `external` folder in `app`.

**3.** Open the `external.component.html` file and remove the `disabled` attribute from the two "APPLY NOW" buttons (one at the top and one at the bottom).

**4.** Open the `external.component.ts` file and place the URL to the finished Google Forms form as the first argument to the `window.open` call within the `openApplyPage` function.

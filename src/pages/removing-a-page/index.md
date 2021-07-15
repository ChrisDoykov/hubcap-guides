---
title: "Removing a page"
guideNo: 21
path: "/removing-a-page"
---

There are only a few steps needed, in order to remove a page, although the difficulty might vary depending on how heavily referenced the page is:

**1.** Open the `app-routing.module.ts` file, located in the `app` folder.

**2.** Locate the `routes` array.

**3.** Comment out or delete the route that matches the page you wish to remove.

**4.** Remove any other links that point to this route (to prevent 404 errors) such as the menu item in the `navigation` component and any other pages.

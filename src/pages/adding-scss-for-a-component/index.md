---
title: "Adding styling/SCSS for a component"
guideNo: 7
path: "/adding-scss-for-a-component"
---

All of the SCSS code (stylesheets) for the project can be found in the `sass` folder in `src`. In case you are trying to create a new component or to include an additional stylesheet to the project, all you need to do is the following:

**1.** Choose what type of stylesheet this is - is it for a reusable component like a box, for an entire page, or a layout, or is it something more global, related to the entire site?

**2.** Once you've decided on the type of file - open the folder under `sass` which best describes your file.

**3.** In here, create a new file with the following naming convention - `_name-of-file.scss`.

**4.** Now, you can write all of your SCSS/CSS code in the file as usual.

**5.** In order to get access to all of the color, sizing and other variables and mixins, include the following two lines at the top of the file:

```
@import "../abstracts/variables";
@import "../abstracts/mixins";
```

This allows you to use things like `$color-primary` in your code to reference the HUBCAP orange, for example.

**6.** Open the main styles file, located in `src`, called `styles.scss`.

**7.** Add an `@import "./sass/route/to/file"` statement somewhere in this file to include your stylesheet globally.

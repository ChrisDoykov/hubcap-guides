---
title: "Folder Structure"
guideNo: 2
path: "/folder-structure"
---

When you first open up the project in your code editor of choice (my personal pick would be [Visual Studio Code](https://code.visualstudio.com/download)), you will find that there are lots of different folders in the file tree. You will mostly (possibly even 100% of the time) be working within the `src` folder. If you pop that open, you will notice that it contains quite a few folders itself. The ones of particular interest will be - `app`, `assets` and `sass`.

The `app` folder contains all of the code for the different pages, components, etc.

The `assets` folder holds all images, videos, icons, files, and so on. If you need to upload any type of media - this is the folder in which to do so.

Lastly, in `sass` you can find all the reusable .scss stylesheet files. Within it, there are subfolders for the different types of files like `components` (a button, for example, would be considered a component and so all SCSS for styling buttons can be found in there) or `abstracts` (it holds files such as `_variables.scss` which contain the variables for all the reusable colors, spacing variables, etc.). In order for all of these to work, they have to be imported in the main `styles.scss` file located in the `src` folder.

The most important of the 3 folders is the `app` folder - it contains code for each **page** and **component**. If you open it you will see subfolders with pretty clear names such as `home` for the **homepage** or `navigation` for the **menu** component. There are also folders like `press-release-articles` or `content-items` which hold multiple pages within them. If you open any of their child folders you will find all the necessary files for each sub-page.

In every component or page folder, you will find 4 files:

**1.** `*.component.html` - the markup for the page/component

**2.** `*.component.scss` - any SCSS related to that page/component

**3.** `*.component.ts` - the TypeScript code for the page/component

**4.** `*.component.spec.ts` - you will **NOT** be needing this one

---
title: "Angular CLI Cheatsheet"
guideNo: 3
path: "/ng-cli-cheatsheet"
---

Earlier we installed the Angular CLI globally on our machine. Now we can access the `ng` command from every terminal. Here is a
quick cheatsheet of the most useful `ng` commands you might need:

`ng serve` - serves the website locally (by default on **localhost:4200**). **Note:** when served locally the server.js file will not be run which means locally you cannot purely test things that rely on backend endpoints such as the Twitter feed or the newsletter subcriptions. To test those you need to run the server locally with `npm run dev` but it would also require additional changes to the files.

`ng build --configuration production` - builds the production version of the website (done automatically on deployment anyway).

`ng g c <NameOfComponent>` - generates a new component (use this to create pages or reusable components). Creates a folder with all the needed files and also registers the component within the `app.module` file.

`ng g p <NameOfPipe>` - generates a new pipe and registers it.

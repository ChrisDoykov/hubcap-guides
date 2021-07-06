---
title: "Adding or updating a deliverable"
guideNo: 17
path: "/adding-or-updating-a-deliverable"
---

The public deliverables table is located within the "Project Details" page, the code for which resides in the `project` folder. To add or update a deliverable:

**1.** Make sure the deliverable PDF/Word file is uploaded to the `assets/res/files` folder.

**2.** Open the `deliverables.ts` file, located in the `project` folder.

**3.** Locate the `deliverables` array.

**4.** Add an item of the following structure to the array (all fields are required):

```
{
      number: "D7.1",
      name: "HUBCAP Visual Identity and Templates",
      // Month Due
      month: "M2 (Feb 2020)",
      // Link to the deliverable PDF/Word file
      link: "../../assets/res/files/D7.1.pdf",
}
```

**5.** To update a deliverable, simply replace the previous deliverable PDF/Word file in the `assets/res/files` folder with the new, updated file while keeping the file name the exact same as before.

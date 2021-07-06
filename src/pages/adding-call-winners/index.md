---
title: "Adding SMEs to Call Winners"
guideNo: 13
path: "/adding-call-winners"
---

Whenever an SME wins a PULL call or gets funded as part of a consortium, we need to add their logo and website to our "Call Winners" page under the "About" menu item. To do that do the following:

**1.** Open the `winners-list.ts` file, located in the `winners` folder.

**2.** Locate the `WINNERS` array.

**3.** Add an object of the following structure to the array (all fields are required):

```
{
    // ID should be the ID of the last item + 1
    id: X,
    // Name of the SME
    name: "Energeia Technologies",
    // Path to the SME logo
    logo: "../../assets/res/logos/logo_energia.jpg",
    // SME website (preferably https as it helps Google Lighthouse scores)
    website: "http://www.energeiatech.com/?page=home",
}

```

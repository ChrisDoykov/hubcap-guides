---
title: "Adding a tool/model to Technologies page"
guideNo: 8
path: "/adding-an-asset"
---

Adding a new asset (model/tool) to the "Technologies" page list is pretty straightforward.

**1.** Open the `technologies.component.ts` file located in the `technologies` folder.

**2.** Locate the `models` and `tools` arrays, containing all the currently available models and tools respectively.

**3.** If the asset is a **tool** you would need to add an object of the following structure to the `tools` array:

```

{
      type: "tool",
      // Only leave this in if the asset is provided by one of the DIHs
      dihAsset: true,
      // Could be the company logo or the asset logo itself
      logo: "../../assets/res/logos/companyOrAssetLogo",
      asset_name: "",
      company_name: "",
      url: "https://organisation.website.com",
      description: '',
      // Always leave at false
      showMore: false,
      supported_platforms: ["Windows", "Linux", "macOS"],
      // Optional field (most should include it)
      modelling_notations: ["Functional Mock-up Interface (FMI)"],
      // Optional field
      related_tools: [
        {
          name: "20-sim",
          url: "https://www.20sim.com/",
        },
        {
          name: "Overture",
          url: "http://overturetool.org/",
        },
        {
          name: "Open Modelica",
          url: "https://www.openmodelica.org/",
        },
      ],
      domains: [
          "Automotive",
          "Agriculture",
          "Smart Buildings",
          "Transport"
      ],
      // Optional field (include if only 1 license)
      // This is the text which will appear on the license link
      license_text: "INTO-CPS Association Public License",
      // Optional field (include if only 1 license)
      // This is the actual address of the license link
      license_url:
        "https://github.com/INTO-CPS-Association/maestro/blob/development/LICENSE",
      // Optional field (include if multiple licenses)
      licenses: [
        {
          text: 'Commercial License',
          url: 'wwww.link.to/license'
        },
        {
          text: 'Commercial License 2',
          url: 'wwww.link.to/license/2'
        }
      ],
      // Optional field
      download_link: "https://into-cps-association.github.io/download/",
      // Contact email
      email: "into-cps@mail.com",
    }

```

**4.** If the asset is a **model** you would need to add an object of the following structure to the `models` array:

```
{
      type: "model",
      // Only leave this in if the asset is provided by one of the DIHs
      dihAsset: true,
      // Could be the company logo or the asset logo itself
      logo: "../../assets/res/logos/companyOrAssetLogo",
      asset_name: "",
      company_name: "",
      url: "https://organisation.website.com",
      description: "",
      // Always leave at false
      showMore: false,
      // Optional field (most should include it)
      modelling_lang_tool: ["AutoFOCUS3"],
      // Include this if they've only listed a single domain
      domain: "Automotive",
      // Include this if they've listed a few domains
      domains: [
        "Energy",
        "Retail",
        "Banking/Financial",
        "Government",
        "Education",
        "Health",
        "Continuous Integration Testing",
      ],
      // This is the text which will appear on the license link
      license_info_name: "Pay-as-you-go / None (Public) / Anything else",
      // This is the actual address of the license link
      license_info_url: "https://opensource.org/licenses/BSD-2-Clause",
      // Optional field
      download_link:
        "https://www.fortiss.org/en/research/living-lab/detail/fortissimo",
      // Contact email
      email: "mbse@fortiss.org",
    }

```

**5.** Save your changes and check that the list now includes the asset by searching for it using the search field.

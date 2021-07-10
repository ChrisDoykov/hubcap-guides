---
title: "Adding an FAQ item"
guideNo: 20
path: "/adding-an-faq-item"
---

To add an FAQ item to the "FAQ" page under "About" you would need to first decide if you're adding an entirely new FAQ section of questions or just a single FAQ. If the question isn't related to one of the pre-existing sections (like "About the HUBCAP programme" or "About my application to Call #1 PULL", etc.) then you might be looking to create an entirely new section. If this is the case, do the following:

**1.** Open the `faq.component.html` file, located in the `faq` folder.

**2.** Scroll to the bottom of the page before the closing `</section>` tag.

**3.** Firstly, insert the following code to create a new section heading:

```
<div class="u-text-left u-margin-top-big">
    <h1
      class="
        heading-secondary
        heading-secondary--underlined
        heading-secondary--underlined-left
        heading-secondary--underlined-red
      "
    >
      YOUR SECTION TITLE HERE
    </h1>
  </div>
```

**4.** Next up, we need to create the "accordion" with questions related to this section. Insert the following code below the `<div>` element you just created:

```
<mat-accordion class="faq__content">
    <mat-expansion-panel class="faq__content__question">
      <mat-expansion-panel-header class="faq__content__question__header">
        <mat-panel-title class="faq__content__question__title"
          ><span class="bold">Q:</span> Does our consortium have to use a tool
          which is already on the HUBCAP Platform?</mat-panel-title
        >
      </mat-expansion-panel-header>
      <div class="faq__content__question__body">
        <p class="paragraph paragraph--big">
          <span class="bold">A:</span> No. There is no requirement to use an
          asset that is already part of the HUBCAP Platform. The assets used in
          your project could be entirely new, the only requirement in this case
          is that you declare them in a separate annex as part of your
          application.
        </p>
      </div>
    </mat-expansion-panel>

    <hr class="faq__hr" />
</mat-accordion>
```

This represents an accordion of questions with a single question in it. The "question" part in the code above is this:

```
<mat-expansion-panel class="faq__content__question">
      <mat-expansion-panel-header class="faq__content__question__header">
        <mat-panel-title class="faq__content__question__title"
          ><span class="bold">Q:</span> Does our consortium have to use a tool
          which is already on the HUBCAP Platform?</mat-panel-title
        >
      </mat-expansion-panel-header>
      <div class="faq__content__question__body">
        <p class="paragraph paragraph--big">
          <span class="bold">A:</span> No. There is no requirement to use an
          asset that is already part of the HUBCAP Platform. The assets used in
          your project could be entirely new, the only requirement in this case
          is that you declare them in a separate annex as part of your
          application.
        </p>
      </div>
</mat-expansion-panel>
```

Class names for the elements should be kept as they are in order to keep the styling consistent. The `<div class="faq__content__question__body">` element can contain anything you like but mostly it would either be a paragraph element or a list. A list would look like this:

```
 <ul class="faq__list">
          <li class="faq__list__item">
            Related to the evaluation process or eligibility checks.
          </li>
          <li class="faq__list__item">Clearly describe the complaint.</li>
          <li class="faq__list__item">
            Received within the time limit (3 working days) from the reception
            of a rejection letter considering the asset application as
            non-eligible or the ESR information letter delivered
          </li>
          <li class="faq__list__item">
            Sent by the SME legal representative that has also submitted the
            asset application.
          </li>
 </ul>
```

Each `<mat-accordion>` element (or section of questions) can contain as many question objects (`<mat-expansion-panel class="faq__content__question">`) as you like.

**5.** If you are looking to just add a single new item to the pre-existing question sections, you would simply insert a new "question" `<mat-expansion-panel class="faq__content__question">` below the latest one in the accordion, like so:

```
. . . Other question elements

<mat-expansion-panel class="faq__content__question">
      <mat-expansion-panel-header class="faq__content__question__header">
        <mat-panel-title class="faq__content__question__title"
          ><span class="bold">Q:</span> YOUR NEW QUESTION TITLE HERE</mat-panel-title
        >
      </mat-expansion-panel-header>
      <div class="faq__content__question__body">
        <p class="paragraph paragraph--big">
          <span class="bold">A:</span>
          YOUR NEW QUESTION ANSWER BODY HERE
        </p>
      </div>
</mat-expansion-panel>

<hr class="faq__hr" />  // This is a divider element between questions (remove if last question)

</mat-accordion>    // Closing of the current question section
```

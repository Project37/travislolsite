---
title: "Using Code Brackets for Stylish Code Sections"
description: "Learn how to use the new CodeBrackets component to add stylized code-like brackets to your blog content in Astro."
pubDate: 2025-05-13
readingTime: "5 minutes"
tags: ["Tutorial", "Components", "Design"]
bracketType: "markdown"
bracketColor: "violet"
bracketLabel: "using-code-brackets.md"
---

Adding visual flair to your technical blog posts can make content more engaging and easier to parse. We've replaced the old `ASCIIBrackets` component with the new `CodeBrackets` component—a more descriptive and intuitive name for wrapping content in programming-style brackets.

## Getting Started

1. **Import the Component**

   In your `.astro` page or layout, import `CodeBrackets`:

   ```astro
   ---
   import CodeBrackets from '../components/CodeBrackets.astro';
   ---
   ```

2. **Wrap Your Content**

   Use the component to enclose any section of your blog content:

   ```astro
   <CodeBrackets type="python" color="green" label="example.py">
     <pre>
       def hello_world():
         print("Hello, CodeBrackets!")
     </pre>
   </CodeBrackets>
   ```

3. **Explore Bracket Styles**

   Visit the [Bracket Styles Showcase](/bracket-examples/) page to see all available bracket types, sizes, and color options.

## Component Props

- `type` (optional): Specifies the bracket style. Options include `js-object`, `html`, `jsx`, `css`, `python`, `markdown`, `sql`, `bash`, `security-report`, `code-review`, `vulnerability`, `square`, `curly`, `angle`, `pipe`. Defaults to `square`.
- `size` (optional): `small`, `medium`, or `large`. Defaults to `medium`.
- `color` (optional): Theme colors like `blue`, `green`, `yellow`, `orange`, `violet`, `cyan`, `red`, `teal`, `purple`. Defaults to `violet`.
- `label` (optional): A label displayed on the bracket (e.g., filename or title).

## Pro Tips

- Use `markdown` brackets for content-heavy sections like how-to guides.
- Combine `security-report` or `code-review` brackets for security-focused posts.

Enjoy styling your blog posts with `CodeBrackets`—happy coding!

- Explain code before making major changes.
- Prefer beginner-friendly solutions.
- When fixing bugs, explain the root cause.
- Do not use advanced patterns unless requested.
- When creating components, include responsive Tailwind styling.

# Copilot Instructions

## Project Overview

* Next.js App Router
* React Functional Components
* Tailwind CSS
* JavaScript (not TypeScript)

## Coding Standards

* Use functional components only.
* Use React hooks instead of class components.
* Prefer async/await over .then().
* Use ES6+ syntax.
* Use descriptive variable names.
* Keep components small and reusable.

## Next.js Rules

* Use App Router patterns.
* Create pages using app/page.js.
* Use dynamic routes with folder names like [id].
* Use Server Components by default.
* Only add "use client" when necessary.

## Styling Rules

* Use Tailwind CSS for all styling.
* Avoid inline styles unless absolutely necessary.
* Use responsive Tailwind classes.
* Mobile-first design is required.

## Component Structure

* One component per file.
* Export components as default exports.
* Keep business logic separate from UI when possible.

## Code Quality

* Explain complex code with comments.
* Avoid unnecessary dependencies.
* Check for loading and error states.
* Write clean and readable code.

## When Generating Code

* Provide complete files when asked.
* Follow existing project structure.
* Do not create files that are not needed.
* Explain major changes before showing code.

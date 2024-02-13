## [Formik docs](https://formik.org/docs/overview)

# Formik Overview

Let's face it, forms are really verbose in React. To make matters worse, most form helpers do wayyyy too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

By colocating all of the above in one place, Formik will keep things organized, making testing, refactoring, and reasoning about your forms a breeze.

## Motivation

I (@jaredpalmer) wrote Formik while building a large internal administrative dashboard with @eonwhite. With around ~30 unique forms, it quickly became obvious that we could benefit by standardizing not just our input components but also the way in which data flowed through our forms.

### Why not Redux-Form?

By now, you might be thinking, "Why didn't you just use Redux-Form?" Good question.

- According to our prophet Dan Abramov, form state is inherently ephemeral and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.
- Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This is fine for small apps, but as your Redux app grows, input latency will continue to increase if you use Redux-Form.
- Redux-Form is 22.5 kB minified gzipped (Formik is 12.7 kB)

My goal with Formik was to create a scalable, performant, form helper with a minimal API that does the really, really annoying stuff and leaves the rest up to you.

My talk at React Alicante goes much deeper into Formik's motivation and philosophy, introduces the library (by watching me build a mini version of it), and demos how to build a non-trivial form (with arrays, custom inputs, etc.) using the real thing.

## Influences

Formik started by expanding on this little higher-order component by Brent Jackson, some naming conventions from Redux-Form, and (most recently) the render props approach popularized by React-Motion and React-Router 4. Whether you have used any of the above or not, Formik only takes a few minutes to get started with.

## Installation

You can install Formik with NPM, Yarn, or a good ol' `<script>` via unpkg.com.

### NPM
```bash
npm install formik --save
```


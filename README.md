# brunoneckel.com

Hello! This is my portfolio site [brunoneckel.com](https://brunoneckel.com). It is a wild work in progress (currently barely at an MVP stage) and also my safe place to experiment with new things I wanna try. Examine the code if you dare.
Want to know how any particular thing was acheived? You should [write me](mailto:neckel.bw@gmail.com) because I love nerding out about this stuff and my gf and dog are honestly sick of hearing about it.

# Dev

Its a "monorepo" (sorta?) with a frontend and backend dir. I like em together so I can easily facilitate typesafety and version changes that are tightly coupled.

## Frontend - Nuxt.js

I'm currently using Nuxt.js for the frontend. The main reason was to explore the ecosystem and get hands-on experience with the framework, rather than purely optimizing for speed or familiarity.

From a practical standpoint, I could have chosen Next.js instead, it would likely have been faster to build, given my previous experience with it. However, this project also serves as a learning opportunity, so I intentionally stepped a bit outside my comfort zone.

For the current MVP, the app is relatively simple and leans heavily on static generation. Because of that, other alternatives (like Astro) could also be a good fit. Still, Nuxt.js gives me enough flexibility to expand the project later if needed.The usual commands in the `frontend` dir:

```bash
# Build, useful for checking if you have deploy-blocking issues
npm run build

# Work on the site
npm run dev
```

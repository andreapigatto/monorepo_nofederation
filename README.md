# Monorepo no federation

example of monorepo with 4 folders. Hierarchy of dependecies:

shared --> app1 --> app

shared --> app2 --> app

- shared: dep lib with storybook (usually can be a design system). Build is shipping js and types. Tree shaking applied on build via vite configuration.
- app1 and app2: applications as dep libraries. No storybook but I can run them in dev and see them as SPAs but on build just shipping js and types as libraries.
- app: final app. Will load app1 and app2 with lazy loading. Build is splitting files but I will have on builds even code from shared (only code I need cause of tree shaking).
When I run dev I see all apps included. Hot reloading is available on development using some aliasing from vite.


# FullCalendar Angular Component Contributor Guide

Information for people wanting to contribute code to this project.


## Important Directories

This repo was initially created with Angular CLI, which is why certain directories are where they are:

- `projects/fullcalendar/src/lib/` - code for the FullCalendar component
- `src/` - a demo application, for manual testing while developing


## Build Commands

Look in `package.json` to see all available build scripts, the most important being:

```bash
npm run build
npm run start # build continusouly, start a server
npm run e2e # run end-to-end tests
```

## Before Submitting

Before submitting a PR, make sure testing and linting pass:

```bash
npm run e2e
npm run lint
```

Also, make sure the [example project] builds correctly with the new code. To test, use [npm link] to trick it into using your not-yet-published dist files.


## Publishing

For publishing to NPM/Github, run something like this:

```bash
./scripts/version 9.9.9 # build and stage the release
./scripts/publish 9.9.9 # publish to verdaccio (local npm server)
./scripts/publish 9.9.9 --production # publish to npm, push to github
```

This will create a detached+tagged release commit.


[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/angular
[npm link]: https://docs.npmjs.com/cli/link.html

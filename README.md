# Open Diffix website

This page is automatically deployed to github pages
upon pushing code to github.

## Pre-requisites

Install [asdf](https://github.com/asdf-vm/asdf), along with the
plugins for [nodejs](https://github.com/asdf-vm/asdf-nodejs) and
[yarn](https://github.com/twuni/asdf-yarn).

Then run `asdf install`.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production
$ yarn build
```

For detailed explanation on how things work, check out the [SvelteKit docs](https://kit.svelte.dev/docs).
As svelte is very much a moving target, we should probably update our dependencies more often than not.
At least when things don't work for some reason, that should probably be our first course of debugging...

## Dev hygiene

Prettier has been installed.
While it isn't enforced I highly recommend running `yarn format` before committing.

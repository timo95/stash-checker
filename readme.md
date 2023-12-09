# Stash Checker

Stash Checker is an userscript for porn websites to check if a Scene/Performer is in your [Stash](https://github.com/stashapp/stash) instance.
It shows a checkmark if an item was found in your Stash.
Hovering over the checkmark gives you a tooltip with information about the item in your Stash.

<img src="docs/assets/tooltip.png" alt="tooltip" width="500"/>

## Installation

You need a browser plugin like [Tampermonkey](https://www.tampermonkey.net/) to run userscripts.

The newest release of Stash Checker gets deployed to [this Gist](https://gist.github.com/timo95/562b9363d491e3ee281cb46944445fcd).
Click on the `Raw` button to import this script to Tampermonkey.

## Stash URL

On first use the script asks for your Stash URL and API key.
Leave the key empty, if none is required.

You can change the URL and key later in Tampermonkey's userscript menu.

<img src="docs/assets/menu.png" alt="menu" width="200"/>

## Stash version compatibility

At the moment only the newest Stash versions are supported.
For backwards compatibility, see this [feature request](https://github.com/timo95/stash-checker/issues/9).

## Supported Websites

The `@match` section at the top of the script lists all supported websites.
Go [here](https://github.com/timo95/stash-checker/issues/5) to request more.

## Matching

Most entries get matched to your Stash by their URL.
Some websites also support matching by title or studio code.
The tooltip lists all fields used for matching and which ones successfully matched to the Stash entry.

All instances of Stash-box only match by stashId.

## Development

See [here](docs/DEVELOPMENT.md).

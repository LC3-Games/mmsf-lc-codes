# MMSF Cipher Code Helper

Tool to allow easy copy-pasting of cipher codes, customizable into custom lists per-game. No internet connection, no extra files.

This is implemented as a Twine Sugarcube 2 project for simplicity (for Leah, specifically).

> **Note**: Code came from [TREZ](https://www.therockmanexezone.com/) and have only been tested where noted (below). There have been some minor changes in the collection (i.e. MegaMan => Mega Man)

- MM SF1: Partially tested
- MM SF2: Tested & Confirmed
- MM SF3: Untested

## Install

Download and open `index.html`.

You can share/backup your filtered codes by using the **Export** button. Saves should function across versions, so long as IDs do not change.

## Development

This is built with Twine SugarCube 2 and Tweego.

> See: [Tweego windows installer](https://github.com/ChapelR/tweego-installer)
> See: [Tweego docs](https://www.motoslave.net/tweego/docs/)

Begin development with with the command below. This watches for file changes within the `src` directory, building files into `index.html`.

```BASH
tweego -w src -o index.html
```

JS, CSS, and .tw/.twee files are discovered automatically.

If you need to fix/change any codes, just edit the relevant file in `src/js/XData`.

Only if you need to access local files (for re-importing from CSV):
Web server install: `npm install -g local-web-server`
web server run: `ws --spa index.html`

## Potential Future Features

Probably not needed, but crossed my mind.

- Filtering tables by tags, or sorting
- Compact view

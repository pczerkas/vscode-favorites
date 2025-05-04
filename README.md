# vscode-favorites

[![vscode version][vs-image]][vs-url]
![][install-url]
![][rate-url]
![][license-url]

An extension that lets the developer mark resources (files or folders) as favorites, so they can be easily accessed.

![](https://raw.githubusercontent.com/pczerkas/vscode-favorites/master/images/preview.gif)

## Install

Launch VS Code Quick Open (`cmd`/`ctrl` + `p`), paste the following command, and press Enter.

```
ext install PCODE-pl.vscode-favorites-plus
```

## Usage

An **Add to Favorites** command in Explorer's context menu saves links to your favorite files or folders into your _*`XYZ`*_`.code-workspace` file if you are using one, else into the `.vscode/settings.json` file of your root folder.

Your favorites are listed in a separate view and can be quickly accessed from there.

### Configuration

```javascript
{
    "favorites.resources": [], // resources path you prefer to mark
    "favorites.sortOrder": "ASC", // DESC, MANUAL
    "favorites.saveSeparated": false // whether to use an extra config file
    "favorites.groups": ["Default"], // the groups you have created
    "favorites.currentGroup": "Default" // determine the current using group
    "favorites.currentFavoritesHookPath": "", // path to cli command to run when current favorites change
}
```

> You normally don't need to modify this config manually. Use context menus instead.

## Changelog

[Changelog on Marketplace](https://marketplace.visualstudio.com/items/PCODE-pl.vscode-favorites-plus/changelog)

## LICENSE

[GPL v3 License](https://raw.githubusercontent.com/pczerkas/vscode-favorites/master/LICENSE)

[vs-url]: https://marketplace.visualstudio.com/items?itemName=PCODE-pl.vscode-favorites-plus
[vs-image]: https://img.shields.io/visual-studio-marketplace/v/PCODE-pl.vscode-favorites-plus
[install-url]: https://img.shields.io/visual-studio-marketplace/i/PCODE-pl.vscode-favorites-plus
[rate-url]: https://img.shields.io/visual-studio-marketplace/r/PCODE-pl.vscode-favorites-plus
[license-url]: https://img.shields.io/github/license/pczerkas/vscode-favorites

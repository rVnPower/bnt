# BNT - Better New Tab
![dark preview](https://raw.githubusercontent.com/rVnPower/bnt/svelte/preview/dark.png)
![light preview](https://raw.githubusercontent.com/rVnPower/bnt/svelte/preview/light.png)

Preview: https://rvnpower.github.io/bnt/public

# Preface
This is an add-on that was inspired by [nightly](https://github.com/damnitharshit/nightly).
The only purpose of this project is to make my new tab looks better.

I will also wrote a blog on how to make this. Soon it will be here.

# Installation
This add-on should work on every Chrome-based browser. Firefox-based browsers also works but the blur.

### Chrome-based browsers
1. Download the source code by cloning this repository or download and extract the .zip file above.
2. Go to your browser's extension page. Example: chrome://extensions/
3. Enable Developer Mode by toggling the switch on the top right.
4. Click the "Load unpacked" button on the top left.
5. Select the source code folder you just downloaded from step 1. (errors about manifest version are safe)
6. Enable the extension and disable any extension that may conflict with it.
7. That's it! Now try to open a new tab.

### Firefox-based browsers
1. Download the source code by cloning this repository or download and extract the .zip file above.
2. Go to the debugging page. Example: about:debugging#/runtime/this-firefox
3. Click the `Load tempotary add-on` button.
4. Select a random file from the source code folder you justs downloaded from step 1.
5. That's it! Blur will not work tho.
6. You can try [this guide](https://dev.to/snkds/how-to-enable-backdrop-filter-in-firefox-2n8e) to enable blur, although
it does not work for me.

# About configuring
### Background images {#bg}
If you are using local paths, then it could only be accessed if it is inside of this extension code directory/repository.

Example:

```
\ bnt
 \ public
  \ assets
  | dark.png # This is accessible (/public/assets/dark.png or ./assets/dark.png)
  | discord.png # This one too (/public/assets/discord.png or ./assets/light.png)
  | ...
  /
 | bundle.css # The core, it will try to access the image.
 | global.css
 | ...
 /
| example.png (/example.png or ../example.png)
```

Currently working on select file function


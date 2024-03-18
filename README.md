This Firefox extension reveals password inputs under the cursor and all password
inputs when a shortcut (by default `A-P`) is activated.

Unlike many similar extensions, this extension works with dynamically loaded inputs.
Unlike [Firefox's experimental feature](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features#toggle_password_display),
this extension makes `C-z` and `C-Z` work (because it changes `type` to `text`).

### installation
#### standard Firefox
Since this extension is not signed by Mozilla, this brand of Firefox can keep it
loaded only until it's closed.

1. Download [a release](https://github.com/nnym/password-revealer/releases).
2. Navigate to `about:debugging`.
3. Select "This Firefox" on the left.
4. Click "Load Temporary Add-on...".
5. Select the release from step 1.

#### Firefox Developer Edition
1. Navigate to `about:config`.
2. Set `xpinstall.signatures.required` to `false`.
3. Download [a release](https://github.com/nnym/password-revealer/releases).
4. Navigate to `about:addons`.
5. Click the gear button at the top and then "Install Add-on From File...".
6. Select the release from step 3.

### building
7zip and Make are required.

```
make
```

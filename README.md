# makeitsimpleweb.github.io

[Jekyll](https://jekyllrb.com/) site on GitHub Pages for [Make.It.Simple](https://makeitsimpleweb.github.io): a homepage listing the apps from the [Play Store developer page](https://play.google.com/store/apps/dev?id=7477280931481749251), plus a privacy policy for each app.

Privacy policy URL pattern (paste into Play Console):

    https://makeitsimpleweb.github.io/<slug>/privacy-policy.html

## Adding an app

1. Add an entry to `_data/apps.yml` (`name`, `slug`, `package`).
2. Add `images/apps/<package>-feature.webp` (16:9) and `images/apps/<package>-icon.webp`.
3. Add `<slug>/privacy-policy.html`, copying an existing one and updating the name and the "Last updated" date.

Contact: wendywooden14@gmail.com

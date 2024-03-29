# Yireo Theme optimizations

### General changes
- See https://github.com/yireo-training/magento2-example-jquery-upgrade
- Upgrade underscore to 1.10.2

### RequireJS configuration `requirejs-config.js`
- Skip `datepicker` and `color-picker` in Knockout bindings
- Remove `calendar.js`
- Remove jQuery Migrate

### File `Magento_Theme/layout/default.xml`
- Remove unneeded `calendar.css` and `gallery.css`
- Remove `yotpo_widget_script` block

### Other tips
- Disable CAPTCHA via **Stores > Configuration > Customer Configuration**
    - `magerun2 config:set customer/captcha/enable 0`
    
### Benchmark
http://m2.sirius.yr/men/tops-men/jackets-men.html

- Luma theme
    - 206 requests
        - 163 JavaScript
    - 929Kb transferred
        - 657Kb JavaScript
    - 3.0MB resources
        - 2.2Mb JavaScript
    - Finish 3.11s
    - DOMContentLoaded: 1.08s
    - Load: 1.96s
- Yireo theme
    - 200 requests
        - 156 JavaScript
    - 867Kb transferred
        - 631Kb JavaScript
    - 3.2MB resources
        - 2.1Mb JavaScript
    - Finish 3.10s
    - DOMContentLoaded: 1.07s
    - Load: 1.89s

# TODO
- See https://medium.com/@jahvi/how-to-improve-magento-2-page-speed-insights-score-bb37e8946192

---
layout: post
title: Google Tag Manager and Trusted Types
published: false
categories:
  - web
tags:
  - javascript csp trusted-types google tag-manager
---

[CSP Level 3](https://www.w3.org/TR/CSP3/) [trusted types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) provide a mechanism for trusted scripts i.e. those provided with a valid [nonce](https://content-security-policy.com/nonce/) or similar, to load additional scripts. This can be useful for loading items such as [Google Tag Manager](https://tagmanager.google.com/#/home) scripts when we will not know the actual tag id until runtime (mabe it's environment specific). This works fine with [CSP Level 3](https://www.w3.org/TR/CSP3/) compliant browsers (Chrome/Firefox/Edge), however, at the time of writing (November 2021) [Safari only supports CSP Level 2](https://content-security-policy.com/) and has [no support for trusted types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types). Attempting to simply 'bypass' the [trusted types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) and inject the script result in the following console error (which is expected as it violates [CSP Level 2](https://www.w3.org/TR/CSP2/)):

```
Refused to execute a script because its hash, its nonce, or 'unsafe-inline' does not appear in the script-src directive of the Content Security Policy
```

To maintain [CSP Level 3](https://www.w3.org/TR/CSP3/) in compliant browsers while not breaking in Safari the [Google Tag Manager](https://tagmanager.google.com/#/home) script must appear in the 'root' document and be 'stamped' with a [nonce](https://content-security-policy.com/nonce/) (making it [CSP Level 2](https://www.w3.org/TR/CSP2/) compliant) and be modified to use [trusted types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) for [CSP Level 3](https://www.w3.org/TR/CSP3/) compatibility.

The default snippet provided by Google:

```javascript
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',',<YourContainerId>');</script>
<!-- End Google Tag Manager -->
```

This does not make use of [trusted types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) and is therfore blocked by [CSP Level 3](https://www.w3.org/TR/CSP3/) compliant browsers. The following can be used to add this capability:

```javascript
{% highlight javascript %}
<!-- Google Tag Manager -->
<script>
    (function (w, d, s, l, i) {
        // The following lines are unmodified from the standard snippet
        w[l] = w[l] || [];// Use existing 'window.dataLayer' or set to empty array
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;

        // --- Start modified section ---
        // Extra processing to play nice with trusted types when available
        // Build the 'string' version of the src value
        let gtagScriptElementSource = "https://www.googletagmanager.com/gtag/js?id=" + i + dl;

        if (window.trustedTypes?.createPolicy) {
            // Allow any script or script-url, which we can use for gtag.js only.
            const gtagPolicy = window.trustedTypes.createPolicy("gtag", {
                createScript: x => x,
                createScriptURL: x => x
            });

            // Where trusted types are availble, run through the policy
            gtagScriptElementSource = gtagPolicy.createScriptURL(gtagScriptElementSource);
        }

        // Either the original string or the processed policy object
        j.src = gtagScriptElementSource;
        // --- End modified section ---

        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', '<YourContainerId>');
</script>
<!-- End Google Tag Manager -->
{% endhighlight %}
```

## \* Notes on CSP levels in relation to this

[CSP Level 2](https://www.w3.org/TR/CSP2/) means the server will stamp each Javascript block with a secret nonce/key, the browser will only execute scripts with a correct key - scripts without keys won't be run.

[CSP Level 3](https://www.w3.org/TR/CSP3/) adds [trusted types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) to the browser which lets scripts with a nonce/key load 'other' scripts (at runtime/after the backend injected the key).

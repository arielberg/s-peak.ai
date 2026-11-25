# Voice examples

`/examples/` and `/en/examples/` are linked from their respective home page navigation and footer. Both routes are static directories with `index.html` files. The English page has English metadata, navigation, instructions, cards, controls and status messages. The actual demo flows remain in Hebrew for now. `examples.html` is retained only as a redirect for old links. The examples use the
existing public SIP.js session endpoint and calls internal Asterisk extensions:

| Example | Extension | Flow |
| --- | --- | --- |
| פקידת הקבלה של s-peak.ai / s-peak.ai receptionist | 404 | `lead` (Shiri, s-peak.ai) |
| קול קו / Kol Kav | 406 | `transit_help` (`transit-assist`) |
| קפה קליק / Cafe Click | 408 | `cafe_takeaway` |

The guest endpoint already uses `from-internal`; these destinations do not make
PSTN calls. There is no fallback to the general ElevenLabs sales demo. Credentials
are obtained at call time and never stored in the website source or localStorage.
Only one example can connect at a time. End call, remote hangup, connection timeout
and page exit release the microphone and SIP connection.

The receptionist uses the existing s-peak.ai inbound `lead` flow. Its destination
is verified against `voip-v4/infra/asterisk/extensions.conf` and
`voip-v4/knowledge/engineering/patterns/inbound-routing.md`: internal extension
404 runs Shiri with the s-peak.ai `lead` flow. The `lead` prompt identifies the
company as s-peak.ai and supports product questions and inquiries. Extension 405
is the separate Web Labs `office` flow and is not used here. This website update
adds a front-end entry only; it does not create or change any backend flow.

## Add an example

Add an entry to `examples-catalog.mjs`, with a unique `id`, an existing internal
`dial` extension, a theme/icon and Hebrew/English text. The page renders the list
in catalog order. Add a new SVG icon in `examples.mjs` if needed. The telephony
dialplan must already provide the desired flow; do not use a public phone number.
The controller looks up targets from the catalog, never from URL parameters.

## Verify

```sh
node examples-call.test.mjs
python3 -m http.server 5174 --bind 127.0.0.1
```

Open `http://127.0.0.1:5174/examples/` and `http://127.0.0.1:5174/en/examples/` for layout checks. The automated tests
use fake media/SIP adapters, do not open a microphone and do not dial the server.
They cover separate destinations, concurrent clicks, cancellation while permission
or connection is pending, remote hangup, errors, timeout and blocked autoplay.

For live calls use HTTPS and an origin permitted by the telephony API CORS
configuration (the existing site origin is `https://s-peak.ai`). The page inherits
the existing API host; `window.SPEAK_CONFIG.apiBase` and `webrtcUserId` can override
it before the modules load. The examples are SIP calls, independent of the home
page's `talkMode`. A real microphone/audio end-to-end check is a separate check
from these automated tests.


## Localized URLs

- Hebrew home: `/` → `index.html`.
- English home: `/en/` → `en/index.html`.
- Hebrew examples: `/examples/` → `examples/index.html`.
- English examples: `/en/examples/` → `en/examples/index.html`.

Language links navigate to the matching page in the other language and preserve the current section anchor. The URL/document language takes precedence over previously saved language preferences, including after reloads and direct visits. Internal page links use directory paths; shared scripts, styles and images use root-relative URLs so nested pages resolve them correctly. Canonical and hreflang links identify each language version. Keep the static localized markup and metadata in both versions synchronized when updating page content; shared dynamic translations stay in `script.js` and `examples.mjs`.

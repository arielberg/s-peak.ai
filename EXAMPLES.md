# Voice examples

`examples.html` is linked from the home page navigation and footer. It uses the
existing public SIP.js session endpoint and calls internal Asterisk extensions:

| Example | Extension | Flow |
| --- | --- | --- |
| קול קו / Kol Kav | 406 | `transit_help` (`transit-assist`) |
| קפה קליק / Cafe Click | 408 | `cafe_takeaway` |

The guest endpoint already uses `from-internal`; these destinations do not make
PSTN calls. There is no fallback to the general ElevenLabs sales demo. Credentials
are obtained at call time and never stored in the website source or localStorage.
Only one example can connect at a time. End call, remote hangup, connection timeout
and page exit release the microphone and SIP connection.

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

Open `http://127.0.0.1:5174/examples.html` for layout checks. The automated tests
use fake media/SIP adapters, do not open a microphone and do not dial the server.
They cover separate destinations, concurrent clicks, cancellation while permission
or connection is pending, remote hangup, errors, timeout and blocked autoplay.

For live calls use HTTPS and an origin permitted by the telephony API CORS
configuration (the existing site origin is `https://s-peak.ai`). The page inherits
the existing API host; `window.SPEAK_CONFIG.apiBase` and `webrtcUserId` can override
it before the modules load. The examples are SIP calls, independent of the home
page's `talkMode`. A real microphone/audio end-to-end check is a separate check
from these automated tests.

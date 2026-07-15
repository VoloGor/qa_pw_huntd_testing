# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/mainPageForCompanies.spec.js >> Huntd Homepage - Companies Landing Page >> should allow switching between Engineers and Companies page views
- Location: tests/navigation/mainPageForCompanies.spec.js:6:7

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/vg/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-x64/chrome-headless-shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/pz/ms9mrsv52nb_s7l1l8w8225r0000gn/T/playwright_chromiumdev_profile-mb6xut --remote-debugging-pipe --no-startup-window
<launched> pid=95136
[pid=95136][err] [0715/182921.921618:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
[pid=95136][err] [0715/182921.924808:ERROR:net/dns/dns_config_service_posix.cc:138] DNS config watch failed to start.
[pid=95136][err] [0715/182921.925597:FATAL:base/apple/mach_port_rendezvous_mac.cc:159] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.95136: Permission denied (1100)
Call log:
  - <launching> /Users/vg/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-x64/chrome-headless-shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/pz/ms9mrsv52nb_s7l1l8w8225r0000gn/T/playwright_chromiumdev_profile-mb6xut --remote-debugging-pipe --no-startup-window
  - <launched> pid=95136
  - [pid=95136][err] [0715/182921.921618:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
  - [pid=95136][err] [0715/182921.924808:ERROR:net/dns/dns_config_service_posix.cc:138] DNS config watch failed to start.
  - [pid=95136][err] [0715/182921.925597:FATAL:base/apple/mach_port_rendezvous_mac.cc:159] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.95136: Permission denied (1100)
  - [pid=95136] <gracefully close start>
  - [pid=95136] <kill>
  - [pid=95136] <will force kill>
  - [pid=95136] exception while trying to kill process: Error: kill EPERM
  - [pid=95136] <process did exit: exitCode=null, signal=SIGTRAP>
  - [pid=95136] starting temporary directories cleanup
  - [pid=95136] finished temporary directories cleanup
  - [pid=95136] <gracefully close end>

```
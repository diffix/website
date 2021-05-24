import * as ackeeTracker from "./vendor/ackee-tracker";
import { beforeUpdate } from "svelte";

let stopFn;
let recordedPathname = undefined;

function isNewLocation() {
  return !recordedPathname || recordedPathname !== window.location.pathname;
}

function trackLocation(instance, domainId, opts) {
  if (typeof window !== "undefined" && isNewLocation()) {
    // Stop recording the visit duration for the previous location
    if (stopFn !== undefined) {
      stopFn();
      stopFn = undefined;
    }

    const attributes = ackeeTracker.attributes(opts.detailed);
    const locationData = {
      ...attributes,
      siteLocation: window.location.href,
      siteReferrer: document.referrer
    };

    const { stop } = instance.record(domainId, locationData);

    stopFn = stop;
    recordedPathname = window.location.pathname;
  }
}

export function useAckee(server: string, domainId: string, opts = {}): void {
  if (typeof window !== "undefined") {
    const instance = ackeeTracker.create(window, server, opts);
    trackLocation(instance, domainId, opts);
    beforeUpdate(() => {
      trackLocation(instance, domainId, opts);
    });
  }
}

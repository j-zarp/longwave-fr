import firebase from "firebase/app";
import "firebase/analytics";

// tracking disabled for privacy reasons
export function RecordEvent(
  eventName: string,
  eventBody: { [parameterName: string]: string }
) {}



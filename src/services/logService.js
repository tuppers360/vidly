//import * as Sentry from "@sentry/browser";

function init() {
  //   Sentry.init({
  //     dsn: "https://06fa6ae43c2f4e729fa42fdf168be03a@sentry.io/1476780"
  //   });
}

function log(error) {
  //  Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};

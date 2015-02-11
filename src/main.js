
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('./ui-aurelia')
    .plugin('./ui-nav-bar')
    .plugin('../plugins/toggle/ui-toggle')

  aurelia.start()
  .then(function(a) {
      console.log(a)
      // return
      return a.setRoot('app', document.body)
  });
}


import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('components/trend')
    .feature('components/pie');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
/*
function initialize() {
  WebCC.Extensions.HMI.DomainLogic.onDLSendData.subscribe(getCurrentLanguage);
  WebCC.Extensions.HMI.DomainLogic.sendDLEvent(109, {});
}

function interfaceProperties() {
  let Interface = {
    properties: {}
  };
  return Interface;
}

WebCC.start(
  function(result) {
    if (result) {
      initialize();
      interfaceProperties();
    } else {
      console.log('Initialization error');
    }

    aurelia.setRoot();
  }, interfaceProperties(), ['HMI', 'Dialogues'], 10000);
  */

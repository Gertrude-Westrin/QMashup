const config = {
    host: 'pu2je9nt8k3awgt.eu.qlikcloud.com', //this is my tenant account
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: 'uAkLBIs5cLtf-23Ui5cs6VjnKMRxEFin'
  };
  require.config({
    baseUrl:`https://${config.host}/resources`,
    webIntegrationId: config.webIntegrationId
  });

  require(['js/qlik'], (qlik) => {
    const app = qlik.openApp('43a466b4-2e4c-4dc8-938f-70c5a9a3074a', config);
    app.visualization.get('EAjjuyE').then(vis => vis.show('QV01'));
    qlik.on('error', (error) => console.error(error));  
});



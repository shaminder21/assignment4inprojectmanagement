const electron=require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready',function(){
mainWindow = new BrowserWindow({width:100%,height:auto,backgroundColor:gray)};
mainWindow.loadURL(url.format({
    pathname:path.join(_dirname , 'About — Library Management System.html','Contact — Library Management System.html',
    'Events — Library Management System','Gallery — Library Management System','Library Management System.html'),
    protocol:'file',
    salashes:true
}));

});
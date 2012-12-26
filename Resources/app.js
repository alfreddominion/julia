// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#C8C8A9');

var win = Titanium.UI.createWindow({  
    title:'Julia',
    width : '100%',
    height : '100%',
    backgroundColor:'#C8C8A9'
});

var webview = Ti.UI.createWebView({
    width : '100%',
    height : '100%',
    url: 'ui/markup/main.html'
});

win.add(webview);
win.open();

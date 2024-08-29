function FindProxyForURL(url, host) {
    // Define the proxy server you want to use
    var proxyServer = "PROXY your.proxy.server:port";

    // Specify the domains for which to use the proxy
    var googleDomains = ["google.com", "www.google.com", "mail.google.com", "drive.google.com", "docs.google.com"];

    // Check if the request is for a Google domain
    for (var i = 0; i < googleDomains.length; i++) {
        if (shExpMatch(host, googleDomains[i])) {
            return proxyServer;
        }
    }

    // Default behavior: no proxy
    return "DIRECT";
}
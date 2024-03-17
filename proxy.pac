function FindProxyForURL(url, host) {
  // Direct connections to these domains
  if (shExpMatch(host, "bing.com") ||
      shExpMatch(host, "example2.com")) {
    return "DIRECT";
  }


 return "PROXY proxy.example.com:8080";

function FindProxyForURL(url, host) {
  // Direct connections to these domains
  if (shExpMatch(host, "example.com") ||
      shExpMatch(host, "example2.com")) {
    return "DIRECT";
  }


if (shExpMatch(host, "bing.com") ||
      shExpMatch(host, "example2.com")) {
    return "PROXY proxy.example.com:8080";
      }


}

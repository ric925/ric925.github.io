function FindProxyForURL(url, host) {
  // Direct connections to these domains
  if (shExpMatch(host, "bing.com") ||
      shExpMatch(host, "yahoo.com")) {
    return "DIRECT";
  }


if (shExpMatch(host, "google.co.uk") ||
      shExpMatch(host, "youtube.com")) {
    return "PROXY proxy.example.com:8080";
      }


}

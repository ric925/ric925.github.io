function FindProxyForURL(url, host) {
  if (isInNet(myIpAddress(), "10.3.38.0", "255.255.254.0")) {
    return "PROXY proxy.example.com:8080";
  }

  if (isInNet(myIpAddress(), "10.3.0.0", "255.255.255.0")) {
    return "PROXY proxy.example.com:8080";
  }

  if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
    if(shExpMatch(host, "bing.com")){
      return "PROXY proxy.example.com:8080";
    }
  }

return "DIRECT";

}

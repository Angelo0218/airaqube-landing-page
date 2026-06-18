function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('AiraQube 智慧空氣管家')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

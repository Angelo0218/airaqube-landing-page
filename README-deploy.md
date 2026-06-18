# AiraQube 部署說明

## 專案檔案

- `index.html`：可直接在本機瀏覽器開啟的一頁式網站。
- `assets/`：AI 生成圖片與轉檔後的 WebP 圖片。
- `gas/Code.gs`：Google Apps Script Web App 入口。
- `gas/Index.html`：已內嵌圖片 data URI 的 Apps Script HTML。
- `planning.md`：產品概念、網站規劃與 AI 生圖提示詞。
- `submission-checklist.md`：繳交前檢查表。

## 已完成的 Apps Script 部署

- Apps Script 專案：
  https://script.google.com/d/1jy-uYxX-HHIDQMvB18byjCCGMT1sZkPlyDD_e215FX9hh0gCA26w9npf/edit
- Apps Script Web App 公開網址（正式繳交主網址，直接開啟就是完整網站）：
  https://script.google.com/macros/s/AKfycbxZvuiGwV2RdRMXv8bts-454c3pI2uZiz5PzLLMPOlUc7OYZx7cHuQZ1__-T7exwF6j/exec
- 部署版本：Version 1
- 部署 ID：
  `AKfycbxZvuiGwV2RdRMXv8bts-454c3pI2uZiz5PzLLMPOlUc7OYZx7cHuQZ1__-T7exwF6j`

## Google Apps Script 部署指令紀錄

```powershell
cd gas
npx @google/clasp push --force
npx @google/clasp version "AiraQube one-page site"
npx @google/clasp deploy --versionNumber 1 --description "AiraQube Web App"
```

## 繳交內容

- LLM 對話分享網址。
- 正式上線網站網址：
  https://script.google.com/macros/s/AKfycbxZvuiGwV2RdRMXv8bts-454c3pI2uZiz5PzLLMPOlUc7OYZx7cHuQZ1__-T7exwF6j/exec

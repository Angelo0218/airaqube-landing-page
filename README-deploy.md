# AiraQube 部署說明

## 專案檔案

- `index.html`：可直接在本機瀏覽器開啟的一頁式網站。
- `assets/`：AI 生成圖片與轉檔後的 WebP 圖片。
- `gas/Code.gs`：Google Apps Script Web App 入口。
- `gas/Index.html`：已內嵌圖片 data URI 的 Apps Script HTML。
- `planning.md`：產品概念、網站規劃與 AI 生圖提示詞。
- `submission-checklist.md`：繳交前檢查表。

## 正式公開網站

- GitHub Pages 正式網址（直接開啟就是完整網站介面）：
  https://angelo0218.github.io/airaqube-landing-page/
- GitHub repo：
  https://github.com/Angelo0218/airaqube-landing-page

## 備用 Apps Script 部署紀錄

這個網址是 Google Apps Script Web App 備用部署，若瀏覽器或 Google 帳號導向異常，請改用 GitHub Pages 正式網址。

- Apps Script Web App：
  https://script.google.com/macros/s/AKfycbxZvuiGwV2RdRMXv8bts-454c3pI2uZiz5PzLLMPOlUc7OYZx7cHuQZ1__-T7exwF6j/exec

```powershell
cd gas
npx @google/clasp push --force
npx @google/clasp version "AiraQube one-page site"
npx @google/clasp deploy --versionNumber 1 --description "AiraQube Web App"
```

## 繳交內容

- LLM 對話分享網址。
- 正式上線網站網址：
  https://angelo0218.github.io/airaqube-landing-page/

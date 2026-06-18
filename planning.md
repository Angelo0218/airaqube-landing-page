# AiraQube 智慧空氣管家作業企劃

## 產品概念

- 產品名稱：AiraQube 智慧空氣管家
- 產品定位：AI 室內空氣健康中樞，服務家庭、遠距工作者與小型商業空間。
- 核心功能：即時偵測 PM2.5、CO2、VOC、溫濕度，AI 預警，通風建議，家電聯動，APP 趨勢分析。
- 解決的痛點：傳統空氣偵測器只顯示數字，使用者不知道原因與下一步；商業空間也缺少連續紀錄。
- 目標客群：租屋族、小家庭、過敏族群、遠距工作者、咖啡店、教室、診所與共享辦公室。
- 使用情境：居家辦公、客廳烹飪後通風、會議室多人開會、商業空間日報管理。
- 產品特色：可理解的空氣分數、個人化 AI 建議、跨設備智慧聯動、可展示的商業紀錄。

## 網站區塊規劃

1. Hero Section：產品主視覺、Slogan、立即體驗、免費試用、預約購買 CTA。
2. 痛點情境：使用者遇到的問題與現有方案缺點。
3. 產品解決方案：功能介紹、AI 特色與技術亮點。
4. 使用情境：居家辦公、日常生活、商業應用與使用流程。
5. 產品特色：至少 3 項特色，網站實作 4 項。
6. CTA 區塊：立即體驗、免費試用、預約購買表單。

## AI 生圖資產

生成工具：內建 `image_gen`。

- `assets/product-cutout.png`：重新生成並去背的產品外觀圖，用於 Hero 與商品展示。
- `assets/packaging.png`：包裝設計與開箱配置。
- `assets/app-interface.png`：APP 介面視覺。
- `assets/user-operating.png`：使用者操作產品情境。
- `assets/daily-life.png`：日常生活應用情境。
- `assets/commercial-space.png`：商業應用場景。

網站使用壓縮版 WebP 圖片，原始 PNG 保留作為作業佐證。
其中 `product-cutout.png` 由純色背景生圖後進行背景移除，另輸出 `product-cutout.webp` 作為網站用透明圖片。

## 生圖 Prompt 紀錄

### 去背產品主圖

Use case: background-extraction. A clean original consumer electronics product cutout for AiraQube, a compact rounded-rectangle indoor air quality monitor with a precise symmetrical shape, flat front face, subtle side ventilation grid, small circular glass display in the center, and a thin graphite base. Perfectly flat solid chroma-key background for local background removal. Avoid asymmetrical, melted, warped, blob-like, or toy-like shapes.

### 包裝設計

Use case: product-mockup. Premium retail packaging concept for a fictional AI indoor air health device, showing a rigid box, inner tray, quick-start card, and compact rounded-square device partially visible beside it. No readable text, no brand logo, no watermark.

### APP 介面

Use case: ui-mockup. Polished mobile app home screen for AiraQube AI indoor air health companion, showing an air quality score ring, room cards, AI recommendation panel, device control toggles, and weekly trend chart.

### 使用者操作產品

Use case: photorealistic-natural. A person using a compact AI indoor air health device on a home office desk, checking a smartphone companion app while the small device glows softly nearby.

### 日常生活應用

Use case: photorealistic-natural. Compact AI indoor air health device used in a small family living room, quietly monitoring air quality while people relax and cook nearby in an open-plan apartment.

### 商業應用場景

Use case: photorealistic-natural. Compact AI indoor air health devices used in a small business meeting room or coworking space, with a manager viewing air quality insights on a tablet and employees in a meeting.

## 繳交提醒

- LLM 對話分享網址：請在目前使用的 LLM 工具介面中產生分享連結。
- Google 協作平台網址：完成 Google Apps Script Web App 部署後，把 Web App 嵌入 Google 協作平台，再發布協作平台並取得公開網址。

# 北科大 111-1 網路安全期末 Lab

## reflect檔案說明:
1. unsafe :無防護
2. safe_low :使用 str_replace 把 `<script>` 轉換為 `NULL`，但可被大小寫混淆、標籤雙寫繞過
3. safe_medium :使用正規表達式，但仍可被 `<img>` 、 `<body>` 等標籤繞過。
```
測試: <img src=xss onerror=alert(1)>
```
4. safe :使用htmlspecialchars
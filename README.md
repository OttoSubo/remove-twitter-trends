#Twitter/X Cleanup

> **Disclaimer**: I literally made this in 5 minutes using DeepSeek's AI. I don't know web development. Use at your own risk. No updates/support planned.

![Before/After Demo](assets/screenshot.png)

## 💻 Installation (Chrome)
1. [Download ZIP](https://github.com/OttoSubo/remove-twitter-trends/archive/main.zip)
2. Unzip anywhere
3. Chrome: Go to `chrome://extensions`
4. Toggle **"Developer mode"** ON (top-right)
5. Click **"Load unpacked"**
6. Select the unzipped folder

## 🔧 How It Works
This removes:
- "Trending now" sections
- Premium subscription nagging

```javascript
// Basically finds and deletes stuff
document.querySelectorAll('.annoying-class').forEach(el => el.remove());
```

## 🪪 License - Do Whatever
This is **PUBLIC DOMAIN**:
- ✅ Steal this code
- ✅ Sell it
- ✅ Modify it
- ✅ Claim you made it
- ✅ Use in nuclear reactors

No attribution needed. No warranties. Not responsible if this breaks Twitter/X.

## 🤷 Why Bother?
I just wanted my feed clean and i couldnt find any addons for it so i made this and wanted to share. Made this with:
- 0% Google
- 100% DeepSeek AI
- 0% actual coding skills

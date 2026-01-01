# Karen Tonoyan Portfolio - Setup Guide

## 🎯 Backup Information

This repository contains a complete, clean backup of the portfolio website structure. All files have been created to replace any corrupted or mismanaged code from previous attempts.

## 📁 Project Structure

```
karentonoyan.pl/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling (responsive)
├── assets/             # Folder for images (sunset.jpg, etc)
├── SETUP.md           # This file
├── README.md          # Project description
└── LICENSE            # GPL-3.0
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Karen86Tonoyan/karentonoyan.pl.git
cd karentonoyan.pl
```

### 2. Add Sunset Image
- Place your sunset image in the `assets/` folder
- Rename it to `sunset.jpg` (or update the path in `index.html` line 29)
- Recommended size: 800x600px or larger

### 3. Deploy to Server
- Upload all files to your web server
- Ensure `.htaccess` is configured properly (if using Apache)
- Test at `https://karentonoyan.pl`

## 📝 Customization

### Update Personal Info
Edit these sections in `index.html`:
- **Line 10-14**: Navigation links
- **Line 27-31**: Hero section (name, subtitle, description)
- **Line 36-68**: Portfolio cards (titles, descriptions, links)
- **Line 73-81**: About section (bio, tech stack)
- **Line 87-91**: Contact section (email, social links)

### Modify Colors
Edit color variables in `styles.css` (lines 1-9):
```css
:root {
  --primary-color: #1e3c72;        /* Change this */
  --secondary-color: #2a5298;      /* Change this */
  --accent-color: #ff6b6b;         /* Change this */
}
```

## ✨ Features

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Modern Layout** - Hero section, portfolio grid, about, contact
✅ **Smooth Animations** - Hover effects, transitions
✅ **Professional Styling** - Gradient backgrounds, shadows, clean typography
✅ **SEO Ready** - Proper semantic HTML
✅ **Fast Loading** - Minimal dependencies, pure HTML/CSS

## 🔧 Server Configuration

### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [L]
</IfModule>
```

### Security
- ✅ No database required
- ✅ No backend dependencies
- ✅ Safe from SQL injection
- ✅ Static files only

## 📞 Support

If you encounter issues:
1. Check that all files are uploaded correctly
2. Verify file permissions (644 for files, 755 for folders)
3. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
4. Check console for errors (F12 → Console tab)

## 🎨 Next Steps

1. Add sunset.jpg to `assets/`
2. Update personal info in `index.html`
3. Customize colors in `styles.css`
4. Test responsive design (use browser DevTools)
5. Deploy to server
6. Test live site

## 📄 License

GPL-3.0 License - See LICENSE file

---

**Backup Date**: January 1, 2026
**Status**: ✅ Ready for Deployment

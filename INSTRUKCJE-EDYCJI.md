# Instrukcje edycji strony karentonoyan.pl

## 📸 Jak zmienić zdjęcie profilowe

1. **Przygotuj zdjęcie:**
   - Zalecany rozmiar: 400x400px lub większy (kwadrat)
   - Format: JPG, PNG lub WEBP
   - Nazwa pliku: `profile-photo.jpg` (lub inna nazwa)

2. **Umieść zdjęcie w katalogu:**
   - Skopiuj plik zdjęcia do głównego katalogu strony
   - Lub umieść go w podkatalogu `/assets/` lub `/images/`

3. **Zaktualizuj ścieżkę w index.html:**
   - Otwórz plik `index.html`
   - Znajdź linię (około linii 42):
     ```html
     <img src="profile-photo.jpg" alt="Karen Tonoyan" class="hero-image">
     ```
   - Zmień `profile-photo.jpg` na nazwę swojego pliku, np.:
     ```html
     <img src="moje-zdjecie.jpg" alt="Karen Tonoyan" class="hero-image">
     ```
     lub jeśli plik jest w podkatalogu:
     ```html
     <img src="assets/moje-zdjecie.jpg" alt="Karen Tonoyan" class="hero-image">
     ```

## 📄 Jak zmienić plik CV (PDF)

1. **Przygotuj CV:**
   - Format: PDF
   - Zalecana nazwa: `cv-karen-tonoyan.pdf` (lub dowolna inna)
   - Upewnij się, że plik nie jest zbyt duży (zalecane max 5 MB)

2. **Umieść plik w katalogu:**
   - Skopiuj plik CV do głównego katalogu strony
   - Lub umieść go w podkatalogu `/assets/` lub `/docs/`

3. **Zaktualizuj ścieżkę w index.html:**
   - Otwórz plik `index.html`
   - Znajdź linię (około linii 74):
     ```html
     <a href="cv-karen-tonoyan.pdf" class="btn btn-primary" download>
     ```
   - Zmień `cv-karen-tonoyan.pdf` na nazwę swojego pliku, np.:
     ```html
     <a href="moje-cv.pdf" class="btn btn-primary" download>
     ```
     lub jeśli plik jest w podkatalogu:
     ```html
     <a href="assets/moje-cv.pdf" class="btn btn-primary" download>
     ```

## ✏️ Jak edytować teksty na stronie

### Zmiana danych kontaktowych:
1. Otwórz `index.html`
2. Znajdź sekcję kontaktu (wyszukaj `<section id="contact"`)
3. Edytuj adresy email, numery telefonu według potrzeb

### Zmiana treści sekcji:
1. Otwórz `index.html`
2. Znajdź odpowiednią sekcję po ID:
   - `#hero` - sekcja powitalna
   - `#about` - O mnie
   - `#ai-desc` - Opis AI
   - `#prompts` - Porady
   - `#tools` - Narzędzia AI
   - `#automation` - Automatyzacja
   - `#security` - Bezpieczeństwo
   - `#contact` - Kontakt
3. Edytuj tekst bezpośrednio w znacznikach HTML

## 🎨 Jak zmienić kolory (opcjonalne)

1. Otwórz plik `styles.css`
2. Na początku pliku znajdziesz zmienne CSS (linie 8-18):
   ```css
   :root {
       --black: #0A0A0A;
       --yellow: #FFD700;
       --gold: #D4AF37;
       /* itd. */
   }
   ```
3. Zmień wartości kolorów hex (np. `#FFD700` na `#FFA500` dla pomarańczowego)
4. Zapisz plik - wszystkie kolory zaktualizują się automatycznie

## 🖼️ Dodatkowe zdjęcia

Jeśli chcesz dodać więcej zdjęć do innych sekcji:

1. Umieść zdjęcia w katalogu głównym lub `/assets/`
2. W `index.html` dodaj tag obrazu:
   ```html
   <img src="nazwa-zdjecia.jpg" alt="Opis" style="max-width: 100%; border-radius: 8px;">
   ```
3. Możesz dodać klasę `fade-in` dla animacji:
   ```html
   <img src="nazwa-zdjecia.jpg" alt="Opis" class="fade-in" style="max-width: 100%;">
   ```

## 📱 Testowanie na urządzeniach mobilnych

Po wprowadzeniu zmian:
1. Otwórz stronę w przeglądarce
2. Naciśnij F12 (Chrome/Firefox) aby otworzyć narzędzia deweloperskie
3. Kliknij ikonę "Toggle device toolbar" (lub Ctrl+Shift+M)
4. Przetestuj wygląd na różnych rozmiarach ekranu:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1920px

## 🚀 Publikacja zmian

### Jeśli używasz GitHub Pages:
1. Zapisz wszystkie zmiany
2. Wykonaj commit:
   ```bash
   git add .
   git commit -m "Zaktualizowano zdjęcie i CV"
   git push
   ```
3. Strona automatycznie się zaktualizuje (może potrwać 1-5 minut)

### Jeśli używasz FTP/hosting:
1. Prześlij zaktualizowane pliki na serwer:
   - `index.html`
   - `styles.css`
   - Nowe zdjęcia/CV
2. Sprawdź czy pliki zostały poprawnie wgrane

## ⚠️ Typowe problemy i rozwiązania

### Zdjęcie się nie wyświetla:
- Sprawdź czy ścieżka w `src=""` jest poprawna
- Sprawdź wielkość liter (Linux jest case-sensitive)
- Sprawdź czy plik rzeczywiście jest w podanej lokalizacji
- Spróbuj wyczyscić cache przeglądarki (Ctrl+Shift+R)

### CV nie pobiera się:
- Sprawdź czy plik PDF jest w poprawnej lokalizacji
- Upewnij się że nazwa pliku w `href=""` jest dokładnie taka sama jak nazwa pliku
- Sprawdź uprawnienia pliku (musi być dostępny do odczytu)

### Strona wygląda źle na telefonie:
- Sprawdź czy masz tag viewport w `<head>`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Usuń cache przeglądarki mobilnej
- Sprawdź czy nie usunąłeś przypadkowo @media queries w styles.css

## 📞 Pomoc techniczna

Jeśli masz problemy z edycją strony:
- Sprawdź czy nie popełniłeś błędu składniowego w HTML (brakujące tagi, cudzysłowy, itp.)
- Użyj walidatora HTML: https://validator.w3.org/
- Przywróć backup plików jeśli coś poszło nie tak

## 💡 Porady

1. **Zawsze rób backup** plików przed większymi zmianami
2. **Testuj lokalnie** przed wgraniem na serwer produkcyjny
3. **Optymalizuj zdjęcia** przed wgraniem (użyj TinyPNG lub podobnego narzędzia)
4. **Zachowaj spójność** - używaj podobnych rozmiarów i stylów dla wszystkich zdjęć
5. **Nie usuwaj** klas CSS (jak `fade-in`, `hero-image`, itp.) - są potrzebne do stylowania

---

**Autor:** Karen Tonoyan
**Data:** 2025
**Wersja:** 1.0

# 🚀 Outlier Number

Aplikacja frontendowa polagająca na znalezieniu odstającej liczby. Jak to działa? Oto przykłady pomagające w zrozumieniu:
- wpisujesz w pole tekstowe następujący ciąg cyfr: <strong>2, 4, 0, 100, 4, 11, 2602, 36.</strong> Po kliknięciu 
przycisku "Wyszukaj" lub kliknięciu Enter na klawiaturze przekieruje Cię na podstronę, na której znajdziesz 
odstającą liczę z podanych, w tym przypadku <strong>11</strong>, bo jest to jedyna liczba nieparzysta.
- po podaniu takiego ciągu cyfr: <strong>160, 3, 1719, 19, 11, 13, -21</strong> wypisane zostanie <strong>160</strong> bo to jedyna parzysta liczba.

## 📦 Technologie

- ⚡ **Vite** – ultraszybki bundler
- 🧩 **Vue 3** – progresywny framework JavaScript
- 🔒 **TypeScript** – typowanie dla lepszej stabilności kodu
- 🌐 **Vue Router** – routing aplikacji SPA
- 🔔 **Vue Toastification** – powiadomienia toast
- ✅ **Vitest** – szybkie i lekkie testy jednostkowe

## 🚀 Szybki start

1. Sklonuj repozytorium:
    ```bash
    git clone https://github.com/Pabl01802/outlier-num.git
    ```
2. Przejdź do folderu projektu:
    ```bash
    cd outlier-num
    ```
3. Pobierz zależności:
    ```bash
    yarn install
    ```
4. Uruchom aplikację:
    ```bash
    yarn run dev
    ```
5. Możesz również przetestować algorytm:
    ```bash
    yarn run test
    ```

## 📄 Struktura projektu

- **/src**: Cała struktura projektu, czyli komponenty, widoki itd.
  - **/components**: Komponenty
  - **/router**: Routing aplikacji
  - **/utils**: Pomocnicze funkcje, w przypadku tego projektu algorytm oraz jego test
  - **/views**: Widoki aplikacji

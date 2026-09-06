# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proiect

Site static pentru magazinul de metal **RoRock** (România): vinde tricouri, patchuri, CD-uri și accesorii (trupe RO + externe; tricourile și CD-urile doar cu trupe românești cu contract). Scopul principal: comenzi online, nu doar vânzări fizice.

## Rulare

Site pur static (HTML/CSS/JS, fără build și fără dependențe). Deschide `index.html` direct în browser sau servește folderul:

```
python -m http.server 8000
# sau
npx serve .
```

## Structură (4 pagini)

- `index.html` — pagina "Acasă": hero-ul "Metal 100% Românesc" + secțiunea Locație & Program jos (status deschis/închis live, program, hartă Google Maps embed)
- `magazin.html` — întreaga ofertă într-o singură pagină: grid de produse cu filtre combinate (categorie: Tricouri/Patchuri/CD-uri/Accesorii + origine: RO/Extern)
- `contact-trupe.html` — formular de colaborare pentru trupe (generează un email pre-completat)
- `finalizare-comanda.html` — checkout: date de livrare → mesaj pre-completat trimis prin WhatsApp (`data-whatsapp` pe formular) sau mailto
- `css/style.css` — tot stilul (temă dark, variabile CSS în `:root`)
- `js/main.js` — tot logica: array-ul `PRODUCTS` (produse placeholder), coș localStorage (`rorock_cart_v1`), drawer coș, filtre (`data-cat-filter` / `data-origin-filter`), scroll-reveal, status magazin

## Lucruri de știut

- Header, footer și drawer-ul coșului sunt duplicate în fiecare pagină HTML (site static, fără template-uri) — orice modificare de navigare se aplică în **toate** cele 4 pagini.
- Produsele sunt placeholder-e în `PRODUCTS` (js/main.js); modelele reale urmează să fie adăugate acolo, apoi înlocuite emoji-urile cu imagini.
- Date de contact (telefon, email, adresă, coordonate hartă) sunt placeholder — de înlocuit.
- Coșul folosește `localStorage`; checkout-ul fără backend trimite comanda prin WhatsApp/email, nu există procesare de plată.
- Limba site-ului: română. Ancore utile: `magazin.html#produse`, `index.html#loctie`.

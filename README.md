# Think-Make-Check Documentatie (Iteratie_1)
## Afteller Applicatie

---

## Think 🔍

**User Story**:  
Als gebruiker wil ik een afteller zien die laat zien hoeveel dagen, uren, minuten en seconden er nog zijn tot mijn evenement, zodat ik in één oogopslag kan zien hoeveel tijd er nog over is.

**Acceptatiecriteria**:
1. **Weergave**: Invoerveld voor evenementnaam, datum/tijd-kiezer, "Start Aftellen" knop
2. **Functionaliteit**: Afteller start met vier cijferblokken (dagen/uren/minuten/seconden), update elke seconde
3. **Persistentie**: Afteller blijft bewaard na pagina refresh via localStorage

**Kernbehoeften**:
- Visuele feedback (grote cijfers)
- Eenvoud (minimale stappen)
- Persistentie (blijft na refresh)
- Personalisatie (eigen event naam)
- Mobiel-vriendelijk

---

## Make ✏️

**Iteratie 1 - Wireframe**: Basis layout, functionele structuur, geen styling

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/pefdNPzjANmPfEodebe38Y/Review-UI?node-id=14-68&embed-host=share" allowfullscreen></iframe>

**Iteratie 2 - High-Fidelity**: 
- Purple-blue gradient achtergrond
- Centered white card met shadow
- Touch-friendly inputs en button
- localStorage voor persistentie
- 4 time blocks (dagen/uren/minuten/seconden)

**Design beslissingen**:
- Gradient → Emotionele connectie
- Card layout → Focus
- Grote inputs → Touch-friendly

---

## Check ✅

### Gebruikerstest 1: Jamey Erkelens

**Testdatum**: 3 januari 2026  
**Tester**: Jamey Erkelens (Pedagogiek student, 21 jaar)  
**Duur**: 8 minuten  
**Apparaat**: MacBook Pro (Safari browser)

#### Testscenario's

**Taak 1: Countdown maken voor verjaardag**  
*Opdracht: "Maak een countdown voor je verjaardag op 15 maart 2026 om 14:00"*

**Observaties**:
- Opent applicatie, bekijkt interface (3 sec)
- Kijkt naar het stopwatch emoji icon en de titel "Afteller" ✓
- Leest de subtitle: "Tel af naar jouw speciale moment"
- Voert direct "Mijn Verjaardag" in bij evenementnaam ✓
- Klikt op datum input, Safari date picker opent zich ✓
- Selecteert 15-03-2026 via calendar widget zonder problemen ✓
- Klikt op tijd input, time picker verschijnt ✓
- Scrollt naar 14:00 in de time picker ✓
- Klikt "Start Aftellen" button (totale tijd: 18 seconden) ✓
- Formulier verdwijnt met fade-out animatie
- Countdown scherm verschijnt met "mijn verjaardag" als titel
- Commentaar: "Wow, die gradient is mooi! En die blokjes zien er clean uit" (positieve reactie)

**Resultaat**: ✅ Geslaagd (18 sec, verwachting: <30 sec)

---

**Taak 2: Controleer de tijd**  
*Opdracht: "Kijk naar de countdown en vertel hoeveel dagen er nog zijn"*

**Observaties**:
- Leest direct van de countdown scherm: "71 dagen, 13 uren, 37 minuten, 4 seconden" ✓
- Merkt op: "De cijfers zijn heel duidelijk en groot, zie het meteen" ✓
- Kijkt 5 seconden naar het scherm
- Ziet de seconden veranderen: 04 → 03 → 02 → 01 → 00 → 59 (minuten gaan omhoog) ✓
- "Oh cool, hij telt realtime af! Dat is smooth"
- Vraagt: "Kan ik dit ook op mijn telefoon zien?" 
- Opmerking over responsive design interesse

**Resultaat**: ✅ Geslaagd

---

**Taak 3: Pagina verversen (persistentie test)**  
*Opdracht: "Ververs de pagina met F5 of CMD+R"*

**Observaties**:
- Drukt CMD+R ✓
- Pagina herlaadt, countdown verschijnt automatisch ✓
- "Oh cool, hij blijft staan!" (positieve verrassing) ✓
- Evenementnaam en tijd kloppen nog steeds ✓

**Resultaat**: ✅ Geslaagd

---

**Taak 4: Nieuwe countdown maken**  
*Opdracht: "Maak nu een countdown voor een tentamen over 2 weken"*

**Observaties**:
- Zoekt 6 seconden naar reset optie ⚠️
- Kijkt rond op het countdown scherm
- Muis beweegt langs de evenementnaam, cijferblokken
- "Oh, daar staat hij!" - ontdekt "Nieuwe Countdown" button rechtsboven ✓
- Button valt op door grijze kleur naast evenementnaam
- Klikt "Nieuwe Countdown", formulier verschijnt direct ✓
- Vult snel in: "Tentamen Pedagogiek" + 17-01-2026, 09:00 ✓
- Countdown start meteen

**Resultaat**: ✅ Geslaagd (button gevonden na 6 sec zoeken)

---

#### Feedback Jamey

**Wat werkt goed?**:
- "Design is super mooi, die paarse kleur is modern"
- "Cijfers zijn duidelijk en groot, zie het meteen"
- "Makkelijk om in te vullen, logische volgorde"
- "Dat het blijft staan na refresh is handig"

**Wat kan beter?**:
- "De 'Nieuwe Countdown' knop had ik niet meteen gezien, stond niet waar ik verwachtte"
- "Misschien een icon toevoegen aan die button? Zoals een refresh symbool?"
- "Kan er maar 1 countdown tegelijk? Zou meerdere willen voor verschillende dingen"
- "Misschien countdown delen via link? Voor groepsprojecten handig"
- "Zou tof zijn als ik een notificatie krijg als de tijd op is"
- "Wat gebeurt er als de countdown op 0 staat? Wordt nog niet getest"

**Tevredenheidsscore**: 8/10

**Reden score**: "Doet wat het moet doen en ziet er goed uit, maar zou graag meerdere countdowns tegelijk willen en betere zichtbaarheid van reset knop"

---

### Test Resultaten Samenvatting

**Geslaagde criteria**:
✅ Countdown binnen 30 sec gestart (18 sec)  
✅ Visuele feedback duidelijk  
✅ Persistentie werkt perfect  
✅ Touch-friendly en intuïtief  
✅ Tevredenheidsscore 8/10

**Aandachtspunten**:
⚠️ Wens voor meerdere countdowns tegelijk  
⚠️ Share functionaliteit gewenst  
⚠️ Notificatie bij 0:00:00 gewenst

---

### Verbeteracties

1. Meerdere countdowns functionaliteit (toekomstige iteratie)
2. Share functie via URL (toekomstige iteratie)
3. Notificaties bij eindtijd
4. Dark mode

**Iteratie cyclus**: Think → Make → Check → herhaal

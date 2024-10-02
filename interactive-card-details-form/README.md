# Interactive card details form

## Panoramica

Questo progetto è un semplice form per inserire i dettagli della carta di credito, sviluppato con React. Consente agli utenti di inserire informazioni come il nome del titolare, il numero della carta, la data di scadenza e il codice CVC. Al momento dell'invio, il form valida i dati inseriti e mostra un messaggio di conferma quando il form è completato con successo. I dati del form sono visualizzati dinamicamente in un'interfaccia, mostrando in tempo reale le informazioni inserite.

## Struttura del Progetto

```
├── components
│   ├── Card.jsx
│   ├── Form.jsx
│   ├── IconComplete.jsx
├── data
│   └── labels.js
├── function
│   └── formatFunction.js
├── App.jsx
├── index.css
├── index.js
├── README.md

```

### Componenti

- **Card.jsx**: Visualizza la carta di credito con le informazioni aggiornate dinamicamente, come il nome del titolare, il numero della carta, la data di scadenza e il codice CVC.
- **Form.jsx**:  Il form principale in cui gli utenti possono inserire i dati della carta di credito. Gestisce la validazione e aggiorna lo stato con i valori inseriti.
- **IconComplete.jsx**: Un'icona di conferma che viene mostrata una volta inviato con successo il form.

### Dati

- **labels.js**: Contiene le etichette testuali utilizzate nell'applicazione per la localizzazione o per semplificare le modifiche ai messaggi di errore e alle etichette del form.

### Funzioni

- **formatFunction.js**: File di utilità con funzioni helper per formattare l'input dell'utente, come il numero di carta, il mese/anno di scadenza e il nome del titolare della carta.

## Installazione

1. Clona il repository:

```
git clone https://github.com/tuo-username/react-credit-card-form.git
cd react-credit-card-form
```

2. Installa le dipendenze:

```
npm install
```
3. Avvia il server di sviluppo:

```
npm start
```

4. Build per la produzione:

```
npm run build
```

## Come Funziona

### Stato della Carta

- I dettagli della carta di credito sono memorizzati nello stato card, inizializzato con un oggetto predefinito (initialState) all'interno di App.jsx.
- Il form utilizza input controllati per aggiornare questo stato man mano che l'utente digita.

### Validazione del Form

Quando l'utente invia il form, vengono eseguiti controlli di validazione:

- Il nome del titolare della carta è obbligatorio.
- Il numero della carta deve avere 16 cifre.
- Il mese/anno di scadenza devono essere validi.
- Il codice CVC deve essere fornito e avere 3 cifre.

Se la validazione non riesce, vengono mostrati errori sotto i relativi campi di input.

### Formattazione dell'Input

Il file formatFunction.js contiene funzioni per formattare i campi di input:

- formatCardNumber: Aggiunge spazi tra ogni quattro cifre.
- formatMonthNumber e formatYearNumber: Garantisce l'inserimento corretto della data di scadenza.
- formatCardholderName: Converte il nome del titolare della carta in maiuscolo.

### Messaggio di Conferma

Quando il form viene inviato correttamente, viene visualizzato un messaggio di conferma con un'icona di spunta (IconComplete.jsx), e il form viene resettato.

## Funzionalità

- Formattazione in tempo reale: I dettagli della carta di credito vengono formattati mentre l'utente li inserisce (ad esempio, aggiunta di spazi al numero della carta).
- Validazione del form: La validazione avviene prima dell'invio, con messaggi di errore mostrati sotto i campi che contengono errori.
- Aggiornamento dinamico della carta: I dati inseriti nel form vengono mostrati in tempo reale sulla visualizzazione della carta di credito.
- Reset automatico: Dopo che il form è stato completato con successo, i dati vengono resettati automaticamente.

## Tecnologie Utilizzate

- React: Libreria JavaScript per costruire interfacce utente.
- tailwind e CSS: Utilizzato per stilizzare i componenti e la disposizione della carta di credito.
- JavaScript (ES6): Utilizzato per la logica di formattazione e validazione dei dati.

## Esercitazione Frontend Mentor

(https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw)

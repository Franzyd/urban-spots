# Setup
1. W folderach 'server' i 'klient' należy wykonać `npm i`
2. W obu folderach należy wykonać `npm run start`
3. Otworzyć stronę `http://localhost:3000/`

# Raport

Strona korzysta z technologii:
- Frontend React, dokładniej create-react-app
- Backend Express.js na Node.js
- Baza danych SQLite

Baza danych sprawdza, czy wymagane pola nie są puste i automatycznie wstawia aktualny czas jeśli nie jest podany.

Backend łączy się z bazą danych, pobierając dane, a następnie serwuje je poprzez otwarcie ścieżki z protokołem GET na `localhost:5000/spots` zgodnie ze stylem projektowania REST.

Frontent dynamicznie tworzy stronę HTML, ładując w międzyczasie dane z serwera poprzez wymienioną wyżej ścieżkę.

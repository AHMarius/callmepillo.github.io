# Prezentare – Echipa Noastră

## Cine suntem

Suntem o echipă formată din trei studenți ai Universitații Tehnice "Gheorge Asachi" Iași în cadrul facultății de Automatică și Calculatoare  pasionați de programare, sisteme embedded și sisteme de control:

- Hritcu Alexandru Marius  
- Iliescu Matei  
- Scutariu ~~David~~ Darius  

Ne interesează proiectele care îmbină hardware-ul cu algoritmica și care implică procesare în timp real, optimizare și control precis. Abordăm dezvoltarea într-un mod tehnic și structurat, concentrându-ne pe eficiență, simplitate arhitecturală și performanță măsurabilă.

---

## Viziunea Proiectului

Ne propunem să dezvoltăm o mașină autonomă rapidă, lightweight și ușor de controlat, capabilă să urmărească precis un traseu cu reguli concrete.

Obiectivul nostru nu este doar funcționalitatea, ci optimizarea întregului sistem:
- masă redusă  
- latență minimă  
- stabilitate la viteze ridicate  
- arhitectură hardware simplificată  

Dorim un sistem echilibrat, în care fiecare componentă este aleasă pentru eficiență și impact real asupra performanței.

---

## Arhitectura Tehnică

Un element central al proiectului este utilizarea camerei **Pixy2** ca procesor principal pentru partea de procesare vizuală.

Strategia noastră este să folosim capabilitățile interne ale Pixy2 (line tracking și procesare dedicată) pentru:
- detectarea și urmărirea liniilor traseului în timp real  
- calcularea deviației față de centru  
- generarea parametrilor necesari controlului direcției  

Prin această abordare:
- reducem încărcarea pe microcontrollerul principal  
- scădem complexitatea software  
- minimizăm latența decizională  
- simplificăm arhitectura generală a sistemului  

Astfel, Pixy2 nu este doar un senzor, ci devine componenta principală de procesare pentru navigație.

---

## Algoritm și Control

Pentru menținerea stabilității între două linii, implementăm un algoritm de control eficient, optimizat pentru:
- corecții rapide și precise  
- comportament predictibil la creșterea vitezei  
- reducerea oscilațiilor  

Ne concentrăm pe:
- calibrare corectă a camerei  
- filtrarea zgomotului vizual  
- reglaj fin al parametrilor de control  

Scopul este obținerea unui echilibru între reacție rapidă și stabilitate.

---

## Ce dorim să realizăm

Prin acest proiect urmărim:

- O platformă autonomă cu răspuns rapid și latență redusă  
- Stabilitate la viteze mari  
- Design lightweight și eficient energetic  
- Arhitectură clară și robustă  
- Performanță reproductibilă și optimizabilă  

Ne dorim să construim un sistem tehnic bine fundamentat, în care hardware-ul și software-ul lucrează integrat pentru a obține performanță maximă cu resurse minime.

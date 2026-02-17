# Plan fezabilitate
**Echipa Da$Ba – 2025-2026**

## Descrierea proiectului

Competiția NXP Cup constă în proiectarea și realizarea unei mașinuțe autonome capabile să urmeze o linie utilizând senzori optici și algoritmi embedded de control.

- Obiectivele proiectului:
- Construcția platformei hardware
- Implementarea algoritmului de line-following
- Optimizarea performanței (viteză, stabilitate)
- Participarea la etapa competițională


## Posibilitati Tehnice
### Propuneri
1. Folosirea placutei FRDM X.579 si camerei Pixy 2.1
2. Folosirea integrala doar a camerei Pixy 2.1 atat pentru prelucrare de imagine cat si pentru comandare
### Pro / Cons
**FRDM X.579 si camerei Pixy 2.1**

*PRO*
- Varianta clasica si deja testata
- multiple programe deja compilate
- gama mai mare de resurse
- multiplii pini folosibili
- complexitate hardware si software mai mica
- Integrare mai usoara a senzorilor

*CONS*
- Toata lumea foloseste aceste idee
- Greutate ridicata a masinutei
- Nevoie de motoare mult mai puternice
- Competivitatea ramane la modul de folosire a senzorilor auxiliari / cati bani se pot investii

**Pixy 2.1 all-in-one**

*PRO*
- Idei aproape unica
- Greutate ffff redusa a masinutei
- Mobilitate crescuta
- Simplificarea parametrilor si punctelor slabe

*CONS*
- Complexitate **MULT** mai ridica la nivel de implementare
- Numar de pini foarte restransi
- Necesitatea de minimizare a hardware-ului
- Necesitatea de a lua in calcul parazitarea semnalului prin cablu
- Marja de eroare mica
- Complexitate software ridicata
- Nevoie de rescriere a firmware-ului
- Posibilitatea folosirea senzorilor externi foarte scazuta

## Target
Target-ul acestui proiect il reprezinta participarea echipei in selectia natioanala si completarea traseului oferit in **< 1 min**. Daca masina ramane stabila si constanta, se poate spera la calificarea la nivel international cu masinuta.

## Fallback
### Fallback deadline
19.02
### Strategy
In cazul in care idea va fi respinsa la prima intalnire cu coordonatorul, toate resursele disponibile vor fi mobilizate spre adaptarea knowledge hub-ului pentru folosirea placutei NXP in decurs de 2-3 zile, urmand sa se treaca la implementarea clasica, posibila folosind atributul de **dual-core** a placutei.

# Comportament implicit & Building

[Default firmware](https://github.com/charmedlabs/pixy2)

## Comportament implicit

Camera Pixy2.1 vine cu un set avansat de feature-uri care ajuta la interfatarea cu diferite placi de 
dezvoltare si obtinerea de informatii complexe de mediu (object-recognition de exemplu).

Astfel, scopul original al camerei Pixy este de a fi un all-purpose-do-all-board. 
Din acest motiv procesorul aflat pe placa este unul destul de puternic (si chiar prea puternic pentru scopul nostru).

Pentru comunicarea cu placa, se foloseste driver-ul PixyMon. Acesta furnizeaza setari si chiar si firmware pentru placa.

## Deviere de la comportamentul implicit

Cum am mentionat mai sus, placa are un procesor dual-core M4/M0 destul de puternic. Astfel, placa are destui cai putere pentru
a rula algoritmii complecsi pentru detectarea obiectelor si inteligenta artificiala. Insa, noi nu avem nevoie de o buna parte
dintre acestea. 

Deci, noi vrem sa ***"lobotomizam"*** camera Pixy pentru a sterge algoritmii inutili, pentru a optimiza algoritmii deja existenti si
pentru a include algoritmul nostru care sa gestioneze servo-ul si motoarele. Cu aceste modificari, putem sa eliminam placa NXP furnizata
(multumim mult) si sa simplficam masina drastic. In final, vom obtine o masina mai usoara, mult mai mica si mai fiabila.

## Building

Pentru compilare, recomandarea este utilizarea lui uVision (Keil MDK v5). Din pacate asta este inca o problema in curs.

Intreg proiectul este compus din 4 subproiecte importante, toate adunate intr-un workspace: libpixy_m4, libpixy_m0, main_m0, main_m4.
Acestea trebuie compilate in aceasta ordine (in care au fost mentionate), in final obtinand un fisier cu extensia hex care poate fi incarcat pe placa.

## libpixy_m4
  
Descriere

## libpixy_m0

Descriere

## main_m0

Descriere

## main_m4

Descriere

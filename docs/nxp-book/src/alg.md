## Diagrama funcționare:

[Algoritm intern detectare linii Pixy2]
        ↓
[Extragerea vectorilor de directie]
        ↓
[Determinarea erorii de abatere laterală și a erorii unghiulare]
                ↓
[Filtrare pentru reducerea zgomotului]
                ↓
[Aplicarea controlerului Stanley în format fixed-point]
                ↓
[Generarea semnalului PWM pentru servomotor]

## Raționamentul din spatele alegerii algoritmului

## Descriere functionare Algoritm

        În continuare ne vom folosi de algoritmul introdus de Jozsef Suto pentru urmărirea traseului cu mențiunea că diferit față de articolul scris de acesta, partea în care acesta face procesarea imaginii pentru detectarea liniilor din imagine folosindu-se de transformata Hough noi ne vom folosi de funcțiile puse la dispoziție de camera Pixy2 pentru a detecta aceste linii.
        Liniile ce trebuie urmate sunt descrise fiecare de 2 puncte în coordonate polare.
        Ecuația dreptei:
        \[
            y = mx + b                      (1)
        \]
        Din (1) determinăm panta și ordonata la origine curentă:
        \[
            m_curr = (y_2-y_1)/(x_2-x_1)                        (2)
            b_curr = y_2-m*x_2                        (3)
        \]

        Aceste linii ce ne determina drumul au un unghi limitat, astfel putem defini un filtru unde unghiul $\alpha$ dintre segmentul liniei și ordonată aparține intervalului [$\pi/18$,$4\pi/9$]
        $\alpha$ poate fi calculată din pantă după formula:
        \[
            \alpha = |180/\pi * arctg(m)|
        \]

        Alegând &p^i_1$ ca fiind linia de banda locată la baza imaginii. Astfel impunem condiția ca $y_1 \ge 0.4 * y_{c1}$, iar liniile ce nu întâlnesc acest criteriu nu vor fi luate in considerare.

        În practică, banda v-a fi descrisă de pană la două linii cu proprietatea fundamentală că cea din stânga v-a avea o pantă negativă, iar cea din dreapta o pantă pozitivă.

    Detecția benzii:
         Algoritmul are în fața sa 3 cazuri posibile care descriu în egală măsură o bandă:
            <ul>
            <li>Linii cu pantă pozitivă și negativă</li>
            <li>Linii cu pantă pozitivă sau negativă(cel mai întalnit caz pentru noi, datorat de dimensiuniile reduse ale mașinii)</li>
            <li>Nu are linii de ghidaj (caz întalnit deobicei în intersecții)</li>
            </ul>
        În cazul în care ambele tipuri apar, algoritmul v-a alege perechea cea mai favorabilă după condiția:
        \[
            min(0.7*(dn+dp)+0.3 * dc)               (5)    
        \]
        Unde "dc" reprezintă distanța euclidiana dinre pc și c. "pc" este punctul de centru al linii ce conecteaza bazele celor 2 segmente ce curente, iar c estte referința predefinită a centrului drumului. "dn" și "dp" sunt de asemenea distanțe euclidiene dintre linia "negativ", respectiv cea "pozitivă" și media ponderată anterioară a liniilor benzii. Mai specific dintre $x_a,y_a = 0$ și $x_b,y_b = înalțimea imaginii$ puncte ale liniei benzii curente și anterioare. Pentru aceste puncte ordonata este cunoscută și trebuie aflată doar abcisa

        \[
            x_i = (y_i-b_i)/m_i
        \]                                          (6)

        Dacă doar o linie este pusă la dispoziție pentru determinarea benzii(fie ea cu o pantă pozitivă sau negativă), se v-a alege aceea ce satisface criteriul următor, unde constantele se repetă de la (5):
         \[
            min(0.7*dnp + 0.3 * dp1)               (7)    
        \]
        Unde dp1 este distanța Euclidiană dintre c și baza liniei testate, în timp ce dnp reprezintă distanța Euclidiană dintre linia delimitatoară benzii cu panta pozitivă/negativă și anterioara linie delimitatoare  cu aceiași pantă

    Modul de calcul al unghiului de viraj

        Pentru acest calcul se mențin aceleași 3 cazuri de la pasul anterior.

        Dacă o pereche de linii este disponibilă unghiul de viraj($\theta_{curr}$) este bazat pe urmatoarea formulă:

        \[
            \theta_{curr} = 0.8 * \theta_{vp} + 0.2 * \theta_d
        \]                                          (8)

        Din cauza perspectivei create de proiecția unui mediu realistic tridimensional pe in spațiu bidimmensional, liniile paralele se întalnesc într-un singur punct înauntrul sau înafara imaginii, acest punct de intersecție sau punct de fugă al imaginii(vanishing point - vp) poate fi deterninat de intersecția liniilor:
        \[
            x_{vp} = (b_j - b_i)/(m_i - m_j)
        \]
        \[
            y_{vp} = m_i * x + b_i    
        \]                                          (9)

        In (8), $\theta_{vp}$ este unghiul dintre (c1,c2) și (c1, vp). Signatura lui $\theta_{vp}$ depinde de abcisele lui vp și c2.
        \[
            a = (x_{vp} - x_{c1})(y_{vp} - y_{c1}); b = (x_{c2} - x_{c1})(y_{c2} - y_{c1})    
        \]
        \[
            \theta_{vp} = (x_{vp}>x_{c2})? (-180)/\pi * arccos((ab)/(||a|| ||b||)) : (180)/pi *arccos((ab)/(||a|| ||b||))
        \]

        Algoritmul ia în considerare și distanța dinttre c1 și liniile beznzii, $\theta_d$ este calculată după următoarea formulă, unde dpx și dnx reprezintă distanța orizontală între c1 și $p^i_a(x^i_a,y^i_a)$ în funcție de tipul liniei.
        ~~~~~posibilă eroare în formula din articol ( de verificat și corectat în teste)
        \[
        \theta_d =  (dpx>dnx)? -60*(dpx - dnx)/(dpx+dnx) : 60*(dnx - dpx)/(dpx+dnx)
        \]                                          (11)

        Dacă doar o linie este disponibilă, unghiul curent de viraj este bazat pe formula următare, unde $\theta_{t-1}$ este unghiul anterior, iar $\theta_{\delta}$ este bazat pe diferența dintre $(dnx_t,dpx_t)$ curent și distanțele anterioare t-1.
        \[
            \theta_t = \theta_{t-1} + \theta_{\delta}
        \]
        În aceste calcule pentru $\theta_{\delta}$, programul compară distanța curentă și cea anterioară. Dacă distanța curentă este mai mare, atunci vehiculul ar trebui să se îndepărteze de linie, altfel ar trebui să se apropie. În mod formal, $\theta_{\delta}$ poate fi calculat cu (13) pentru o pantă negativă și (14) pentru o pantă positivă.

        \[
            \theta_{\delta} = (d_t>d_{t-1})? 60 * (d_t - d_{t-1})/\d_{t-1} : -60 * (d_{t-1} - d_{t})/\d_{t-1}
        \]                                          (13)
        \[
                \theta_{\delta} = (d_t>d_{t-1})? -60 * (d_t - d_{t-1})/\d_{t-1} : 60 * (d_{t-1} - d_{t})/\d_{t-1}
        \]                                          (14)

        Acest Algoritm verifică în modd continuu unghiul anterior de viraj și parametrii liniilor de bandă. Unde constantele $w_1$ = 0.1 și $w_2$ = 0.05 .

        \[
            \theta_t = w_1 * \theta_{curr} + (1-w_1) * \theta_{t-1}    
        \]                                          (15)

        \[
            m^i_t = w_2 * m^i_{curr} + (1-w_2)*m^i_{t-1}; 
            b^i_t = w_2 * b^i_{curr} + (1-w_2)*b^i_{t-1}    
        \]                                          (16)


## MORE_TO_BE_ADDED

## Referințe:
    ([REAL-TIME LANE LINE TRACKING ALGORITHM TO MINI VEHICLES - Jozsef Suto](https://reference-global.com/article/10.2478/ttj-2021-0036))
    ([Real-Time Deterministic Lane Detection on CPU-Only Embedded Systems via Binary Line Segment Filtering - Shang-En Tsai, 
Shih-Ming Yang , Chia-Han Hsieh](https://www.preprints.org/frontend/manuscript/2af34e02773a1d1839e8234f3fa531b4/download_pub?))
    ([Autonomous Automobile Trajectory Tracking for Off-Road Driving:
Controller Design, Experimental Validation and Racing - Gabriel M. Hoffmann, Claire J. Tomlin,Michael Montemerlo, Sebastian Thrun](https://ai.stanford.edu/~gabeh/papers/hoffmann_stanley_control07.pdf?))
([Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter?))
([Realtime Road Lane Detection - Samyak Shah, Abhishek Jagtap , Rutik Darda, Sakshi Kamble, Prof A.M.Bhadgale ](https://www.irjet.net/archives/V9/i5/IRJET-V9I5488.pdf?))
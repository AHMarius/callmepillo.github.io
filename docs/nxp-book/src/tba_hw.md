# HW Observations

In urma unui research facut, camera PIXY 2 nu are decat 2 pini PWM, asta semnifica pentru noi:
- semnalul de la PWM din camera, in functie de lungimea cablului si semnal parazit din proximitate, pot rezulta semnale fals pozitive / pozitiv false, ducand la actiuni incorecte sau chiar pierdere de viteza. Am incercat sa repar asta prin folosirea unui fast decay la H bridge, astfel incat sa deacelereze ci sa nu franeaza brusc in momentul in care dam 0 pe pin.
- Putem repara chestia asta prin folosirea unui signal booster, dar e nevoie de research suplimentar.

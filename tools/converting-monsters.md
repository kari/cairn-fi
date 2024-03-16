---
layout: default
title: Hirviöiden muuntaminen
parent: Työkalut
redirect_from: /resources/tools/converting-monsters/
---

# Hirviöiden muuntaminen

Täydellistä menetelmää hirviöiden muuntamiseen muista roolipelijärjestelmistä ei ole olemassa.  
Alla on muutamia vinkkejä, jotka saattavat auttaa tässä työssä!

## Perusteet

Tutustu [Sääntökokoelmassa](https://fi.cairnrpg.com/cairn-srd/#hirviöiden-luominen) oleviin ohjeisiin. Paria asiaa, jotka kannattaa pitää mielessä:

- OSE:ssa (tai B/X:ssä) on erittäin hyvät tietolaatikot, jotka voi helposti typistää pikaista muuntamista varten. Katso lisätietoja [tältä sivulta](https://oldschoolessentials.necroticgnome.com/srd/index.php/General) ja [tästä PDF:stä](https://necroticgnome.com/products/old-school-essentials-adaptation-guidelines).
- Dungeon Worldissa on hienoja hirviöiden "liikkeitä" (_moves_), jotka vertautuvat kriittiseksi vahingoksi varsin mukavasti, joten sieltä vastaavan olennon etsiminen voi todellakin auttaa! Katso esimerkiksi [tämä täältä](http://codex.dungeon-world.com/monster/5698559156420608).
- Joskus suora käännös tietolaatikon arvoista ei ole vaihtoehto. Se ei haittaa! Tähän löytyy [ratkaisu](#käytä-kerrontaa)!

### Elinvoima, panssari ja kyvyt

- **Osumasuojaus** _ei kuvaa_ elinvoimaa. Se on olennon kyky välttää vaaraa, oli se sitten sitkeyden, nopeuden tai taidon kautta. Jos pelaajahahmojen on vaikea osua tavalla, joka todella aiheuttaa vahinkoa, olennolla on korkea **HP**. Hyvä nyrkkisääntö on antaa olennolle +1 HP jokaista osumanoppaa (_**HD**_) kohden **3 HP:n** vähimmäismäärän lisäksi (keskiverto ihminen). Ajattelen yleensä, että **osumanoppa** on d6, jonka _keskiarvo_ on 3,5. _Aloita_ aina olennon **HP:stä** ja vasta _sitten_ mieti sen **STR-arvoa**.
- **Panssari** on yleensä helppo määritellä; lauseet kuten "kuin nahka" tai "kuin levypanssari" ovat hyvin hyödyllisiä. Pääsääntöisesti jätä THAC0 huomiotta ja käytä laskevaa panssariluokkaa (PL, eng. AC) (7 = nahka, 5 = rengaspanssari, 3 = ritarihaarniska). Jos vain nouseva PL on annettu, voi käyttää (12 = nahka, 14 = rengaspanssari, 16 = ritarihaarniska). Mitä ikinä järjestelmää käytätkin pohjana, Panssariarvot vaihtelevat välillä 1-3.
- **Voimakkuus** on sekä elinvoima että fyysinen voima. Se seuraa myös ruumiinkuntoa sekä myrkkyjen vastustuskykyä. Katso olennon **HD** ja **HP** (vaikka olet jo tehnyt näin **Osumasuojausta** varten). **STR** on olennon kyky selvitä suorasta osumasta, ei sen kyky välttää vaaraa! Jos olento on vaikea tappaa, mutta _ei_ siksi että se on hyvä välttämään vammautumista, anna sille enemmän **STR:ää** (_älä_ lisää **HP:ta**). Hyvä nyrkkisääntö on verrata sitä keskiverto ihmiseen (10 **STR**) ja nostaa tai laskea siitä.
- **Ketteryys** on luultavasti helpoin näistä. Aloita lähtöarvolla **10** ja, jos olento on erityisen vikkelä (joskus käytetään termiä nopea (_speed_) tai SP), ketterä tai näppäräsorminen, lisää sitä. Jos se on hidas reagoimaan, kookas tai kömpelö, laske sitä. Katso lisävihjeitä kohdasta [Pelastusheitot](#pelastusheitot)!
- **Tahdonvoima** on kinkkinen. Se tulee harvoin esiin, mutta kun se tulee, se on hyvä olla selvillä. Korkea **WIL** merkitsee vahvaa persoonallisuutta, henkeä tai olemusta. **Moraali** (**ML**) voi olla hyvä ohjenuora **tahdonvoimalle** myös. Moraali vaihtelee yleensä välillä 2-12; jotkin pelit käyttävät "Moraalitestiä" selvittämään pakeneeko hirviö (Cairnissa **WIL**-pelastusheittoa käytetään tämän sijaan). Pelinjohtaja heittää 2d6; jos tulos on korkeampi kuin hirviön **ML**-arvo, hirviö pakenee.

Alla oleva taulu antaa pätevät ohjeet **ML**:n muuntamisesta **tahdonvoimaksi**.

|         |   |    |    |    |
|---------|---|----|----|----|
| **ML**  | 4 | 8  | 10 | 12 |
| **WIL** | 6 | 12 | 15 | 18 |

### Taistelu

- Hyökkäysten **vahinko** on aika suoraviivaista ottaa peleistä kuten OSE (tai B/X); usein voit kopioida ne sellaisinaan. Tarkista [asetaulukosta](/cairn-srd/#aseet-1) jos olet epävarma.
- Moninkertaiset hyökkäykset (kuten 2 x kynnet, 1 x pisto) tyypillisesti muuntuvat [_Räjähdys_](/cairn-srd/##räjähdykset)- ja/tai "kaksi asetta" -sääntöjen mukaan (esim. d6+d6 on heitä 2d6, pidä korkein).
- Kun olet epävarma, ajattele kuinka paljon vakavaa vahinkoa olennon on tarkoitus tehdä. Muista että hyökkäyksen vahingon korottamisen sijaan voit harkita sen tekemisestä _vahvennetun_ joissain tilanteissa tai käyttää _Räjähdys_ tai "kaksi asetta" -sääntöä.

### Kyvyt ja taikuus

- Joskus alkuperäisen roolipelijärjestelmän mekaniikat eivät yksinkertaisesti _vain käänny lainkaan_. Tämä on OK; yritä hyödyntää mikä olennossa on siisteintä ja tee "versio" sen kyvystä joka on sopivampi Cairnin kanssa.
- Jos hirviöllä on hyökkäys joka vaatii pelaajahahmoja yrittämään väistämistä tai pelastusheittoa jotain kykyä vastaan, harkitse kyvyn tekemisestä taistelun ulkopuoliseksi "ansaksi", jonka pelaajahahmot voivat laukaisat. Muussa tapauksessa _anna sen onnistua automaattisesti_ taistelun aikana. Vartija voi aina vihjata etukäteen vaarasta ennen taistelua, jotta pelaajahahmot voivat paremmin varautua vaaran varalta.
- Kyvyt voi joskus muuntaa aseiksi, ja antaa niille vahinkonoppa, jolloin Kriittinen Vahinko paljastaa vahingon määrän. Useimmiten sinun kannattaa vain antaa kyvyn tai hyökkäyksen _tapahtua_. Taistelu on vaarallista ja Vartijan tehtävä on viestittää vaarasta kunnolla ennen kuin taistelu alkaa.

### Taikuus

- Maagiset olennot voivat vain "tietää" läjän loitsuja. Tässä tapauksessa, tee niiden ruumiista maagisia (ja vaarallisia!)
- Loitsut ovat hankalia; voi antaa taiankäyttäjille Loitsukirjoja, mutta muista että ne saattavat _tiputtaa_ nämä kun ne on kukistettu.
- Tykkään tehdä niin, että 1d4 Loitsukirjoista räjähtävät tippuessaan([Kohtalon Noppa](/cairn-srd/#kohtalon-noppa)), vain tehdäkseni asioista jännittävämpiä!

### Pelastusheitot

- Voit käyttää _pelastusheittoja_ saadaksesi lisäinformaatiota olennon kyvyistä, erityisesti sen kyvystä välttää fyysisen vamman, taikuuden tai myrkyn aiheuttama kuolema. Katso [OSE:n SRD](https://oldschoolessentials.necroticgnome.com/srd/index.php/Checks,_Damage,_Saves) (englanniksi) lisätietoja varten.
- Joskus tietolaatikoissa käytetään lyhenteitä kuten (E1) tai (F1) (Tason 1 [Haltija](https://oldschoolessentials.necroticgnome.com/srd/index.php/Elf) tai [Taistelija](https://oldschoolessentials.necroticgnome.com/srd/index.php/Fighter)). Nämä ovat erittäin hyödyllisiä tunnistamaan nopeasti olentojen kyvyt.
- Harkitse pelastusheittoihin perustuen kuvaavien tunnisteiden lisäämistä, kuten "immuuni myrkkykaasuille" tai "hyvä väistämään luoteja".

Alla olevan taulukon pitäisi auttaa määrittämään, mitkä pelastusheitot johtavat jonkin asiaankuuluvan kykyarvon kasvattamiseen.

|                                     |             |
| ----------------------------------- | ----------- |
| **Kuolema tai Myrkky**              | STR         |
| **Taikasauvat**                     | DEX         |
| **Lamaantuminen tai Jähmettyminen** | WIL tai STR |
| **Henkäisyhyökkäykset**             | DEX tai STR |
| **Loitsut, Sauvat tai Kepit**       | WIL         |

### Tietolaatikon rakenne

 On monta tapaa tehdä tämä, mutta yritä olla johdonmukainen! Cairnissa kirjoitan tietolaatikon näin:  
**Nimi**  
X HP, X Panssari, X STR, X DEX, X WIL, Ase (dX, _ominaisuudet_), erikoisesineet
- Kiinnostava kuvaus ulkonäöstä tai käyttäytymisestä
- Oikku, taktiikka tai erikoisuus, joka tekee tästä sivuhahmosta yksilöllisen
- Erikoisvaikutus tai kriittisen vahingon seuraus

## Käytä kerrontaa

Lue alkuperäinen tietolaatikko ja sitä ympäröivä selite, sitten kirjoita pari kappaletta olennosta. Muunna sitten mitä olet kirjoittanut Cairnin hirviötietolaatikoksi.

Otetaan esimerkiksi tämä olento:

#### Kettunainen

Voi ottaa ketun, naisen tai kaksimetriä pitkän kettupäisen muodon.  
_HD 5, Nopeus 120', Panssari 14, Moraali 11, Hyökkäys: +4 d8hp (kynnet, puraisu or tukehdutus)_  
- Puolustus: Metalli ei voi vahingoittaa
- Erikoisuus: Voi halutessaan muuttua ketuksi tai neidoksi, jonka yksi ketunjalka on piilossa (samat ominaisuudet)

_**Ylläolevaa esimerkkiä käyttäen, voin nähdä että hän:**_
- Näyttää kaksi metriä pitkältä ihmisnaiselta, jolla on ketun pää.
- Numeroita katsoen, näyttää ettei hänellä ole kovin korkea HP ja että hän on hyvin nopea.
- Hänen **ML** on aika korkea. Hän on selvästi aika itsepäinen.
- On ketterä ja notkea.
- Hyökkää tappavilla hampaillaan ja kynsillään (tukehduttaen saaliinsa jos mahdollista).
- Muuttuu ketuksi halutessaan.
- On immuuni metalliaseille.

_**Mitä voimme oppia tästä?**_  
- Hän on nopea ja todennäköisesti taitava taistelemaan. Aloittaen **3 HP:stä** ja lisäten yhden **HP:n** per **HD** saadaan **8 HP:ta**.
- En usko että ketuilla on suojaavaa nahkaa ja hän on päätään lukuunottamatta muuten ihminen joten **ei Panssaria**.
- Hän on kohtuullisen vahva. Normaali ihminen on 10 ja hän on isompi. **12 STR**.
- Voin kuvitella hänet metsästämässä saalistaan lumisella tundralla. Hän on nopea. **14 DEX**.
- Hänen **ML** on korkea, mutta ei maksimi. Ja ketut ovat aika ovelia, eikö vain? Hän selviäisi tukalista tilanteista. **15 WIL**.
- Valitsisin **puraisun (d6)** hampailla tehtäviin hyökkäyksiin ja **kynnet (d8+d8)**, sama kuin mikä tahansa kaksikätinen ase.

_**Yhteenvetona, meille jää jäljelle seuraava alustava tietolaatikko**_  
_8 HP, 12 STR, 14 DEX, 15 WIL, hampaat (d6), kynnet (d8+d8)_

_**Nyt hänen kykyihinsä:**_  
Tämä on aika suoraviivaista. Me yksinkertaiseti luemme tarinallisen tietolaatikon jonka loimme aikaisemmin!
- Me tiedämme miltä hän näyttää ja että hän voi muuttua ketuksi halutessaan.
- Metalli ei voi vahingottaa häntä; oletan että tämä tarkoittaa, että hän on immuuni _metalliaseille_.
- Hän tukehduttaa uhrinsa.

_**Helppoa, eikö? Nyt tehdään tuosta hyödyllistä:**_
- Näyttää kaksi metriä pitkältä ihmisnaiselta jolla on ketun pää.
- Muuttuu ketuksi halutessaan.
- Immuuni metalliaseiden hyökkäyksille.
- Kriittinen vahinko: uhri tukehdutetaan tajuttomaksi ja syödään pian sen jälkeen.

_**Ja siinä se!**_  
_**Katso, muunnettu Carin-hirviö:**_

#### Kettunainen

8 HP, 12 STR, 14 DEX, 15 WIL, kynnet tai kädet (d8+d8)

- Voi ottaa ketun tai naisen, jolla on yksi piilotettu ketun jalka, muodon.
- Immuuni metalliaseiden hyökkäyksille.
- **Kriittinen vahinko**: Uhri tukehtuu tajuttomaksi.

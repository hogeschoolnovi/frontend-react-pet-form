# Uitwerking: React Hooks Form

Dit is de uitgebreide versie van de uitwerking. Hierin wordt gebruik gemaakt van:

* `useFormContext`
* Conditioneel velden tonen
* Atomic design

## useFormContext

In dit formulier is gebruik gemaakt van `useFormContext`. Hiermee kunnen we form gerelateerde waarden, functies, errors etc benaderen van buiten het formulier.

In `src/components/organisms/petForm` zie je dat we het formulier in een `FormProvider` hebben 'gestopt' `FormProvider` geven we het resultaat mee van `useForm`. Deze waarden worden nu in een `context` opgeslagen. Het idee van context is dat deze voor alle componenten binnen de provider beschikbaar zijn. De context kunnen we weer met `useFormContext` benaderen. Dit gebruiken we in deze opdracht om bij de verschillende form gerelateerde velden de error waarde uit te kunnen lezen.
Pfieuw, das een hele riedel.

## Conditioneel velden tonen

Net als in uitwerking-1 wordt ook in deze uitwerking aan de hand van de waarde van `pet` een input veld getoond. Hiervoor maak je gebruik van de `watch` method van `useFromContext`. Deze wordt geupdated als de waarde wordt veranderd.
```javascript
  const currentPet = watch('pet');
```
In het formulier kunnen we dan aan de hand van deze waarde velden tonen of verwijderen:
```javascript
  {currentPet === 'other' ? (
    <div>Dit wordt alleen getoond met bovenstaande conditie</div>
  )}
```

## Atomic design

Om alles een beetje structuur te geven en vooral ook onnderhoudbaar te houden is alles opgebouwd volgens atomic design. Hiervoor is er een volgende structuur opgemaakt:

>* components
>  * atoms
>    * button
>    * ...
>  * molecules
>    * inputField
>    * ...
>  * organisms
>    * petForm
>    * ...

### Hoe benader je zoiets?

Als basis gebruik ik uitwerking 1. Een input veld ziet er als volgt uit:
```javascript
  <div>
    <label htmlFor="firstName">Voornaam</label>
    <input
      name="firstName"
      id="firstName"
      type="text"
      ref={register({required: true})}
    />
    {errors.firstName && <p>Voornaam is verplicht</p>}
  </div>
```
Als we hier verder op inzoomen zien we een aantal elementen waar we losse componenten van kunnen maken.

* Het `label`
* Het `input` element
* Een errormessgae (de `p`)

Van deze elementen kunnen we losse componenten maken die niet verder op te splitsen zijn in kleinere elementen. Om die reden maken we hier `atoms` van.

Door deze elementen op verschillende manieren te combineren, kunnen we hier weer samengestelde, nieuwe componenten maken. Denk bijvoorbeeld aan een `inputField` waar een `Label`, `Input`, en `ErrorMessage` verwerkt zijn. Dit soort samengestelde componenten plaatsen we in de `molecules.

Met al deze `molecules` kunnen we weer een formulier maken. Componenten die zijn opgebouwd uit onder andere `molecules` en/of `atoms` noemen we organisms.

> Let wel: omdat er in deze applicatie geen gebruik van styling en dergelijke word gemaakt lijkt het voor nu een beetje overkill. Naarmate er tests, styling etc toe worden gevoegd zul je zien dat deze structuur voor veel meer overzicht zal zorgen.

## En.....

Ik hoop dat dit wat extra duidelijkheid heeft gegeven over ook de uitleg en de stof zoals deze in de les is behandeld. Mochten er vragen opkomen, mag je deze ook voor de les stellen. Ik kan dan kijken of ik ze eventueel mee kan nemen in de les, zodat ook anderen hier wat van kunnen leren.

## Fin.

---

# Opdracht: React Hooks Form


Deze opdracht hoort bij de tweede les over react. In de opdracht zullen zowel zaken die in de voorbereiding als zaken die in de les zelf zijn behandeld gebruikt worden. Om het gevoel van ‘de praktijk’ meer naar de opdracht te halen is de opzet zoals deze in een userstory gebruikt kan worden.

---

>Als klant wil een formulier waarmee ik aan kan geven welke welk huisdier ik tof vind

## Context

Voor een onderzoek naar …. willen we de gegevens van onze deelnemers kunnen registreren om verder onderzoek uit te kunnen voeren naar ….

## Acceptatie Criteria

* De applicatie is gebouwd met create-react-app
* De applicatie maakt gebruik van react-hook-form
* Het formulier heeft de volgende velden:
  * Voornaam:
    * Verplicht
  * Achternaam:
    * Verplicht
  * Leeftijd:
    * Verplicht
    * Minimaal 18 jaar
  * Postcode:
    * Verplicht
    * Valide postcode (bonus)
  * Huisnummer zonder toevoeging:
    * Verplicht
  * Radiobuttons Favoriete huisdier:
    * Opties: kat, hond, hamster, muis, anders
    * Verplicht
  * Ander huisdier
    * Verplicht bij optie anders
    * Wordt alleen getoond als optie anders is geselecteerd
  * Opmerking
    * Textarea
  * Akkoord met de voorwaarden
  * Verzendbutton

* Alle velden worden gevalideerd tijdens typen
* Bij success versturen wordt er een melding getoond dat het versturen succesvol was
* Bij een error tijdens versturen wordt er een error-melding getoond
* Het klikken op een label activeert de input

## Notes
* Styling is niet relevant
* Probeer zoveel mogelijk gebruik te maken van mappen structuur. Doe je het liever in 1 component, is dat zeker geen probleem
* Laat het weten als je vragen hebt

### Tip voor de folder struct
Atoms: input field, button, label, error-message,
Molecules: form-field > Deze bestaat uit een section met daarbinnen eenlabel, input en error component
Organism: Het formulier

## Extra handvat
* De voorbeelden uit de les staan: https://codesandbox.io/u/navelpluisje/sandboxes en beginnen allemaal met `React Hook Form`
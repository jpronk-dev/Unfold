// Elke vraag heeft een unieke id en categorie voor stabiele React keys en filtering
let _id = 0
function q(text, category) {
  return { id: _id++, text, category }
}

export const questions = [
  // ── Deep ──────────────────────────────────────────────────────────────────
  q("Wat is de mooiste les die je uit een moeilijke periode hebt gehaald?", "deep"),
  q("Wanneer voelde jij je voor het eerst echt volwassen?", "deep"),
  q("Wat is iets wat jij doet omdat je denkt dat je het hoort te doen, maar eigenlijk helemaal niet wil?", "deep"),
  q("Hoe anders ben jij nu dan je vijf jaar geleden had verwacht?", "deep"),
  q("Wat is de grootste mythe die mensen over jou geloven?", "deep"),
  q("Wanneer heb jij voor het laatst gehuild — en waarom?", "deep"),
  q("Wat is iets wat jij diep van binnen gelooft, maar zelden hardop zegt?", "deep"),
  q("Wat zou jij anders doen als niemand je zou oordelen?", "deep"),
  q("Hoe ga jij om met het gevoel dat je niet genoeg bent?", "deep"),
  q("Wat is iets wat jij voor jezelf hebt losgelaten maar lang niet los kon laten?", "deep"),
  q("Wat is de meest pijnlijke les die een relatie je heeft geleerd?", "deep"),
  q("Hoe echt ben jij tegenover de mensen om je heen — en tegenover jezelf?", "deep"),
  q("Wat is je grootste onverwerkte pijn?", "deep"),
  q("Als jij eerlijk bent: ben jij gelukkig? Wat ontbreekt er nog?", "deep"),
  q("Wat is iets dat jij doet om te vermijden dat je te veel nadenkt?", "deep"),
  q("Welke versie van jezelf heb jij achtergelaten, en mis je die soms?", "deep"),
  q("Wat is het moedigste wat jij ooit hebt gedaan?", "deep"),
  q("Wanneer voel jij je het meest alleen — ook als je omringd bent door mensen?", "deep"),
  q("Wat is het zwaarste wat jij ooit hebt gedragen zonder dat iemand het wist?", "deep"),
  q("Hoe zou het voelen als dit gesprek de laatste keer was dat we spraken?", "deep"),

  // ── First Date ────────────────────────────────────────────────────────────
  q("Wat is het eerste wat je 's ochtends doet?", "first-date"),
  q("Koffie of thee — en waarom is dat geen discussie?", "first-date"),
  q("Wat is jouw go-to gerecht als je indruk wil maken?", "first-date"),
  q("Ben je meer een stad- of een natuurpersoon?", "first-date"),
  q("Heb je een guilty pleasure serie die je altijd opnieuw kijkt?", "first-date"),
  q("Wat vind je het leukst aan je werk of studie?", "first-date"),
  q("Hoe ziet jouw perfecte weekend eruit?", "first-date"),
  q("Wat is het laatste boek of de laatste film die je echt raakte?", "first-date"),
  q("Waar wordt jij altijd blij van, hoe saai het ook klinkt?", "first-date"),
  q("Ben je iemand die vroeg of laat op een feestje aankomt?", "first-date"),
  q("Wat is jouw favoriete plek in de wereld — en waarom?", "first-date"),
  q("Hond, kat, of geen van beiden?", "first-date"),
  q("Wat is iets wat bijna niemand over jou weet?", "first-date"),
  q("Wat zou je morgen doen als geld geen rol speelde?", "first-date"),
  q("Wat is iets waar jij echt niet tegen kunt bij iemand anders?", "first-date"),
  q("Ben je meer een planner of een spontaan persoon?", "first-date"),
  q("Wat is de meest random skill die jij hebt?", "first-date"),
  q("Wat is jouw favoriete manier om te ontspannen na een drukke dag?", "first-date"),
  q("Wat is iets wat jij altijd wil proberen maar nog steeds niet hebt gedaan?", "first-date"),
  q("Hoe zou jouw beste vriend jou in drie woorden omschrijven?", "first-date"),

  // ── Flirty — Licht ────────────────────────────────────────────────────────
  q("Wat is het eerste dat jou aantrekt in iemand — écht?", "flirty"),
  q("Heb jij ooit iemand aantrekkelijk gevonden die je dat nooit had verwacht?", "flirty"),
  q("Wat is jouw meest onderschatte eigenschap in een relatie?", "flirty"),
  q("Hoe zie jij de perfecte eerste kus — omschrijf de setting.", "flirty"),
  q("Wat vind jij romantischer: een groot gebaar of kleine aandacht?", "flirty"),

  // ── Flirty — Medium ───────────────────────────────────────────────────────
  q("Op een schaal van 1 tot 10: hoe goed ben jij in flirten?", "flirty"),
  q("Wat is het meest gewaagde dat jij ooit hebt gedaan voor iemand die je leuk vond?", "flirty"),
  q("Hoe merk jij dat iemand jou aantrekkelijk vindt — en wat doe jij daarmee?", "flirty"),
  q("Wat is het gedurfste berichtje dat jij ooit hebt gestuurd?", "flirty"),
  q("Heb jij ooit iemand gekust terwijl je wist dat je dat eigenlijk niet moest doen?", "flirty"),
  q("Wat is het meest verleidelijke aan jou — en weet jij dat zelf?", "flirty"),
  q("Wat doe jij bewust (of onbewust) als je iemand leuk vindt?", "flirty"),

  // ── Flirty — Spicy ────────────────────────────────────────────────────────
  q("Wat is jouw guilty pleasure fantasie die je nog nooit hardop hebt gezegd?", "flirty"),
  q("Heb jij ooit iets gedaan in de slaapkamer wat je achteraf echt heel stoer vond van jezelf?", "flirty"),
  q("Wat is het meest onverwachte moment geweest dat je enorm opgewonden raakte?", "flirty"),
  q("Wat is iets wat jij echt leuk vindt in bed maar bijna nooit durft te vragen?", "flirty"),
  q("Heb jij ooit iemand verleid zonder dat diegene doorhad dat je het deed?", "flirty"),
  q("Wat is het spannendste wat jij ooit hebt gedaan met iemand die je nog niet zo lang kende?", "flirty"),
  q("Wat is iets dat jij in de slaapkamer écht wil proberen maar nog steeds niet hebt gedaan?", "flirty"),
  q("Als je één avond alles mocht doen zonder oordeel — wat staat er als eerste op de lijst?", "flirty"),

  // ── Vrienden ──────────────────────────────────────────────────────────────
  q("Wanneer had jij het gevoel dat we écht vrienden waren?", "vrienden"),
  q("Wat is iets over mij dat jou altijd heeft verbaasd?", "vrienden"),
  q("Welk moment van ons samen denk jij het vaakst aan terug?", "vrienden"),
  q("Hoe beschrijf jij mij aan iemand die me nog niet kent?", "vrienden"),
  q("Is er iets wat je altijd al had willen zeggen maar nog niet hebt gedaan?", "vrienden"),
  q("Wat is iets aan jou dat je denkt dat ik nog niet doorheb?", "vrienden"),
  q("Wat zou jij me aanraden als ik één ding in mijn leven zou veranderen?", "vrienden"),
  q("Hoe gaat het écht met jou — niet het antwoord dat je normaal geeft?", "vrienden"),
  q("Wat is jouw grootste insecurity die je zelden deelt?", "vrienden"),
  q("Waar ben jij in je leven nu het meest bang voor?", "vrienden"),
  q("Welke keuze heb jij gemaakt waar je in stilte het meest trots op bent?", "vrienden"),
  q("Wat geeft jou energie op de dagen dat alles zwaar voelt?", "vrienden"),
  q("Wat is iets waar jij elke dag dankbaar voor bent maar nooit over praat?", "vrienden"),
  q("Wat is de beste raad die iemand je ooit heeft gegeven?", "vrienden"),
  q("Als jij één ding aan de wereld kon veranderen, wat zou dat zijn?", "vrienden"),
  q("Wat is de meest waardevolle les die je de afgelopen twee jaar hebt geleerd?", "vrienden"),
  q("Wat is iets dat jij van mij hebt geleerd?", "vrienden"),
  q("Hoe wil jij dat mensen jou herinneren?", "vrienden"),
  q("Wat is iets dat je nu weet maar je 18-jarige zelf echt had moeten weten?", "vrienden"),
  q("Als we over tien jaar op dit moment terugkijken — wat hoop jij dat er anders is?", "vrienden"),
]

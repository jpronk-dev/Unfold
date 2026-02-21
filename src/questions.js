// Elke kaart heeft een unieke id, tekst, categorie, niveau en type (vraag/stelling)
let _id = 0
function q(tekst, category, niveau, type = 'vraag') {
  return { id: _id++, text: tekst, category, niveau, type }
}

export const questions = [
  // ── Deep Niveau 1: Nadenken ─────────────────────────────────────────────
  q("Wanneer voelde jij je voor het eerst echt volwassen?", "deep", 1),
  q("Wat is de beste les die je uit een moeilijke periode hebt meegenomen?", "deep", 1),
  q("De meeste mensen leven het leven dat anderen voor hen hebben uitgestippeld.", "deep", 1, "stelling"),
  q("Hoe anders ben jij nu dan je vijf jaar geleden had verwacht?", "deep", 1),
  q("Welke versie van jezelf heb jij achtergelaten en mis je die soms?", "deep", 1),
  q("Echte verandering begint pas als je stopt met jezelf excuses te geven.", "deep", 1, "stelling"),
  q("Wat is iets dat jij doet omdat je denkt dat het hoort maar eigenlijk helemaal niet wil?", "deep", 1),
  q("Wat is het grootste misverstand dat mensen over jou hebben?", "deep", 1),

  // ── Deep Niveau 2: Kwetsbaar ────────────────────────────────────────────
  q("Wanneer heb jij voor het laatst gehuild en waarom?", "deep", 2),
  q("Mensen zijn niet bang om te falen. Ze zijn bang voor wat anderen er dan van denken.", "deep", 2, "stelling"),
  q("Hoe ga jij om met het gevoel dat je niet goed genoeg bent?", "deep", 2),
  q("Wat doe jij als je te veel in je hoofd zit?", "deep", 2),
  q("Je kunt iemand vergeven en tegelijkertijd besluiten ze niet meer in je leven te willen.", "deep", 2, "stelling"),
  q("Wanneer voel jij je het meest alleen ook als je omringd bent door mensen?", "deep", 2),
  q("Wat zou jij anders doen als niemand je kon oordelen?", "deep", 2),
  q("De dingen waar je het meest trots op bent zijn zelden de dingen die andere mensen zien.", "deep", 2, "stelling"),

  // ── Deep Niveau 3: Confronterend ────────────────────────────────────────
  q("Wat is de pijnlijkste les die een relatie jou heeft geleerd?", "deep", 3),
  q("Hoe jij over je ex praat zegt meer over jou dan over hen.", "deep", 3, "stelling"),
  q("Op welke manier ben jij precies geworden wat je nooit wilde worden?", "deep", 3),
  q("Wat is de grootste fout die jij ooit hebt gemaakt en nooit echt hebt rechtgezet?", "deep", 3),
  q("Iedereen heeft wel iets gedaan waar ze nog niet echt vrede mee hebben.", "deep", 3, "stelling"),
  q("Hoe eerlijk ben jij eigenlijk tegenover de mensen om je heen en tegenover jezelf?", "deep", 3),
  q("Heb jij ooit bewust iemand gekwetst en hoe leef jij daarmee?", "deep", 3),
  q("Sommige mensen houden een relatie in stand puur uit angst voor de leegte die achterblijft.", "deep", 3, "stelling"),

  // ── Deep Niveau 4: Donker en rauw ───────────────────────────────────────
  q("Wat is iets dat jij over jezelf weet maar liever niet zou weten?", "deep", 4),
  q("De versie van jezelf die je 's nachts ziet is eerlijker dan de versie die je overdag laat zien.", "deep", 4, "stelling"),
  q("Wat is het donkerste dat jij ooit hebt gedacht?", "deep", 4),
  q("Heb jij ooit iemand zo diep gekwetst dat je weet dat het nooit meer goed komt?", "deep", 4),
  q("De meeste mensen weten precies wat ze moeten veranderen. Ze willen het alleen nog niet.", "deep", 4, "stelling"),
  q("Hoe bang ben jij voor de dood en wat doet die angst met hoe jij leeft?", "deep", 4),
  q("Wat blijft er van jou over als je alles weghaalt wat anderen van je verwachten?", "deep", 4),
  q("Als je echt eerlijk bent leef jij het leven dat jij wil of het leven dat je denkt te moeten willen?", "deep", 4, "stelling"),

  // ── First Date Niveau 1: Ijsbreker ──────────────────────────────────────
  q("Wat is het eerste dat je doet als je 's ochtends wakker wordt?", "first-date", 1),
  q("Wat zegt jouw Spotify Wrapped over jou als persoon?", "first-date", 1),
  q("Als iemand slecht is voor het personeel van een restaurant ga ik er meteen van uit dat ze ook slecht zijn voor mij.", "first-date", 1, "stelling"),
  q("Wat is jouw go-to avond als je echt wil ontspannen?", "first-date", 1),
  q("Ben je meer een uitgaan of een thuisblijven persoon?", "first-date", 1),
  q("Mensen die altijd te laat komen vind ik gewoon disrespectful.", "first-date", 1, "stelling"),
  q("Welke serie heb jij al drie keer opnieuw gekeken en zou je morgen weer beginnen?", "first-date", 1),
  q("Hoe ziet jouw perfecte weekend eruit?", "first-date", 1),

  // ── First Date Niveau 2: Iets dieper ────────────────────────────────────
  q("Wat is voor jou een absolute dealbreaker bij iemand?", "first-date", 2),
  q("De meeste mensen zijn pas echt eerlijk na middernacht.", "first-date", 2, "stelling"),
  q("Wat is het meest random talent dat jij hebt?", "first-date", 2),
  q("Hoe reageer jij als iemand je een compliment geeft? Ben je er goed in om het gewoon aan te nemen?", "first-date", 2),
  q("Je weet binnen vijf minuten of er een vibe is. De rest is jezelf overtuigen.", "first-date", 2, "stelling"),
  q("Wat is iets dat jij doet wat andere mensen waarschijnlijk irritant vinden maar jij gewoon normaal?", "first-date", 2),
  q("Ben je iemand die op tijd is of altijd een beetje te laat?", "first-date", 2),
  q("Mensen die zeggen dat ze geen drama willen zijn zelf altijd het drama.", "first-date", 2, "stelling"),

  // ── First Date Niveau 3: Uitdagend ──────────────────────────────────────
  q("Heb jij ooit iemand geghost? Wat was je reden?", "first-date", 3),
  q("Iedereen heeft een ex waarvan ze stiekem hopen dat het toch niet echt voorbij is.", "first-date", 3, "stelling"),
  q("Wat is de meest awkward situatie die jij ooit op een date hebt meegemaakt?", "first-date", 3),
  q("Hoe lang duurt het voordat jij iemand echt vertrouwt?", "first-date", 3),
  q("Je kunt aan iemand zien of die goed in bed is. Gewoon voelen.", "first-date", 3, "stelling"),
  q("Heb jij ooit iemand geliked op instagram en daarna in paniek snel geunliked?", "first-date", 3),
  q("Wat is het meest impulsieve dat jij ooit hebt gedaan voor iemand die je leuk vond?", "first-date", 3),
  q("Spanning is zoveel aantrekkelijker dan zekerheid. Zeker in het begin.", "first-date", 3, "stelling"),

  // ── First Date Niveau 4: Ongemakkelijk eerlijk ──────────────────────────
  q("Wat is iets dat bijna niemand over jou weet maar eigenlijk veel verklaart?", "first-date", 4),
  q("Je kunt verliefd worden op iemand puur door een gesprek. Zonder ze ooit te zien.", "first-date", 4, "stelling"),
  q("Hoe eerlijk ben jij op een eerste date over wie je echt bent?", "first-date", 4),
  q("Wat is iets dat jij over jezelf gelooft maar wat anderen waarschijnlijk niet zien?", "first-date", 4),
  q("Op een eerste date laat iedereen een betere versie van zichzelf zien. Dat is gewoon een beetje liegen.", "first-date", 4, "stelling"),
  q("Wat is het stomste wat jij ooit hebt gedaan voor iemand die je leuk vond?", "first-date", 4),
  q("Als deze date een Netflix serie was welk genre zou het zijn?", "first-date", 4),
  q("Iedereen zit op een eerste date te bedenken of ze die persoon zouden zoenen. Niemand zegt het gewoon.", "first-date", 4, "stelling"),

  // ── Flirty Niveau 1: Licht en ontdekkend ───────────────────────────────
  q("Wat is het eerste dat jou aantrekt in iemand? Echt.", "flirty", 1),
  q("Heb jij ooit iemand aantrekkelijk gevonden waarvan je dat nooit had verwacht?", "flirty", 1),
  q("Je kunt zien of iemand goed kan zoenen aan hoe die een glas vasthoudt.", "flirty", 1, "stelling"),
  q("Hoe ziet de perfecte eerste kus eruit? Omschrijf de setting.", "flirty", 1),
  q("Wat vind jij romantischer? Een groot gebaar of kleine dagelijkse aandacht?", "flirty", 1),
  q("Spanning is zoveel aantrekkelijker dan zekerheid. Zeker in het begin.", "flirty", 1, "stelling"),
  q("Wat doe jij bewust of onbewust als je iemand leuk vindt?", "flirty", 1),
  q("De beste gesprekken beginnen pas na middernacht.", "flirty", 1, "stelling"),

  // ── Flirty Niveau 2: Medium en ondeugend ───────────────────────────────
  q("Op een schaal van 1 tot 10 hoe goed ben jij in flirten?", "flirty", 2),
  q("Iedereen heeft wel een keer geflirt met iemand terwijl dat echt niet de bedoeling was.", "flirty", 2, "stelling"),
  q("Wat is het meest gewaagde dat jij ooit hebt gedaan voor iemand die je leuk vond?", "flirty", 2),
  q("Heb jij ooit iemand gekust terwijl je wist dat je dat eigenlijk niet moest doen?", "flirty", 2),
  q("Seksuele spanning die je negeert wordt alleen maar groter.", "flirty", 2, "stelling"),
  q("Wat is het meest gewaagde berichtje dat jij ooit hebt gestuurd?", "flirty", 2),
  q("Hoe ver ben jij ooit gegaan op een plek waar je eigenlijk niet had mogen zijn?", "flirty", 2),
  q("De meeste mensen zijn in bed heel anders dan ze zich voordoen in het dagelijks leven.", "flirty", 2, "stelling"),

  // ── Flirty Niveau 3: Spicy en voor de dapperen ─────────────────────────
  q("Wat is jouw guilty pleasure fantasie die je nog nooit hardop hebt gezegd?", "flirty", 3),
  q("Mensen die zeggen dat ze niet zo zijn zijn meestal precies zo.", "flirty", 3, "stelling"),
  q("Wat is iets dat jij echt leuk vindt in bed maar bijna nooit durft te vragen?", "flirty", 3),
  q("Heb jij ooit seks gehad op een plek of moment waarvan je wist dat het echt niet de bedoeling was?", "flirty", 3),
  q("Goede seks heeft meer te maken met eerlijkheid dan met techniek.", "flirty", 3, "stelling"),
  q("Wat is het grootste taboe dat jij stiekem helemaal geen taboe vindt?", "flirty", 3),
  q("Hoe open ben jij echt over wat jij wil in bed of speel jij een rol?", "flirty", 3),
  q("De meeste mensen weten niet eens wat ze echt willen in bed omdat ze zichzelf dat nooit hebben toegestaan.", "flirty", 3, "stelling"),

  // ── Flirty Niveau 4: Extreem en last card standing ─────────────────────
  q("Als je één avond alles mocht doen zonder dat iemand het weet wat staat er dan als eerste op de lijst?", "flirty", 4),
  q("Iedereen heeft een fantasie die ze nooit hardop zullen zeggen. Ook niet aan hun partner.", "flirty", 4, "stelling"),
  q("Wat is het meest grensverleggende dat jij ooit hebt gedaan en stiekem wil herhalen?", "flirty", 4),
  q("Wat is iets dat jij seksueel echt wil maar je schaamt je te veel om het te vragen?", "flirty", 4),
  q("Schaamte en verlangen zitten veel dichter bij elkaar dan mensen willen toegeven.", "flirty", 4, "stelling"),
  q("Heb jij ooit iemand zo intens gewild dat het pijn deed en wat deed je daarmee?", "flirty", 4),
  q("Als jij een geheim seksueel leven had dat niemand kende hoe zou dat er dan uitzien?", "flirty", 4),
  q("De spannendste seks is niet altijd de beste seks maar het is wel de seks die je het langst onthoudt.", "flirty", 4, "stelling"),

  // ── Vrienden Niveau 1: Warm opstarten ───────────────────────────────────
  q("Wanneer wist jij dat we écht vrienden waren?", "vrienden", 1),
  q("Wat is iets over mij dat jou ooit heeft verrast?", "vrienden", 1),
  q("De meeste mensen hebben maar twee of drie vrienden die er echt toe doen. De rest vult gewoon de groepschat.", "vrienden", 1, "stelling"),
  q("Welk moment van ons samen denk jij het vaakst aan terug?", "vrienden", 1),
  q("Hoe zou jij mij omschrijven aan iemand die mij nog niet kent?", "vrienden", 1),
  q("Je ziet pas wie iemand echt is als er iets misgaat.", "vrienden", 1, "stelling"),
  q("Wat is iets dat jij van mij hebt geleerd?", "vrienden", 1),
  q("Hoe gaat het echt met jou? Niet het standaard antwoord.", "vrienden", 1),

  // ── Vrienden Niveau 2: Iets eerlijker ───────────────────────────────────
  q("Is er iets dat je altijd al tegen mij had willen zeggen maar nog steeds niet hebt gedaan?", "vrienden", 2),
  q("Iedereen speelt een rol in een vriendschap. De vraag is alleen hoe bewust je dat doet.", "vrienden", 2, "stelling"),
  q("Wat is jouw grootste onzekerheid die je zelden deelt?", "vrienden", 2),
  q("Waar ben jij op dit moment het meest bang voor?", "vrienden", 2),
  q("Een vriendschap die alleen werkt als alles goed gaat is eigenlijk geen echte vriendschap.", "vrienden", 2, "stelling"),
  q("Welke keuze heb jij gemaakt waar je in stilte het meest trots op bent?", "vrienden", 2),
  q("Wat is het beste advies dat iemand jou ooit heeft gegeven?", "vrienden", 2),
  q("De meeste mensen weten niet hoe ze iemand echt moeten troosten. Ze vullen liever de stilte.", "vrienden", 2, "stelling"),

  // ── Vrienden Niveau 3: Confronterend ────────────────────────────────────
  q("Heb jij ooit iets gedaan waarvan je weet dat ik het niet oké zou vinden?", "vrienden", 3),
  q("Je weet pas wie je echte vrienden zijn als je echt door iets hards heen gaat.", "vrienden", 3, "stelling"),
  q("Wat denk jij over mij dat je nooit hardop zegt?", "vrienden", 3),
  q("Ben jij ooit jaloers op mij geweest? Waarop dan?", "vrienden", 3),
  q("Iedereen heeft een kant van zichzelf die ze alleen laten zien als niemand kijkt.", "vrienden", 3, "stelling"),
  q("Heb jij ooit iets over mij verteld aan iemand anders wat je eigenlijk voor je had moeten houden?", "vrienden", 3),
  q("Wat is het eerlijkste dat jij mij ooit hebt gezegd? Dacht je dat ik het aankon?", "vrienden", 3),
  q("Sommige vriendschappen bestaan alleen nog uit gewoonte en niet meer uit een echte keuze.", "vrienden", 3, "stelling"),

  // ── Vrienden Niveau 4: Rauw en eerlijk ──────────────────────────────────
  q("Als jij één ding aan mij zou mogen veranderen wat zou dat dan zijn?", "vrienden", 4),
  q("De meeste mensen zijn bang om echt gezien te worden. Ook door hun beste vrienden.", "vrienden", 4, "stelling"),
  q("Wat is de grootste leugen die jij ooit hebt verteld aan iemand van wie je houdt?", "vrienden", 4),
  q("Hoe anders ben jij als niemand kijkt?", "vrienden", 4),
  q("Als iemand je echt kent weet diegene ook precies hoe die je pijn kan doen.", "vrienden", 4, "stelling"),
  q("Wat is het donkerste gevoel dat jij ooit hebt gehad zonder dat iemand het wist?", "vrienden", 4),
  q("Als jij morgen zou verdwijnen wat zou je mij nu willen zeggen?", "vrienden", 4),
  q("Er is altijd iets dat je niet vertelt aan je beste vriend. Altijd.", "vrienden", 4, "stelling"),
]

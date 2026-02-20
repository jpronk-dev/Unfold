// Elke kaart heeft een unieke id, tekst, categorie, niveau en type (vraag/stelling)
let _id = 0
function q(tekst, category, niveau, type = 'vraag') {
  return { id: _id++, text: tekst, category, niveau, type }
}

export const questions = [
  // ── Deep Niveau 1: Nadenken ─────────────────────────────────────────────
  q("Wanneer voelde jij je voor het eerst echt volwassen?", "deep", 1),
  q("Wat is de mooiste les die je uit een moeilijke periode hebt gehaald?", "deep", 1),
  q("De meeste mensen leven het leven dat anderen voor hen hebben bedacht.", "deep", 1, "stelling"),
  q("Hoe anders ben jij nu dan je vijf jaar geleden had verwacht?", "deep", 1),
  q("Welke versie van jezelf heb jij achtergelaten en mis je die soms?", "deep", 1),
  q("Echte verandering begint pas als je stopt met jezelf te rechtvaardigen.", "deep", 1, "stelling"),
  q("Wat is iets wat jij doet omdat je denkt dat je het hoort te doen, maar eigenlijk helemaal niet wil?", "deep", 1),
  q("Wat is de grootste mythe die mensen over jou geloven?", "deep", 1),

  // ── Deep Niveau 2: Kwetsbaar ────────────────────────────────────────────
  q("Wanneer heb jij voor het laatst gehuild en waarom?", "deep", 2),
  q("Mensen zijn niet bang voor het falen zelf ze zijn bang voor wat anderen er dan van denken.", "deep", 2, "stelling"),
  q("Hoe ga jij om met het gevoel dat je niet genoeg bent?", "deep", 2),
  q("Wat is iets dat jij doet om te vermijden dat je te veel nadenkt?", "deep", 2),
  q("Je kunt iemand vergeven en toch besluiten ze niet meer in je leven te willen.", "deep", 2, "stelling"),
  q("Wanneer voel jij je het meest alleen ook als je omringd bent door mensen?", "deep", 2),
  q("Wat zou jij anders doen als niemand je zou oordelen?", "deep", 2),
  q("De dingen waar je het meest trots op bent zijn zelden de dingen die anderen zien.", "deep", 2, "stelling"),

  // ── Deep Niveau 3: Confronterend ────────────────────────────────────────
  q("Wat is de meest pijnlijke les die een relatie je heeft geleerd?", "deep", 3),
  q("De manier waarop je over je ex praat zegt meer over jou dan over hen.", "deep", 3, "stelling"),
  q("Op welke manier ben jij precies zoals je nooit wilde worden?", "deep", 3),
  q("Wat is de grootste fout die jij ooit hebt gemaakt en nooit echt hebt rechtgezet?", "deep", 3),
  q("Iedereen heeft iets gedaan waar ze nog niet helemaal vrede mee hebben.", "deep", 3, "stelling"),
  q("Hoe echt ben jij tegenover de mensen om je heen en tegenover jezelf?", "deep", 3),
  q("Heb jij ooit bewust iemand gekwetst en hoe leef jij daarmee?", "deep", 3),
  q("Sommige mensen houden relaties in stand uit angst voor de leegte die ze achterlaten.", "deep", 3, "stelling"),

  // ── Deep Niveau 4: Donker & rauw ────────────────────────────────────────
  q("Wat is iets dat jij over jezelf weet maar liever niet weet?", "deep", 4),
  q("De versie van jou die je 's nachts in de spiegel ziet is eerlijker dan de versie die je overdag laat zien.", "deep", 4, "stelling"),
  q("Wat is het donkerste gedachte dat jij ooit hebt gehad?", "deep", 4),
  q("Heb jij ooit iemand zo diep gekwetst dat je weet dat het nooit meer goed is gekomen?", "deep", 4),
  q("De meeste mensen weten precies wat ze moeten veranderen ze willen het alleen nog niet.", "deep", 4, "stelling"),
  q("Hoe bang ben jij voor de dood en wat doet die angst met je leven?", "deep", 4),
  q("Wat zou er overblijven van jou als je alles weghaalt wat anderen van je verwachten?", "deep", 4),
  q("Als je écht eerlijk bent: leef jij het leven dat jij wil, of het leven dat jij denkt te moeten willen?", "deep", 4, "stelling"),

  // ── First Date Niveau 1: Ijsbreker ──────────────────────────────────────
  q("Wat is het eerste wat je 's ochtends doet?", "first-date", 1),
  q("Koffie of thee en waarom is dat geen discussie?", "first-date", 1),
  q("Je kunt veel over iemand zeggen aan de hand van hoe die met een ober omgaat.", "first-date", 1, "stelling"),
  q("Wat is jouw go-to gerecht als je indruk wil maken?", "first-date", 1),
  q("Ben je meer een stad- of een natuurpersoon?", "first-date", 1),
  q("Een eerste date in een restaurant is eigenlijk een slecht idee.", "first-date", 1, "stelling"),
  q("Heb je een guilty pleasure serie die je altijd opnieuw kijkt?", "first-date", 1),
  q("Hoe ziet jouw perfecte weekend eruit?", "first-date", 1),

  // ── First Date Niveau 2: Iets dieper ────────────────────────────────────
  q("Wat is jouw absolute dealbreaker op een date?", "first-date", 2),
  q("De meeste mensen zijn eerlijker na middernacht dan overdag.", "first-date", 2, "stelling"),
  q("Wat is de meest random skill die jij hebt?", "first-date", 2),
  q("Hoe reageer jij als iemand je een compliment geeft echt?", "first-date", 2),
  q("Je voelt binnen vijf minuten of er een klik is. De rest is jezelf overtuigen.", "first-date", 2, "stelling"),
  q("Wat is iets dat jij doet wat anderen waarschijnlijk irritant vinden maar jij gewoon normaal?", "first-date", 2),
  q("Ben je iemand die vroeg of laat op een feestje aankomt?", "first-date", 2),
  q("Mensen die zeggen dat ze geen drama willen zijn altijd de bron van het drama.", "first-date", 2, "stelling"),

  // ── First Date Niveau 3: Uitdagend ──────────────────────────────────────
  q("Heb jij ooit iemand geghost en waarom?", "first-date", 3),
  q("Iedereen heeft een ex waarvan ze stiekem hopen dat het niet echt voorbij is.", "first-date", 3, "stelling"),
  q("Wat is de meest ongemakkelijke situatie die jij ooit op een date hebt meegemaakt?", "first-date", 3),
  q("Hoe lang duurt het voordat jij iemand echt vertrouwt?", "first-date", 3),
  q("Je kunt zien of iemand goed in bed is aan hoe die danst.", "first-date", 3, "stelling"),
  q("Heb jij ooit iemand geliked op social media en daarna snel unliked omdat je te ver was gescrold?", "first-date", 3),
  q("Wat is het stomste wat je ooit hebt gedaan voor iemand die je leuk vond?", "first-date", 3),
  q("Spanning is aantrekkelijker dan zekerheid in elk geval in het begin.", "first-date", 3, "stelling"),

  // ── First Date Niveau 4: Ongemakkelijk eerlijk ──────────────────────────
  q("Wat is het meest impulsieve wat jij ooit hebt gedaan voor iemand die je amper kende?", "first-date", 4),
  q("Je kunt verliefd worden op iemand via een gesprek alleen zonder ze ooit te hebben gezien.", "first-date", 4, "stelling"),
  q("Wat is iets wat bijna niemand over jou weet maar wat wel veel verklaart?", "first-date", 4),
  q("Hoe eerlijk ben jij op een eerste date over wie je echt bent?", "first-date", 4),
  q("De meeste mensen zijn op een eerste date een betere versie van zichzelf en dat is eigenlijk gewoon liegen.", "first-date", 4, "stelling"),
  q("Wat is iets dat jij over jezelf gelooft wat anderen waarschijnlijk niet zien?", "first-date", 4),
  q("Als deze date een film zou zijn welk genre zou het worden en waarom?", "first-date", 4),
  q("Iedereen zit op een eerste date te bedenken of ze deze persoon zouden zoenen. Niemand zegt het.", "first-date", 4, "stelling"),

  // ── Flirty Niveau 1: Licht Ontdekkend ─────────────────────────────────
  q("Wat is het eerste dat jou aantrekt in iemand écht?", "flirty", 1),
  q("Heb jij ooit iemand aantrekkelijk gevonden die je dat nooit had verwacht?", "flirty", 1),
  q("Je kunt zien of iemand goed kan zoenen aan hoe die een glas vasthoudt.", "flirty", 1, "stelling"),
  q("Hoe zie jij de perfecte eerste kus omschrijf de setting.", "flirty", 1),
  q("Wat vind jij romantischer: een groot gebaar of kleine aandacht?", "flirty", 1),
  q("Spanning is aantrekkelijker dan zekerheid in elk geval in het begin.", "flirty", 1, "stelling"),
  q("Wat doe jij bewust of onbewust als je iemand leuk vindt?", "flirty", 1),
  q("De beste gesprekken beginnen pas na middernacht.", "flirty", 1, "stelling"),

  // ── Flirty Niveau 2: Medium Ondeugend ─────────────────────────────────
  q("Op een schaal van 1 tot 10: hoe goed ben jij in flirten?", "flirty", 2),
  q("Iedereen heeft wel een keer geflirt met iemand terwijl dat écht niet de bedoeling was.", "flirty", 2, "stelling"),
  q("Wat is het meest gewaagde dat jij ooit hebt gedaan voor iemand die je leuk vond?", "flirty", 2),
  q("Heb jij ooit iemand gekust terwijl je wist dat je dat eigenlijk niet moest doen?", "flirty", 2),
  q("Seksuele spanning die je negeert wordt alleen maar sterker.", "flirty", 2, "stelling"),
  q("Wat is het gedurfste berichtje dat jij ooit hebt gestuurd?", "flirty", 2),
  q("Hoe ver ben jij ooit gegaan op een plek waar je eigenlijk niet had mogen gaan?", "flirty", 2),
  q("De meeste mensen zijn in bed heel anders dan ze zich voordoen in het dagelijks leven.", "flirty", 2, "stelling"),

  // ── Flirty Niveau 3: Spicy Voor de dapperen ───────────────────────────
  q("Wat is jouw guilty pleasure fantasie die je nog nooit hardop hebt gezegd?", "flirty", 3),
  q("Mensen die zeggen dat ze 'niet zo zijn' zijn meestal precies zo.", "flirty", 3, "stelling"),
  q("Wat is iets wat jij echt leuk vindt in bed maar bijna nooit durft te vragen?", "flirty", 3),
  q("Heb jij ooit seks gehad op een plek of moment waarvan je wist: dit is echt niet de bedoeling?", "flirty", 3),
  q("Goede seks heeft meer te maken met eerlijkheid dan met techniek.", "flirty", 3, "stelling"),
  q("Wat is het grootste taboe dat jij stiekem helemaal niet zo'n taboe vindt?", "flirty", 3),
  q("Hoe open ben jij écht over wat jij wil in bed of speel jij een rol?", "flirty", 3),
  q("De meeste mensen weten niet wat ze echt willen in bed ze hebben het zichzelf nooit écht toegestaan na te denken.", "flirty", 3, "stelling"),

  // ── Flirty Niveau 4: Extreem Last card standing ───────────────────────
  q("Als je één avond alles mocht doen zonder oordeel wat staat er als eerste op de lijst?", "flirty", 4),
  q("Iedereen heeft een fantasie die ze nooit hardop zullen zeggen ook niet aan hun partner.", "flirty", 4, "stelling"),
  q("Wat is het meest grensverleggende wat jij ooit hebt gedaan en heimelijk wil herhalen?", "flirty", 4),
  q("Wat is iets dat jij seksueel écht wil maar je schaamt je te veel om het ooit te vragen?", "flirty", 4),
  q("Schaamte en seksueel verlangen zitten vaak veel dichter bij elkaar dan mensen willen toegeven.", "flirty", 4, "stelling"),
  q("Heb jij ooit iemand zo intens gewild dat het pijn deed en wat deed je daarmee?", "flirty", 4),
  q("Als jij een geheim seksueel leven had dat niemand kende hoe zou dat eruitzien?", "flirty", 4),
  q("De spannendste seks is niet per se de beste seks maar het is wel de seks die je het langst onthoudt.", "flirty", 4, "stelling"),

  // ── Vrienden Niveau 1: Warm opstarten ───────────────────────────────────
  q("Wanneer had jij het gevoel dat we écht vrienden waren?", "vrienden", 1),
  q("Wat is iets over mij dat jou altijd heeft verbaasd?", "vrienden", 1),
  q("De meeste mensen hebben maar twee of drie vrienden die er écht toe doen. De rest is bijvulling.", "vrienden", 1, "stelling"),
  q("Welk moment van ons samen denk jij het vaakst aan terug?", "vrienden", 1),
  q("Hoe beschrijf jij mij aan iemand die me nog niet kent?", "vrienden", 1),
  q("Je kunt zien hoe iemand écht is aan hoe die reageert als iets niet gaat zoals gepland.", "vrienden", 1, "stelling"),
  q("Wat is iets dat jij van mij hebt geleerd?", "vrienden", 1),
  q("Hoe gaat het écht met jou niet het antwoord dat je normaal geeft?", "vrienden", 1),

  // ── Vrienden Niveau 2: Iets eerlijker ───────────────────────────────────
  q("Is er iets wat je altijd al had willen zeggen maar nog niet hebt gedaan?", "vrienden", 2),
  q("Iedereen speelt een rol in vriendschappen. De vraag is alleen hoe bewust je dat doet.", "vrienden", 2, "stelling"),
  q("Wat is jouw grootste insecurity die je zelden deelt?", "vrienden", 2),
  q("Waar ben jij in je leven nu het meest bang voor?", "vrienden", 2),
  q("Een vriendschap die alleen werkt als alles goed gaat, is eigenlijk geen vriendschap.", "vrienden", 2, "stelling"),
  q("Welke keuze heb jij gemaakt waar je in stilte het meest trots op bent?", "vrienden", 2),
  q("Wat is de beste raad die iemand je ooit heeft gegeven?", "vrienden", 2),
  q("De meeste mensen weten niet hoe ze iemand écht moeten troosten. Ze vullen de stilte liever op.", "vrienden", 2, "stelling"),

  // ── Vrienden Niveau 3: Confronterend ────────────────────────────────────
  q("Heb jij ooit iets gedaan waarvan je weet dat ik het niet goed zou keuren?", "vrienden", 3),
  q("Je weet pas wie je echte vrienden zijn als je iets echt moeilijks doormaakt.", "vrienden", 3, "stelling"),
  q("Wat is iets dat jij over mij denkt maar nooit hardop zegt?", "vrienden", 3),
  q("Ben jij ooit jaloers op mij geweest en waarop?", "vrienden", 3),
  q("Iedereen heeft een versie van zichzelf die ze alleen laten zien als niemand kijkt.", "vrienden", 3, "stelling"),
  q("Heb jij ooit iets over mij verteld aan iemand anders wat je eigenlijk niet had mogen zeggen?", "vrienden", 3),
  q("Wat is het eerlijkste wat jij mij ooit hebt gezegd en dacht je dat ik het aankon?", "vrienden", 3),
  q("Sommige vriendschappen worden alleen in stand gehouden door gewoonte, niet door keuze.", "vrienden", 3, "stelling"),

  // ── Vrienden Niveau 4: Rauw & eerlijk ───────────────────────────────────
  q("Als jij één ding aan mij zou mogen veranderen wat zou dat zijn?", "vrienden", 4),
  q("De meeste mensen zijn bang om echt gezien te worden ook door hun beste vrienden.", "vrienden", 4, "stelling"),
  q("Wat is de grootste leugen die jij ooit hebt verteld aan iemand die je lief hebt?", "vrienden", 4),
  q("Hoe anders ben jij als niemand kijkt?", "vrienden", 4),
  q("Als iemand je echt kent, weet die ook precies hoe die je pijn kan doen.", "vrienden", 4, "stelling"),
  q("Wat is het donkerste gevoel dat jij ooit hebt gehad zonder dat iemand het wist?", "vrienden", 4),
  q("Als jij morgen zou verdwijnen wat zou je me nu willen zeggen?", "vrienden", 4),
  q("Er is altijd iets dat je niet vertelt aan je beste vriend. Altijd.", "vrienden", 4, "stelling"),
]

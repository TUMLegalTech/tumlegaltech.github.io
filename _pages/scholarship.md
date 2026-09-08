---
layout: page
title: scholarship
permalink: /scholarship/
description: "Stipendium für eine Masterarbeit im Bereich Legal Tech mit Forschungsaufenthalt am CodeX, Stanford University · Bewerbungsfrist 01.10.2026"
nav: true
nav_order: 9
---

<!-- _pages/scholarship.md -->

<style>
  .sch { max-width: 100%; }

  /* Language switcher */
  .sch-lang { display: flex; gap: 0.4rem; justify-content: flex-end; margin: -0.5rem 0 1.5rem; }
  .sch-lang button {
    font-family: inherit; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 0.3rem 0.9rem; border-radius: 999px; cursor: pointer;
    border: 1px solid var(--global-divider-color); background: transparent;
    color: var(--global-text-color-light); transition: all 0.15s ease-in-out;
  }
  .sch-lang button:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
  .sch-lang button[aria-pressed="true"] {
    background: var(--global-theme-color); border-color: var(--global-theme-color);
    color: var(--global-hover-text-color);
  }
  .sch[data-lang="de"] > .sch-block[lang="en"] { display: none; }
  .sch[data-lang="en"] > .sch-block[lang="de"] { display: none; }

  /* Translation disclaimer */
  .sch-translated {
    font-style: italic; font-size: 0.9rem; color: var(--global-text-color-light);
    border-bottom: 1px solid var(--global-divider-color); padding-bottom: 1rem; margin-bottom: 1.5rem;
  }

  /* Lead */
  .sch-lead { border-left: 3px solid var(--global-theme-color); padding: 0.1rem 0 0.1rem 1.3rem; margin-bottom: 2rem; }
  .sch-lead p { margin-bottom: 0.6rem; }
  .sch-lead .sch-amount { font-size: 1.1rem; font-weight: 600; }
  .sch-lead .sch-dates { font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 0; }

  /* Facts / timeline tables */
  .sch-scroll { overflow-x: auto; margin-bottom: 2rem; }
  .sch-table { width: 100%; border-collapse: collapse; margin-bottom: 0; }
  .sch-table th, .sch-table td {
    padding: 0.6rem 0.8rem; border-bottom: 1px solid var(--global-divider-color);
    text-align: left; vertical-align: top; font-size: 0.95rem;
  }
  .sch-table th { width: 38%; font-weight: 600; }
  .sch-table tr:last-child th, .sch-table tr:last-child td { border-bottom: none; }

  /* Checklist */
  .sch-check { list-style: none; padding-left: 0; }
  .sch-check li { position: relative; padding-left: 1.7rem; margin-bottom: 0.65rem; }
  .sch-check li i { position: absolute; left: 0; top: 0.3rem; font-size: 0.8rem; color: var(--global-theme-color); }

  /* Nested list inside "two instalments" bullet */
  .sch-block ol ol, .sch-block ul ol { margin-top: 0.4rem; margin-bottom: 0; }

  /* Callouts */
  .sch-note {
    border-left: 4px solid var(--global-tip-block); background: var(--global-tip-block-bg);
    color: var(--global-tip-block-text); border-radius: 4px;
    padding: 1rem 1.2rem; margin: 1.5rem 0; font-size: 0.93rem;
  }
  .sch-note.sch-warn {
    border-left-color: var(--global-warning-block); background: var(--global-warning-block-bg);
    color: var(--global-warning-block-text);
  }
  .sch-note p { margin-bottom: 0.6rem; }
  .sch-note p:last-child { margin-bottom: 0; }
  .sch-note a { color: inherit; text-decoration: underline; }
  .sch-note a:hover { color: inherit; }
  /* Theme sets a global `strong { color: var(--global-text-color) }`, which turns
     white in dark mode and is unreadable on the light callout background. */
  .sch-note p, .sch-note strong, .sch-note em,
  .sch-note li, .sch-note ol, .sch-note ul { color: inherit; }

  /* Call to action */
  .sch-cta {
    display: inline-block; padding: 0.6rem 1.4rem; border-radius: 4px; font-weight: 600;
    background: var(--global-theme-color); color: var(--global-hover-text-color) !important;
    text-decoration: none !important;
  }
  .sch-cta:hover { opacity: 0.85; color: var(--global-hover-text-color) !important; text-decoration: none !important; }

  /* FAQ */
  .sch-faq details { border-bottom: 1px solid var(--global-divider-color); padding: 0.75rem 0; }
  .sch-faq summary {
    cursor: pointer; font-weight: 600; list-style: none;
    display: flex; justify-content: space-between; align-items: center; gap: 1rem;
  }
  .sch-faq summary::-webkit-details-marker { display: none; }
  .sch-faq summary::after { content: "+"; color: var(--global-theme-color); font-weight: 400; font-size: 1.2rem; line-height: 1; }
  .sch-faq details[open] summary::after { content: "\2212"; }
  .sch-faq details p { margin: 0.7rem 0 0; font-size: 0.95rem; color: var(--global-text-color-light); }

  /* Contact card */
  .sch-contact { border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 1.2rem 1.4rem; margin-top: 2rem; }
  .sch-contact p { margin-bottom: 0.3rem; font-size: 0.95rem; }
  .sch-contact p:last-child { margin-bottom: 0; }
  .sch-fineprint { font-size: 0.85rem; color: var(--global-text-color-light); margin-top: 2rem; }
  .sch-fineprint strong { color: var(--global-text-color); }
</style>

<div class="sch" id="scholarship" data-lang="de">

  <div class="sch-lang">
    <button type="button" data-lang="de" aria-pressed="true">Deutsch</button>
    <button type="button" data-lang="en" aria-pressed="false">English</button>
  </div>

  <!-- ===================================================================== -->
  <!-- DEUTSCH (maßgebliche Fassung, 1:1 aus der Ausschreibung)              -->
  <!-- ===================================================================== -->
  <div class="sch-block" lang="de">

    <div class="sch-lead">
      <p class="sch-amount">🎓 Stipendium CodeX Stanford – Masterarbeit Legal Tech (WS 26/27)</p>
      <p>Die <strong>Professur für Legal Tech</strong> (Prof. Dr. Matthias Grabmair) der <strong>Technischen Universität München</strong> vergibt gemeinsam mit dem <strong>Legal Tech Colab (LTC) von UnternehmerTUM und TUM Venture Labs</strong> und in Kooperation mit dem <strong>CodeX – The Stanford Center for Legal Informatics</strong> ein Stipendium in Höhe von <strong>10.000 €</strong> für eine Masterarbeit im Bereich <strong>Legal Tech</strong> mit Forschungsaufenthalt an der <strong>Stanford University</strong>.</p>
      <p class="sch-dates">Start: <strong>Wintersemester 2026/27</strong> · Bewerbungsfrist: 01.10.2026</p>
    </div>

    <h2>Auf einen Blick</h2>

    <div class="sch-scroll">
      <table class="sch-table">
        <tr><th>Förderhöhe</th><td>10.000 € (Pauschale, 2 Raten)</td></tr>
        <tr><th>Aufenthaltsdauer</th><td>3–6 Monate am CodeX, Stanford University</td></tr>
        <tr><th>Zielgruppe</th><td>Studierende im Masterstudiengang (M.Sc.) an der TUM School of Computation, Information and Technology (CIT)</td></tr>
        <tr><th>Themenbereich</th><td>Legal Tech – Themenvorschlag mit Bewerbung</td></tr>
        <tr><th>Start</th><td>Wintersemester 2026/27</td></tr>
        <tr><th>Bewerbungsfrist</th><td>01.10.2026</td></tr>
        <tr><th>Höchstalter</th><td>35 Jahre zum Zeitpunkt der Bewerbung</td></tr>
        <tr><th>Bewerbung an</th><td><a href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}">simon.hochstrasser<span>&#64;</span>tum<span>&#46;</span>de</a></td></tr>
      </table>
    </div>

    <h2>Über das Stipendium</h2>

    <p>Das Stipendium ermöglicht herausragenden Master-Studierenden der TUM School of Computation, Information and Technology (CIT), ihre <strong>Masterarbeit im Bereich Legal Tech</strong> mit einem mehrmonatigen Forschungsaufenthalt am renommierten <strong>CodeX – The Stanford Center for Legal Informatics</strong> zu verbinden. Ziel der Förderung ist es, exzellente Nachwuchskräfte an der Schnittstelle von <strong>Informatik und Recht</strong> zu unterstützen und die <strong>transatlantische Forschungskooperation</strong> zwischen München und Stanford zu stärken.</p>

    <h3>Die Partner</h3>

    <ul>
      <li><strong>CodeX – The Stanford Center for Legal Informatics</strong> ist ein gemeinsames Zentrum der Stanford Law School und des Stanford Department of Computer Science und gilt als weltweit führende Einrichtung an der Schnittstelle von Recht und Technologie. Schwerpunkte sind u. a. Computational Law, Legal Informatics, Legal Analytics und KI im juristischen Kontext.</li>
      <li><strong>Professur für Legal Tech, TUM</strong> (Prof. Dr. Matthias Grabmair) forscht an der TUM School of Computation, Information and Technology (CIT) zu maschinellem Lernen, Natural Language Processing und deren Anwendung auf rechtliche Fragestellungen.</li>
      <li><strong>Legal Tech Colab (LTC) von UnternehmerTUM und TUM Venture Labs</strong> ist die zentrale Plattform für Legal-Tech-Innovation im Münchner Ökosystem. Das LTC verbindet Wissenschaft, Praxis und Start-ups, fördert den Transfer von Forschungsergebnissen in die Anwendung und unterstützt das Stipendium als Co-Organisator und Brücke zur Legal-Tech-Community.</li>
    </ul>

    <h2>Wer kann sich bewerben?</h2>

    <p>Bitte prüfen Sie anhand der folgenden Checkliste, ob Sie die Voraussetzungen erfüllen:</p>

    <ul class="sch-check">
      <li><i class="fa-solid fa-check"></i>Eingeschrieben in einem <strong>Masterstudiengang der TUM School of Computation, Information and Technology (CIT)</strong> an der <strong>Technischen Universität München</strong></li>
      <li><i class="fa-solid fa-check"></i><strong>Kein Masterstudium im Ausland</strong> – die Masterarbeit muss im Rahmen des Masterstudiums an der TU München verfasst werden</li>
      <li><i class="fa-solid fa-check"></i><strong>Höchstalter 35 Jahre</strong> zum Zeitpunkt der Bewerbung</li>
      <li><i class="fa-solid fa-check"></i>Konkreter <strong>Themenvorschlag im Bereich Legal Tech</strong> für die Masterarbeit (1 Seite Exposé) mit Nennung <strong>mind. eines thematisch passenden CodeX-Mentors/einer CodeX-Mentorin</strong> aus der genannten Liste</li>
      <li><i class="fa-solid fa-check"></i><strong>Sehr gute Englischkenntnisse</strong> in Wort und Schrift, nachgewiesen z. B. durch TOEFL, IELTS oder einen gleichwertigen Nachweis</li>
      <li><i class="fa-solid fa-check"></i>Bereitschaft zu einem <strong>Forschungsaufenthalt von 3 bis 6 Monaten</strong> am CodeX in Stanford</li>
    </ul>

    <div class="sch-note">
      <p>🌍 <strong>Hinweis für internationale Bewerber:innen / Note for international applicants:</strong> Die Bewerbung steht allen Studierenden offen, die in einem der o. g. CIT-Masterstudiengänge an der TUM eingeschrieben sind – <strong>unabhängig von ihrer Nationalität</strong>. Applications are open to all students enrolled in a Master's program at the TUM School of Computation, Information and Technology (CIT), regardless of nationality. Bewerber:innen sind selbst dafür verantwortlich, rechtzeitig die <strong>Visa-Voraussetzungen</strong> für einen Forschungsaufenthalt in den USA zu klären.</p>
    </div>

    <h2>Leistungen des Stipendiums</h2>

    <ul>
      <li><strong>10.000 € Pauschalförderung</strong> für Reise, Unterkunft und Lebenshaltung während des Aufenthalts in Stanford</li>
      <li><strong>Auszahlung in zwei Raten:</strong>
        <ol>
          <li><strong>Erste Rate</strong> zu Beginn des Aufenthalts</li>
          <li><strong>Zweite Rate</strong> nach Vorlage eines kurzen <strong>Zwischenberichts</strong></li>
        </ol>
      </li>
      <li>Auszahlung erfolgt ausschließlich auf ein <strong>deutsches Bankkonto</strong> der/des Stipendiat:in</li>
      <li><strong>Anbindung an das CodeX Stanford</strong></li>
      <li><strong>Co-Betreuung der Masterarbeit</strong> durch die Professur für Legal Tech der TUM</li>
      <li>Zugang zum <strong>Netzwerk</strong> des CodeX und der Professur für Legal Tech (Prof. Grabmair)</li>
      <li><strong>Zugang zu Mentoren aus dem Umfeld von CodeX</strong> wie bspw.: Prof. Mike Genesereth, Dr. Marzieh Nabi, Prof. Harry Surden, Prof. Oliver Goodenough, Dr. Robert Mahari, Prof. Sandy Pentland, Prof. Thibault Schrepel und Dr. Roland Vogl</li>
    </ul>

    <div class="sch-note sch-warn">
      <p>💡 Das Stipendium ist als pauschale Unterstützung konzipiert. Eine darüber hinausgehende Übernahme von Einzelkosten erfolgt nicht und ist von den Stipendiat:innen selbst zu tragen.</p>
      <p>Bei Abbruch des Forschungsaufenthalts oder der Masterarbeit ist das Stipendium <strong>anteilig zurückzuzahlen</strong>.</p>
    </div>

    <h2>Bewerbung</h2>

    <h3>Erforderliche Unterlagen</h3>

    <ol>
      <li><strong>Tabellarischer Lebenslauf (CV)</strong> – max. 2 Seiten</li>
      <li><strong>Motivationsschreiben</strong> – max. 1 Seite, mit Bezug zu Legal Tech, CodeX und den eigenen Forschungsinteressen</li>
      <li><strong>Themenexposé für die Masterarbeit</strong> – <strong>1 Seite</strong>, inkl. Forschungsfrage, methodischem Vorgehen, Bezug zu Legal Tech sowie Nennung <strong>mind. eines thematisch passenden CodeX-Mentors/einer CodeX-Mentorin</strong> aus der genannten Mentor:innen-Liste</li>
      <li><strong>Notenauszüge</strong> des Bachelorstudiums sowie (soweit vorhanden) des laufenden Masterstudiums</li>
      <li><strong>Immatrikulationsbescheinigung</strong> der TU München (Masterstudiengang der CIT-Fakultät)</li>
      <li><strong>Nachweis sehr guter Englischkenntnisse</strong> (TOEFL, IELTS oder vergleichbarer Nachweis)</li>
    </ol>

    <div class="sch-note">
      <p>📧 <strong>Einreichung:</strong> Bitte senden Sie alle Unterlagen <strong>gebündelt in einer PDF-Datei</strong> per E-Mail an die Professur für Legal Tech (Prof. Grabmair): <a href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}">simon.hochstrasser<span>&#64;</span>tum<span>&#46;</span>de</a></p>
      <p><strong>Betreff:</strong> „Bewerbung CodeX-Stipendium WS 26/27 – [Nachname]“</p>
      <p><strong>Bewerbungsfrist:</strong> 01.10.2026, 23:59 Uhr (Eingang am Lehrstuhl)</p>
    </div>

    <p><a class="sch-cta" href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}?subject=Bewerbung%20CodeX-Stipendium%20WS%2026/27%20-%20[Nachname]">Jetzt bewerben</a></p>

    <h2>Auswahlverfahren &amp; Zeitplan</h2>

    <p><strong>So läuft die Auswahl ab</strong></p>

    <p>Die Auswahl der Stipendiat:innen erfolgt durch ein <strong>internes Gremium der Professur für Legal Tech</strong> der TU München und des <strong>Legal Tech Colab (LTC)</strong> in enger <strong>Abstimmung mit dem CodeX – The Stanford Center for Legal Informatics</strong>.</p>

    <p>Bewertet werden insbesondere:</p>

    <ul>
      <li>akademische Leistungen im Bachelor- und Masterstudium</li>
      <li>Qualität, Originalität und Machbarkeit des eingereichten Themenexposés</li>
      <li>Motivation und Passung zum Forschungsschwerpunkt des CodeX</li>
      <li>Eignung für einen mehrmonatigen Forschungsaufenthalt in Stanford</li>
    </ul>

    <p>Die Entscheidung des Gremiums ist endgültig; ein Rechtsanspruch auf das Stipendium besteht nicht.</p>

    <p><strong>Zeitlicher Ablauf</strong></p>

    <div class="sch-scroll">
      <table class="sch-table">
        <tr><th>Phase</th><th>Zeitraum</th></tr>
        <tr><td>Bewerbungsfrist</td><td>01.10.2026</td></tr>
        <tr><td>Sichtung der Unterlagen &amp; Auswahlgespräche</td><td>Bis Mitte Oktober</td></tr>
        <tr><td>Entscheidung &amp; Benachrichtigung</td><td>Ende Oktober</td></tr>
        <tr><td>Start des Stipendiums / der Masterarbeit</td><td>Wintersemester 2026/27</td></tr>
        <tr><td>Forschungsaufenthalt am CodeX Stanford</td><td>3–6 Monate, individuell abgestimmt</td></tr>
      </table>
    </div>

    <h2>FAQ</h2>

    <div class="sch-faq">
      <details>
        <summary>Kann ich mich bewerben, wenn ich meinen Master im Ausland mache?</summary>
        <p>Nein. Voraussetzung ist eine aktive Einschreibung in einem Masterstudiengang der TUM School of Computation, Information and Technology (CIT) an der TU München. Ein Masterstudium im Ausland ist nicht förderfähig.</p>
      </details>
      <details>
        <summary>Muss das Thema der Masterarbeit bei Bewerbung bereits feststehen?</summary>
        <p>Ja. Mit der Bewerbung ist ein einseitiges Themenexposé im Bereich Legal Tech einzureichen. Anpassungen und Schärfungen in Abstimmung mit den Betreuenden in München und Stanford sind im weiteren Verlauf selbstverständlich möglich.</p>
      </details>
      <details>
        <summary>Wie lange dauert der Aufenthalt in Stanford?</summary>
        <p>Der Aufenthalt am CodeX ist flexibel auf 3 bis 6 Monate ausgelegt und wird individuell mit der Professur für Legal Tech (Prof. Grabmair) und dem CodeX Stanford abgestimmt.</p>
      </details>
      <details>
        <summary>Wie wird das Stipendium ausgezahlt?</summary>
        <p>Die 10.000 € werden in zwei Raten ausgezahlt: eine erste Rate zu Beginn des Aufenthalts in Stanford und eine zweite Rate nach Einreichung eines kurzen Zwischenberichts.</p>
      </details>
      <details>
        <summary>Wer entscheidet über die Vergabe?</summary>
        <p>Ein internes Gremium der Professur für Legal Tech (Prof. Grabmair) und des Legal Tech Colab (LTC) an der TUM in Abstimmung mit dem CodeX Stanford. Ein Rechtsanspruch auf das Stipendium besteht nicht.</p>
      </details>
      <details>
        <summary>Kann ich mich bewerben, obwohl ich keine deutsche Staatsangehörigkeit habe?</summary>
        <p>Ja. Das Stipendium steht allen Studierenden offen, die in einem Masterstudiengang der TUM School of Computation, Information and Technology (CIT) an der TU München eingeschrieben sind – unabhängig von der Nationalität. Bewerber:innen sind selbst für die Klärung der Visa-Anforderungen für die USA verantwortlich.</p>
      </details>
      <details>
        <summary>Kann ich das Stipendium mit anderen Förderungen kombinieren?</summary>
        <p>Eine Kombination mit anderen Stipendien ist grundsätzlich möglich. Bitte geben Sie in Ihrer Bewerbung an, ob und für welche weiteren Stipendien Sie sich parallel bewerben oder bereits gefördert werden.</p>
      </details>
    </div>

    <p class="sch-fineprint">📄 <strong>Hinweis zur Mittelherkunft</strong><br>
    Die Mittel stammen aus dem durch das Bayerische Staatsministerium der Justiz bewilligten Projekt „Legal Tech Colab“ (Förderkennzeichen: B 1 - 5120E - VI - 5116/2022) im Haushaltsjahr 2026. Die Fördermittel dürfen ausschließlich für projektbezogene Ausgaben (z. B. Reise, Unterkunft, Studienkosten) verwendet werden. Die/der Stipendiat:in verpflichtet sich, spätestens vier Wochen nach Ende des Förderzeitraums eine Bestätigung über die Durchführung sowie einen einfachen Verwendungsnachweis (Tabellarische Übersicht der Ausgaben) einzureichen.</p>

    <div class="sch-contact">
      <p>📮 <strong>Kontakt für Rückfragen</strong></p>
      <p><strong>Prof. Dr. Matthias Grabmair</strong><br>
      Professur für Legal Tech<br>
      TUM School of Computation, Information and Technology (CIT)<br>
      Technische Universität München</p>
      <p>Ansprechpartner: Simon Hochstraßer<br>
      E-Mail: <a href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}">simon.hochstrasser<span>&#64;</span>tum<span>&#46;</span>de</a></p>
    </div>

  </div>

  <!-- ===================================================================== -->
  <!-- ENGLISH (translation)                                                 -->
  <!-- ===================================================================== -->
  <div class="sch-block" lang="en">

    <p class="sch-translated">This English version is an automatic translation. The German version is the authoritative call for applications.</p>

    <div class="sch-lead">
      <p class="sch-amount">🎓 CodeX Stanford Scholarship – Master's Thesis in Legal Tech (WS 26/27)</p>
      <p>The <strong>Professorship for Legal Tech</strong> (Prof. Dr. Matthias Grabmair) at the <strong>Technical University of Munich</strong>, together with the <strong>Legal Tech Colab (LTC) of UnternehmerTUM and TUM Venture Labs</strong> and in cooperation with <strong>CodeX – The Stanford Center for Legal Informatics</strong>, awards a scholarship of <strong>€10,000</strong> for a master's thesis in <strong>Legal Tech</strong> including a research stay at <strong>Stanford University</strong>.</p>
      <p class="sch-dates">Start: <strong>winter semester 2026/27</strong> · Application deadline: 1 October 2026</p>
    </div>

    <h2>At a glance</h2>

    <div class="sch-scroll">
      <table class="sch-table">
        <tr><th>Funding amount</th><td>€10,000 (lump sum, 2 instalments)</td></tr>
        <tr><th>Duration of stay</th><td>3–6 months at CodeX, Stanford University</td></tr>
        <tr><th>Target group</th><td>Students enrolled in a master's programme (M.Sc.) at the TUM School of Computation, Information and Technology (CIT)</td></tr>
        <tr><th>Topic area</th><td>Legal Tech – topic proposal submitted with the application</td></tr>
        <tr><th>Start</th><td>Winter semester 2026/27</td></tr>
        <tr><th>Application deadline</th><td>1 October 2026</td></tr>
        <tr><th>Maximum age</th><td>35 years at the time of application</td></tr>
        <tr><th>Applications to</th><td><a href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}">simon.hochstrasser<span>&#64;</span>tum<span>&#46;</span>de</a></td></tr>
      </table>
    </div>

    <h2>About the scholarship</h2>

    <p>The scholarship enables outstanding master's students at the TUM School of Computation, Information and Technology (CIT) to combine their <strong>master's thesis in Legal Tech</strong> with a research stay of several months at the renowned <strong>CodeX – The Stanford Center for Legal Informatics</strong>. The goal of the funding is to support excellent early-career researchers at the intersection of <strong>computer science and law</strong> and to strengthen <strong>transatlantic research cooperation</strong> between Munich and Stanford.</p>

    <h3>The partners</h3>

    <ul>
      <li><strong>CodeX – The Stanford Center for Legal Informatics</strong> is a joint center of Stanford Law School and the Stanford Department of Computer Science and is considered the world's leading institution at the intersection of law and technology. Its focus areas include computational law, legal informatics, legal analytics and AI in legal contexts.</li>
      <li><strong>Professorship for Legal Tech, TUM</strong> (Prof. Dr. Matthias Grabmair) conducts research at the TUM School of Computation, Information and Technology (CIT) on machine learning, natural language processing and their application to legal problems.</li>
      <li><strong>Legal Tech Colab (LTC) of UnternehmerTUM and TUM Venture Labs</strong> is the central platform for Legal Tech innovation in the Munich ecosystem. The LTC connects academia, practice and start-ups, promotes the transfer of research results into application, and supports the scholarship as co-organiser and bridge to the Legal Tech community.</li>
    </ul>

    <h2>Who can apply?</h2>

    <p>Please use the following checklist to confirm that you meet the requirements:</p>

    <ul class="sch-check">
      <li><i class="fa-solid fa-check"></i>Enrolled in a <strong>master's programme at the TUM School of Computation, Information and Technology (CIT)</strong> at the <strong>Technical University of Munich</strong></li>
      <li><i class="fa-solid fa-check"></i><strong>No master's studies abroad</strong> – the master's thesis must be written as part of your master's programme at TUM</li>
      <li><i class="fa-solid fa-check"></i><strong>Maximum age 35 years</strong> at the time of application</li>
      <li><i class="fa-solid fa-check"></i>A concrete <strong>topic proposal in the field of Legal Tech</strong> for the master's thesis (1-page exposé), naming <strong>at least one thematically suitable CodeX mentor</strong> from the list given</li>
      <li><i class="fa-solid fa-check"></i><strong>Very good English language skills</strong>, written and spoken, evidenced for example by TOEFL, IELTS or an equivalent certificate</li>
      <li><i class="fa-solid fa-check"></i>Willingness to undertake a <strong>research stay of 3 to 6 months</strong> at CodeX in Stanford</li>
    </ul>

    <div class="sch-note">
      <p>🌍 <strong>Note for international applicants:</strong> Applications are open to all students enrolled in one of the CIT master's programmes named above at TUM – <strong>regardless of nationality</strong>. Applicants are themselves responsible for clarifying the <strong>visa requirements</strong> for a research stay in the USA in good time.</p>
    </div>

    <h2>What the scholarship provides</h2>

    <ul>
      <li><strong>€10,000 lump-sum funding</strong> for travel, accommodation and living costs during the stay at Stanford</li>
      <li><strong>Payment in two instalments:</strong>
        <ol>
          <li><strong>First instalment</strong> at the beginning of the stay</li>
          <li><strong>Second instalment</strong> upon submission of a short <strong>interim report</strong></li>
        </ol>
      </li>
      <li>Payment is made exclusively to a <strong>German bank account</strong> held by the scholarship recipient</li>
      <li><strong>Affiliation with CodeX Stanford</strong></li>
      <li><strong>Co-supervision of the master's thesis</strong> by the TUM Professorship for Legal Tech</li>
      <li>Access to the <strong>network</strong> of CodeX and of the Professorship for Legal Tech (Prof. Grabmair)</li>
      <li><strong>Access to mentors from the CodeX environment</strong>, such as: Prof. Mike Genesereth, Dr. Marzieh Nabi, Prof. Harry Surden, Prof. Oliver Goodenough, Dr. Robert Mahari, Prof. Sandy Pentland, Prof. Thibault Schrepel and Dr. Roland Vogl</li>
    </ul>

    <div class="sch-note sch-warn">
      <p>💡 The scholarship is designed as lump-sum support. Individual costs beyond this amount are not reimbursed and must be borne by the scholarship recipients themselves.</p>
      <p>If the research stay or the master's thesis is discontinued, the scholarship must be <strong>repaid on a pro-rata basis</strong>.</p>
    </div>

    <h2>Application</h2>

    <h3>Required documents</h3>

    <ol>
      <li><strong>Tabular CV</strong> – max. 2 pages</li>
      <li><strong>Letter of motivation</strong> – max. 1 page, relating to Legal Tech, CodeX and your own research interests</li>
      <li><strong>Topic exposé for the master's thesis</strong> – <strong>1 page</strong>, including the research question, methodological approach, relation to Legal Tech, and naming <strong>at least one thematically suitable CodeX mentor</strong> from the mentor list given</li>
      <li><strong>Transcripts of records</strong> for your bachelor's studies and, where available, your ongoing master's studies</li>
      <li><strong>Certificate of enrolment</strong> at the Technical University of Munich (master's programme at the CIT school)</li>
      <li><strong>Proof of very good English language skills</strong> (TOEFL, IELTS or comparable certificate)</li>
    </ol>

    <div class="sch-note">
      <p>📧 <strong>Submission:</strong> Please send all documents <strong>bundled in a single PDF file</strong> by email to the Professorship for Legal Tech (Prof. Grabmair): <a href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}">simon.hochstrasser<span>&#64;</span>tum<span>&#46;</span>de</a></p>
      <p><strong>Subject line:</strong> „Bewerbung CodeX-Stipendium WS 26/27 – [Nachname]“</p>
      <p><strong>Application deadline:</strong> 1 October 2026, 23:59 (receipt at the chair)</p>
    </div>

    <p><a class="sch-cta" href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}?subject=Bewerbung%20CodeX-Stipendium%20WS%2026/27%20-%20[Nachname]">Apply now</a></p>

    <h2>Selection process &amp; timeline</h2>

    <p><strong>How the selection works</strong></p>

    <p>Scholarship recipients are selected by an <strong>internal committee of the Professorship for Legal Tech</strong> at the Technical University of Munich and the <strong>Legal Tech Colab (LTC)</strong>, in close <strong>coordination with CodeX – The Stanford Center for Legal Informatics</strong>.</p>

    <p>The assessment considers in particular:</p>

    <ul>
      <li>academic performance in bachelor's and master's studies</li>
      <li>quality, originality and feasibility of the submitted topic exposé</li>
      <li>motivation and fit with the research focus of CodeX</li>
      <li>suitability for a research stay of several months at Stanford</li>
    </ul>

    <p>The committee's decision is final; there is no legal entitlement to the scholarship.</p>

    <p><strong>Timeline</strong></p>

    <div class="sch-scroll">
      <table class="sch-table">
        <tr><th>Phase</th><th>Period</th></tr>
        <tr><td>Application deadline</td><td>1 October 2026</td></tr>
        <tr><td>Review of documents &amp; selection interviews</td><td>Until mid-October</td></tr>
        <tr><td>Decision &amp; notification</td><td>End of October</td></tr>
        <tr><td>Start of the scholarship / master's thesis</td><td>Winter semester 2026/27</td></tr>
        <tr><td>Research stay at CodeX Stanford</td><td>3–6 months, individually arranged</td></tr>
      </table>
    </div>

    <h2>FAQ</h2>

    <div class="sch-faq">
      <details>
        <summary>Can I apply if I am doing my master's degree abroad?</summary>
        <p>No. Active enrolment in a master's programme at the TUM School of Computation, Information and Technology (CIT) at the Technical University of Munich is a prerequisite. Master's studies abroad are not eligible for funding.</p>
      </details>
      <details>
        <summary>Does the topic of the master's thesis have to be fixed at the time of application?</summary>
        <p>Yes. A one-page topic exposé in the field of Legal Tech must be submitted with the application. Adjustments and refinements in coordination with the supervisors in Munich and Stanford are of course possible at a later stage.</p>
      </details>
      <details>
        <summary>How long is the stay at Stanford?</summary>
        <p>The stay at CodeX is flexibly designed for 3 to 6 months and is arranged individually with the Professorship for Legal Tech (Prof. Grabmair) and CodeX Stanford.</p>
      </details>
      <details>
        <summary>How is the scholarship paid out?</summary>
        <p>The €10,000 is paid in two instalments: a first instalment at the beginning of the stay at Stanford and a second instalment after submission of a short interim report.</p>
      </details>
      <details>
        <summary>Who decides on the award?</summary>
        <p>An internal committee of the Professorship for Legal Tech (Prof. Grabmair) and the Legal Tech Colab (LTC) at TUM, in coordination with CodeX Stanford. There is no legal entitlement to the scholarship.</p>
      </details>
      <details>
        <summary>Can I apply even though I do not hold German citizenship?</summary>
        <p>Yes. The scholarship is open to all students enrolled in a master's programme at the TUM School of Computation, Information and Technology (CIT) at the Technical University of Munich – regardless of nationality. Applicants are themselves responsible for clarifying the visa requirements for the USA.</p>
      </details>
      <details>
        <summary>Can I combine the scholarship with other funding?</summary>
        <p>Combining it with other scholarships is generally possible. Please state in your application whether and for which other scholarships you are applying in parallel or are already receiving funding.</p>
      </details>
    </div>

    <p class="sch-fineprint">📄 <strong>Note on the source of funds</strong><br>
    The funds originate from the project „Legal Tech Colab“, approved by the Bavarian State Ministry of Justice (funding reference: B 1 - 5120E - VI - 5116/2022), in the 2026 budget year. The funding may be used exclusively for project-related expenses (e.g. travel, accommodation, study costs). The scholarship recipient undertakes to submit confirmation of completion together with a simple proof of use (a tabular overview of expenses) no later than four weeks after the end of the funding period.</p>

    <div class="sch-contact">
      <p>📮 <strong>Contact for questions</strong></p>
      <p><strong>Prof. Dr. Matthias Grabmair</strong><br>
      Professorship for Legal Tech<br>
      TUM School of Computation, Information and Technology (CIT)<br>
      Technical University of Munich</p>
      <p>Contact person: Simon Hochstraßer<br>
      Email: <a href="mailto:{{ 'simon.hochstrasser@tum.de' | encode_email }}">simon.hochstrasser<span>&#64;</span>tum<span>&#46;</span>de</a></p>
    </div>

  </div>

</div>

<script>
  (function () {
    var root = document.getElementById("scholarship");
    if (!root) return;
    var buttons = root.querySelectorAll(".sch-lang button");

    function setLang(lang, persist) {
      if (lang !== "en" && lang !== "de") return;
      root.setAttribute("data-lang", lang);
      buttons.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
      });
      if (persist) {
        try { localStorage.setItem("scholarship-lang", lang); } catch (e) { /* storage unavailable */ }
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.lang, true);
        history.replaceState(null, "", "#" + btn.dataset.lang);
      });
    });

    // German stays the default. Only an explicit choice switches: a shareable
    // #en / #de link, or a previously clicked preference.
    var hash = (window.location.hash || "").replace("#", "");
    if (hash === "en" || hash === "de") {
      setLang(hash, false);
      return;
    }

    var stored = null;
    try { stored = localStorage.getItem("scholarship-lang"); } catch (e) { /* storage unavailable */ }
    if (stored === "en" || stored === "de") setLang(stored, false);
  })();
</script>

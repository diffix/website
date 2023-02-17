<script lang="ts">
  import FAQItem from "$lib/components/FAQItem.svelte";
  import Link from "$lib/components/Link.svelte";
  import Trans from "$lib/components/Trans.svelte";
  import { trans, type LocalizedString } from "$lib/i18n";

  let tocItems: Array<{ id: LocalizedString; name: LocalizedString }> = [];

  function addToToc(id: LocalizedString, name: LocalizedString) {
    tocItems = [...tocItems, { id, name }];
  }
</script>

<svelte:head>
  <title>
    {$trans({
      en: "Open Diffix - FAQ",
      de: "Open Diffix - FAQ"
    })}
  </title>
</svelte:head>

<div class="p-4 max-w-2xl lg:max-w-6xl mx-auto">
  <header id="faq-top" class="pt-12 lg:ml-80">
    <div class="mx-auto lg:max-w-2xl">
      <h1 class="text-5xl max-w-xl font-semibold">
        {$trans({
          en: "Frequently Asked Questions",
          de: "Häufig gestellte Fragen"
        })}
      </h1>
    </div>
  </header>

  <div class="mt-16 lg:mt-0 mb-12">
    <div class="lg:fixed lg:w-80 lg:pt-24 lg:pr-4 lg:pb-8 lg:top-16 lg:bottom-0 lg:overflow-y-auto">
      <h2 class="block text-2xl w-full font-semibold">
        {$trans({
          en: "Table of contents",
          de: "Inhaltsübersicht"
        })}
      </h2>

      <ul class="mt-4 ml-4 space-y-1.5 text-sm list-disc list-outside">
        {#each tocItems as question (question.id)}
          <li>
            <Link href="#{$trans(question.id)}">{$trans(question.name)}</Link>
          </li>
        {/each}
      </ul>
    </div>

    <div class="lg:mt-12 lg:ml-80">
      <div class="mx-auto lg:max-w-2xl space-y-6 lg:space-y-12 pt-12 lg:pt-0">
        <FAQItem
          {addToToc}
          question={{
            en: "What is Diffix?",
            de: "Was ist Diffix?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Diffix is a bundled set of mechanisms for anonymizing structured data. It was jointly developed by
              Aircloak GmbH and the Max Planck Institute for Software Systems. Diffix exploits mechansims that have been
              in use by national statistics offices for decades:
              <b>aggregation</b>, <b>generalization</b>, <b>noise</b>, <b>suppression</b>, and <b>swapping</b>. It
              automatically applies these mechanisms as needed on a query-by-query basis to minimize noise while
              ensuring strong anonymity.
              <Link href="/en/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/">
                Here
              </Link> is a brief overview.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Diffix ist eine Zusammenstellung von Mechanismen zur Anonymisierung strukturierter Daten. Es wurde
              gemeinsam entwickelt von Aircloak GmbH und dem Max-Planck-Institut für Softwaresysteme entwickelt. Diffix
              nutzt Mechanismen, die von den nationalen Statistikämtern seit Jahrzehnten verwendet werden:
              <b>Aggregation</b>, <b>Generalisierung</b>, <b>Rauschen</b>, <b>Unterdrückung</b> und <b>Vertauschung</b>.
              Es wendet diese Mechanismen bei Bedarf automatisch auf jede einzelne Abfrage an, um das Rauschen zu
              minimieren und gleichzeitig eine hohe Anonymität zu gewährleisten.
              <Link href="/de/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/">
                Hier
              </Link> finden Sie einen kurzen Überblick.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "What is Open Diffix?",
            de: "Was ist Open Diffix?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Open Diffix is a project to make Diffix anonymization free and open. The Open Diffix project develops two
              Diffix query engine implementations, one based on .NET and the other a PostgreSQL extension called
              <b>pg_diffix</b>. As a PostgreSQL extension, <b>pg_diffix</b> offers the same benefits of PostgreSQL:
              scale, performance, deployment, and access control features. Open Diffix can also be run as a stand-alone
              desktop application,
              <b>Diffix Dashboards</b>. The .NET implementation serves primarily as a reference implementation, but is
              also used to support the legacy desktop application <b>Diffix for Desktop</b>. Both implementations are
              strongly anonymous, and satisfy the GDPR definition of anonymity.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Open Diffix ist ein Projekt, das die Diffix-Anonymisierung frei und offen machen soll. Im Rahmen des Open
              Diffix-Projekts werden zwei Diffix-Abfrage-Engine-Implementierungen entwickelt, eine auf der Grundlage von
              .NET und die andere als PostgreSQL-Erweiterung namens <b>pg_diffix</b>. Als PostgreSQL-Erweiterung bietet
              <b>pg_diffix</b> dieselben Vorteile wie PostgreSQL: Skalierbarkeit, Leistung, Bereitstellung und
              Zugriffssteuerungsfunktionen. Open Diffix kann auch als eigenständige Desktop-Anwendung ausgeführt werden,
              <b>Diffix Dashboards</b>. Die .NET-Implementierung dient in erster Linie als Referenzimplementierung, aber
              wird auch zur Unterstützung der älteren Desktop-Anwendung <b>Diffix for Desktop</b> verwendet. Beide Implementierungen
              sind stark anonym und erfüllen die GDPR-Definition von Anonymität.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "What is Diffix Fir?",
            de: "Was ist Diffix Fir?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Major versions of Diffix are named after trees. Diffix Aspen through Dogwood were developed by Aircloak
              GmbH. Diffix Elm was the first version developed by the Open Diffix project. Compared to earlier versions,
              Diffix Elm represented a kind of "complexity reset". It is much <b>simpler</b>, <b>easier to use</b>, and
              easier to analyze (though less feature rich).
              <p class="indent-6">
                The latest version is Diffix Fir, which adds several new features including sum, average, and simple
                WHERE expressions.
              </p>
            </svelte:fragment>
            <svelte:fragment slot="de">
              Die Hauptversionen von Diffix sind nach Bäumen benannt. Diffix Aspen bis Dogwood wurden von der Aircloak
              GmbH entwickelt. Diffix Elm war die erste Version, die im Rahmen des Open Diffix-Projekts entwickelt
              wurde. Im Vergleich zu früheren Versionen stellte Diffix Elm eine Art "Komplexitäts-Reset" dar. Es ist
              viel <b>einfacher zu bedienen</b> und <b>leichter zu analysieren</b> (wenn auch weniger funktionsreich).
              <p class="indent-6">
                Die neueste Version ist Diffix Fir, die mehrere neue Funktionen wie Summe, Durchschnitt und WHERE
                enthält.
              </p>
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Where can I learn about Diffix Fir?",
            de: "Wo kann ich mich über Diffix Fir informieren?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              A full specification and privacy analysis of Diffix Fir is not yet complete. The full specification and
              privacy analysis of Diffix Elm
              <Link href="https://arxiv.org/abs/2201.04351">is available on ArXiv</Link>. It includes guidance for
              writing a risk assessment. Since Fir adds only a few new features to Elm, the Elm specification suffices
              for now.
              <p class="indent-6">
                A good overview of Diffix Elm can be found
                <Link href="/en/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/">
                  here
                </Link>, with the additional features of Diffix Fir described
                <Link href="/en/blog/introducing-diffix-fir/">here</Link>.
              </p>
            </svelte:fragment>
            <svelte:fragment slot="de">
              Eine vollständige Spezifikation und Datenschutzanalyse von Diffix Fir ist noch nicht abgeschlossen. Die
              vollständige Spezifikation und die Analyse der Privatsphäre von Diffix Elm <Link
                href="https://arxiv.org/abs/2201.04351">ist auf ArXiv</Link
              > verfügbar. Sie enthält eine Anleitung zur Erstellung einer Risikobewertung. Da Fir nur ein paar neue Funktionen
              zu Elm hinzufügt, reicht die Elm-Spezifikation für den Moment.
              <p class="indent-6">
                Einen guten Überblick über Diffix Elm finden Sie hier
                <Link href="/de/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/">
                  hier
                </Link>, wobei die zusätzlichen Funktionen von Diffix Fir beschrieben werden
                <Link href="/de/blog/introducing-diffix-fir/">hier</Link>.
              </p>
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "How is Diffix Fir deployed?",
            de: "Wie wird Diffix Fir eingesetzt?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Open Diffix supports <Link href="/en/download/">three implementations</Link> of Diffix Fir, a
              <b>PostgreSQL extension</b> (pg_diffix), and two stand-alone <b>desktop applications</b>.
              <p class="indent-6">
                Diffix for PostgreSQL provides all the benefits of PostgreSQL, allowing development of scalable web
                back-ends, dashboards, and applications over a standard API with SQL, as well as the use of SQL clients.
              </p>
              <p class="indent-6">
                <Link href="/en/blog/diffix-dashboards/">Diffix Dashboards</Link> is a stand-alone Windows desktop application
                with data visualization features designed to work with CSV files. It bundles <b>pg_diffix</b> with the
                open-source Business Intelligence tool
                <Link href="https://metabase.com">Metabase</Link>, and offers both GUI-based query building and SQL.
              </p>
              <p class="indent-6">
                Diffix for Desktop is built on a .NET implementation of Diffix Fir. It is designed for extreme ease of
                installation and use. It supports CSV tables and a simple GUI (no SQL required). It is a legacy
                application and will probably no longer be supported in lieu of Diffix Dashboards.
              </p>
            </svelte:fragment>
            <svelte:fragment slot="de">
              Open Diffix unterstützt <Link href="/de/download/">drei Implementierungen</Link> von Diffix Fir, eine
              <b>PostgreSQL-Erweiterung</b> (pg_diffix) und zwei eigenständige <b>Desktop-Anwendungen</b>.
              <p class="indent-6">
                Diffix for PostgreSQL bietet alle Vorteile von PostgreSQL und ermöglicht die Entwicklung von
                skalierbaren Web-Backends, Dashboards und Anwendungen über eine Standard-API mit SQL sowie die
                Verwendung von SQL-Clients.
              </p>
              <p class="indent-6">
                <Link href="/de/blog/diffix-dashboards/">Diffix Dashboards</Link> ist eine eigenständige Windows-Desktopanwendung
                mit Datenvisualisierungsfunktionen, die für die Arbeit mit CSV-Dateien entwickelt wurde. Es bündelt
                <b>pg_diffix</b> mit dem Open-Source-Business-Intelligence-Tool
                <Link href="https://metabase.com">Metabase</Link> und bietet sowohl GUI-basierte Abfrageerstellung als auch
                SQL.
              </p>
              <p class="indent-6">
                Diffix für Desktop basiert auf einer .NET-Implementierung von Diffix Fir. Es wurde für eine extrem
                einfache Installation und Nutzung ausgelegt. Es unterstützt CSV-Tabellen und bietet eine einfache GUI
                (keine SQL-Kenntnisse erforderlich). Es handelt sich um eine veraltete Anwendung, die anstelle von
                Diffix Dashboards wahrscheinlich nicht mehr unterstützt wird.
              </p>
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "How does Diffix compare with Differential Privacy and k-anonymity?",
            de: "Wie schneidet Diffix im Vergleich zu Differential Privacy und k-anonymity ab?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              K-anonymity uses generalization and suppression. Systems based on Differential Privacy use noise and often
              use generalization. Diffix uses all three, and so combines the benefits of both k-anonymity and
              Differential Privacy without formally adhering to either model. In so doing, Diffix is more patterned
              after how national statistics offices approach anonymization. While Diffix does not offer the mathematical
              guarantees of low-epsilon Differential Privacy, it also does not have the drawback of a privacy budget.
            </svelte:fragment>
            <svelte:fragment slot="de">
              K-Anonymität verwendet Generalisierung und Unterdrückung. Systeme, die auf Differential Privacy
              (differentielle Privatsphäre) basieren, verwenden Rauschen und verwenden oft Verallgemeinerung. Diffix
              verwendet alle drei und kombiniert so die Vorteile von K-Anonymität und Differential Privacy, ohne sich
              formal an eines der beiden Modelle zu halten. Dabei orientiert sich Diffix eher wie nationale
              Statistikämter die Anonymisierung angehen. Diffix bietet zwar nicht die mathematischen Garantien von
              Low-Epsilon Differential Privacy bietet, aber es ergeben sich hinsichtlich der Privatsphäre keine
              Nachteile.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "What kinds of analytics does Diffix Fir support (and not support)?",
            de: "Welche Arten von Analysen werden von Diffix Fir unterstützt (und nicht unterstützt)?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Diffix supports descriptive analytics over structured data like relational databases or CSV files:
              selecting columns, requesting counts or sums over those columns, putting data in bins of different sizes,
              and so on. Descriptive analytics is used to produce visualizations like bar graphs or scatter plots or
              heat maps. Diffix does <b>not</b> support machine learning, synthetic data generation, data masking, pseudonymization,
              image fuzzing, or anonymization of free-form text (redacting).
            </svelte:fragment>
            <svelte:fragment slot="de">
              Diffix unterstützt deskriptive Analysen über strukturierte Daten wie relationale Datenbanken oder
              CSV-Dateien: Auswahl von Spalten, Abfrage von Zählungen oder Summen über diese Spalten, Einordnung von
              Daten in Klassen unterschiedlicher Größe usw. Deskriptive Analysen werden verwendet, um Visualisierungen
              wie Balkendiagramme, Streudiagramme oder Heatmaps zu erstellen. Diffix unterstützt <b>kein</b> maschinelles
              Lernen, keine Generierung synthetischer Daten, keine Datenmaskierung, keine Pseudonymisierung, kein Image Fuzzing
              und keine Anonymisierung von Freiformtext (Redacting).
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "How much SQL does Diffix Fir support?",
            de: "Wie viel SQL wird von Diffix Fir unterstützt?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Diffix Fir supports a very limited but useful subset of SQL. It supports numeric, text, and datetime data
              types. It lets you build multi-column histograms of counts, sums, and averages. It supports basic
              generalization functions (e.g. rounding of numeric columns, and substring selection of text columns). It
              supports JOIN and WHERE with AND logic.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Diffix Fir unterstützt eine sehr begrenzte, aber nützliche Teilmenge von SQL. Es unterstützt numeric, text
              und datetime Datentypen. Damit können Sie mehrspaltige Histogramme erstellen von Zählungen, Summen und
              Durchschnittswerten erstellen. Es unterstützt grundlegende Verallgemeinerungsfunktionen (z. B. Rundung
              numerischer Spalten und Teilstring-Auswahl von Textspalten). Es unterstützt JOIN und WHERE mit AND-Logik.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "What about data quality?",
            de: "Wie steht es um die Datenqualität?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              All anonymization mechanisms reduce data quality, by generalizing or distorting, and Diffix is no
              exception. The data quality of Diffix is similar to data released by many national statistics offices
              (e.g. census data), and usually far exceeds that of k-anonymity and Differential Privacy.
              <p class="indent-6">
                <b>Diffix Dashboards</b> allows the side-by-side comparison of anonymized and non-anonymized data. This
                way, you can observe Diffix' data quality for yourself.
                <b>Diffix for PostgreSQL</b> can display the magnitude of noise added to each output bin.
              </p>
            </svelte:fragment>
            <svelte:fragment slot="de">
              Alle Anonymisierungsmechanismen verringern die Datenqualität, indem sie verallgemeinern oder verzerren,
              und Diffix bildet da keine Ausnahme. Die Datenqualität von Diffix ist vergleichbar mit den von vielen
              nationalen Statistikämtern veröffentlichten Daten (z. B. Volkszählungsdaten) und übertrifft in der Regel
              bei weitem die Qualität von k-Anonymität und Differential Privacy.
              <p class="indent-6">
                <b>Diffix Dashboards</b> ermöglicht den direkten Vergleich anonymisierter und nicht anonymisierte Daten.
                Auf diese Weise können Sie die Datenqualität von Diffix selbst festlegen.
                <b>Diffix für PostgreSQL</b> kann das Ausmaß des Rauschens anzeigen, das zu jeder Ausgabe-Klasse hinzugefügt
                wurde.
              </p>
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "What is the trust model for users/analysts?",
            de: "Wie sieht das Vertrauensmodell für Nutzer/Analysten aus?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Diffix has two modes of operation, Trusted Analyst Mode and Untrusted Analyst Mode. Trusted Mode protects
              against <b>accidental release</b> of personal data. Untrusted Mode protects against
              <b>intentional, malicious exposure</b> of personal data. A Trusted Mode analyst does not require any expertise
              in anonymization in order to safely release data queried through Diffix.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Diffix verfügt über zwei Betriebsmodi, den vertrauenswürdigen Analystenmodus und den
              nicht-vertrauenswürdigen Analystenmodus. Der vertrauenswürdige Modus schützt vor einer
              <b>versehentlichen Freigabe</b> personenbezogener Daten. Der nicht-vertrauenswürdige Modus schützt vor der
              <b>absichtlichen, böswilligen Offenlegung </b>personenbezogener Daten. Ein Analyst im vertrauenswürdigen
              Modus benötigt keine Fachkenntnisse in der Anonymisierung, um über Diffix abgefragte Daten sicher
              freizugeben.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Why wouldn't I always use Untrusted Mode?",
            de: "Warum sollte ich nicht immer den nicht-vertrauenswürdigen Modus verwenden?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Trusted Mode is easier to use. It has more query features, and in Diffix Dashboards it allows an analyst
              to view the anonymized and original data side-by-side. In this way the analyst knows exactly how much the
              data is distorted through suppression and noise, and can more easily adjust column selection and
              generalization as needed.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Der vertrauenswürdige Modus ist einfacher zu verwenden. Er bietet mehr Abfragefunktionen und in Diffix
              Dashboards kann ein Analyst die anonymisierten Daten und die Originaldaten nebeneinander vergleichen. Auf
              diese Weise weiß der Analytiker genau, wie stark die Daten durch Unterdrückung und Rauschen verzerrt sind,
              und er kann die Spaltenauswahl und Verallgemeinerung nach Bedarf anpassen.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Is Open Diffix GDPR compliant?",
            de: "Ist Open Diffix GDPR (DSGVO)-konform?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              The short answer is 'yes'. The longer answer is that there are no concrete criteria for GDPR anonymity.
              Ultimately it is up to a Data Protection Officer (DPO) or Authority (DPA) to make the call. Diffix as
              implemented by Aircloak was almost always evaluated as GDPR anonymous, and the same holds for Open Diffix
              releases.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Die kurze Antwort lautet "Ja". Die längere Antwort lautet, dass es keine konkreten Kriterien für die
              GDPR-konformen Anonymität gibt. Letztendlich obliegt es dem Datenschutzbeauftragten oder der
              Datenschutzbehörde, die Entscheidung zu treffen. Diffix, wie es von Aircloak implementiert wurde, wurde
              fast immer als GDPR-anonym bewertet, und das Gleiche gilt für Open Diffix.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Can the Open Diffix project help us with GDPR compliance?",
            de: "Kann uns das Open Diffix-Projekt bei der Einhaltung der GDPR (DSGVO) helfen?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              The <Link href="https://arxiv.org/abs/2201.04351">full specification of Diffix Elm</Link>
              is designed to support <b>risk assessment</b> by DPOs and DPAs for GDPR or any other privacy standard. It
              describes the anonymization mechanisms in detail, and gives an analysis of the anonymization properties
              against an exhaustive set of attacks. For assistance in this process you can contact us at
              <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Die <Link href="https://arxiv.org/abs/2201.04351">vollständige Spezifikation von Diffix Elm</Link>ist zur
              Unterstützung der <b>Risikobewertung</b> durch Datenschutzbeauftragten und Datenschutzbehörden für GDPR
              oder andere Datenschutzstandards gedacht. Sie beschreibt die Anonymisierungsmechanismen im Detail und
              enthält eine Analyse der Anonymisierungseigenschaften gegenüber einer umfassenden Reihe von Angriffen. Für
              Unterstützung in diesem Prozess können Sie uns unter
              <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link> kontaktieren.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Is Open Diffix Open Source?",
            de: "Ist Open Diffix Open Source?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Almost. Open Diffix operates under the
              <Link href="https://mariadb.com/de/bsl11/">Business Source License (BSL1.1)</Link>.
              <Link href="https://github.com/diffix/desktop/blob/master/LICENSE.md">Our license</Link>
              makes Diffix free for all use cases, including commercial, that do not resell Diffix software or interfaces.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Fast. Open Diffix arbeitet unter der
              <Link href="https://mariadb.com/de/bsl11/">Business Source License (BSL1.1)</Link>.
              <Link href="https://github.com/diffix/desktop/blob/master/LICENSE.md">Unsere Lizenz</Link>
              macht Diffix frei für alle Anwendungsfälle, einschließlich kommerzieller, die Diffix-Software oder Schnittstellen
              nicht weiterverkaufen.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "How is Open Diffix funded?",
            de: "Wie wird Open Diffix finanziert?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              For the first few years, Open Diffix is funded by the Max Planck Institute for Software Systems as a
              research initiative. Our goal is to become self-sustaining through sponsorships, consultancy, or
              licensing.
            </svelte:fragment>
            <svelte:fragment slot="de">
              In den ersten Jahren wird Open Diffix vom Max-Planck-Institut für Softwaresysteme als Forschungsinitiative
              finanziert. Unser Ziel ist es, durch Sponsoring, Beratung oder Lizenzierung uns künftig selbst zu
              finanzieren. Lizenzierung.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "I have other questions. Who can I contact?",
            de: "Ich habe weitere Fragen. An wen kann ich mich wenden?"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Please contact us at <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Bitte kontaktieren Sie uns unter <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>
            </svelte:fragment>
          </Trans>
        </FAQItem>
      </div>
    </div>
  </div>
</div>

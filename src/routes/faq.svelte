<script>
  import FAQItem from "../components/FAQItem.svelte";
  import Link from "../components/Link.svelte";

  let tocItems = [];

  function addToToc(id, name) {
    tocItems = [...tocItems, { id, name }];
  }
</script>

<svelte:head>
  <title>Open Diffix - FAQ</title>
</svelte:head>

<div class="p-4 max-w-2xl lg:max-w-6xl mx-auto">
  <header id="faq-top" class="pt-12 lg:ml-80">
    <div class="mx-auto lg:max-w-2xl">
      <h1 class="text-5xl max-w-xl font-semibold">Frequently Asked Questions</h1>
    </div>
  </header>

  <div class="mt-16 lg:mt-0 mb-12">
    <div class="lg:fixed lg:w-80 lg:pt-24 lg:pr-4 lg:pb-8 lg:top-16 lg:bottom-0 lg:overflow-y-auto">
      <h2 class="block text-2xl w-full font-semibold">Table of contents</h2>

      <ul class="mt-4 ml-4 space-y-1.5 text-sm list-disc list-outside">
        {#each tocItems as question (question.id)}
          <li>
            <Link href="#{question.id}">{question.name}</Link>
          </li>
        {/each}
      </ul>
    </div>

    <div class="lg:mt-12 lg:ml-80">
      <div class="mx-auto lg:max-w-2xl space-y-6 lg:space-y-12 pt-12 lg:pt-0">
        <FAQItem {addToToc} question="What is Diffix?">
          Diffix is a bundled set of mechanisms for anonymizing structured data. It was jointly developed by Aircloak
          GmbH and the Max Planck Institute for Software Systems. Diffix' exploits mechansims that have been in use by
          national statistics offices for decades:
          <b>aggregation</b>, <b>generalization</b>, <b>noise</b>, <b>suppression</b>, and <b>swapping</b>. It
          automatically applies these mechanisms as needed on a query-by-query basis to minimize noise while ensuring
          strong anonymity.
          <Link href="/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades">Here</Link> is a brief
          overview.
        </FAQItem>

        <FAQItem {addToToc} question="What is Open Diffix?">
          Open Diffix is a project to make Diffix anonymization free and open. The Open Diffix project develops two
          Diffix query engine implementations, one based on .NET and the other a PostgreSQL extension. <b
            >Diffix for Desktop</b
          >
          is a GUI-based application on the .NET query engine. Diffix for Desktop is aimed towards ease-of-use, while
          <b>Diffix for PostgreSQL</b> targets higher complexity and scale. Both are strongly anonymous, and satisfy the
          GDPR definition of anonymity.
        </FAQItem>

        <FAQItem {addToToc} question="What is Diffix Elm?">
          Major versions of Diffix are named after trees. Diffix Elm is the latest version (after Aspen, Birch, Cedar,
          and Dogwood), and is the basis for the first releases of Diffix for Desktop and Diffix for PostgreSQL.
          Compared to earlier versions, Diffix Elm represents a kind of "complexity reset". It is much <b>simpler</b>,
          <b>easier to use</b>, and easier to analyze (though less feature rich).
        </FAQItem>

        <FAQItem {addToToc} question="Where can I learn about Diffix Elm?">
          A good overview of Diffix Elm can be found <Link
            href="/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades">here</Link
          >. A detailed description
          <Link href="https://arxiv.org/abs/2201.04351">is available on ArXiv</Link>. Besides including a
          <b>full specification</b>, it includes a complete privacy analysis and guidance for writing a risk assessment.
        </FAQItem>

        <FAQItem {addToToc} question="How is Diffix Elm deployed?">
          Open Diffix supports <Link href="https://open-diffix.org/download">two implementations</Link> of Diffix Elm, a
          <b>PostgreSQL extension</b>
          (pg_diffix), and a stand-alone <b>desktop application</b>.
          <p class="indent-6">
            Diffix for PostgreSQL provides all the benefits of PostgreSQL, allowing development of scalable web
            back-ends, dashboards, and applications over a standard API with SQL, as well as the use of SQL clients.
          </p>
          <p class="indent-6">
            Diffix for Desktop is built on a .NET implementation of Diffix Elm. It is designed for extreme ease of
            installation and use. It supports CSV tables and a simple GUI (no SQL required).
          </p>
        </FAQItem>

        <FAQItem {addToToc} question="How does Diffix compare with Differential Privacy and k-anonymity?">
          K-anonymity uses generalization and suppression. Systems based on Differential Privacy use noise and often use
          generalization. Diffix uses all three, and so combines the benefits of both k-anonymity and Differential
          Privacy without formally adhering to either model. In so doing, Diffix is more patterned after how national
          statistics offices approach anonymization. While Diffix does not offer the mathematical guarantees of
          low-epsilon Differential Privacy, it also does not have the drawback of a privacy budget.
        </FAQItem>

        <FAQItem {addToToc} question="What kinds of analytics does Diffix support (and not support)?">
          Diffix supports descriptive analytics over structured data like relational databases or CSV files: selecting
          columns, requesting counts or sums over those columns, putting data in bins of different sizes, and so on.
          Descriptive analytics is used to produce visualizations like bar graphs or scatter plots or heat maps. Diffix
          does <strong>not</strong> support machine learning, synthetic data generation, data masking, pseudonymization,
          image fuzzing, or anonymization of free-form text (redacting).
        </FAQItem>

        <FAQItem {addToToc} question="How much SQL does Diffix Elm support?">
          Diffix Elm supports a very limited but useful subset of SQL. Basically, it lets you build multi-column
          histograms of counts, and supports basic generalization functions (e.g. rounding of numeric columns, and
          substring selection of text columns).
        </FAQItem>

        <FAQItem {addToToc} question="What if I want more SQL features?">
          Open Diffix is constantly building new SQL features. If you require additional features for your use case,
          contact us at <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
        </FAQItem>

        <FAQItem {addToToc} question="What about data quality?">
          All anonymization mechanisms reduce data quality, by generalizing or distorting, and Diffix is no exception.
          The data quality of Diffix is similar to data released by national statistics offices (e.g. census data), and
          usually far exceeds that of k-anonymity and Differential Privacy.
          <strong>Diffix for Desktop</strong> displays the amount of distortion, both as summary statistics and by displaying
          the original and anonymized data side-by-side. This way, you can observe Diffix' data quality for yourself.
        </FAQItem>

        <FAQItem {addToToc} question="What is the trust model for users/analysts?">
          Diffix has two modes of operation, Trusted Analyst Mode and Untrusted Analyst Mode. Trusted Mode protects
          against <b>accidental release</b> of personal data. Untrusted Mode protects against
          <b>intentional, malicious exposure</b> of personal data. A Trusted Mode analyst does not require any expertise
          in anonymization in order to safely release data queried through Diffix.
        </FAQItem>

        <FAQItem {addToToc} question="Why wouldn't I always use Untrusted Mode?">
          Trusted Mode is easier to use. It has more query features, and in Diffix for Desktop it allows an analyst to
          view the anonymized and original data side-by-side. In this way the analyst knows exactly how much the data is
          distorted through suppression and noise, and can more easily adjust column selection and generalization as
          needed.
        </FAQItem>

        <FAQItem {addToToc} question="Is Open Diffix GDPR compliant?">
          The short answer is 'yes'. The longer answer is that there are no concrete criteria for GDPR anonymity.
          Ultimately it is up to a Data Protection Officer (DPO) or Authority (DPA) to make the call. Diffix as
          implemented by Aircloak was almost always evaluated as GDPR anonymous, and the same will hold for Open Diffix
          releases.
        </FAQItem>

        <FAQItem {addToToc} question="Can the Open Diffix project help us with GDPR compliance?">
          The
          <Link href="https://arxiv.org/abs/2201.04351">full specification of Diffix Elm</Link>
          is designed to support <b>risk assessment</b> by DPOs and DPAs for GDPR or any other privacy standard. It
          describes the anonymization mechanisms in detail, and gives an analysis of the anonymization properties
          against an exhaustive set of attacks. For assistance in this process you can contact us at
          <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
        </FAQItem>

        <FAQItem {addToToc} question="Is Open Diffix Open Source?">
          Almost. Open Diffix operates under the
          <Link href="https://mariadb.com/de/bsl11/">Business Source License (BSL1.1)</Link>.
          <Link href="https://github.com/diffix/desktop/blob/master/LICENSE.md">Our license</Link>
          makes Diffix free for all use cases, including commercial, that do not resell Diffix software or interfaces.
        </FAQItem>

        <FAQItem {addToToc} question="How is Open Diffix funded?">
          For the first few years, Open Diffix is funded by the Max Planck Institute for Software Systems as a research
          initiative. Our goal is to become self-sustaining through sponsorships, consultancy, or licensing.
        </FAQItem>

        <FAQItem {addToToc} question="I have other questions. Who can I contact?">
          Please contact us at <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
        </FAQItem>
      </div>
    </div>
  </div>
</div>

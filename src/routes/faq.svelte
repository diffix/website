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

<div class="p-4">
  <header id="faq-top" class="max-w-2xl pt-12 mx-auto transition-all duration-500">
    <h1 class="block text-5xl lg:ml-32 font-semibold w-100">Frequently Asked Questions</h1>
  </header>

  <div class="max-w-2xl lg:max-w-6xl mx-auto mt-16 lg:mt-0 mb-12">
    <div class="lg:w-72 lg:fixed lg:-mt-36">
      <h2 class="block text-2xl w-100 font-semibold">Table of contents</h2>

      <ul class="mt-4 ml-4 space-y-1.5 text-sm list-disc list-outside">
        {#each tocItems as question (question.id)}
          <li>
            <Link href="#{question.id}">{question.name}</Link>
          </li>
        {/each}
      </ul>
    </div>

    <div class="lg:w-full lg:mt-12 lg:ml-32 space-y-6 lg:space-y-12 pt-12 lg:pt-0">
      <FAQItem {addToToc} question="What is Diffix?">
        Diffix is an algorithm for anonymizing structured data. It was jointly developed by Aircloak GmbH and the Max
        Planck Institute for Software Systems. Diffix combines the three most common anonymization mechanisms,
        <b>generalization</b>, <b>noise</b>, and <b>suppression</b>. It automatically applies these mechanisms as needed on a
        query-by-query basis to minimize noise while ensuring strong anonymity.
        <!--  TODO: See here for our papers on the technology.-->
      </FAQItem>

      <FAQItem {addToToc} question="What is Open Diffix?">
        Open Diffix is a project to make Diffix anonymization free and open. The Open Diffix project develops two
        software products, a stand-alone desktop product, and a PostgreSQL extension. <b>Diffix for Desktop</b> is aimed
        towards ease-of-use, while <b>Diffix for PostgreSQL</b> targets higher complexity and scale. Both are strongly
        anonymous, and satisfy the GDPR definition of anonymity.
      </FAQItem>

      <FAQItem {addToToc} question="What is Diffix Elm?">
        Major versions of Diffix are named after trees. Diffix Elm is the latest version (after Aspen, Birch, Cedar, and Dogwood), and is the basis for the first releases of Diffix for Desktop and Diffix for PostgreSQL. Diffix Elm represents a kind of "reset". It is much <b>simpler</b> than previous versions, making it <b>easier to use</b> and easier to analyze (though less feature rich).
      </FAQItem>

      <FAQItem {addToToc} question="Where can I learn about Diffix Elm?">
        An overview of Diffix Elm may be found
        <Link href="https://github.com/diffix/desktop/blob/master/docs/anonymization.md">on our Github repo</Link>.
        A detailed description
        <Link href="https://arxiv.org/abs/2201.04351">is available on ArXiv</Link>.
        Besides including a <b>full specification</b>, it includes a complete privacy analysis and guidance for writing a risk assessment.
      </FAQItem>

      <FAQItem {addToToc} question="When will Open Diffix releases be available?">
        <Link href="https://open-diffix.org/download">Diffix for Desktop V1</Link>
        is now available. We are targeting mid to late
        2022 for the first version of Diffix for PostgreSQL. You may
        <Link href="/newsletter">sign up for our newsletter</Link> to get release announcements.
      </FAQItem>

      <FAQItem {addToToc} question="How does Diffix compare with Differential Privacy and k-anonymity?">
        K-anonymity uses generalization and suppression. Systems based on Differential Privacy use noise and
        often use generalization. Diffix uses all three, and so combines the benefits of both k-anonymity and
        Differential Privacy without formerly adhering to either model. While Diffix does not offer the mathematical
        guarantees of Differential Privacy, it also does not have the drawback of a privacy budget.
        <!--  TODO: Please see here for our papers on the technology.-->
      </FAQItem>

      <FAQItem {addToToc} question="What kinds of analytics does Diffix support (and not support)?">
        Diffix supports descriptive analytics over structured data like relational databases or CSV files: selecting
        columns, requesting counts or sums over those columns, putting data in bins of different sizes, and so on.
        Descriptive analytics is used to produce visualizations like bar graphs or scatter plots or heat maps. Diffix
        does <strong>not</strong> support machine learning, synthetic data generation, data masking, pseudonymization, image
        fuzzing, or anonymization of free-form text (redacting).
      </FAQItem>

      <FAQItem {addToToc} question="What about data quality?">
        All anonymization mechanisms reduce data quality, by generalizing or distorting, and Diffix is no exception. The
        data quality of Diffix, however, usually far exceeds that of k-anonymity and Differential Privacy. Diffix for
        Desktop displays the amount of distortion, both as summary statistics and by displaying the original and
        anonymized data side-by-side. This way, you can observe Diffix' data quality for yourself.
      </FAQItem>

      <FAQItem {addToToc} question="Why are there both desktop and PostgreSQL extension releases?">
        Descriptive analytics over structured data covers a wide range of use cases. At one extreme, a non-technical
        user may wish to release simple summary statistics over data from a CSV file on his or her machine. Diffix for
        Desktop satisfies this use case. At the other extreme, someone may wish to stream data summaries of dynamic data
        over millions of users into an SQL-based dashboard application. For this the Diffix for PostgreSQL is
        appropriate.
      </FAQItem>

      <FAQItem {addToToc} question="What is the trust model for users/analysts?">
        Diffix has two modes of operation, Trusted Analyst Mode and Untrusted Analyst Mode. Trusted Mode protects
        against <b>accidental release</b> of personal data. Untrusted Mode protects against <b>intentional, malicious exposure</b> of
        personal data. A Trusted Mode analyst does not require any expertise in anonymization in order to safely release
        data queried through Diffix.
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
        is designed to support <b>risk assessment</b> by DPOs and DPAs for GDPR or any other privacy standard. It describes the anonymization mechanisms in detail, and gives an analysis of the anonymization properties against an exhaustive set of attacks. For assistance in this process you can contact us at
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

<script>
  import FAQItem from "../components/FAQItem.svelte";
  import Link from "../components/Link.svelte";

  let tocItems = [];

  function addToToc(id, name) {
    tocItems = [...tocItems, { id, name }];
  }
</script>

<svelte:head>
  <title>open-diffix - FAQ</title>
</svelte:head>

<div class="p-4">
  <header id="faq-top" class="max-w-2xl pt-12 mx-auto transition-all duration-500">
    <h1 class="block text-6xl lg:ml-32 font-semibold w-100">Frequently Asked Questions</h1>
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
        generalization, noise, and low-count suppression. It automatically applies these mechanisms as needed on a
        query-by-query basis to minimize noise while ensuring strong anonymity.
        <!--  TODO: See here for our papers on the technology.-->
      </FAQItem>

      <FAQItem {addToToc} question="What is Open Diffix?">
        Open Diffix is a project to make Diffix anonymization free and open. The Open Diffix project develops two
        software products, a stand-alone desktop product, and a PostgreSQL extension. The desktop product is aimed
        towards ease-of-use, while the PostgreSQL extension targets higher complexity and scale. Both are strongly
        anonymous, and satisfy the GDPR definition of anonymity.
      </FAQItem>

      <FAQItem {addToToc} question="How does Diffix compare with Differential Privacy and k-anonymity?">
        K-anonymity uses generalization and low-count suppression. Systems based on Differential Privacy use noise and
        often use generalization. Diffix uses all three, and so combines the benefits of both k-anonymity and
        Differential Privacy without formerly adhering to either model. While Diffix does not offer the mathematical
        guarantees of Differential Privacy, it also does not have the drawback of a privacy budget.
        <!--  TODO: Please see here for our papers on the technology.-->
      </FAQItem>

      <FAQItem {addToToc} question="What kinds of analytics does Diffix support?">
        Diffix supports descriptive analytics over structured data like relational databases or CSV files: selecting
        columns, requesting counts or sums over those columns, putting data in bins of different sizes, and so on.
        Descriptive analytics is used to produce visualizations like bar graphs or scatter plots or heat maps. Diffix
        does <strong>not</strong> support machine learning, synthetic data generation, data masking, pseudonymization, image
        fuzzing, or anonymization of free-form text (redacting).
      </FAQItem>

      <FAQItem {addToToc} question="Why are there both desktop and PostgreSQL extension releases?">
        Descriptive analytics over structured data covers a wide range of use cases. At one extreme, a non-technical
        user may wish to release simple summary statistics over data from a CSV file on his or her machine. A simple
        desktop application satisfies this use case. At the other extreme, someone may wish to stream data summaries of
        dynamic data over millions of users into an SQL-based dashboard application. For this the Diffix PostgreSQL
        extension is appropriate.
      </FAQItem>

      <FAQItem {addToToc} question="What is the trust model for users/analysts?">
        Diffix has two modes of operation, Trusted Analyst Mode and Untrusted Analyst Mode. Trusted Mode protects
        against accidental release of personal data. Untrusted Mode protects against intentional, malicious exposure of
        personal data. A Trusted Mode analyst does not require any expertise in anonymization in order to safely release
        data queried through Diffix.
      </FAQItem>

      <FAQItem {addToToc} question="Why wouldn't I always use Untrusted Mode?">
        Trusted Mode is easier to use. It has more query features, and in the desktop version it allows an analyst to
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

      <FAQItem {addToToc} question="Can the Open Diffix project help with GDPR compliance?">
        The Open Diffix project will provide supporting documentation with each of its releases. The documentation will
        describe the Diffix algorithms in detail, along with analysis of the anonymization properties against an
        exhaustive set of attacks. This documentation can be used as the basis of a GDPR (or other privacy standard)
        evaluation by DPOs and DPAs. For assistance in this process you can contact us at
        <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
      </FAQItem>

      <!--  TODO: Add back in when we have clarity
      <FAQItem {addToToc} question="Is Open Diffix Open Source?">
        No. For the moment, Open Diffix will not be Open Source in the sense of the Open Source Initiative definition.
        Although the license isn't finalized, we are expecting a Business Source License
        (<Link href="https://mariadb.com/de/bsl11/">BSL</Link>).
        The intent
        is to make Diffix free for all use cases that do not resell Diffix software or interfaces.
      </FAQItem>
      -->

      <FAQItem {addToToc} question="When will Open Diffix releases be available?">
        The first desktop version will be released in October 2021. We are targeting mid to late 2022 for the first
        version of the PostgreSQL extension. You may
        <Link href="/newsletter">sign up for our newsletter</Link> to get release announcements.
      </FAQItem>

      <FAQItem {addToToc} question="How is Open Diffix funded?">
        For the first few years, Open Diffix is funded by the Max Planck Institute for Software Systems as a research
        initiative. Our goal is to become self-sustaining through sponsorships, consultancy, or licensing.
      </FAQItem>

      <FAQItem {addToToc} question="I have a general question, who can I contact?">
        Please contact us at <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
      </FAQItem>
    </div>
  </div>
</div>

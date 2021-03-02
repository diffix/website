<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow"></div>
    <div class="flex-grow-0 w-full">
      <header class="max-w-xl px-4 pt-4 mx-auto transition-all duration-500 sm:pt-20">
        <NuxtLink to="/">
          <h1 class="text-3xl text-left text-gray-400 sm:-ml-8 hover:text-gray-600 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hidden sm:w-8 sm:-mr-2 sm:inline">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <OpenDiffixWordmark />
          </h1>
        </NuxtLink>
      </header>

      <div class="max-w-xl px-4 mx-auto mt-10">
        <h2 class="mt-12 text-6xl font-semibold">
          Newsletter
        </h2>
        <div id="mc_embed_signup" class="py-8">
          <form
            action="https://open-diffix.us1.list-manage.com/subscribe/post?u=4006b84ec4d64e7ae6f4c8f49&amp;id=bc48f0af67"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <p class="mt-4">Sign up to our mailinglist and we will keep you up to date on the latest developments around open-diffix.</p>
              <div
                id="mergeRow-gdpr"
                class="text-sm mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
              >
                <div class="mt-8 text-base content__gdpr">
                  <p class="text-base">
                    Please select the types of information you would like to receive:
                  </p>
                  <fieldset
                    class="mt-2 mc_fieldset gdprRequired mc-field-group"
                    name="interestgroup_field"
                  >
                    <label class="flex items-center px-1 -mx-1 rounded cursor-pointer checkbox subfield hover:bg-gray-100 dark:hover:bg-gray-700" for="gdpr_39706">
                      <input
                        type="checkbox"
                        id="gdpr_39706"
                        name="gdpr[39706]"
                        value="Y"
                        class="av-checkbox gdpr"
                      />
                        <span class="ml-2">Updates about the Open-Diffix project - no spam, no ads</span>
                    </label>
                    <label class="flex items-baseline px-1 mt-1 -mx-1 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 checkbox subfield" for="gdpr_39710"
                      ><input
                        type="checkbox"
                        id="gdpr_39710"
                        name="gdpr[39710]"
                        value="Y"
                        class="av-checkbox gdpr"
                      />
                        <span class="ml-2">
                          Information from partner organizations about Open-Diffix
                          related services
                        </span>
                    </label>
                  </fieldset>
                </div>
              </div>
              <div class="p-2 mt-4 -mx-2 bg-gray-100 rounded-lg mc-field-group group dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-700">
                <div class="flex flex-col space-y-1 sm:space-y-0 sm:space-x-1 sm:flex-row">
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="w-full px-2 py-1 text-lg border rounded required email focus:outline-none focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-50"
                    placeholder="you@privacy-aware.com"
                    id="mce-EMAIL"
                  />
                  <span @click="trackSignup">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="px-2 py-1 border rounded cursor-pointer bg-shamrock-600 border-shamrock-500 hover:bg-gradient-to-r from-pink-500 to-purple-500 md:from-shamrock-500 md:to-royalblue-500 dark:border-shamrock-700 text-gray-50 focus:outline-none focus:ring-2"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <p class="mt-8 text-xs text-gray-400">
                    You can unsubscribe at any time by clicking the link in the footer
                    of our emails. For information about our privacy practices, please
                    read our
                    <a
                      href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org"
                      class="text-gray-700 underline hover:text-gray-900 dark:text-limegreen-500 dark:hover:text-limegreen-300"
                    >privacy policy</a>.
                  </p>
                </div>
                <div class="mt-2 text-xs text-gray-400 content__gdprLegal">
                  <p>
                    We use Mailchimp as our marketing platform. By clicking below to
                    subscribe, you acknowledge that your information will be
                    transferred to Mailchimp for processing.
                    <a href="https://mailchimp.com/legal/" target="_blank" class="text-gray-700 underline hover:text-gray-900 dark:text-limegreen-500 dark:hover:text-limegreen-300">Learn more about Mailchimp's privacy practices here.</a
                    >
                  </p>
                </div>
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_4006b84ec4d64e7ae6f4c8f49_bc48f0af67"
                  tabindex="-1"
                  value=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex-grow"></div>

    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    trackSignup() {
      this.$ackee.action('adce3874-710e-4e55-8872-f4547df40a8e', { key: 'Signup', value: '1' });
    }
  }
}
</script>
<script>
  import { trackAction } from "../ackee";

  function trackSubscription() {
    trackAction("adce3874-710e-4e55-8872-f4547df40a8e", "Subscription", "1");
  }
</script>

<svelte:head>
  <title>open-diffix - Newsletter</title>
</svelte:head>

<div class="flex-grow-0 w-full">
  <div class="max-w-xl px-4 mx-auto mt-10">
    <h2 class="mt-12 text-6xl font-semibold">Newsletter</h2>
    <div id="mc_embed_signup" class="py-8">
      <form
        action="https://open-diffix.us1.list-manage.com/subscribe/post?u=4006b84ec4d64e7ae6f4c8f49&amp;id=bc48f0af67"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
        on:submit={trackSubscription}
      >
        <div id="mc_embed_signup_scroll">
          <p class="mt-4">
            Sign up to our mailinglist and we will keep you up to date on the latest developments around open-diffix.
          </p>
          <div id="mergeRow-gdpr" class="text-sm mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="mt-8 text-base content__gdpr">
              <fieldset class="mt-2 mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <legend class="text-base mb-2">
                  Please select the types of information you would like to receive:
                </legend>
                <label
                  class="flex items-center px-1 -mx-1 rounded cursor-pointer checkbox subfield hover:bg-gray-100"
                  for="gdpr_39706"
                >
                  <input
                    type="checkbox"
                    id="gdpr_39706"
                    name="gdpr[39706]"
                    value="Y"
                    class="av-checkbox gdpr"
                    checked
                  />
                  <span class="ml-2">Updates about the Open-Diffix project - no spam, no ads</span>
                </label>
                <label
                  class="flex items-baseline px-1 mt-1 -mx-1 rounded cursor-pointer hover:bg-gray-100 checkbox subfield"
                  for="gdpr_39710"
                  ><input type="checkbox" id="gdpr_39710" name="gdpr[39710]" value="Y" class="av-checkbox gdpr" />
                  <span class="ml-2"> Information from partner organizations about Open-Diffix related services </span>
                </label>
              </fieldset>
            </div>
          </div>
          <div
            class="px-2 pb-2 mt-4 -mx-2 bg-gray-100 rounded-lg mc-field-group group focus-within:bg-gray-100"
          >
            <label for="mce-EMAIL" class="font-medium ml-1 text-xs text-gray-800">Your email address</label>
            <div class="flex flex-col space-y-1 sm:space-y-0 sm:space-x-1 sm:flex-row">
              <input
                type="email"
                value=""
                name="EMAIL"
                class="w-full px-2 py-1 text-lg border rounded required email focus:outline-none focus:ring-2"
                placeholder="you@privacy-aware.com"
                id="mce-EMAIL"
              />
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="px-2 py-1 border rounded cursor-pointer bg-shamrock-700 hover:bg-gradient-to-r from-shamrock-500 to-royalblue-500 text-white text-lg focus:outline-none focus:ring-2"
                on:click={trackSubscription}
              />
            </div>
          </div>
          <div>
            <div>
              <p class="mt-8 text-xs text-gray-600">
                You can unsubscribe at any time by clicking the link in the footer of our emails. For information about
                our privacy practices, please read our
                <a
                  href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org"
                  class="text-gray-700 underline hover:text-gray-900"
                  >privacy policy</a
                >.
              </p>
            </div>
            <div class="mt-2 text-xs text-gray-600 content__gdprLegal">
              <p>
                We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your
                information will be transferred to Mailchimp for processing.
                <a
                  href="https://mailchimp.com/legal/"
                  target="_blank"
                  class="text-gray-900 underline hover:text-gray-800"
                  >Learn more about Mailchimp's privacy practices here.</a
                >
              </p>
            </div>
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none" />
            <div class="response" id="mce-success-response" style="display: none" />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input type="text" name="b_4006b84ec4d64e7ae6f4c8f49_bc48f0af67" tabindex="-1" value="" />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

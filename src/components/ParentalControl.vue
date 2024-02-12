<script setup>
import { ref } from 'vue';
import { FormKitIcon } from '@formkit/vue';
import BaseTooltip from './BaseTooltip.vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const spendingLimitsTooltip = ref(false);
const lockCardTooltip = ref(false);
const highValueTransactionsTooltip = ref(false);
const restrictTransactionsTypesTooltip = ref(false);
const selectedMinor = ref('Minor1');

const euroPlaceHolderSVG =
  '<svg width="35" height="11" viewBox="0 0 35 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0957 8.92676V10H1.8252V8.92676H7.0957ZM2.0918 0.046875V10H0.772461V0.046875H2.0918ZM6.39844 4.32617V5.39941H1.8252V4.32617H6.39844ZM7.02734 0.046875V1.12695H1.8252V0.046875H7.02734ZM12.9404 8.29102V2.60352H14.2119V10H13.002L12.9404 8.29102ZM13.1797 6.73242L13.7061 6.71875C13.7061 7.21094 13.6536 7.66667 13.5488 8.08594C13.4486 8.50065 13.2845 8.86068 13.0566 9.16602C12.8288 9.47135 12.5303 9.71061 12.1611 9.88379C11.792 10.0524 11.3431 10.1367 10.8145 10.1367C10.4544 10.1367 10.124 10.0843 9.82324 9.97949C9.52702 9.87467 9.27181 9.71289 9.05762 9.49414C8.84342 9.27539 8.67708 8.99056 8.55859 8.63965C8.44466 8.28874 8.3877 7.86719 8.3877 7.375V2.60352H9.65234V7.38867C9.65234 7.72135 9.6888 7.99707 9.76172 8.21582C9.83919 8.43001 9.94173 8.60091 10.0693 8.72852C10.2015 8.85156 10.3473 8.93815 10.5068 8.98828C10.6709 9.03841 10.8395 9.06348 11.0127 9.06348C11.5505 9.06348 11.9766 8.96094 12.291 8.75586C12.6055 8.54622 12.8311 8.26595 12.9678 7.91504C13.109 7.55957 13.1797 7.16536 13.1797 6.73242ZM17.4043 3.76562V10H16.1396V2.60352H17.3701L17.4043 3.76562ZM19.7148 2.5625L19.708 3.73828C19.6032 3.71549 19.5029 3.70182 19.4072 3.69727C19.3161 3.68815 19.2113 3.68359 19.0928 3.68359C18.8011 3.68359 18.5436 3.72917 18.3203 3.82031C18.097 3.91146 17.9079 4.03906 17.7529 4.20312C17.598 4.36719 17.4749 4.56315 17.3838 4.79102C17.2972 5.01432 17.2402 5.26042 17.2129 5.5293L16.8574 5.73438C16.8574 5.28776 16.9007 4.86849 16.9873 4.47656C17.0785 4.08464 17.2174 3.73828 17.4043 3.4375C17.5911 3.13216 17.8281 2.89518 18.1152 2.72656C18.4069 2.55339 18.7533 2.4668 19.1543 2.4668C19.2454 2.4668 19.3503 2.47819 19.4688 2.50098C19.5872 2.51921 19.6693 2.53971 19.7148 2.5625ZM20.4121 6.38379V6.22656C20.4121 5.69336 20.4896 5.19889 20.6445 4.74316C20.7995 4.28288 21.0228 3.88411 21.3145 3.54688C21.6061 3.20508 21.9593 2.94076 22.374 2.75391C22.7887 2.5625 23.2536 2.4668 23.7686 2.4668C24.2881 2.4668 24.7552 2.5625 25.1699 2.75391C25.5892 2.94076 25.9447 3.20508 26.2363 3.54688C26.5326 3.88411 26.7581 4.28288 26.9131 4.74316C27.068 5.19889 27.1455 5.69336 27.1455 6.22656V6.38379C27.1455 6.91699 27.068 7.41146 26.9131 7.86719C26.7581 8.32292 26.5326 8.72168 26.2363 9.06348C25.9447 9.40072 25.5915 9.66504 25.1768 9.85645C24.7666 10.0433 24.3018 10.1367 23.7822 10.1367C23.2627 10.1367 22.7956 10.0433 22.3809 9.85645C21.9661 9.66504 21.6107 9.40072 21.3145 9.06348C21.0228 8.72168 20.7995 8.32292 20.6445 7.86719C20.4896 7.41146 20.4121 6.91699 20.4121 6.38379ZM21.6768 6.22656V6.38379C21.6768 6.75293 21.7201 7.10156 21.8066 7.42969C21.8932 7.75326 22.0231 8.04036 22.1963 8.29102C22.374 8.54167 22.5951 8.73991 22.8594 8.88574C23.1237 9.02702 23.4313 9.09766 23.7822 9.09766C24.1286 9.09766 24.4316 9.02702 24.6914 8.88574C24.9557 8.73991 25.1745 8.54167 25.3477 8.29102C25.5208 8.04036 25.6507 7.75326 25.7373 7.42969C25.8285 7.10156 25.874 6.75293 25.874 6.38379V6.22656C25.874 5.86198 25.8285 5.5179 25.7373 5.19434C25.6507 4.86621 25.5186 4.57682 25.3408 4.32617C25.1676 4.07096 24.9489 3.87044 24.6846 3.72461C24.4248 3.57878 24.1195 3.50586 23.7686 3.50586C23.4222 3.50586 23.1169 3.57878 22.8525 3.72461C22.5928 3.87044 22.374 4.07096 22.1963 4.32617C22.0231 4.57682 21.8932 4.86621 21.8066 5.19434C21.7201 5.5179 21.6768 5.86198 21.6768 6.22656ZM33.0381 8.03809C33.0381 7.85579 32.9971 7.68717 32.915 7.53223C32.8376 7.37272 32.6758 7.22917 32.4297 7.10156C32.1882 6.9694 31.8236 6.85547 31.3359 6.75977C30.9258 6.67318 30.5544 6.57064 30.2217 6.45215C29.8936 6.33366 29.6133 6.1901 29.3809 6.02148C29.153 5.85286 28.9775 5.65462 28.8545 5.42676C28.7314 5.19889 28.6699 4.93229 28.6699 4.62695C28.6699 4.33529 28.7337 4.05957 28.8613 3.7998C28.9935 3.54004 29.1781 3.3099 29.415 3.10938C29.6566 2.90885 29.946 2.75163 30.2832 2.6377C30.6204 2.52376 30.9964 2.4668 31.4111 2.4668C32.0036 2.4668 32.5094 2.57161 32.9287 2.78125C33.348 2.99089 33.6693 3.27116 33.8926 3.62207C34.1159 3.96842 34.2275 4.35352 34.2275 4.77734H32.9629C32.9629 4.57227 32.9014 4.37402 32.7783 4.18262C32.6598 3.98665 32.4844 3.82487 32.252 3.69727C32.0241 3.56966 31.7438 3.50586 31.4111 3.50586C31.0602 3.50586 30.7754 3.56055 30.5566 3.66992C30.3424 3.77474 30.1852 3.90918 30.085 4.07324C29.9893 4.2373 29.9414 4.41048 29.9414 4.59277C29.9414 4.72949 29.9642 4.85254 30.0098 4.96191C30.0599 5.06673 30.1465 5.16471 30.2695 5.25586C30.3926 5.34245 30.5658 5.42448 30.7891 5.50195C31.0124 5.57943 31.2972 5.6569 31.6436 5.73438C32.2497 5.87109 32.7487 6.03516 33.1406 6.22656C33.5326 6.41797 33.8242 6.65267 34.0156 6.93066C34.207 7.20866 34.3027 7.5459 34.3027 7.94238C34.3027 8.26595 34.2344 8.56217 34.0977 8.83105C33.9655 9.09993 33.7718 9.33236 33.5166 9.52832C33.266 9.71973 32.9652 9.87012 32.6143 9.97949C32.2679 10.0843 31.8783 10.1367 31.4453 10.1367C30.7936 10.1367 30.2422 10.0205 29.791 9.78809C29.3398 9.55566 28.998 9.25488 28.7656 8.88574C28.5332 8.5166 28.417 8.12695 28.417 7.7168H29.6885C29.7067 8.06315 29.807 8.33887 29.9893 8.54395C30.1715 8.74447 30.3949 8.88802 30.6592 8.97461C30.9235 9.05664 31.1855 9.09766 31.4453 9.09766C31.7917 9.09766 32.0811 9.05208 32.3135 8.96094C32.5505 8.86979 32.7305 8.74447 32.8535 8.58496C32.9766 8.42546 33.0381 8.24316 33.0381 8.03809Z" fill="#B6B6B6"/></svg>';
const checkedSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7.71 13.29C7.32 13.68 6.69 13.68 6.3 13.29L2.71 9.7C2.32 9.31 2.32 8.68 2.71 8.29C3.1 7.9 3.73 7.9 4.12 8.29L7 11.17L13.88 4.29C14.27 3.9 14.9 3.9 15.29 4.29C15.68 4.68 15.68 5.31 15.29 5.7L7.71 13.29Z" fill="#FFCF25"/></svg>';

const tabsClasses =
  'data-[state=active]:bg-[#EFF0F2] font-normal text-[#B6B6B6] data-[state=active]:text-[#5B5B5B] py-[0.51rem] border data-[state=active]:border-[#ADADAD]';
</script>

<template>
  <div class="border border-gray-400 px-28">
    <div class="flex justify-center w-full">
      <h4 class="text-center uppercase font-bold text-[#5B5B5B]">
        Parental Control
      </h4>
    </div>
    <div class="w-full">
      <FormKit type="form" @submit="form" #default="{ value }">
        <FormKit
          type="select"
          label="Permissions for Minors"
          placeholder="Select a Minor"
          name="selected_minor"
          select-icon="caretDown"
          :classes="{
            label: '$reset stext-base text-black-500 font-bold',
            wrapper: 'flex gap-4 items-center',
          }"
          :options="['Minor1', 'Minor2', 'Minor3']"
          v-model="selectedMinor"
        />
        <div v-if="!spending_limits">
          <FormKit
            type="text"
            label="Daily Transfer Limit (Optional)"
            placeholder="Enter Limit Amount"
            name="transfer_limit"
            :suffix-icon="euroPlaceHolderSVG"
            :classes="{
              suffixIcon:
                ' $reset formkit-suffix-icon w-max pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full  [&>svg]:max-h-[1em] [&>svg]:m-auto formkit-icon',
              label:
                '$reset formkit-label block mb-1 text-[#374151] font-normal text-sm	',
            }"
            validation="number"
            validation-visibility="live"
          />
        </div>
        <!--Spending Limits-->
        <div class="flex w-full items-center gap-4 mb-4">
          <FormKit
            type="checkbox"
            label="Set Spending Limits"
            name="spending_limits"
            decorator-icon="check"
            :classes="{
              outer:
                '$reset formkit-outer  formkit-disabled:opacity-50 w-fit mb-0',
              decorator:
                '$reset formkit-decorator block relative   h-5 w-5 mr-2 bg-white ring-2 ring-black peer-checked:ring-[#FFCF25] peer-checked:bg-[#FFCF25] text-transparent peer-checked:text-white',
            }"
            v-model="spending_limits"
          />
          <span
            @mouseover="spendingLimitsTooltip = true"
            @mouseleave="spendingLimitsTooltip = false"
          >
            <FormKitIcon
              icon="info"
              class="font-extrabold [&>svg]:w-[1em] [&>svg]:h-[1em]"
            />
          </span>
          <div
            v-if="spendingLimitsTooltip"
            class="absolute left-80 transition duration-700 ease-in-out"
          >
            <BaseTooltip
              placement="left"
              class="bg-[#FFF8F0] border-1 border-[#CFC6B4]"
            >
              <template #text
                >Permission for parents to set daily or weekly spending limits
                for the account.</template
              >
            </BaseTooltip>
          </div>
        </div>
        <div class="flex gap-4" v-if="spending_limits">
          <Tabs default-value="weekly" class="w-auto">
            <TabsList class="bg-white border-2 p-0 border-[#E3E3E3]">
              <TabsTrigger value="daily" :class="tabsClasses">
                Daily
              </TabsTrigger>
              <TabsTrigger value="weekly" :class="tabsClasses">
                Weekly
              </TabsTrigger>
              <TabsTrigger value="monthly" :class="tabsClasses">
                Monthly
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <FormKit
            type="text"
            placeholder="Enter Limit Amount"
            name="transfer_limit"
            :suffix-icon="euroPlaceHolderSVG"
            :classes="{
              suffixIcon:
                ' $reset formkit-suffix-icon w-max pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full  [&>svg]:max-h-[1em] [&>svg]:m-auto formkit-icon',
              label:
                '$reset formkit-label block mb-1 text-[#374151] font-normal text-sm	',
            }"
            validation="number"
            validation-visibility="live"
          />
        </div>

        <!--Lock/Unlock Card-->
        <div class="flex w-full items-center gap-4 mb-4">
          <FormKit
            type="checkbox"
            label="Lock / Unlock Card"
            name="lock_card"
            decorator-icon="check"
            :classes="{
              outer:
                '$reset formkit-outer  formkit-disabled:opacity-50 w-fit mb-0',
              decorator:
                '$reset formkit-decorator block relative  h-5 w-5 mr-2 bg-white ring-2 ring-black peer-checked:ring-[#FFCF25] peer-checked:bg-[#FFCF25] text-transparent peer-checked:text-white',
            }"
          />
          <span
            @mouseover="lockCardTooltip = true"
            @mouseleave="lockCardTooltip = false"
          >
            <FormKitIcon
              icon="info"
              class="font-extrabold [&>svg]:w-[1em] [&>svg]:h-[1em]"
            />
          </span>
          <div
            v-if="lockCardTooltip"
            class="absolute left-80 transition duration-700 ease-in-out"
          >
            <BaseTooltip
              placement="left"
              class="bg-[#FFF8F0] border-1 border-[#CFC6B4]"
            >
              <template #text
                >Ability to lock or unlock the debit/credit card associated with
                the minor’s account.</template
              >
            </BaseTooltip>
          </div>
        </div>

        <!-- Adpprove High Value Transactions -->
        <div class="flex w-full items-center gap-4 mb-4">
          <FormKit
            type="checkbox"
            label="Approve High-Value Transactions"
            name="high_value_transactions"
            decorator-icon="check"
            :classes="{
              outer:
                '$reset formkit-outer  formkit-disabled:opacity-50 w-fit mb-0',
              decorator:
                '$reset formkit-decorator block relative  h-5 w-5 mr-2 bg-white ring-2 ring-black peer-checked:ring-[#FFCF25] peer-checked:bg-[#FFCF25] text-transparent peer-checked:text-white',
            }"
          />
          <span
            @mouseover="highValueTransactionsTooltip = true"
            @mouseleave="highValueTransactionsTooltip = false"
          >
            <FormKitIcon
              icon="info"
              class="font-extrabold [&>svg]:w-[1em] [&>svg]:h-[1em]"
            />
          </span>
          <div
            v-if="highValueTransactionsTooltip"
            class="absolute left-96 transition duration-700 ease-in-out"
          >
            <BaseTooltip
              placement="left"
              class="bg-[#FFF8F0] border-1 border-[#CFC6B4]"
            >
              <template #text
                >Requiring parental approval for transactions above a certain
                amount.</template
              >
            </BaseTooltip>
          </div>
        </div>

        <!-- Restrict Certain transaction types -->
        <div class="flex w-full items-center gap-4 mb-4">
          <FormKit
            type="checkbox"
            label="Restrict Certain Transaction Types"
            name="restrict_transactions_types"
            decorator-icon="check"
            :classes="{
              outer:
                '$reset formkit-outer  formkit-disabled:opacity-50 w-fit mb-0',
              decorator:
                '$reset formkit-decorator block relative  h-5 w-5 mr-2 bg-white ring-2 ring-black peer-checked:ring-[#FFCF25] peer-checked:bg-[#FFCF25] text-transparent peer-checked:text-white',
            }"
          />
          <span
            @mouseover="restrictTransactionsTypesTooltip = true"
            @mouseleave="restrictTransactionsTypesTooltip = false"
          >
            <FormKitIcon
              icon="info"
              class="font-extrabold [&>svg]:w-[1em] [&>svg]:h-[1em]"
            />
          </span>
          <div
            v-if="restrictTransactionsTypesTooltip"
            class="absolute left-96 transition duration-700 ease-in-out"
          >
            <BaseTooltip
              placement="left"
              class="bg-[#FFF8F0] border-1 border-[#CFC6B4]"
            >
              <template #text
                >Ability to restrict transactions at specific merchants or types
                of merchants (like online stores, gaming sites, etc.).</template
              >
            </BaseTooltip>
          </div>
        </div>

        <pre wrap>{{ value }}</pre>
      </FormKit>
    </div>
  </div>
</template>

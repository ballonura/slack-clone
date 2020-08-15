<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="bg-faux-dark-purple flex-shrink-0 flex" style="flex-basis: 38px;">
      <div class="w-1/3 flex items-center justify-end"></div>
      <div class="w-1/3 flex justify-center items-center">
        <div class="flex items-center justify-center w-8 h-8 text-gray hover:text-white rounded cursor-pointer hover:bg-hover-purple">
          <!-- prettier-ignore -->
          <svg class="w-5 h-5 fill-current" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256 s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98 C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,472c-119.103,0-216-96.897-216-216S136.897,40,256,40 s216,96.897,216,216S375.103,472,256,472z"/></g></g><g><g><polygon points="276,236 276,76 236,76 236,276 388,276 388,236"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        </div>
        <div class="flex items-center justify-center w-full">
          <div @click="isSearchInputOpen = true" class="relative w-full opacity-75 hover:opacity-100">
            <button class="flex items-center w-full h-6 mx-auto bg-input-purple border border-light-gray rounded text-left text-white px-2 text-sm focus:outline-none" style="max-width: 550px;">
              <span class="flex-1">Search BlaBla</span>
              <!-- prettier-ignore -->
              <svg class="fill-current text-white w-3 h-3" x="0px" y="0px" viewBox="0 0 511.999 511.999"><g><g><path d="M225.773,0.616C101.283,0.616,0,101.622,0,225.773s101.284,225.157,225.773,225.157s225.774-101.006,225.774-225.157 S350.263,0.616,225.773,0.616z M225.773,413.917c-104.084,0-188.761-84.406-188.761-188.145 c0-103.745,84.677-188.145,188.761-188.145s188.761,84.4,188.761,188.145C414.535,329.511,329.858,413.917,225.773,413.917z"/></g></g><g><g><path d="M506.547,479.756L385.024,358.85c-7.248-7.205-18.963-7.174-26.174,0.068c-7.205,7.248-7.174,18.962,0.068,26.174 l121.523,120.906c3.615,3.59,8.328,5.385,13.053,5.385c4.756,0,9.506-1.82,13.121-5.453 C513.82,498.681,513.789,486.967,506.547,479.756z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </button>
          </div>
          <div v-if="isSearchInputOpen" class="flex flex-col absolute w-full rounded-md border border-gray shadow-md bg-white" style="top: 5px; max-width: 800px;">
            <div class="flex justify-between items-center px-6 py-2 border-b border-gray">
              <div class="flex items-center">
                <!-- prettier-ignore -->
                <svg class="fill-current w-3 h-3 mr-4" x="0px" y="0px" viewBox="0 0 511.999 511.999"><g><g><path d="M225.773,0.616C101.283,0.616,0,101.622,0,225.773s101.284,225.157,225.773,225.157s225.774-101.006,225.774-225.157 S350.263,0.616,225.773,0.616z M225.773,413.917c-104.084,0-188.761-84.406-188.761-188.145 c0-103.745,84.677-188.145,188.761-188.145s188.761,84.4,188.761,188.145C414.535,329.511,329.858,413.917,225.773,413.917z"/></g></g><g><g><path d="M506.547,479.756L385.024,358.85c-7.248-7.205-18.963-7.174-26.174,0.068c-7.205,7.248-7.174,18.962,0.068,26.174 l121.523,120.906c3.615,3.59,8.328,5.385,13.053,5.385c4.756,0,9.506-1.82,13.121-5.453 C513.82,498.681,513.789,486.967,506.547,479.756z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                <p class="text-light-gray">Search for something. Anything. You have the window open now anyway.</p>
              </div>
              <!-- prettier-ignore -->
              <svg @click="isSearchInputOpen = false" class="fill-current w-3 h-3 cursor-pointer" x="0px" y="0px" viewBox="0 0 512 512"><g><g><polygon points="512,28.308 483.692,0 256,227.692 28.308,0 0,28.308 227.692,256 0,483.692 28.308,512 256,284.308 483.692,512 512,483.692 284.308,256"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
            <div class="py-2">
              <div>
                <p class="text-sm text-light-gray my-3 px-6">Narrow your search</p>
                <div class="flex items-center py-1 px-6 cursor-pointer hover:bg-msg-input-hover hover:text-white" v-for="n in 2" :key="n">
                  <!-- prettier-ignore -->
                  <svg class="fill-current w-3 h-3 mr-4" x="0px" y="0px" viewBox="0 0 511.999 511.999"><g><g><path d="M225.773,0.616C101.283,0.616,0,101.622,0,225.773s101.284,225.157,225.773,225.157s225.774-101.006,225.774-225.157 S350.263,0.616,225.773,0.616z M225.773,413.917c-104.084,0-188.761-84.406-188.761-188.145 c0-103.745,84.677-188.145,188.761-188.145s188.761,84.4,188.761,188.145C414.535,329.511,329.858,413.917,225.773,413.917z"/></g></g><g><g><path d="M506.547,479.756L385.024,358.85c-7.248-7.205-18.963-7.174-26.174,0.068c-7.205,7.248-7.174,18.962,0.068,26.174 l121.523,120.906c3.615,3.59,8.328,5.385,13.053,5.385c4.756,0,9.506-1.82,13.121-5.453 C513.82,498.681,513.789,486.967,506.547,479.756z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                  <p>lol</p>
                </div>
              </div>
              <div>
                <p class="text-sm text-light-gray my-3 px-6">Recent searches</p>
                <div class="flex items-center py-1 px-6 cursor-pointer hover:bg-msg-input-hover hover:text-white" v-for="n in 5" :key="n">
                  <!-- prettier-ignore -->
                  <svg class="fill-current w-3 h-3 mr-4" x="0px" y="0px" viewBox="0 0 511.999 511.999"><g><g><path d="M225.773,0.616C101.283,0.616,0,101.622,0,225.773s101.284,225.157,225.773,225.157s225.774-101.006,225.774-225.157 S350.263,0.616,225.773,0.616z M225.773,413.917c-104.084,0-188.761-84.406-188.761-188.145 c0-103.745,84.677-188.145,188.761-188.145s188.761,84.4,188.761,188.145C414.535,329.511,329.858,413.917,225.773,413.917z"/></g></g><g><g><path d="M506.547,479.756L385.024,358.85c-7.248-7.205-18.963-7.174-26.174,0.068c-7.205,7.248-7.174,18.962,0.068,26.174 l121.523,120.906c3.615,3.59,8.328,5.385,13.053,5.385c4.756,0,9.506-1.82,13.121-5.453 C513.82,498.681,513.789,486.967,506.547,479.756z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                  <p>lol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 flex items-center justify-end">
        <div class="flex items-center justify-center mr-4 w-8 h-8 text-gray hover:text-white rounded cursor-pointer hover:bg-hover-purple">
          <!-- prettier-ignore -->
          <svg class="w-5 h-5 fill-current" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><circle cx="256" cy="378.5" r="25"/><path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"/><path d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        </div>
      </div>
    </div>
    <div class="overflow-auto flex-grow flex">
      <div class="flex flex-col bg-dark-purple overflow-y-auto" style="flex-basis: 260px;">
        <div class="flex justify-between items-center border-gray-opacity border-t py-3 hover:bg-faux-dark-purple cursor-pointer">
          <div class="flex flex-col ml-4">
            <div class="flex items-center text-white">
              <p class="text-base mr-2 font-bold">Channel Name</p>
              <!-- prettier-ignore -->
              <svg class="fill-current w-2" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2587 0.280712L7.47671 6.06271L1.69471 0.280712C1.50611 0.0985537 1.25351 -0.00224062 0.991311 3.78026e-05C0.729114 0.00231622 0.478301 0.107485 0.292893 0.292893C0.107485 0.478301 0.00231622 0.729114 3.78026e-05 0.991311C-0.00224062 1.25351 0.0985537 1.50611 0.280712 1.69471L6.76671 8.18071C6.85972 8.27411 6.97041 8.34804 7.09232 8.39818C7.21423 8.44832 7.3449 8.47365 7.47671 8.47271C7.60848 8.47338 7.73908 8.44791 7.86094 8.39779C7.98281 8.34767 8.09353 8.27389 8.18671 8.18071L14.6727 1.69471C14.8549 1.50611 14.9557 1.25351 14.9534 0.991311C14.9511 0.729114 14.8459 0.478301 14.6605 0.292893C14.4751 0.107485 14.2243 0.00231622 13.9621 3.78026e-05C13.6999 -0.00224062 13.4473 0.0985537 13.2587 0.280712V0.280712Z"/></svg>
            </div>
            <div class="flex items-center">
              <div class="bg-online-green rounded-full w-2 h-2 mr-2"></div>
              <p class="text-sm text-gray">User Name</p>
            </div>
          </div>
          <div class="flex justify-center items-center bg-white h-10 w-10 rounded-full mr-4">
            <!-- prettier-ignore -->
            <svg height="16px" viewBox="0 0 20 20"><path d="M8.66000142,13.3899994 L10.3700017,12.6999993 C10.8700018,12.4999993 11.3300019,12.1999992 11.7100019,11.8199992 L19.5600032,3.96999786 C20.1900033,3.33999776 20.0600033,2.19999757 19.2800032,1.41999745 L18.570003,0.70999733 C17.7900029,-0.070002798 16.6500027,-0.190002818 16.0300026,0.429997284 L8.22000135,8.23999856 C7.81000128,8.64999863 7.49000123,9.13999871 7.29000119,9.6899988 L6.65000109,11.4199991 C6.120001,12.7599993 7.29000119,13.9099995 8.66000142,13.3899994 Z M14.4200024,18.9999974 C16.8700028,18.9999974 19.0000002,16.96 19.0000002,14.4199996 L19.0000002,8.49999738 C19.0000002,7.34999842 17.5000002,7.34999842 17.5000002,8.49999738 L17.5000002,14.1199995 C17.5000002,16.1099999 16.1100026,17.4999974 14.1200023,17.4999974 L5.88000096,17.4999974 C3.89000064,17.4999974 2.50000016,16.1099999 2.50000016,14.1199995 L2.50000016,5.87999818 C2.50000016,3.88999785 3.89000064,2.49999738 5.88000096,2.49999738 L11.5000002,2.49999738 C12.6900021,2.49999738 12.6800021,0.999997377 11.5000002,0.999997377 L5.58000091,0.999997377 C3.0300005,0.999997377 1.00000016,3.03999771 1.00000016,5.57999813 L1.00000016,14.4199996 C1.00000016,16.96 3.0300005,18.9999974 5.58000091,18.9999974 L14.4200024,18.9999974 Z M17.2100028,4.1899979 L15.8000026,2.76999767 L16.9500028,1.61999748 C17.0600028,1.50999746 17.3300028,1.54999747 17.5200029,1.7499975 L18.230003,2.45999762 C18.430003,2.65999765 18.470003,2.92999769 18.370003,3.01999771 L17.2100028,4.1899979 Z M7.98000131,12.0499992 L8.67000142,10.1099989 C8.75000143,9.88999883 8.86000145,9.71999881 9.02000148,9.54999878 L14.7300024,3.83999784 L16.1400026,5.24999807 L10.4300017,10.989999 C10.2500017,11.159999 10.0900017,11.2599991 9.90000162,11.3299991 L8.00000131,12.0699992 C7.98000131,12.0799992 7.97000131,12.0699992 7.98000131,12.0499992 Z" id="compose-dm" fill-rule="nonzero"></path></svg>
          </div>
        </div>
        <div class="border-gray-opacity border-t border-b">
          <div class="flex flex-col my-4">
            <transition name="slide-fade">
              <div v-if="isSettingsOpen">
                <div v-for="setting in settings" :key="setting" class="flex items-center text-gray cursor-pointer px-4 py-1 hover:bg-faux-dark-purple">
                  <!-- prettier-ignore -->
                  <svg class="fill-current mr-3 w-4" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M345.154,160.478H166.846c-10.552,0-19.104,8.552-19.104,19.104s8.552,19.104,19.104,19.104h178.308 c10.552,0,19.104-8.552,19.104-19.104S355.706,160.478,345.154,160.478z"/></g></g><g><g><path d="M345.154,236.896H166.846c-10.552,0-19.104,8.552-19.104,19.104s8.552,19.104,19.104,19.104h178.308 c10.552,0,19.104-8.552,19.104-19.104S355.706,236.896,345.154,236.896z"/></g></g><g><g><path d="M345.154,313.313H166.846c-10.552,0-19.104,8.552-19.104,19.104s8.552,19.104,19.104,19.104h178.308 c10.552,0,19.104-8.552,19.104-19.104S355.706,313.313,345.154,313.313z"/></g></g><g><g><path d="M256,0C117.302,0,4.458,112.844,4.458,251.542c0,31.516,5.795,62.351,17.251,91.708 c8.903,22.55,20.697,43.265,35.133,61.746L22.55,485.4c-2.751,6.445-1.751,13.87,2.598,19.359C28.81,509.383,34.35,512,40.119,512 c1.089,0,2.191-0.089,3.286-0.287l129.917-22.671c26.02,9.323,53.805,14.042,82.678,14.042 c138.699,0,251.542-112.844,251.542-251.542S394.699,0,256,0z M256,464.876c-26.039,0-50.945-4.496-74.023-13.367 c-3.229-1.242-6.737-1.592-10.138-0.987L71.495,468.034l25.04-58.708c2.866-6.718,1.649-14.488-3.133-20.009 c-15.143-17.474-27.307-37.693-36.12-60.026c-9.699-24.842-14.615-51.003-14.615-77.749C42.667,133.91,138.367,38.209,256,38.209 s213.333,95.701,213.333,213.333S373.633,464.876,256,464.876z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                  <p class="text-base">{{ setting }}</p>
                </div>
              </div>
            </transition>
            <div @click="isSettingsOpen = !isSettingsOpen" class="flex items-center text-gray hover:text-white cursor-pointer px-4 py-1 hover:bg-faux-dark-purple">
              <!-- prettier-ignore -->
              <svg class="fill-current mr-3 w-4" :class="{'transform rotate-180' : isSettingsOpen}" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20 c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285 l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018 l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              <p class="text-base">{{ isSettingsOpen ? "Show Less" : "Show More" }}</p>
            </div>
          </div>
        </div>
        <div class="my-4">
          <div v-for="misc in miscellaneous" :key="misc.name" @mouseover="hoverMiscellaneous = misc.name" @mouseleave="hoverMiscellaneous = null" class="text-gray cursor-pointer px-4">
            <div class="flex justify-between">
              <div @click="misc.isOpen = !misc.isOpen" class="flex items-center">
                <!-- prettier-ignore -->
                <svg class="fill-current w-2 mr-3 transition duration-150" :class="{'transform rotate-90' : misc.isOpen}" x="0px" y="0px" viewBox="0 0 490.661 490.661"><g><g><path d="M453.352,236.091L48.019,1.424c-3.285-1.899-7.36-1.899-10.688,0c-3.285,1.899-5.333,5.419-5.333,9.237v469.333 c0,3.819,2.048,7.339,5.333,9.237c1.643,0.939,3.499,1.429,5.333,1.429c1.856,0,3.691-0.469,5.355-1.429l405.333-234.667 c3.285-1.92,5.312-5.44,5.312-9.237S456.637,237.989,453.352,236.091z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                <div>{{ misc.name }}</div>
              </div>
              <div class="flex items-center">
                <div class="flex justify-center items-center w-8 h-8 hover:bg-hover-purple">
                  <!-- prettier-ignore -->
                  <svg v-if="hoverMiscellaneous === misc.name" class="fill-current w-3" viewBox="0 0 515.555 515.555"><path d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/><path d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/><path d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/></svg>
                </div>
                <div class="flex justify-center items-center w-8 h-8 hover:bg-hover-purple">
                  <!-- prettier-ignore -->
                  <svg class="fill-current w-3" viewBox="0 0 426.66667 426.66667"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg>
                </div>
              </div>
            </div>
            <div v-if="misc.isOpen" class="px-1">
              <div v-for="option in misc.options" :key="option" class="flex items-center py-1" :class="{ 'text-white font-bold': option === 'general' || option === 'Nitzan Lev' }">
                <div v-if="misc.iconType === 'status'" class="bg-online-green rounded-full w-2 h-2 mr-2"></div>
                <!-- prettier-ignore -->
                <svg v-else class="fill-current w-3 mr-2" x="0px" y="0px" viewBox="0 0 416.208 416.209"><g><path d="M344.757,166.9h-20.543v-50.792C324.214,52.086,272.128,0,208.107,0C144.084,0,91.996,52.086,91.996,116.108V166.9H71.453 c-6.635,0-12.012,5.377-12.012,12.011v225.286c0,6.635,5.377,12.012,12.012,12.012h273.305c6.633,0,12.01-5.377,12.01-12.012 V178.911C356.767,172.277,351.39,166.9,344.757,166.9z M226.833,304.012v47.961c0,4.189-3.396,7.586-7.586,7.586h-22.286 c-4.189,0-7.586-3.396-7.586-7.586v-47.961c-8.287-5.875-13.699-15.535-13.699-26.466c0-17.907,14.518-32.427,32.428-32.427 c17.908,0,32.426,14.52,32.426,32.427C240.531,288.477,235.119,298.137,226.833,304.012z M268.779,166.9H147.431v-50.792 c0-33.456,27.219-60.673,60.676-60.673c33.455,0,60.672,27.217,60.672,60.673V166.9z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                <p>{{ option }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex justify-between items-center border-b border-gray border-color-gray px-5" style="flex-basis: 64px;">
          <div class="flex items-center cursor-pointer">
            <div class="bg-online-green rounded-full w-2 h-2 mr-1"></div>
            <p class="font-bold mr-2">Nitzan Lev</p>
            <div class="flex justify-center items-center w-5 h-5 rounded-sm hover:bg-lighter-gray">
              <!-- prettier-ignore -->
              <svg class="fill-current w-3" x="0px" y="0px" viewBox="0 0 477.899 477.899"><g><g><path d="M469.11,170.122c-5.462-6.13-12.926-10.117-21.058-11.249v-0.017l-127.01-17.545L270.781,21.213 c-7.339-17.579-27.539-25.88-45.117-18.541c-8.38,3.499-15.043,10.161-18.541,18.541l-50.261,120.098l-127.01,17.545 c-18.923,2.634-32.128,20.111-29.494,39.034c1.132,8.132,5.119,15.596,11.249,21.058l95.693,85.333L87.638,438.185 c-2.13,13.597,4.115,27.144,15.838,34.355c11.558,7.391,26.425,7.115,37.7-0.7l97.775-66.492l97.775,66.56 c15.777,10.708,37.248,6.599,47.957-9.178c4.866-7.17,6.859-15.907,5.582-24.477l-19.661-133.956l95.693-85.333 C480.561,206.254,481.821,184.386,469.11,170.122z M341.01,285.012c-4.281,3.825-6.352,9.545-5.513,15.224l20.48,143.36 l-107.383-73.011c-5.789-3.934-13.394-3.934-19.183,0l-108.015,72.567l21.009-142.984c0.816-5.656-1.254-11.345-5.513-15.155 l-102.4-92.297l136.67-18.859c5.984-0.825,11.085-4.752,13.414-10.325l54.579-129.399c0.062,0.076,0.108,0.163,0.137,0.256 l54.016,129.075c2.329,5.573,7.431,9.5,13.414,10.325l136.841,19.695L341.01,285.012z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
          </div>
          <div class="flex items-center p-2 cursor-pointer hover:bg-lighter-gray font-semibold rounded-md text-sm opacity-75 hover:opacity-100">
            <!-- prettier-ignore -->
            <svg class="fill-current w-5 mr-2" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256 C512,114.497,397.492,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216 c119.393,0,216,96.615,216,216C472,375.393,375.384,472,256,472z"/></g></g><g><g><path d="M256,214.33c-11.046,0-20,8.954-20,20v128.793c0,11.046,8.954,20,20,20s20-8.955,20-20.001V234.33 C276,223.284,267.046,214.33,256,214.33z"/></g></g><g><g><circle cx="256" cy="162.84" r="27"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            <p>Details</p>
          </div>
        </div>
        <div @click="isSearchInputOpen = false" class="flex flex-col flex-1 overflow-y-auto">
          <div v-for="msg in messages" :key="msg.id" @mouseover="msg.isHovering = true" @mouseleave="msg.isHovering = false" class="flex items-center py-2 hover:bg-lighter-gray px-5 justify-between">
            <div class="flex items-center">
              <img class="mr-1" :src="require(`@/assets/images/${msg.avatar}.png`)" />
              <div class="flex flex-col">
                <div class="flex items-baseline">
                  <p class="font-bold mr-2">{{ msg.username }}</p>
                  <p class="text-xs text-dark-gray">{{ msg.time }}</p>
                </div>
                <div>{{ msg.msg }}</div>
              </div>
            </div>
            <div v-if="msg.isHovering" class="flex border border-gray p-1 rounded-lg bg-white" style="transform: translateY(-2rem)">
              <div class="flex justify-center items-center w-8 h-8 hover:bg-lighter-gray cursor-pointer" v-for="n in 5" :key="n">
                <!-- prettier-ignore -->
                <svg class="fill-current w-4" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/></g></g><g><g><circle cx="176" cy="176" r="32"/></g></g><g><g><circle cx="336" cy="176" r="32"/></g></g><g><g><path d="M368,256c0,61.856-50.144,112-112,112s-112-50.144-112-112h-32c0,79.529,64.471,144,144,144s144-64.471,144-144H368z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="py-3 px-5" style="flex-basis: 109px;">
          <div class="flex flex-col h-full border border-black rounded-md p-1">
            <div class="flex-grow text-light-gray px-3 py-2">Jot something down</div>
            <div class="flex justify-between flex-grow p-1 text-light-gray bg-lighter-gray">
              <div class="flex">
                <div v-for="n in 10" :key="n" class="flex justify-center items-center w-8 h-8 hover:bg-msg-input-hover hover:text-white cursor-pointer rounded-sm">
                  <!-- prettier-ignore -->
                  <svg class="w-4 fill-current" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><circle cx="256" cy="378.5" r="25"/><path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"/><path d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                </div>
              </div>
              <div class="flex">
                <div v-for="n in 4" :key="n" class="flex justify-center items-center w-8 h-8 hover:bg-msg-input-hover hover:text-white cursor-pointer rounded-sm">
                  <!-- prettier-ignore -->
                  <svg class="w-4 fill-current" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><circle cx="256" cy="378.5" r="25"/><path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"/><path d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                </div>
                <div @click="addMessage" class="flex justify-center items-center w-8 h-8 hover:bg-online-green hover:text-white cursor-pointer rounded-sm">
                  <!-- prettier-ignore -->
                  <svg class="w-4 fill-current" viewBox="0 0 512 512" width="512"><g><path d="m499.394 237.364-471.982-187.41c-16.306-6.474-32.489 9.83-25.907 26.149l56.465 139.955c2.051 5.083 6.09 9.102 11.175 11.121l72.581 28.82-72.581 28.82c-5.086 2.019-9.125 6.038-11.175 11.121l-56.466 139.955c-6.569 16.286 9.566 32.637 25.907 26.149l471.982-187.41c16.774-6.661 16.844-30.582.001-37.27zm-443.304 170.173 35.75-88.611 111.55-44.292c16.771-6.66 16.841-30.582 0-37.27l-111.55-44.293-35.75-88.611 381.641 151.538z"/></g></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoremIpsum } from "lorem-ipsum";
import random_name from "node-random-name";

export default {
  data() {
    return {
      isSearchInputOpen: false,
      settings: ["Threads", "Mentions & reactions", "Drafts", "Saved items", "Channel browser", "People & user groups", "Apps", "File browser"],
      isSettingsOpen: true,
      miscellaneous: [
        { name: "Cannels", iconType: "icon", options: ["competition", "development", "general", "office", "marketing_team", "random"], isOpen: true, activeOption: "" },
        { name: "Direct messages", iconType: "status", options: ["Sonnie Chen", "Opal Buchanan", "Nitzan Lev", "Lilli Miranda", "Raveena Taylor"], isOpen: true, activeOption: "" },
        { name: "Apps", iconType: "icon", options: ["Gmail", "BitBucket", "Slack Bot"], isOpen: true, activeOption: "" }
      ],
      hoverMiscellaneous: null,
      messages: [{ id: 1, isHovering: false, username: "Nitzan Lev", time: "10:57 PM", msg: "Click on 'send' button to add messages", avatar: "yoshi" }],
      lorem: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      })
    };
  },
  methods: {
    random_name,
    addMessage() {
      let msg = {
        id: this.messages.length + 1,
        isHovering: false,
        username: this.random_name(),
        time: "10:57 PM",
        msg: this.lorem.generateSentences(1),
        avatar: "yoshi"
      };

      this.messages.push(msg);
    }
  }
};
</script>

<style scoped>
.border-gray-opacity {
  border-color: rgba(211, 211, 211, 0.25);
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}

.slide-fade-leave-active {
  transition: all 0.1;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

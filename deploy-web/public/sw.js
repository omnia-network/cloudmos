if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const d=e=>a(e,n),r={module:{uri:n},exports:t,require:d};s[n]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-19663cdd"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WkiUGmcssgqMq8s2PJrwA/_buildManifest.js",revision:"4e797f350bfb75ebb4d916460c83ad7c"},{url:"/_next/static/WkiUGmcssgqMq8s2PJrwA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1237-ab51938214660fce.js",revision:"ab51938214660fce"},{url:"/_next/static/chunks/1237-ab51938214660fce.js.map",revision:"e8012c95bc756051ac9b22852d393089"},{url:"/_next/static/chunks/1320-bc68ca81ae5cb66d.js",revision:"bc68ca81ae5cb66d"},{url:"/_next/static/chunks/1320-bc68ca81ae5cb66d.js.map",revision:"66fa0f35afaed747e06329f6e54da4a8"},{url:"/_next/static/chunks/1350-fd95e26091170c5c.js",revision:"fd95e26091170c5c"},{url:"/_next/static/chunks/1350-fd95e26091170c5c.js.map",revision:"3041b7f5ff16360015cef66b955acebb"},{url:"/_next/static/chunks/1443-87635b907e9c5c73.js",revision:"87635b907e9c5c73"},{url:"/_next/static/chunks/1443-87635b907e9c5c73.js.map",revision:"2b6050a26f297ef0c2ee3dd9b1c30aac"},{url:"/_next/static/chunks/1553-12eb680bdea2228a.js",revision:"12eb680bdea2228a"},{url:"/_next/static/chunks/1553-12eb680bdea2228a.js.map",revision:"41da182bf84257dfdd024601c69dc67a"},{url:"/_next/static/chunks/2018-250958b39c3ee4c5.js",revision:"250958b39c3ee4c5"},{url:"/_next/static/chunks/2018-250958b39c3ee4c5.js.map",revision:"172c1e5300429bc2caca2388e0186a26"},{url:"/_next/static/chunks/298-fa41b2a3195e1042.js",revision:"fa41b2a3195e1042"},{url:"/_next/static/chunks/298-fa41b2a3195e1042.js.map",revision:"05ead0c42c2dd9533504b5957df8514c"},{url:"/_next/static/chunks/3516.2e4b6b2b098e6078.js",revision:"2e4b6b2b098e6078"},{url:"/_next/static/chunks/3516.2e4b6b2b098e6078.js.map",revision:"bd1c39ccabe0c16dc9bdad92d0a75383"},{url:"/_next/static/chunks/4362-b4866f955d0162c0.js",revision:"b4866f955d0162c0"},{url:"/_next/static/chunks/4362-b4866f955d0162c0.js.map",revision:"a332dd97807580406af4d0c69d81bdeb"},{url:"/_next/static/chunks/4848-4edfc02dac9f5a49.js",revision:"4edfc02dac9f5a49"},{url:"/_next/static/chunks/4848-4edfc02dac9f5a49.js.map",revision:"7ade277f7ea5e5967d8cf41fe10d96dd"},{url:"/_next/static/chunks/4991.edc01234419bef79.js",revision:"edc01234419bef79"},{url:"/_next/static/chunks/4991.edc01234419bef79.js.map",revision:"b7220bae96bca1d54de4892df64ff381"},{url:"/_next/static/chunks/5054-15599051e71e0136.js",revision:"15599051e71e0136"},{url:"/_next/static/chunks/5054-15599051e71e0136.js.map",revision:"6c531d9fe06acd7ba1b089f380d6ef03"},{url:"/_next/static/chunks/5109-d70ea173073bb803.js",revision:"d70ea173073bb803"},{url:"/_next/static/chunks/5109-d70ea173073bb803.js.map",revision:"e1100a370787d19203c12e5412632ca4"},{url:"/_next/static/chunks/527-69cc6439768d0440.js",revision:"69cc6439768d0440"},{url:"/_next/static/chunks/527-69cc6439768d0440.js.map",revision:"973bfe4a1c9eb9755f58c035538642fd"},{url:"/_next/static/chunks/5644-185d67438f95c29f.js",revision:"185d67438f95c29f"},{url:"/_next/static/chunks/5644-185d67438f95c29f.js.map",revision:"4f5599944f008020b3eddaec6dec98c8"},{url:"/_next/static/chunks/5749.72214791cd774f3b.js",revision:"72214791cd774f3b"},{url:"/_next/static/chunks/5749.72214791cd774f3b.js.map",revision:"0226e6044fc1b2cdf87e472126042648"},{url:"/_next/static/chunks/609-d89f52daee913dd3.js",revision:"d89f52daee913dd3"},{url:"/_next/static/chunks/609-d89f52daee913dd3.js.map",revision:"0e37d45287103871eb8bd0dd8b78a29b"},{url:"/_next/static/chunks/6160.4c66abe24c5ba598.js",revision:"4c66abe24c5ba598"},{url:"/_next/static/chunks/6160.4c66abe24c5ba598.js.map",revision:"1b74b30b006ec68a607b540bd467953e"},{url:"/_next/static/chunks/6183-f507f19988e46241.js",revision:"f507f19988e46241"},{url:"/_next/static/chunks/6183-f507f19988e46241.js.map",revision:"2793ef521e58d071726813ffc865511f"},{url:"/_next/static/chunks/659-6599520b4e88c97d.js",revision:"6599520b4e88c97d"},{url:"/_next/static/chunks/659-6599520b4e88c97d.js.map",revision:"1bb6e2a0709b3b97502f4a5ea632186d"},{url:"/_next/static/chunks/6677-d0ada41b99fbdf6f.js",revision:"d0ada41b99fbdf6f"},{url:"/_next/static/chunks/6677-d0ada41b99fbdf6f.js.map",revision:"1082a4a38bcd7c9db688dcfd0336eb0e"},{url:"/_next/static/chunks/6698-4f4c9cc9bfbaacb8.js",revision:"4f4c9cc9bfbaacb8"},{url:"/_next/static/chunks/6698-4f4c9cc9bfbaacb8.js.map",revision:"a6c5c41cde5f3368ca31c17aa4512326"},{url:"/_next/static/chunks/678-7692cbe0fa348f10.js",revision:"7692cbe0fa348f10"},{url:"/_next/static/chunks/678-7692cbe0fa348f10.js.map",revision:"9bb011077a878efda396eab7e26355c0"},{url:"/_next/static/chunks/6782.998bc97f2cac4661.js",revision:"998bc97f2cac4661"},{url:"/_next/static/chunks/6782.998bc97f2cac4661.js.map",revision:"bc43d2a492f1276152bcf74509af1ce6"},{url:"/_next/static/chunks/6886-43c474d3a3be9ccb.js",revision:"43c474d3a3be9ccb"},{url:"/_next/static/chunks/6886-43c474d3a3be9ccb.js.map",revision:"2ecf22de338fa5da280c413e543b009b"},{url:"/_next/static/chunks/69fc0a3a-3ba305c9d969092f.js",revision:"3ba305c9d969092f"},{url:"/_next/static/chunks/69fc0a3a-3ba305c9d969092f.js.map",revision:"b649699557acd02cc0112b32e8517bc8"},{url:"/_next/static/chunks/7047-8ff6885c4286324f.js",revision:"8ff6885c4286324f"},{url:"/_next/static/chunks/7047-8ff6885c4286324f.js.map",revision:"17275b4388937e3382285f1f02fcfc76"},{url:"/_next/static/chunks/7449-ca696f52ef3e1ce2.js",revision:"ca696f52ef3e1ce2"},{url:"/_next/static/chunks/7449-ca696f52ef3e1ce2.js.map",revision:"44dc9a12a6a793612365252043fe2e52"},{url:"/_next/static/chunks/8228-aa1a031b87ea85ab.js",revision:"aa1a031b87ea85ab"},{url:"/_next/static/chunks/8228-aa1a031b87ea85ab.js.map",revision:"361f6e51eadb3642a60658e6e194847b"},{url:"/_next/static/chunks/8233-0b505c692380e23e.js",revision:"0b505c692380e23e"},{url:"/_next/static/chunks/8233-0b505c692380e23e.js.map",revision:"24ac2799766cce7d4f55ef1eaab05d3a"},{url:"/_next/static/chunks/8329.cd9bbb442cc3639a.js",revision:"cd9bbb442cc3639a"},{url:"/_next/static/chunks/8329.cd9bbb442cc3639a.js.map",revision:"219194df7b3db0d3954fe768527cd16f"},{url:"/_next/static/chunks/8364-8945f344eec70f0a.js",revision:"8945f344eec70f0a"},{url:"/_next/static/chunks/8364-8945f344eec70f0a.js.map",revision:"3490d16c98f239a5458eb58f58112bcf"},{url:"/_next/static/chunks/8446-4892663fdb75b8e1.js",revision:"4892663fdb75b8e1"},{url:"/_next/static/chunks/8446-4892663fdb75b8e1.js.map",revision:"664560b0556cfb789fd1bd20fa97144a"},{url:"/_next/static/chunks/8606-d8b87c9c7c625494.js",revision:"d8b87c9c7c625494"},{url:"/_next/static/chunks/8606-d8b87c9c7c625494.js.map",revision:"bda2e28e372a0590b19e9f847096cc9c"},{url:"/_next/static/chunks/9130-7b6fca6592947cda.js",revision:"7b6fca6592947cda"},{url:"/_next/static/chunks/9130-7b6fca6592947cda.js.map",revision:"ed0d054a0046d7b1aba303e12183ab91"},{url:"/_next/static/chunks/9266-190a469a227c4093.js",revision:"190a469a227c4093"},{url:"/_next/static/chunks/9266-190a469a227c4093.js.map",revision:"3e55f3c1e71a8356ec34b7aaaffafe2e"},{url:"/_next/static/chunks/942-bef0607ef1052ca8.js",revision:"bef0607ef1052ca8"},{url:"/_next/static/chunks/942-bef0607ef1052ca8.js.map",revision:"291ec0e7f963e13be8fb882fc9261e9c"},{url:"/_next/static/chunks/9604-5b0ae6bfc21d762e.js",revision:"5b0ae6bfc21d762e"},{url:"/_next/static/chunks/9604-5b0ae6bfc21d762e.js.map",revision:"db6a10553ec40489ec731ce98c8f7537"},{url:"/_next/static/chunks/9912-49517439276decf2.js",revision:"49517439276decf2"},{url:"/_next/static/chunks/9912-49517439276decf2.js.map",revision:"5014b77e603fedf8178d7259980aa704"},{url:"/_next/static/chunks/9f96d65d-e2cba51f15a3f480.js",revision:"e2cba51f15a3f480"},{url:"/_next/static/chunks/9f96d65d-e2cba51f15a3f480.js.map",revision:"9c75b94497f1b36b05f625b47b3a6c8a"},{url:"/_next/static/chunks/ed150ef9.8cda0b3104d2c27b.js",revision:"8cda0b3104d2c27b"},{url:"/_next/static/chunks/ed150ef9.8cda0b3104d2c27b.js.map",revision:"34dfefc984e90e074737205d8653ca66"},{url:"/_next/static/chunks/framework-2645a99191cfc5e9.js",revision:"2645a99191cfc5e9"},{url:"/_next/static/chunks/framework-2645a99191cfc5e9.js.map",revision:"6faa44d3d98d9d70c102a9ef855cc984"},{url:"/_next/static/chunks/main-8cb3ef9b2f8bb78d.js",revision:"8cb3ef9b2f8bb78d"},{url:"/_next/static/chunks/main-8cb3ef9b2f8bb78d.js.map",revision:"9b09d22952231cd9dc660b6948a11b42"},{url:"/_next/static/chunks/pages/404-143cb8046985eb3d.js",revision:"143cb8046985eb3d"},{url:"/_next/static/chunks/pages/404-143cb8046985eb3d.js.map",revision:"ab17ec86199914f0304c45252158b24f"},{url:"/_next/static/chunks/pages/500-ee38b3e054b6e91d.js",revision:"ee38b3e054b6e91d"},{url:"/_next/static/chunks/pages/500-ee38b3e054b6e91d.js.map",revision:"3b12567b76adb11815991913b9edc5c7"},{url:"/_next/static/chunks/pages/_error-47c8d196fdda703f.js",revision:"47c8d196fdda703f"},{url:"/_next/static/chunks/pages/_error-47c8d196fdda703f.js.map",revision:"5493fd4cf8917ebc60f784332cd86b05"},{url:"/_next/static/chunks/pages/addresses/%5Baddress%5D-6ad42391cb832421.js",revision:"6ad42391cb832421"},{url:"/_next/static/chunks/pages/addresses/%5Baddress%5D-6ad42391cb832421.js.map",revision:"9d9405f51da544ab5ffbe0c7be836290"},{url:"/_next/static/chunks/pages/addresses/%5Baddress%5D/deployments-e4d0dbd2961c193d.js",revision:"e4d0dbd2961c193d"},{url:"/_next/static/chunks/pages/addresses/%5Baddress%5D/deployments-e4d0dbd2961c193d.js.map",revision:"a77b440b554aff4f7523cadef129ef49"},{url:"/_next/static/chunks/pages/addresses/%5Baddress%5D/transactions-3e90aaa0b2fc8484.js",revision:"3e90aaa0b2fc8484"},{url:"/_next/static/chunks/pages/addresses/%5Baddress%5D/transactions-3e90aaa0b2fc8484.js.map",revision:"81da8aec99f7aa6fe8119a1f2118c44c"},{url:"/_next/static/chunks/pages/analytics-f8cabaad72c9f6a4.js",revision:"f8cabaad72c9f6a4"},{url:"/_next/static/chunks/pages/analytics-f8cabaad72c9f6a4.js.map",revision:"88ef4f87ad36afec866cea3a76e76adc"},{url:"/_next/static/chunks/pages/blocks-48097254130d38fe.js",revision:"48097254130d38fe"},{url:"/_next/static/chunks/pages/blocks-48097254130d38fe.js.map",revision:"135a220e0a13509cf5642494a6f87832"},{url:"/_next/static/chunks/pages/blocks/%5Bheight%5D-9a8046c0f7778613.js",revision:"9a8046c0f7778613"},{url:"/_next/static/chunks/pages/blocks/%5Bheight%5D-9a8046c0f7778613.js.map",revision:"9ea64156f07e33c85cab424e407d2fe3"},{url:"/_next/static/chunks/pages/contact-10c336b955a10cb1.js",revision:"10c336b955a10cb1"},{url:"/_next/static/chunks/pages/contact-10c336b955a10cb1.js.map",revision:"9225d9d64bc2ffe7216f337240b2c260"},{url:"/_next/static/chunks/pages/deployment/%5Bowner%5D/%5Bdseq%5D-673fa0fe065d52c2.js",revision:"673fa0fe065d52c2"},{url:"/_next/static/chunks/pages/deployment/%5Bowner%5D/%5Bdseq%5D-673fa0fe065d52c2.js.map",revision:"2f9c10d2a561b222f7429928ad419b2e"},{url:"/_next/static/chunks/pages/deployments-07bfc46a9a4e2aa6.js",revision:"07bfc46a9a4e2aa6"},{url:"/_next/static/chunks/pages/deployments-07bfc46a9a4e2aa6.js.map",revision:"27b7a6d45b0014974c91a8f0ee9462c4"},{url:"/_next/static/chunks/pages/deployments/%5Bdseq%5D-3bfbc4d065bfb23f.js",revision:"3bfbc4d065bfb23f"},{url:"/_next/static/chunks/pages/deployments/%5Bdseq%5D-3bfbc4d065bfb23f.js.map",revision:"730eb96fd9cd2174c4c0a1fea6db28a1"},{url:"/_next/static/chunks/pages/get-started-f0fddc92f9978ff2.js",revision:"f0fddc92f9978ff2"},{url:"/_next/static/chunks/pages/get-started-f0fddc92f9978ff2.js.map",revision:"7976c1ca5d291e2b46a45b88072fd094"},{url:"/_next/static/chunks/pages/get-started/wallet-1674f060816a4d38.js",revision:"1674f060816a4d38"},{url:"/_next/static/chunks/pages/get-started/wallet-1674f060816a4d38.js.map",revision:"ab9fc6875e4b2b194fe4f67f001cd22e"},{url:"/_next/static/chunks/pages/graph/%5Bsnapshot%5D-d7af548d57880c3b.js",revision:"d7af548d57880c3b"},{url:"/_next/static/chunks/pages/graph/%5Bsnapshot%5D-d7af548d57880c3b.js.map",revision:"33f970caf9712bd16ea9e0a3b0f818fa"},{url:"/_next/static/chunks/pages/index-035862ff1fe99b2b.js",revision:"035862ff1fe99b2b"},{url:"/_next/static/chunks/pages/index-035862ff1fe99b2b.js.map",revision:"d2a351239fdfeb401dc320d3b91c8a26"},{url:"/_next/static/chunks/pages/maintenance-b9b8cb2f20e80567.js",revision:"b9b8cb2f20e80567"},{url:"/_next/static/chunks/pages/maintenance-b9b8cb2f20e80567.js.map",revision:"75d86d2c3e5780bab65d2e56828202e2"},{url:"/_next/static/chunks/pages/new-deployment-55b69f40dd57d5d4.js",revision:"55b69f40dd57d5d4"},{url:"/_next/static/chunks/pages/new-deployment-55b69f40dd57d5d4.js.map",revision:"03add8091fb125f921b8a9815242c785"},{url:"/_next/static/chunks/pages/price-compare-4ef9f9805153d053.js",revision:"4ef9f9805153d053"},{url:"/_next/static/chunks/pages/price-compare-4ef9f9805153d053.js.map",revision:"e144121981ab97f84d15671f42a9439b"},{url:"/_next/static/chunks/pages/privacy-policy-e625752c54753d1f.js",revision:"e625752c54753d1f"},{url:"/_next/static/chunks/pages/privacy-policy-e625752c54753d1f.js.map",revision:"9719fb76717635311260a40cea17dff5"},{url:"/_next/static/chunks/pages/profile/%5Busername%5D-543af2a9ba1a1915.js",revision:"543af2a9ba1a1915"},{url:"/_next/static/chunks/pages/profile/%5Busername%5D-543af2a9ba1a1915.js.map",revision:"dc027a45de09f0f2d0996ef38863c7e7"},{url:"/_next/static/chunks/pages/provider-graph/%5Bsnapshot%5D-f006b705a238add7.js",revision:"f006b705a238add7"},{url:"/_next/static/chunks/pages/provider-graph/%5Bsnapshot%5D-f006b705a238add7.js.map",revision:"da0c488735a602453ecaee7b4e599665"},{url:"/_next/static/chunks/pages/providers-5c264e5f6c2a40d5.js",revision:"5c264e5f6c2a40d5"},{url:"/_next/static/chunks/pages/providers-5c264e5f6c2a40d5.js.map",revision:"10857320bfa47c01d71885e26dfae572"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D-a237aca38d5e3c9d.js",revision:"a237aca38d5e3c9d"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D-a237aca38d5e3c9d.js.map",revision:"eccbaea372fe8d5677e17d1b076d8f55"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D/edit-aa4c68170425c3b3.js",revision:"aa4c68170425c3b3"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D/edit-aa4c68170425c3b3.js.map",revision:"59db46dc9f2e5a3eccfeb40eeec0f394"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D/leases-5f3e62357a77aca0.js",revision:"5f3e62357a77aca0"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D/leases-5f3e62357a77aca0.js.map",revision:"783a427dca92038a5db9a5787a0f8313"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D/raw-456e2e916c2e60a7.js",revision:"456e2e916c2e60a7"},{url:"/_next/static/chunks/pages/providers/%5Bowner%5D/raw-456e2e916c2e60a7.js.map",revision:"0cdc40365efc8a63cda76be6dad9ab85"},{url:"/_next/static/chunks/pages/sdl-builder-d802467afd1242aa.js",revision:"d802467afd1242aa"},{url:"/_next/static/chunks/pages/sdl-builder-d802467afd1242aa.js.map",revision:"ee18f89ded9f107254a8d0880e6d83e3"},{url:"/_next/static/chunks/pages/settings-96f79e0b7b495835.js",revision:"96f79e0b7b495835"},{url:"/_next/static/chunks/pages/settings-96f79e0b7b495835.js.map",revision:"488141e8b0a5c9e29a4bba5220dfa63d"},{url:"/_next/static/chunks/pages/settings/authorizations-291e16c9e6c8f5fa.js",revision:"291e16c9e6c8f5fa"},{url:"/_next/static/chunks/pages/settings/authorizations-291e16c9e6c8f5fa.js.map",revision:"3cb7b94c891e8716ab6613c2abd89097"},{url:"/_next/static/chunks/pages/template/%5Bid%5D-33d357c4b38aedf5.js",revision:"33d357c4b38aedf5"},{url:"/_next/static/chunks/pages/template/%5Bid%5D-33d357c4b38aedf5.js.map",revision:"c43c961f9a648bbaf1ea13d871e9d13b"},{url:"/_next/static/chunks/pages/templates-3df4e596dcc9310a.js",revision:"3df4e596dcc9310a"},{url:"/_next/static/chunks/pages/templates-3df4e596dcc9310a.js.map",revision:"086cb3e72a8b1e9f6d84bf8a8b035bec"},{url:"/_next/static/chunks/pages/templates/%5BtemplateId%5D-1083ac35502cb7a5.js",revision:"1083ac35502cb7a5"},{url:"/_next/static/chunks/pages/templates/%5BtemplateId%5D-1083ac35502cb7a5.js.map",revision:"d346ae71bcd8c75850d8245e599ebf76"},{url:"/_next/static/chunks/pages/terms-of-service-3cc59c714fc033f3.js",revision:"3cc59c714fc033f3"},{url:"/_next/static/chunks/pages/terms-of-service-3cc59c714fc033f3.js.map",revision:"0353660dfa596f89a1cfd502c49756b1"},{url:"/_next/static/chunks/pages/transactions-cd4428d78f5c9635.js",revision:"cd4428d78f5c9635"},{url:"/_next/static/chunks/pages/transactions-cd4428d78f5c9635.js.map",revision:"5c35919eedf54428d0a02449f477fc96"},{url:"/_next/static/chunks/pages/transactions/%5Bhash%5D-2f825a9b9c644205.js",revision:"2f825a9b9c644205"},{url:"/_next/static/chunks/pages/transactions/%5Bhash%5D-2f825a9b9c644205.js.map",revision:"55607c700d5a6918d4df7b1bb0a2d1e8"},{url:"/_next/static/chunks/pages/user/settings-3aa5061833464ec1.js",revision:"3aa5061833464ec1"},{url:"/_next/static/chunks/pages/user/settings-3aa5061833464ec1.js.map",revision:"b18e2db627cc994ab1f43df9724a3e40"},{url:"/_next/static/chunks/pages/user/settings/address-book-787620a1ccc48282.js",revision:"787620a1ccc48282"},{url:"/_next/static/chunks/pages/user/settings/address-book-787620a1ccc48282.js.map",revision:"546ea7ffbf6b9b5461facfc096d2cda4"},{url:"/_next/static/chunks/pages/user/settings/favorites-6d9bbbb26aa9d9b4.js",revision:"6d9bbbb26aa9d9b4"},{url:"/_next/static/chunks/pages/user/settings/favorites-6d9bbbb26aa9d9b4.js.map",revision:"7d4a54b6eef7f5606ef2394189cd03cf"},{url:"/_next/static/chunks/pages/validators-789933a6891c24de.js",revision:"789933a6891c24de"},{url:"/_next/static/chunks/pages/validators-789933a6891c24de.js.map",revision:"94c09f7fde164a1cc33862352bb702bd"},{url:"/_next/static/chunks/pages/validators/%5Baddress%5D-df23a5f30792d1e2.js",revision:"df23a5f30792d1e2"},{url:"/_next/static/chunks/pages/validators/%5Baddress%5D-df23a5f30792d1e2.js.map",revision:"969a27632e159d6e3670cf8b86f067e6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-556f5fa962b50456.js",revision:"556f5fa962b50456"},{url:"/_next/static/chunks/webpack-556f5fa962b50456.js.map",revision:"13851a8631fd2c00d6eaf8799e336e72"},{url:"/_next/static/css/60da0364ed65e94f.css",revision:"60da0364ed65e94f"},{url:"/_next/static/css/60da0364ed65e94f.css.map",revision:"cb19ae85aa968d5f6d3933a56327e540"},{url:"/_next/static/css/6bfa921e6cb2b44b.css",revision:"6bfa921e6cb2b44b"},{url:"/_next/static/css/6bfa921e6cb2b44b.css.map",revision:"d0734ef454db6824adde1381c60f7b65"},{url:"/_next/static/css/92e074b97232c763.css",revision:"92e074b97232c763"},{url:"/_next/static/css/92e074b97232c763.css.map",revision:"c88aeff2520ee169e777811f6afcda35"},{url:"/android-chrome-192x192.png",revision:"67aea0e4bc700134b81b51e635a95144"},{url:"/android-chrome-256x256.png",revision:"b0dc3017fadbf0f4c323636535f582b7"},{url:"/apple-touch-icon.png",revision:"97f107fd40c94f768de409ffb68e2e73"},{url:"/browserconfig.xml",revision:"e41ebb6b49206a59d8eafce8220ebeac"},{url:"/cloudmos-cover.png",revision:"14ba76ff06f2bf8186aef52eb53e4ccc"},{url:"/favicon-16x16.png",revision:"5b31d0a554060dec7c59e86af2c3b47d"},{url:"/favicon-32x32.png",revision:"794696d75ba46e490df7a68d1309cb20"},{url:"/favicon.ico",revision:"c6fc431554c8de94be347a8180e562aa"},{url:"/images/akash-logo-dark.png",revision:"b1623e407dad710a4c0c73461bbb8bb3"},{url:"/images/akash-logo-flat-dark.png",revision:"50b4ad6438e791047d97da0af65b96f5"},{url:"/images/akash-logo-flat-light.png",revision:"2befec2d17a2b6a32b1a0517ca1baf01"},{url:"/images/akash-logo-light.png",revision:"0ea30905c72eda674ad74c65d0c062bf"},{url:"/images/akash-logo.svg",revision:"4a5f3eaf31bf0f88ff3baec6281c8de3"},{url:"/images/chains/akash.png",revision:"d0b3f8ccaa3b0d18ef4039f86edf4436"},{url:"/images/chains/atom.png",revision:"6e4d88ad2c295e811fee29cc89edfcb1"},{url:"/images/chains/evmos.png",revision:"487a456e9091dec9ddf18892531401f8"},{url:"/images/chains/huahua.png",revision:"f0ba8427522833bba44962e87e982412"},{url:"/images/chains/juno.png",revision:"933b7d992dc67fd2f0d0f35e182b3361"},{url:"/images/chains/kuji.png",revision:"9c31e679007e5ae16fc28e067d907f79"},{url:"/images/chains/osmo.png",revision:"6940c69c28e5d85d99ba498fc7e95a26"},{url:"/images/chains/scrt.png",revision:"0dd98be17447cf7c47d27153f534ca60"},{url:"/images/chains/stars.png",revision:"56d0bd40e52f010c7267eb78c53138f2"},{url:"/images/chains/strd.png",revision:"eebdfb53ba0bc9bba88b0bede7a44f6d"},{url:"/images/cloudmos-logo-light.png",revision:"a7423327e4280225e176da92c6176c28"},{url:"/images/cloudmos-logo-small.jpg",revision:"4b339b83e7dc396894537b83d794726d"},{url:"/images/cloudmos-logo.png",revision:"56d87e0230a0ad5dd745efd486a33a58"},{url:"/images/docker.png",revision:"fde0ed6a2add0ffabfbc5a7749fdfff2"},{url:"/images/keplr-logo.png",revision:"50397e4902a33a6045c0f23dfe5cb1bd"},{url:"/images/powered-by-akash-dark.svg",revision:"3ea920f030ede7926a02c2dc17e332c4"},{url:"/images/powered-by-akash.svg",revision:"24b2566094fafded6c325246fe84c2a9"},{url:"/images/ubuntu.png",revision:"c631b8fae270a618c1fe1c9d43097189"},{url:"/images/wallet-connect-logo.png",revision:"8379e4d4e7267b47a0b5b89807a4d8f8"},{url:"/manifest.json",revision:"c2dfab0494ea8373287634bcf6da2233"},{url:"/mstile-150x150.png",revision:"4639e24da644e14af4e4daba3dd7af08"},{url:"/robots.txt",revision:"c2bb774b8071c957d2b835beaa28a58b"},{url:"/safari-pinned-tab.svg",revision:"a0fde4130c84e0d723dde3ece4a14fa8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map

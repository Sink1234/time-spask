if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const o=e=>i(e,c),d={module:{uri:c},exports:r,require:o};a[c]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Arrow.svg",revision:"849f04ccd9f7ca040ccba3911e84ca2e"},{url:"/Icon.svg",revision:"2f3a95d16bcc6eeec5372cc4acf1262a"},{url:"/Zoom.svg",revision:"fbda6f69d5e6863f572627250b57e1b7"},{url:"/_next/static/R8kaY4WJJ_lMlAwlIKqQ-/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/R8kaY4WJJ_lMlAwlIKqQ-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/314-3ee7a0dae40889ef.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/468-7df3366b8f63cb8e.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/671-91def0dcc98cf8ff.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/792-152a7781214818ed.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/_not-found-8cc479007363ec41.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/group/%5Bname%5D/page-893c2c589a445e97.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/layout-e1e44fe61ac2c38a.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/main/group/%5Bname%5D/page-a500c026bcf92e29.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/main/group/page-8c9e337f1a32feaa.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/main/teacher/%5Bname%5D/page-f147e2b4a38e5aa3.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/main/teacher/page-d1239975f41c070f.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/page-a6e1d7b6e71b2c85.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/room/onGroup/page-fc109ef66a17c773.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/room/onTeacher/page-88bd00fb52a6105f.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/room/page-9cf6656680f03b92.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/roomDisplay/onGroup/layout-fc21b9c27ed98db7.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/roomDisplay/onGroup/page-9af33124918f11eb.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/roomDisplay/onTeacher/layout-7ff5e1a36dd4f004.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/roomDisplay/onTeacher/page-f945465e4d865a4f.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/app/teacher/%5Bname%5D/page-9628d5ac641386ed.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/fd9d1056-d2a2243171b76711.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/main-app-22cc2491d528a42e.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/main-b6b62eb08eab4ad5.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-97c741b40c3b1539.js",revision:"R8kaY4WJJ_lMlAwlIKqQ-"},{url:"/_next/static/css/31dbc4de24f7b3e5.css",revision:"31dbc4de24f7b3e5"},{url:"/_next/static/css/39d1ddb56e9e1cb2.css",revision:"39d1ddb56e9e1cb2"},{url:"/_next/static/css/45d7814a81754de2.css",revision:"45d7814a81754de2"},{url:"/_next/static/css/53150884895f0f50.css",revision:"53150884895f0f50"},{url:"/_next/static/css/5d7f5bc7eeed26fa.css",revision:"5d7f5bc7eeed26fa"},{url:"/_next/static/css/827ab87792d440e9.css",revision:"827ab87792d440e9"},{url:"/_next/static/css/96635dd80d6353ff.css",revision:"96635dd80d6353ff"},{url:"/_next/static/css/d40c21bea769d1f1.css",revision:"d40c21bea769d1f1"},{url:"/_next/static/css/e04e03a989e7adc8.css",revision:"e04e03a989e7adc8"},{url:"/_next/static/css/f5005ca8adec00c3.css",revision:"f5005ca8adec00c3"},{url:"/_next/static/media/10dadb2e82d03733-s.woff2",revision:"2958698901712bf73a0c16f179115b89"},{url:"/_next/static/media/200388358b398524-s.woff2",revision:"eb9d3f0449481d4e787a7b65d3eedb1c"},{url:"/_next/static/media/34900c74a84112b6-s.woff2",revision:"f3c87846c5600ec742091b9ec0b34032"},{url:"/_next/static/media/5f2068c3133468f5-s.woff2",revision:"9344ad7f978ec19841fbd34737f8f736"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/9bf67a161a796382-s.p.woff2",revision:"3feae49f8e8e69634acf23b2d9f2ef04"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/d9d7dcb31362a89d-s.p.otf",revision:"95247bf2aeba004ee9d218279ada9c8f"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/android/android-launchericon-144-144.png",revision:"d2563b46735581110428f86910065234"},{url:"/android/android-launchericon-192-192.png",revision:"c7b0b5c008f446c234061fe94ae6e172"},{url:"/android/android-launchericon-48-48.png",revision:"d45cec338f17373f9ab30276661cb508"},{url:"/android/android-launchericon-512-512.png",revision:"1f0d1fe8a8ccf8ba1cb483475edc0635"},{url:"/android/android-launchericon-72-72.png",revision:"2f05df2b3e0a9e010d590f6fe6e4f30f"},{url:"/android/android-launchericon-96-96.png",revision:"82fd5deacf219c6638aa1047f8d17970"},{url:"/google817ee191c44c20ca.html",revision:"1581a89cbd2c228202e10ad4b7438a2c"},{url:"/ios/100.png",revision:"f7b30ffb892aab28e3309f73d816ca85"},{url:"/ios/1024.png",revision:"bd9b1d917917cd413035809c87dbed7f"},{url:"/ios/114.png",revision:"0ea3484b4272e64c0d8e974a0f388b2e"},{url:"/ios/120.png",revision:"180881d66f14410a0460dc3c7cd8fbc6"},{url:"/ios/128.png",revision:"7d76938426374a38cdc89ae7becfef85"},{url:"/ios/144.png",revision:"d2563b46735581110428f86910065234"},{url:"/ios/152.png",revision:"6c995927bc7774913d6ef996551cc389"},{url:"/ios/16.png",revision:"607b6dd65630918b4cc9f166534be0c4"},{url:"/ios/167.png",revision:"26a60bcc9725412b6e876befb74425ec"},{url:"/ios/180.png",revision:"e69d848cd0aba2bb680835a102c1a199"},{url:"/ios/192.png",revision:"c7b0b5c008f446c234061fe94ae6e172"},{url:"/ios/20.png",revision:"de9d844f4575f2731957cfb268b440fd"},{url:"/ios/256.png",revision:"d4f6bb948e5a0d4bfbfbb6154cc774b2"},{url:"/ios/29.png",revision:"abb2e6cee2f4ca5c6f94ef18f48362ad"},{url:"/ios/32.png",revision:"80ed5e67e6e8e8003b0604f4e60bb292"},{url:"/ios/40.png",revision:"3d2c57d9bed6cc1d40bad9a855100739"},{url:"/ios/50.png",revision:"54193b86214fa24b85d1abb431cb55df"},{url:"/ios/512.png",revision:"1f0d1fe8a8ccf8ba1cb483475edc0635"},{url:"/ios/57.png",revision:"bfb340ffe028a2109cbbc6b9f77ef1c1"},{url:"/ios/58.png",revision:"041dd5c765fb638a81162bc75b50dfea"},{url:"/ios/60.png",revision:"f5bce4bbb163763f0ad55dca5140dfd3"},{url:"/ios/64.png",revision:"8578ac6a76de43eff9691467d8f5bdf0"},{url:"/ios/72.png",revision:"2f05df2b3e0a9e010d590f6fe6e4f30f"},{url:"/ios/76.png",revision:"bf017ddb179e34817ce0aa2b7a8d7bc3"},{url:"/ios/80.png",revision:"7d391dc9dba0c7d6fce6e76f5ea12787"},{url:"/ios/87.png",revision:"68361b4edb51fc98fcca70cf2b4c6d2e"},{url:"/manifest.json",revision:"2a5a5c107f711c906d86bf5e2cf936a9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/rs.xml",revision:"bf30ecbb9b8e34fcd19e39d8f7a4bd6c"},{url:"/rs202320 copy.xml",revision:"b6140785e2d8d45f4495b2edb229c539"},{url:"/rs202320.xml",revision:"5ab7f664f959b38896416c274a80a478"},{url:"/rs202355.xml",revision:"e65995aba7282332e8014d038ce6e8a8"},{url:"/rs202356.xml",revision:"8ec658498c4e00d5c4145e6b02038ea3"},{url:"/rs202453.xml",revision:"e65995aba7282332e8014d038ce6e8a8"},{url:"/rs202454.xml",revision:"8ec658498c4e00d5c4145e6b02038ea3"},{url:"/timegroup.docx",revision:"61c11ba046ef32b64b7cdc8c35f9a7a8"},{url:"/windows11/LargeTile.scale-100.png",revision:"5e66a1ab8f1ac893d7d93966a7d8dbfe"},{url:"/windows11/LargeTile.scale-125.png",revision:"b1aa0f553597e22b124dd3eee1c20a80"},{url:"/windows11/LargeTile.scale-150.png",revision:"cd832a4c939706b502a74a234d910892"},{url:"/windows11/LargeTile.scale-200.png",revision:"83398794579a3280f02cec6967ad6031"},{url:"/windows11/LargeTile.scale-400.png",revision:"be89dfc6acf9b7b9f0d7f532cf258874"},{url:"/windows11/SmallTile.scale-100.png",revision:"d41ca43e3a5dc471109a8d60269ece78"},{url:"/windows11/SmallTile.scale-125.png",revision:"0db4718be9613d2d9759852783d34634"},{url:"/windows11/SmallTile.scale-150.png",revision:"b23fb4aee03fe947a51d2df2b748942b"},{url:"/windows11/SmallTile.scale-200.png",revision:"0055f74893737db7465f33bbe24a0aa3"},{url:"/windows11/SmallTile.scale-400.png",revision:"c21e2f45c3fa6d378356d0ac0986cb88"},{url:"/windows11/SplashScreen.scale-100.png",revision:"fdac81ba27539c1170ef164a3ca7b0c6"},{url:"/windows11/SplashScreen.scale-125.png",revision:"f52968d15b6ef522b670a20dd8f9ec90"},{url:"/windows11/SplashScreen.scale-150.png",revision:"651ee9aaf724b0710ee87d2c79fa3d9c"},{url:"/windows11/SplashScreen.scale-200.png",revision:"760c105702f384e6d364dcd3582d37b6"},{url:"/windows11/SplashScreen.scale-400.png",revision:"8a19387f607cf2434de0bd666c1c3270"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"c45b1655f4496e457fa23ad7b2784658"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"06ca346438f87dbd47f97453f9603203"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"69352c0bff0890232fb07cd85934ad75"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"54eabccd5605f64b5e327e849a6cc738"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"60ca2bf8d384b8a8bbe3ffe7d605df7c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"24c069efe064c1d74cc4e75f894b4046"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ee3b026c2a5d4866a9c07096f571270a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"a25050a2da988fb3ac6bf2683f353d84"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"c5232b37cf03cbfe9dd0d0ed65d2ac0f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"c7b1c3f2f220a60b9c93299064cc8c55"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"91ad7ed7b190b3ea45a6ac22552e218c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"d127fae149f635e850312caf8672a139"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"2406f7f0cd74b48e3ac58bf519582c2e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"5b0d892a6679a5471d3eb863d6bd3607"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"537802c228494343c1bc9d682308a5f6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"6e807e3a0f305aaa2daab5c57e72c505"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"94aa0dc0fbfe1af3e6802d9575d6f889"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"da8432879f80ee1bb3076d3a9c9e979a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"50b0a70844bdf2ccf1a5d747412ab05c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c5581308f76220b6133c03e09acbb8d4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"24c069efe064c1d74cc4e75f894b4046"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ee3b026c2a5d4866a9c07096f571270a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"a25050a2da988fb3ac6bf2683f353d84"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"c5232b37cf03cbfe9dd0d0ed65d2ac0f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"c7b1c3f2f220a60b9c93299064cc8c55"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"91ad7ed7b190b3ea45a6ac22552e218c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"d127fae149f635e850312caf8672a139"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"2406f7f0cd74b48e3ac58bf519582c2e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"5b0d892a6679a5471d3eb863d6bd3607"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"537802c228494343c1bc9d682308a5f6"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"6e807e3a0f305aaa2daab5c57e72c505"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"94aa0dc0fbfe1af3e6802d9575d6f889"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"da8432879f80ee1bb3076d3a9c9e979a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"50b0a70844bdf2ccf1a5d747412ab05c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c5581308f76220b6133c03e09acbb8d4"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"5b0d892a6679a5471d3eb863d6bd3607"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"783697d138a1ea6fc3a300c5f9be030d"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"418706e65162c5d8be116fb3967986be"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"db7e7f6da585dcfd1254d6b86256ea9e"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"22523c7b20149f17f470fa6b19c7266a"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"24c069efe064c1d74cc4e75f894b4046"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"ee3b026c2a5d4866a9c07096f571270a"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"a25050a2da988fb3ac6bf2683f353d84"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"c5232b37cf03cbfe9dd0d0ed65d2ac0f"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"c7b1c3f2f220a60b9c93299064cc8c55"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"91ad7ed7b190b3ea45a6ac22552e218c"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"d127fae149f635e850312caf8672a139"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"2406f7f0cd74b48e3ac58bf519582c2e"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"5b0d892a6679a5471d3eb863d6bd3607"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"537802c228494343c1bc9d682308a5f6"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"6e807e3a0f305aaa2daab5c57e72c505"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"94aa0dc0fbfe1af3e6802d9575d6f889"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"da8432879f80ee1bb3076d3a9c9e979a"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"50b0a70844bdf2ccf1a5d747412ab05c"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"c5581308f76220b6133c03e09acbb8d4"},{url:"/windows11/StoreLogo.scale-100.png",revision:"58a6c526fcdf964cc1d58a7793fdc157"},{url:"/windows11/StoreLogo.scale-125.png",revision:"ad5fac8559d9380ed109b95efbd6b198"},{url:"/windows11/StoreLogo.scale-150.png",revision:"a84962e6381cce917556490981915bd4"},{url:"/windows11/StoreLogo.scale-200.png",revision:"2166f0b1708f777356e7d635303b3f2d"},{url:"/windows11/StoreLogo.scale-400.png",revision:"a1888beccb36cc5fcacbe97aa10918ed"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"7d1cdc1866a22b784eb4fb0795bcd882"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"67e2f72d097de85b3959af69c9833338"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"8d7591192c1d90687b1a1dac450348db"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"fdac81ba27539c1170ef164a3ca7b0c6"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"760c105702f384e6d364dcd3582d37b6"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

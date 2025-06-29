'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9462cc69d7d8d922a97092e4766b4d3d",
".git/config": "3ec0f1658025be75def600a93187d7a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d2d6bb9d064823790a36be6a6df88d73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3af41db688ed9dc7a774bf2eac51da43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21b44c573389d6e6702ad7cc9ccea8cd",
".git/logs/refs/heads/main": "9f241324795c2adcbee64380b11b6305",
".git/logs/refs/remotes/origin/main": "a44e4f81257032fb191f6fa620aef351",
".git/objects/00/54b7475b24bb7e4c03fe40b6c7626bbfd0d67e": "32760fdf2462bca63f163904d330340a",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/08/f475541eb424aaf33906de167ce151c9a5e9a2": "8ec7b311cc9874e9045def6d69e9a317",
".git/objects/0b/0dac507cd9647af22c4d9766e7c0eaf5218622": "89efeda721c6c127b05bc2119074a16a",
".git/objects/0c/1c1658f6985ffc337eee89974c867f637e5e6a": "c7287bcdbd48b0a749966c7423610ac9",
".git/objects/0d/7c6d700b1eb08262fd8a2373bec2447360b431": "52011db6ea641ad0cfa488be6d6d1f50",
".git/objects/0f/820576a8e94ea5e564122c954555d36856ca3c": "326b2d04921ad2cb9c5ac648572dd39c",
".git/objects/0f/e802651934e152a44736d53bd5e215ee2bebd0": "be711b125d67f96d58570692cb238f3b",
".git/objects/14/231c264f37fe61cb5a31d8d6520a2609900121": "287a231a4d51f4ed59e67e34a89a8390",
".git/objects/16/84444838f228a325d21178d89cec5f7e6acef6": "1db59dfab0ee2f6101ecf3ff4f3283fa",
".git/objects/19/6cdb40bcda99fe2b44411c4bda62d3f7d69c76": "eef22e4df16483d03cbb0d8e62dd7d2f",
".git/objects/1b/052cfd7b9716db1fc4c5db8f664e11e30b32bf": "c09b5f848f288b05178a8eebf8cddff9",
".git/objects/20/ef2b153cd5354d022792360953812aa431b2d8": "dbe1e303105f41ab204c5a82d25f69e3",
".git/objects/21/696bace0376cd246d7fbe87a1b24274ef9661c": "cb4c311148bad96ea199501c9173c567",
".git/objects/23/113dc3487d51ac5ae70711d49c238907c400ae": "b99156139c191a34d90f4efcbefaa706",
".git/objects/28/94652599057f572841df7fabcdb1ce7954d0ad": "ff66a1ab795cace0d58ad349532ad2c9",
".git/objects/2a/85a52c8072b74749cebdc5853b940c8aa683d1": "7dfb312b9825b629034c86ed190cd467",
".git/objects/2d/319308fc8c59645cb9fcc7e03a51f4445e7b35": "82e909625593874d87b37565d211418c",
".git/objects/2d/7322d35ba6659bfc96ed758cc820a802f44d99": "71ee84e8e60730807fe7531b6ada7679",
".git/objects/2e/9ed7f0af6b7c3a132ee0c055f682eeebc716db": "a94a9e069cbf58a232f5a1102f84a2d1",
".git/objects/2f/f8f5bf02e0e161009672382ac0222d5c228666": "6e4c8887d01953eb72869673b85cf18d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/90c97d9f3cd175d664d8a58ef11d868a2eb99e": "b9f1715fc527cdca714de7ef0ab0c647",
".git/objects/46/68568fa7d4018a67a7fc3abda777e4c07a64ee": "a6df00d51da247ce1a9e84d834f0cecb",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/49/1c6ec57985724e65942c2c00093a56e1df2bd8": "2f0b2e8ccf479a6bf9b22a8c9bb16240",
".git/objects/4c/77931bc72b778bcaffbbd77234433b4b8a6521": "b332d2c7ea9b7eb4d4ef7d2b1b12bf0e",
".git/objects/4d/2900952b4aa6710ea202cc806098cfd4354859": "582a7118330b312c16cc303e463dfca8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/d63521dde8e2222a39de640cf084fe357e6eea": "ab23319528ccd7af7be1adbdb67a034c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/b261f83ebba0f9cbbcc45e1342ae3ede83dee7": "b369ee3d27505fe3d27973b391d4bc95",
".git/objects/59/225514d8a1a1eaaa2f361888d748795aeb67c7": "cab8c613489c489189e85fb8506ac9e6",
".git/objects/5b/069ffef56450281ca954c19403fe24d46cc96a": "fc23a1e0a9f999efb0956d5ef691e512",
".git/objects/5b/b3fef354bfcef1ac8489271c2a3f5526002dca": "3382013c781de23c3464440eab12f724",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/a1f73c4d7fdff87a1b7464b0bc8e89a2b416a5": "f82788714f5fb151befd4da15c376152",
".git/objects/67/4b40bbb16621c5260e5a5901141b0eda475239": "8475c1e26e2e4247f4a0368572e61f05",
".git/objects/68/e8fbea964bef6191502a3c57e889ed4bfdb499": "4cc0a1e16ff01328950af9ceade641c1",
".git/objects/68/eb0a395192bc0eb4c09e2f39c99ee81643d1f3": "14ce3c0b7e964dbc1dfa2f991b9e74a0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9997b12f57c667f65e6f1709f7ed403ede6c65": "d5ba13eb4f148e6e022aa0eeb42f3c68",
".git/objects/73/b1f5bbc829c382bd9f506443be56703518a845": "02a954c412a7eea77989a31718520f22",
".git/objects/75/c597d89c1ff193a2db252d38c6182010392a08": "2a37f136bc0281badf01e7df029d6228",
".git/objects/78/24771bf74bc95c88fd4abfe985238d2d2bec0c": "b2f87ed5b7368e4f4077cd9ca6012394",
".git/objects/79/fa7452be91b032667a567494aa1adf66c1d059": "849e9f1d8cf33ee29f14aa62748a4005",
".git/objects/82/07d38386e105306c036a1e84401000f98ee191": "9a3a62dd01459c4036eb0365a59cde3a",
".git/objects/82/223b4fdaba989c3676208345703aab76dde992": "659a585618a9c9eaa52f1689c6dc327c",
".git/objects/84/e4d2f94a84252f835eba73a55f28cd38c318e3": "296f6468ece1d09fe24c688f5ce24c41",
".git/objects/85/dcb8e8d1fd2825ff5c8128a3f0241a6ea527ed": "03e5d98d4bba4d65925c63eec855a131",
".git/objects/88/669163b1ce0477bbc8dbf8e240af7cdae1877a": "371d20268c33e9e3c76a571f44a7ca43",
".git/objects/89/469553d83a77619bde11e15f04347a4e3b0edf": "37303e7110de4286a47e9ea132d333b9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/a13da4d68fc6198eb5ceb28b5ad148558685ec": "2a29f6bd04bdd1867832fcbb3c1286c2",
".git/objects/8d/bcdb39209f4450788e0efbb341e64060803e5f": "db144e354090383147b803bc1ebdbfe1",
".git/objects/8e/d18032757876fc74664b4baeca221de7c8d137": "6504d294cb31cf3a3a9718c69f684cb3",
".git/objects/8f/15494fdeefa1e51afdd211349d20a123912701": "8d2d47afee962fc5b52cec3003dd5777",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/9a/e5e07acc8ca3495affdba4848e42b1330faa17": "ac3d577d8db8bf60b0e3a94106a82005",
".git/objects/9d/675ea8df0a9980b99ee456da4cceb03b0f9677": "bfdfa1472a73619c019b62c719032455",
".git/objects/9d/8949203c188a76f8785a3b00581538ce8dd897": "a2b0dc5af514cd9ee7f26e32d06ee17c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/7255201b66c9786fbac1c96e9966adf7aed828": "9760a719bed418d4d304bce5ad42a15b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/303e3cdd354d54fd723e1c84233768fe099b13": "17246bfa2ce4d7de275df5a401ec8b34",
".git/objects/af/e527f5b5be0bde611d0545577a9965cc060d01": "49ead8b2f2a0ca9d26b3db815f83460f",
".git/objects/ba/b9311ae12deaab068fdbfc3ccf2daa2fa085b0": "bb82dfdc7dd46b77698425e2d1450f28",
".git/objects/bb/7108f53c25c2f8e16051568110c7563ef9f9ad": "f987bf0b2805a5240f21163dd1c5d063",
".git/objects/bb/751feeb0ad5a8e0ab55a7c40b640d13b16bb00": "aa8ea88dcb909335f0488d7a7e2ffee2",
".git/objects/bc/0b39c156dca1155b2d2b6066f6c070b4ee1262": "f1d7744d4bb3796558051ed9f8c1330e",
".git/objects/bc/d201b1078749f3b6d780a949400ccd66c5e088": "5a83a603678b16fa1e850c8b11be84b4",
".git/objects/be/2548253d3f9de8e5700ca0292e1121a6fb32e1": "5cbd9fb02551831bb27ed68aff776de6",
".git/objects/be/999cbecd1492f19f767147060c3e7eed3e2c8c": "b9817f9b2a62b7c69b2cdc7917cdb267",
".git/objects/bf/24ee6bbcb15a153f988210a516762460cbc17b": "2b1af4d76cd0ba606c3e9c76f2b76152",
".git/objects/c0/344f999ec269dfa86c0ebf8536bae5c87b9652": "2436e10c3a69a781fb3c67e2d4266c70",
".git/objects/c5/a0a79315e4c7fc13f260328cb039bd3197cf62": "8302c0de23b14a0e0321c2227eadb1d8",
".git/objects/c6/6a86d3cb965aaa8a8ccc7613388d6687a6d378": "640d43a2f553a3013b115494ec1b6b18",
".git/objects/c8/578439b09425176994c0860060196c1d74cf01": "18f2c431263084bd3e0618948ceb8699",
".git/objects/c9/6d6f562314f0b4e2010b42b362cff3610c4ca9": "a9651183117e9415eb417cad3400bd93",
".git/objects/cc/f31b918d8094e7f4c1eda9c7d253987f2731bd": "20a5867704a84f7ecb7cb0f3f42641ec",
".git/objects/cd/13f361497ef7e2499924f5d9e2fd7dba3dda25": "daac3691ee8f591384182dbc02a72af9",
".git/objects/cf/caeb60d69bea6c536aed7fd0d1969e2066c671": "cda741e2711da79d07803726268968c8",
".git/objects/d1/19f91f432fa3fba38329e7748e057b61ea2a73": "8871ea6b25b21fdaa3976c27590e1873",
".git/objects/d1/460256912e523a4005ee2fb548f90f5704a89b": "98f5afc707f84a88044a5c3ff605d89b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0ac0668f7bbf8a7557564376b14b71a363eefa": "c57fdaa51b7c863baa887798b1d828c3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/a201fa6eebd89c54c2ca155df4478e92e9c5b2": "e6cd894ab5d2b623078c16170ae3cda0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/4cebb4ead9e241af26fa5cf40a7d65f8e8248c": "859ebf51ab3ba96038bfd4e8598f514d",
".git/objects/d9/877537d5182805bd30c6fd0b0eaa9c5e87be8b": "12d763deb013c16ed8245bbea246f62d",
".git/objects/d9/f08ef3d66e78747a7d819e735a11089414b929": "c1a4147f68003f92e8b7bf38dd790458",
".git/objects/df/b2ffee36242f16c701431ca446156734ec3f5b": "0aae261199bf42516eb5b03908278ddc",
".git/objects/df/bcfe4f25b6754e907e8e51c87c386baa377d1d": "64c9fdbbfce14cea20331b6a91b0e50c",
".git/objects/df/d594538164a0b75953752a4160bd936f6cce81": "1522dc5fc080309203a3b0d44b84a7f6",
".git/objects/e0/fb5cee42f6b77014846056c25903b23d33a1bd": "7892da9b7f754936cb7a49f36517b7a6",
".git/objects/e8/6c4559cfc4832c959b91ae1cbeea91bf4b5df0": "cc736976b98fb2ce1062e01bac0d651d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/966b6c52d7f390e0133f9748f0db4c868ebd45": "7134ce757978b6036ced83f5fdb84ca8",
".git/objects/ed/d1c0e6946dfa9cc9961dfbcbb71669a6521058": "f7bbacee87b87216465d56b90f1e6ca3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/f96edad9439ad97c3604ee49b70bb4f4e129db": "f48d446238310c0657ba15d94e775983",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/9177dec6c4923f16c8122871e2372d31a49067": "ade66f8f4ca0548a6c8a0fccb38d184a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/62185539fb2db11c7e5064302a3fd44d6bb7b0": "bd48f22c28cb3aba32f22f5f3b8215a0",
".git/objects/fe/bd8ab99222923a8abbc74bea22c9bf51136134": "19ba978d470bf2e6013602cc2aca6bc2",
".git/ORIG_HEAD": "f320c1b0993f58f624aeb9d40eb69c07",
".git/refs/heads/main": "f320c1b0993f58f624aeb9d40eb69c07",
".git/refs/remotes/origin/main": "f320c1b0993f58f624aeb9d40eb69c07",
"assets/AssetManifest.bin": "c7e68e66693dc4a720ee492fbe625a6a",
"assets/AssetManifest.bin.json": "094550a11c4c581eae2cfa698e0b10f9",
"assets/AssetManifest.json": "9e0b659d6af5af9da2c1c833350c30bd",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "b9ca03e9742434a8a843b6402995f1c8",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "432be4a65a340e38f31651576ec58487",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e1d9d4d7fc9ff0f24b901292a900ef66",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "a6cfec0cb3e946398cffcd4fa7ac61d1",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "62a51d6c865b832053fc7f9066b0935c",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d76ccb1aa5bf679b387f48101058933a",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "8c75203c397f88159acb95fc09268a62",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "7e3a130b0433696f4d2f570122f5790d",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "06582556533e597755a368f022db5f5a",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "29cc97af5403e3251cbb586727938473",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "bafbc0b1fb65a719824724dc735ea88c",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "f03365b9383f96610bb69c2f92d7cb75",
"assets/assets/icons/dark-theme.svg": "6af5123afdfaa18346438e8ac63c38b3",
"assets/assets/icons/email.svg": "d92a2362766b5c020ff5ec7fa3330ea2",
"assets/assets/icons/facebook.svg": "d6d4ff5abcd1d7b02a0b1a353d84070c",
"assets/assets/icons/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/icons/google.svg": "321f39a5b0f72e3277504d10de951b27",
"assets/assets/icons/linkedin.svg": "d9275f99a5109c6baa6a46cef6b99dbb",
"assets/assets/icons/location-pin.svg": "9c11827a256e7efbd73679ca36cb8441",
"assets/assets/icons/mobile.svg": "24b836bfd6603f8ef2c2df70e2ca6a4a",
"assets/assets/images/Android.png": "ff7628665bdaf630c21aab7375fd264c",
"assets/assets/images/azka-foods.png": "d9c255c6ea196b375ce54accfda6d134",
"assets/assets/images/backend.png": "1b5a72e6069881d04dee621cfe7365ac",
"assets/assets/images/coding.png": "271b7dcf5e822622566f2c13fe060bd8",
"assets/assets/images/crm.png": "c692ba531a587d6f0aca08402c577325",
"assets/assets/images/customs.png": "1e261e6c8cd770f3b38d0d54d84c4781",
"assets/assets/images/Dart.png": "3d4712fbcc4ccae798a6a212e78d686a",
"assets/assets/images/developer.png": "7b7bdad96e47c9dd8fdc6c324fb78ad9",
"assets/assets/images/fan-alfaisal.png": "8e019973d84bff5499063f52c00c461b",
"assets/assets/images/Firebase.png": "a437fec0dc5342244c27303a05c634ae",
"assets/assets/images/Flutter.png": "11d934b216851323c314f435701ff6d1",
"assets/assets/images/front-development.png": "c722694f1376ae737ca5e5efae146eb2",
"assets/assets/images/gift-merchant.png": "a9a7cf45162ac1de291900566a426a3e",
"assets/assets/images/gift.png": "bc8716b7ad1015380257189b8bbe7c62",
"assets/assets/images/github-actions.png": "9be43c05d9f4a41cc8628d096cc9c100",
"assets/assets/images/GitHub.png": "032fd53e63e0e3e506558bf2456a48ce",
"assets/assets/images/googan-real-estate.png": "c6e6ecc8d4abbd23cdbf76293a55a83c",
"assets/assets/images/hr.png": "f903ab7a720b41d4a02aa1e6aa4e9631",
"assets/assets/images/Jira.png": "7baead2b92045c3bdba8a0b11d420782",
"assets/assets/images/kian.png": "0b0494181b2566c689ec1ad21f1db400",
"assets/assets/images/Kotlin.png": "db1f9416f8a65ef37a517e812d836e8e",
"assets/assets/images/nafethly.png": "1ce06462443962c7ead54432e9b3c978",
"assets/assets/images/Postman.png": "5972522c58523d1ac196ae2edc797d68",
"assets/assets/images/programmer.png": "21755d56d2bf7f8e329086f03b26382d",
"assets/assets/images/snaydi.png": "4c8d1e00422999767d95957d2083a926",
"assets/assets/images/state-management.png": "3b8d17807f6866298b177b2c033a6817",
"assets/assets/images/Swift.png": "b143441a65536d2f75f3f3aae9361580",
"assets/assets/images/telecommunications.png": "69d303d7742bc1d427e098b77e5d0a44",
"assets/assets/images/wanna.png": "a0d2e263b75b2c028531a0a9af718377",
"assets/assets/images/web-programming.png": "a8a75d5811a3ae43b5dd20516a278612",
"assets/FontManifest.json": "dd1e0123fc3aa063e0df72152f8eeebb",
"assets/fonts/MaterialIcons-Regular.otf": "ea5d9990ce7a2fab3e7179fe5ab558bb",
"assets/NOTICES": "3acd38e4daefffcc833dcda3a75ccf48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "6800e0ed315987021359e8842a29c53e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a3289dc1671b0879d583f60479e1aec5",
"index.html": "5b14cbf7d51f73a4eb390a8059af38a1",
"/": "5b14cbf7d51f73a4eb390a8059af38a1",
"main.dart.js": "14a6d79ef4a189310b482d7660fa3ca7",
"manifest.json": "5ef8bb49a28d5ba6d496694373d89459",
"version.json": "349d1504901de71df633115e1d4bd70b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

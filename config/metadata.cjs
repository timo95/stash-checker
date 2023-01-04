const {
  author,
  repository,
  version,
  description,
} = require("../package.json");

module.exports = {
  name: {
    "": "Stash Checker",
    en: "Stash Checker",
  },
  description: description,
  // namespace: "https://trim21.me/",
  version: version,
  author: author,
  source: repository.url,
  // 'license': 'MIT',
  match: [
      "*://www.iwara.tv/*",
      "*://ecchi.iwara.tv/*",
      "*://oreno3d.com/*",
      "*://erommdtube.com/*",
      "*://www.animecharactersdatabase.com/*",
      "*://www.iafd.com/*",
      "*://www.minnano-av.com/*",
      "*://xslist.org/*",
      "*://www.javlibrary.com/*"
  ],
  require: [
  ],
  grant: ["GM.xmlHttpRequest", "GM.getValue", "GM.setValue"],
  connect: ["stash.tiemada.de", "stash.rock-5b.lan"],
  "run-at": "document-end",
};

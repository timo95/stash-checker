/**
 * This is an empty javascript file for webpack to generate a development UserScript without real code.
 * So we could make UserScript manager load script file from local file path.
 * See webpack.config.dev.js for more details.
 */
(async function () {
  GM.xmlHttpRequest({
    url: LOCALHOST_URL,
    onload: async (response) => {
      const text = response.responseText;
      const storageData = await GM.getValue("CachedScriptKey");

      if (text !== storageData) {
        console.log("reload!");

        await GM.setValue("CachedScriptKey", text);
        location.reload();
      } else {
        console.log("NO reload!");
      }
    }
  });
})();

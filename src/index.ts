import "./style/main.scss";
import {initEndpointSettings} from "./settings/endpoints";
import {initSettingsWindow} from "./settings/settings";
import {initMenu} from "./settings/menu";
import {initGeneralSettings} from "./settings/general";
import {runStashChecker} from "./stashChecker";
import {initStatistics} from "./settings/statistics";
import {initDisplaySettings} from "./settings/display";
import {setTheme} from "./style/theme";

(async function () {
    initSettingsWindow();
    initStatistics();
    initGeneralSettings();
    initDisplaySettings();

    setTheme();

    await initEndpointSettings();
    await initMenu();

    await runStashChecker();
})();
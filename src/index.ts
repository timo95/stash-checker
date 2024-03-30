import "./style/main.scss";
import {initEndpointSettings} from "./settings/endpoints";
import {initTooltip} from "./tooltip/tooltipElement";
import {initSettingsWindow} from "./settings/settings";
import {initMenu} from "./settings/menu";
import {initGeneralSettings} from "./settings/general";
import {runStashChecker} from "./stashChecker";
import {initStatistics} from "./settings/statistics";

(async function () {
    await initTooltip();
    initSettingsWindow();
    initStatistics();
    initGeneralSettings();
    await initEndpointSettings();
    await initMenu();

    runStashChecker();
})();

import "./style/main_important.scss";
import "./util/booleanUtils";
import "./util/nodeUtils";
import "./util/stringUtils";
import {initEndpointSettings} from "./settings/endpoints";
import {initSettingsWindow} from "./settings/settings";
import {initMenu} from "./settings/menu";
import {initGeneralSettings} from "./settings/general";
import {runStashChecker} from "./stashChecker";
import {initStatistics} from "./settings/statistics";
import {initDisplaySettings} from "./settings/display";
import {setTheme} from "./style/theme";
import {initTooltip} from "./tooltip/tooltipElement";

(async function () {
    await initTooltip();
    initSettingsWindow();
    initStatistics();
    initGeneralSettings();
    initDisplaySettings();

    setTheme();

    await initEndpointSettings();
    await initMenu();

    await runStashChecker();
})();

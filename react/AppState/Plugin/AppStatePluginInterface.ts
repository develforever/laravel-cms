import React from "react";
import { AppState } from "@app/Types/AppTypes";
import { Subject } from "rxjs";

interface AppStatePluginInterface {

    initialize(plugin:any, stateSubject:Subject<{}>): void;

}

export type { AppStatePluginInterface };
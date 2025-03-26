"use client";

import { startReactDsfr } from "@codegouvfr/react-dsfr/next-appdir";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";

declare module "@codegouvfr/react-dsfr/next-appdir" {
    interface RegisterLink { 
        Link: typeof Link;
    }
}

startReactDsfr({ 
	defaultColorScheme
});

export function StartDsfr(){
	return null;
}

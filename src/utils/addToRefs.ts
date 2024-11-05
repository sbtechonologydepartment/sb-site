import { MutableRefObject } from "react";

export function addToListOfRefs<T extends HTMLElement>(el: T | null, refArray: MutableRefObject<T[]>): void {
    if (el && !refArray.current.includes(el)) {
        refArray.current.push(el);
    }
}
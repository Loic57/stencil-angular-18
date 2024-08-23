import type { Components, JSX } from "../dist/types/components";

interface Component2 extends Components.Component2, HTMLElement {}
export const Component2: {
    prototype: Component2;
    new (): Component2;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

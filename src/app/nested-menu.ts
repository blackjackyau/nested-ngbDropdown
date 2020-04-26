export interface NestedMenu {
    root: NestedMenuNode[];
}

export interface NestedMenuNode {
    label: string;
    link?: string;
    children?: NestedMenuNode[];
}
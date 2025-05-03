export interface DataItem {
    id: number;
    title: string;
    body: string;
    status: "published" | "draft" | "block";
    "top-rate": boolean;
}

export type PostStatusType = "published" | "draft" | "block" | "all";
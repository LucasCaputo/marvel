export interface CharacterRequest {
    name?: string;
    nameStartsWith?: string;
    modifiedSince?: Date;
    comics?: number;
    series?: number;
    events?: number;
    stories?: number;
    orderBy?: string;
    limit?: number;
    offset?: number;
}

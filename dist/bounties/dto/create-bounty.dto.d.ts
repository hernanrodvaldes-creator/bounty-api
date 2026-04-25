export declare enum BountyStatus {
    WANTED = "Wanted",
    CAPTURED = "Captured"
}
export declare class CreateBountyDto {
    cantidadBellys: number;
    estado: BountyStatus;
    pirata: string;
}

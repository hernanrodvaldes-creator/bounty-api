import { Document, Types } from 'mongoose';
import { Pirate } from '../../pirates/schemas/pirate.schema';
export type BountyStatus = 'Wanted' | 'Captured';
export declare class Bounty extends Document {
    cantidadBellys: number;
    estado: BountyStatus;
    pirata: Types.ObjectId | Pirate;
}
export declare const BountySchema: import("mongoose").Schema<Bounty, import("mongoose").Model<Bounty, any, any, any, any, any, Bounty>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Bounty, Document<unknown, {}, Bounty, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Bounty & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Bounty, Document<unknown, {}, Bounty, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Bounty & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cantidadBellys?: import("mongoose").SchemaDefinitionProperty<number, Bounty, Document<unknown, {}, Bounty, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Bounty & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    estado?: import("mongoose").SchemaDefinitionProperty<BountyStatus, Bounty, Document<unknown, {}, Bounty, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Bounty & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pirata?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | Pirate, Bounty, Document<unknown, {}, Bounty, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Bounty & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Bounty>;

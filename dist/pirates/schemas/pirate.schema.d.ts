import { Document } from 'mongoose';
export declare class Pirate extends Document {
    nombre: string;
    tripulacion: string;
    tieneFrutaDelDiablo: boolean;
}
export declare const PirateSchema: import("mongoose").Schema<Pirate, import("mongoose").Model<Pirate, any, any, any, any, any, Pirate>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pirate, Document<unknown, {}, Pirate, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Pirate & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Pirate, Document<unknown, {}, Pirate, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pirate & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nombre?: import("mongoose").SchemaDefinitionProperty<string, Pirate, Document<unknown, {}, Pirate, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pirate & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tripulacion?: import("mongoose").SchemaDefinitionProperty<string, Pirate, Document<unknown, {}, Pirate, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pirate & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tieneFrutaDelDiablo?: import("mongoose").SchemaDefinitionProperty<boolean, Pirate, Document<unknown, {}, Pirate, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pirate & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Pirate>;

import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
import { AminoOptions } from '../types';
export interface ToAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
    options: AminoOptions;
}
export declare const toAminoParseField: ({ context, field, currentProtoPath, scope: previousScope, nested, options }: ToAminoParseField) => any;
interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const toAminoJsonMethod: ({ context, proto, options }: toAminoJSON) => t.ArrowFunctionExpression;
export {};
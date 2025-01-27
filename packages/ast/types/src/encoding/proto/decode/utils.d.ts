import * as t from '@babel/types';
import { DecodeMethod } from './index';
export declare const decode: {
    string(args: DecodeMethod): t.SwitchCase;
    bool(args: DecodeMethod): t.SwitchCase;
    double(args: DecodeMethod): t.SwitchCase;
    float(args: DecodeMethod): t.SwitchCase;
    int32(args: DecodeMethod): t.SwitchCase;
    sint32(args: DecodeMethod): t.SwitchCase;
    uint32(args: DecodeMethod): t.SwitchCase;
    fixed32(args: DecodeMethod): t.SwitchCase;
    sfixed32(args: DecodeMethod): t.SwitchCase;
    int64(args: DecodeMethod): t.SwitchCase;
    sint64(args: DecodeMethod): t.SwitchCase;
    uint64(args: DecodeMethod): t.SwitchCase;
    fixed64(args: DecodeMethod): t.SwitchCase;
    sfixed64(args: DecodeMethod): t.SwitchCase;
    duration(args: DecodeMethod): t.SwitchCase;
    timestamp(args: DecodeMethod): t.SwitchCase;
    type(args: DecodeMethod): t.SwitchCase;
    enum(args: DecodeMethod): t.SwitchCase;
    bytes(args: DecodeMethod): t.SwitchCase;
    keyHash(args: DecodeMethod): t.SwitchCase;
    tagDelimArray(args: DecodeMethod, expr: t.Expression): t.SwitchCase;
    array(args: DecodeMethod, expr: t.Expression): t.SwitchCase;
    typeArray(args: DecodeMethod): t.SwitchCase;
};
export declare const baseTypes: {
    string(args: DecodeMethod): t.CallExpression;
    bool(args: DecodeMethod): t.CallExpression;
    double(args: DecodeMethod): t.CallExpression;
    float(args: DecodeMethod): t.CallExpression;
    int32(args: DecodeMethod): t.CallExpression;
    sint32(args: DecodeMethod): t.CallExpression;
    uint32(args: DecodeMethod): t.CallExpression;
    fixed32(args: DecodeMethod): t.CallExpression;
    sfixed32(args: DecodeMethod): t.CallExpression;
    int64(args: DecodeMethod): t.TSAsExpression;
    sint64(args: DecodeMethod): t.TSAsExpression;
    uint64(args: DecodeMethod): t.TSAsExpression;
    fixed64(args: DecodeMethod): t.TSAsExpression;
    sfixed64(args: DecodeMethod): t.TSAsExpression;
    type(args: DecodeMethod): t.CallExpression;
    enum(args: DecodeMethod): t.TSAsExpression;
    bytes(args: DecodeMethod): t.CallExpression;
    duration(args: DecodeMethod): t.CallExpression;
    timestamp(args: DecodeMethod): t.CallExpression;
    keyHash(args: DecodeMethod): (t.IfStatement | t.VariableDeclaration)[];
};
export declare const switchOnTag: (num: number, prop: string, expr: t.Expression) => t.SwitchCase;
export declare const switchOnTagTakesArray: (num: number, prop: string, expr: t.Statement[]) => t.SwitchCase;
export declare const switchTypeArray: (num: number, prop: string, name: string) => t.SwitchCase;
export declare const switchTagDelimArray: (num: number, prop: string, expr: t.Expression) => t.SwitchCase;
export declare const switchArray: (num: number, prop: string, expr: t.Expression) => t.SwitchCase;

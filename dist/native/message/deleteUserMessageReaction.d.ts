import { TextBasedChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: TextBasedChannel) => any;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Message;
    pointer: number;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    pointer: number;
    type: ArgType.Reaction;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.User;
}], true>;
export default _default;
//# sourceMappingURL=deleteUserMessageReaction.d.ts.map
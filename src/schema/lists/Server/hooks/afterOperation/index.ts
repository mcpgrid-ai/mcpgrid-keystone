import { merge } from "lodash";
import { create } from "./create";
import { remove } from "./remove";
import { update } from "./update";

const { afterOperation } = merge({}, create, remove, update);

export { afterOperation };

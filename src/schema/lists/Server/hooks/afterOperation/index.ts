import { merge } from "lodash";
import { create } from "./create";
import { remove } from "./remove";

const { afterOperation } = merge({}, create, remove);

export { afterOperation };

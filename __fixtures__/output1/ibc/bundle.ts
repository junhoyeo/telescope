import * as _231 from "./applications/transfer/v1/genesis";
import * as _232 from "./applications/transfer/v1/query";
import * as _233 from "./applications/transfer/v1/transfer";
import * as _234 from "./applications/transfer/v1/tx";
import * as _235 from "./applications/transfer/v2/packet";
import * as _236 from "./core/channel/v1/channel";
import * as _237 from "./core/channel/v1/genesis";
import * as _238 from "./core/channel/v1/query";
import * as _239 from "./core/channel/v1/tx";
import * as _240 from "./core/client/v1/client";
import * as _241 from "./core/client/v1/genesis";
import * as _242 from "./core/client/v1/query";
import * as _243 from "./core/client/v1/tx";
import * as _244 from "./core/commitment/v1/commitment";
import * as _245 from "./core/connection/v1/connection";
import * as _246 from "./core/connection/v1/genesis";
import * as _247 from "./core/connection/v1/query";
import * as _248 from "./core/connection/v1/tx";
import * as _249 from "./core/port/v1/query";
import * as _250 from "./core/types/v1/genesis";
import * as _251 from "./lightclients/localhost/v1/localhost";
import * as _252 from "./lightclients/solomachine/v1/solomachine";
import * as _253 from "./lightclients/solomachine/v2/solomachine";
import * as _254 from "./lightclients/tendermint/v1/tendermint";
import * as _396 from "./applications/transfer/v1/tx.amino";
import * as _397 from "./core/channel/v1/tx.amino";
import * as _398 from "./core/client/v1/tx.amino";
import * as _399 from "./core/connection/v1/tx.amino";
import * as _400 from "./applications/transfer/v1/tx.registry";
import * as _401 from "./core/channel/v1/tx.registry";
import * as _402 from "./core/client/v1/tx.registry";
import * as _403 from "./core/connection/v1/tx.registry";
import * as _404 from "./applications/transfer/v1/query.lcd";
import * as _405 from "./core/channel/v1/query.lcd";
import * as _406 from "./core/client/v1/query.lcd";
import * as _407 from "./core/connection/v1/query.lcd";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._231,
        ..._232,
        ..._233,
        ..._234,
        ..._396,
        ..._400,
        ..._404
      };
      export const v2 = { ..._235
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._236,
        ..._237,
        ..._238,
        ..._239,
        ..._397,
        ..._401,
        ..._405
      };
    }
    export namespace client {
      export const v1 = { ..._240,
        ..._241,
        ..._242,
        ..._243,
        ..._398,
        ..._402,
        ..._406
      };
    }
    export namespace commitment {
      export const v1 = { ..._244
      };
    }
    export namespace connection {
      export const v1 = { ..._245,
        ..._246,
        ..._247,
        ..._248,
        ..._399,
        ..._403,
        ..._407
      };
    }
    export namespace port {
      export const v1 = { ..._249
      };
    }
    export namespace types {
      export const v1 = { ..._250
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._251
      };
    }
    export namespace solomachine {
      export const v1 = { ..._252
      };
      export const v2 = { ..._253
      };
    }
    export namespace tendermint {
      export const v1 = { ..._254
      };
    }
  }
}
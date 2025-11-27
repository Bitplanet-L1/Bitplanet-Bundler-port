import { createMethodHandler } from "../createMethodHandler"
import { zdGetUserOperationGasPriceSchema } from "@alto/types"
import { pimlicoGetUserOperationGasPriceHandler } from "./pimlico_getUserOperationGasPrice"

export const zdGetUserOperationGasPriceHandler = createMethodHandler({
    method: "zd_getUserOperationGasPrice",
    schema: zdGetUserOperationGasPriceSchema,
    handler: pimlicoGetUserOperationGasPriceHandler.handler
})

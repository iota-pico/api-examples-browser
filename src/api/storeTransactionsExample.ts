import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import { PAL } from "@iota-pico/pal-browser/dist/pal";
import * as networkConfig from "../networkConfig";

/**
 * Example of API storeTransactions.
 */
export async function storeTransactionsExample(trytes: string[]): Promise<void> {
    await PAL.initialize();

    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing broadcastTransactions on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        await apiClient.storeTransactions({ trytes });
        console.log("<== Success");
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}

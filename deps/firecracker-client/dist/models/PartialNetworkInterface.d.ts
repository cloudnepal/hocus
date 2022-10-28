/**
 * Firecracker API
 * RESTful public-facing API. The API is accessible through HTTP calls on specific URLs carrying JSON modeled data. The transport medium is a Unix Domain Socket.
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: compute-capsule@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RateLimiter } from './RateLimiter';
/**
 * Defines a partial network interface structure, used to update the rate limiters for that interface, after microvm start.
 * @export
 * @interface PartialNetworkInterface
 */
export interface PartialNetworkInterface {
    /**
     *
     * @type {string}
     * @memberof PartialNetworkInterface
     */
    ifaceId: string;
    /**
     *
     * @type {RateLimiter}
     * @memberof PartialNetworkInterface
     */
    rxRateLimiter?: RateLimiter;
    /**
     *
     * @type {RateLimiter}
     * @memberof PartialNetworkInterface
     */
    txRateLimiter?: RateLimiter;
}
/**
 * Check if a given object implements the PartialNetworkInterface interface.
 */
export declare function instanceOfPartialNetworkInterface(value: object): boolean;
export declare function PartialNetworkInterfaceFromJSON(json: any): PartialNetworkInterface;
export declare function PartialNetworkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialNetworkInterface;
export declare function PartialNetworkInterfaceToJSON(value?: PartialNetworkInterface | null): any;
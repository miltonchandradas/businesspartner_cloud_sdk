import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_BusPartAddrDepdntTaxNmbr" of service "API_BUSINESS_PARTNER".
 */
export declare class BusPartAddrDepdntTaxNmbr<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusPartAddrDepdntTaxNmbrType<T> {
    /**
     * Technical entity name for BusPartAddrDepdntTaxNmbr.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the BusPartAddrDepdntTaxNmbr entity
     */
    static _keys: string[];
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: DeserializedType<T, 'Edm.String'>;
    /**
     * Address Number.
     * Maximum length: 10.
     */
    addressId: DeserializedType<T, 'Edm.String'>;
    /**
     * Tax Number Category.
     * Maximum length: 4.
     */
    bpTaxType: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Tax Number.
     * Maximum length: 20.
     * @nullable
     */
    bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Business Partner Tax Number.
     * Maximum length: 60.
     * @nullable
     */
    bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
export interface BusPartAddrDepdntTaxNmbrType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    bpTaxType: DeserializedType<T, 'Edm.String'>;
    bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=BusPartAddrDepdntTaxNmbr.d.ts.map
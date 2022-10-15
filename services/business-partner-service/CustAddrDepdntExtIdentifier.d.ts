import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
 */
export declare class CustAddrDepdntExtIdentifier<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustAddrDepdntExtIdentifierType<T> {
    /**
     * Technical entity name for CustAddrDepdntExtIdentifier.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the CustAddrDepdntExtIdentifier entity
     */
    static _keys: string[];
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Address Number (from BUT020).
     * Maximum length: 10.
     */
    addressId: DeserializedType<T, 'Edm.String'>;
    /**
     * Customer Identifier for External System.
     * Maximum length: 12.
     * @nullable
     */
    customerExternalRefId?: DeserializedType<T, 'Edm.String'> | null;
}
export interface CustAddrDepdntExtIdentifierType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    customerExternalRefId?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=CustAddrDepdntExtIdentifier.d.ts.map
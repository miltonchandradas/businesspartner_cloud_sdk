import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { BpContactToAddress, BpContactToAddressType } from './BpContactToAddress';
import { BpContactToFuncAndDept, BpContactToFuncAndDeptType } from './BpContactToFuncAndDept';
/**
 * This class represents the entity "A_BusinessPartnerContact" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerContact<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerContactType<T> {
    /**
     * Technical entity name for BusinessPartnerContact.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the BusinessPartnerContact entity
     */
    static _keys: string[];
    /**
     * BP Relationship Number.
     * Maximum length: 12.
     */
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    /**
     * Validity Date (Valid To).
     */
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    /**
     * Validity Date (Valid From).
     * @nullable
     */
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    /**
     * Standard Relationship.
     * @nullable
     */
    isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
    /**
     * Business Partner Relationship Category.
     * Maximum length: 6.
     * @nullable
     */
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * One-to-many navigation property to the {@link BpContactToAddress} entity.
     */
    toContactAddress: BpContactToAddress<T>[];
    /**
     * One-to-one navigation property to the {@link BpContactToFuncAndDept} entity.
     */
    toContactRelationship?: BpContactToFuncAndDept<T> | null;
}
export interface BusinessPartnerContactType<T extends DeSerializers = DefaultDeSerializers> {
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    toContactAddress: BpContactToAddressType<T>[];
    toContactRelationship?: BpContactToFuncAndDeptType<T> | null;
}
//# sourceMappingURL=BusinessPartnerContact.d.ts.map
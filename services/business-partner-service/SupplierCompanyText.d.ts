import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierCompanyText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierCompanyTextType<T> {
    /**
     * Technical entity name for SupplierCompanyText.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the SupplierCompanyText entity
     */
    static _keys: string[];
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     */
    supplier: DeserializedType<T, 'Edm.String'>;
    /**
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: DeserializedType<T, 'Edm.String'>;
    /**
     * Language key.
     * Maximum length: 2.
     */
    language: DeserializedType<T, 'Edm.String'>;
    /**
     * Text ID.
     * Maximum length: 4.
     */
    longTextId: DeserializedType<T, 'Edm.String'>;
    /**
     * String.
     * @nullable
     */
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
export interface SupplierCompanyTextType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=SupplierCompanyText.d.ts.map
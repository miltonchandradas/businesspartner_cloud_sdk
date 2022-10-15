import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerTextType<T> {
    /**
     * Technical entity name for CustomerText.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the CustomerText entity
     */
    static _keys: string[];
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: DeserializedType<T, 'Edm.String'>;
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
export interface CustomerTextType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=CustomerText.d.ts.map
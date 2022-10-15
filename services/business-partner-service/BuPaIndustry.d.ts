import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_BuPaIndustry" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaIndustry<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BuPaIndustryType<T> {
    /**
     * Technical entity name for BuPaIndustry.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the BuPaIndustry entity
     */
    static _keys: string[];
    /**
     * Industry.
     * Maximum length: 10.
     */
    industrySector: DeserializedType<T, 'Edm.String'>;
    /**
     * Industry System.
     * Maximum length: 4.
     */
    industrySystemType: DeserializedType<T, 'Edm.String'>;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: DeserializedType<T, 'Edm.String'>;
    /**
     * Industry is Standard for BP in Industry System.
     * Maximum length: 1.
     * @nullable
     */
    isStandardIndustry?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Description.
     * Maximum length: 100.
     * @nullable
     */
    industryKeyDescription?: DeserializedType<T, 'Edm.String'> | null;
}
export interface BuPaIndustryType<T extends DeSerializers = DefaultDeSerializers> {
    industrySector: DeserializedType<T, 'Edm.String'>;
    industrySystemType: DeserializedType<T, 'Edm.String'>;
    businessPartner: DeserializedType<T, 'Edm.String'>;
    isStandardIndustry?: DeserializedType<T, 'Edm.String'> | null;
    industryKeyDescription?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=BuPaIndustry.d.ts.map
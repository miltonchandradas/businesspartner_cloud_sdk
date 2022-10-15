import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerDunning } from './CustomerDunning';
/**
 * Request builder class for operations supported on the {@link CustomerDunning} entity.
 */
export declare class CustomerDunningRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerDunning<T>, T> {
    /**
     * Returns a request builder for retrieving one `CustomerDunning` entity based on its keys.
     * @param customer Key property. See {@link CustomerDunning.customer}.
     * @param companyCode Key property. See {@link CustomerDunning.companyCode}.
     * @param dunningArea Key property. See {@link CustomerDunning.dunningArea}.
     * @returns A request builder for creating requests to retrieve one `CustomerDunning` entity based on its keys.
     */
    getByKey(customer: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, dunningArea: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerDunning<T>, T>;
    /**
     * Returns a request builder for querying all `CustomerDunning` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerDunning` entities.
     */
    getAll(): GetAllRequestBuilder<CustomerDunning<T>, T>;
    /**
     * Returns a request builder for creating a `CustomerDunning` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerDunning`.
     */
    create(entity: CustomerDunning<T>): CreateRequestBuilder<CustomerDunning<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `CustomerDunning`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerDunning`.
     */
    update(entity: CustomerDunning<T>): UpdateRequestBuilder<CustomerDunning<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerDunning`.
     * @param customer Key property. See {@link CustomerDunning.customer}.
     * @param companyCode Key property. See {@link CustomerDunning.companyCode}.
     * @param dunningArea Key property. See {@link CustomerDunning.dunningArea}.
     * @returns A request builder for creating requests that delete an entity of type `CustomerDunning`.
     */
    delete(customer: string, companyCode: string, dunningArea: string): DeleteRequestBuilder<CustomerDunning<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerDunning`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomerDunning` by taking the entity as a parameter.
     */
    delete(entity: CustomerDunning<T>): DeleteRequestBuilder<CustomerDunning<T>, T>;
}
//# sourceMappingURL=CustomerDunningRequestBuilder.d.ts.map
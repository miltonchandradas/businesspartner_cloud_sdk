import { Injectable } from '@nestjs/common';
import {
  businessPartnerService,
  BusinessPartner,
  BusinessPartnerAddress,
} from '../../services/business-partner-service';

@Injectable()
export class BusinessPartnerService {
  async getAllBusinessPartners(): Promise<BusinessPartner[]> {
    const { businessPartnerApi } = businessPartnerService();
    return await businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY,
      )
      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'))
      .top(10)
      .execute({
        url: process.env.URL,
      });
  }

  getBusinessPartnerById(id: string): Promise<BusinessPartner> {
    const { businessPartnerApi } = businessPartnerService();
    const { businessPartnerAddressApi } = businessPartnerService();

    return businessPartnerApi
      .requestBuilder()
      .getByKey(id)
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
          businessPartnerAddressApi.schema.BUSINESS_PARTNER,
          businessPartnerAddressApi.schema.ADDRESS_ID,
          businessPartnerAddressApi.schema.POSTAL_CODE,
          businessPartnerAddressApi.schema.CITY_NAME,
          businessPartnerAddressApi.schema.STREET_NAME,
          businessPartnerAddressApi.schema.HOUSE_NUMBER,
        ),
      )
      .execute({ url: process.env.URL });
  }

  createAddress(
    address: Record<string, any>,
    businessPartnerId: string,
  ): Promise<BusinessPartnerAddress> {
    const { businessPartnerAddressApi } = businessPartnerService();

    const businessPartnerAddress = businessPartnerAddressApi
      .entityBuilder()
      .fromJson({ businessPartner: businessPartnerId, ...address });
    return businessPartnerAddressApi
      .requestBuilder()
      .create(businessPartnerAddress)
      .execute({ url: process.env.URL });
  }
}

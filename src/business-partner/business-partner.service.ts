import { Injectable } from '@nestjs/common';
import {
  businessPartnerService,
  BusinessPartner,
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
      )
      .top(10)
      .execute({
        url: process.env.URL,
      });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import {
  BusinessPartner,
  BusinessPartnerAddress,
} from '../../services/business-partner-service';

import { BusinessPartnerService } from './business-partner.service';

@Controller('business-partner')
export class BusinessPartnerController {
  constructor(private businessPartnerService: BusinessPartnerService) {}

  @Get()
  async getBusinessPartners(): Promise<BusinessPartner[]> {
    return await this.businessPartnerService
      .getAllBusinessPartners()
      .catch((error) => {
        throw new HttpException(
          `Failed to get business partners - ${error.message}`,
          500,
        );
      });
  }

  @Get('/:id')
  getBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {
    return this.businessPartnerService.getBusinessPartnerById(id);
  }

  @Post('/:businessPartnerId/address')
  @HttpCode(201)
  createAddress(
    @Body() requestBody: Record<string, any>,
    @Param('businessPartnerId') businessPartnerId: string,
  ): Promise<BusinessPartnerAddress> {
    return this.businessPartnerService.createAddress(
      requestBody,
      businessPartnerId,
    );
  }

  @Put('/:businessPartnerId/address/:addressId')
  updateBusinessPartnerAddress(
    @Body() requestBody: Record<string, any>,
    @Param('businessPartnerId') businessPartnerId: string,
    @Param('addressId') addressId: string,
  ): Promise<BusinessPartnerAddress> {
    return this.businessPartnerService.updateAddress(
      requestBody,
      businessPartnerId,
      addressId,
    );
  }

  @Delete('/:businessPartnerId/address/:addressId')
  @HttpCode(204)
  deleteBusinessPartnerAddress(
    @Param('businessPartnerId') businessPartnerId: string,
    @Param('addressId') addressId: string,
  ): Promise<void> {
    return this.businessPartnerService.deleteAddress(
      businessPartnerId,
      addressId,
    );
  }
}

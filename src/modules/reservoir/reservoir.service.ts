import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetReservoirDto } from './dto/get-reservoir.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { parseStringPromise } from 'xml2js';
import { ReservoirResponseDto } from './dto/res-reservoir.dto';
import { plainToInstance } from 'class-transformer';
import { GetReservoirWaterLevelDto } from './dto/get-reservoirWaterLevel.dto';
@Injectable()
export class ReservoirService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor() {
    this.httpService.axiosRef.interceptors.request.use(
      (config) => {
        // 요청 정보 로깅
        console.log(
          'Sending request:',
          config.method.toUpperCase(),
          config.url,
          'Params:',
          config.params,
        );
        return config;
      },
      (error) => {
        // 요청 설정에 오류가 있는 경우 로깅
        console.error('Request error:', error);
        return Promise.reject(error);
      },
    );
    this.httpService.axiosRef.interceptors.response.use(
      (response) => {
        // 성공 응답 로깅
        //console.log('Received response:', response.data);
        return response;
      },
      (error) => {
        // 오류 응답 로깅
        console.error('Failed response:', error.response.data);
        return Promise.reject(error);
      },
    );
  }

  async fetchReservoirData(dto: GetReservoirDto): Promise<any> {
    try {
      const serviceKey = this.configService.get<string>(
        'RES_WATER_LEVEL_DEC_API_KEY',
      );
      const encodedApiKey = encodeURIComponent(serviceKey); // API 키 인코딩

      const queryParams = {
        serviceKey: encodedApiKey,
        numOfRows: 10,
        pageNo: Number(dto.pageNo),
        fac_name: dto.facName ?? null,
        county: dto.county ?? null,
      };

      // firstValueFrom 함수를 사용하여 Observable을 Promise로 변환
      const response = await firstValueFrom(
        this.httpService.get(
          'http://apis.data.go.kr/B552149/reserviorWaterLevel/reservoircode/',
          {
            params: queryParams,
            responseType: 'text', // XML 응답을 처리하기 위해 responseType을 'text'로 설정
          },
        ),
      );

      // xml2js를 사용하여 XML 응답을 JSON으로 변환
      const result = await parseStringPromise(response.data, {
        explicitArray: false, // 배열이 아닌 단일 객체로 처리
      });

      if (
        result.OpenAPI_ServiceResponse?.cmmMsgHeader?.returnReasonCode === '30'
      ) {
        throw new InternalServerErrorException(
          '일시적인 오류 입니다 다시 시도하여 주십시오.',
        );
      }

      const responseDto = plainToInstance(ReservoirResponseDto, result, {
        excludeExtraneousValues: true,
      });

      return responseDto;
    } catch (error) {
      if (
        error instanceof InternalServerErrorException &&
        error.message === '일시적인 오류 입니다 다시 시도하여 주십시오.'
      ) {
        console.error('SERVICE_KEY_IS_NOT_REGISTERED_ERROR');
        throw error;
      } else {
        console.error('Error fetching reservoir data:', error);
        throw new InternalServerErrorException('Error fetching reservoir data');
      }
    }
  }

  async fetchReservoirWaterLevelData(
    dto: GetReservoirWaterLevelDto,
  ): Promise<any> {
    try {
      const serviceKey = this.configService.get<string>(
        'RES_WATER_LEVEL_DEC_API_KEY',
      );
      const encodedApiKey = encodeURIComponent(serviceKey); // API 키 인코딩

      const queryParams = {
        serviceKey: encodedApiKey,
        numOfRows: 10,
        pageNo: Number(dto.pageNo),
        fac_code: dto.facCode,
        date_s: dto.dateS,
        date_e: dto.dateE,
      };

      // firstValueFrom 함수를 사용하여 Observable을 Promise로 변환
      const response = await firstValueFrom(
        this.httpService.get(
          'http://apis.data.go.kr/B552149/reserviorWaterLevel/reservoirlevel/',
          {
            params: queryParams,
            responseType: 'text', // XML 응답을 처리하기 위해 responseType을 'text'로 설정
          },
        ),
      );

      // xml2js를 사용하여 XML 응답을 JSON으로 변환
      const result = await parseStringPromise(response.data, {
        explicitArray: false, // 배열이 아닌 단일 객체로 처리
      });

      if (
        result.OpenAPI_ServiceResponse?.cmmMsgHeader?.returnReasonCode === '30'
      ) {
        console.error('SERVICE_KEY_IS_NOT_REGISTERED_ERROR');
        throw new InternalServerErrorException(
          '일시적인 오류 입니다 다시 시도하여 주십시오.',
        );
      }

      const responseDto = plainToInstance(ReservoirResponseDto, result, {
        excludeExtraneousValues: true,
      });

      return responseDto;
    } catch (error) {
      if (
        error instanceof InternalServerErrorException &&
        error.message === '일시적인 오류 입니다 다시 시도하여 주십시오.'
      ) {
        throw error;
      } else {
        console.error('Error fetching reservoir water level data:', error);
        throw new InternalServerErrorException(
          'Error fetching reservoir water level data',
        );
      }
    }
  }
}

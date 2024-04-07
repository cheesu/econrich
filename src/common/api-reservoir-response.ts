import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export function ApiCommonReservoirResponses() {
  return applyDecorators(
    ApiResponse({
      status: 500,
      description: '공공데이터 포탈 API 요청 오류',
      schema: {
        example: {
          message: 'Error fetching reservoir data',
          error: 'Internal Server Error',
          statusCode: 500,
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: '잘못된 요청',
      schema: {
        example: {
          message: 'Validation failed',
          error: 'Bad Request',
          statusCode: 400,
        },
      },
    }),
    // 여기에 추가적으로 공통으로 사용할 다른 응답들을 넣을 수 있습니다.
  );
}

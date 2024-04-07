import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export function ApiCommonResponses() {
  return applyDecorators(
    ApiResponse({
      status: 500,
      description: '서버 내부 오류 발생',
      schema: {
        example: {
          message: 'Internal Server Error',
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
          message: 'pageNo must be a number string',
          error: 'Bad Request',
          statusCode: 400,
        },
      },
    }),
    // 여기에 추가적으로 공통으로 사용할 다른 응답들을 넣을 수 있습니다.
  );
}

import { Type } from 'class-transformer';
class ErrorMessageHeaderDto {
  errMsg: string[];
  returnAuthMsg: string[];
  returnReasonCode: string[];
}

export class ErrorReservoirResponseDto {
  @Type(() => ErrorMessageHeaderDto)
  cmmMsgHeader: ErrorMessageHeaderDto[];
}

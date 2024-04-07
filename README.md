<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

NodeNest는 NestJS와 Node.js를 기반으로 한 백엔드 애플리케이션 프로젝트입니다. RESTful API 구현을 중점으로, 데이터 처리 및 외부 API 연동 기능을 제공합니다. 이 프로젝트는 NestJS의 주요 기능과 구조를 활용하여 안정적이고 확장 가능한 서버 사이드 애플리케이션을 구축하는 것을 목표로 합니다.

### 기술 스택

NestJS: 모듈화된 아키텍처를 제공하는 Node.js 프레임워크로, 효율적인 서버 사이드 애플리케이션 개발을 지원합니다.

TypeORM: TypeScript와 JavaScript 양쪽 모두에서 사용할 수 있는 ORM으로, 데이터베이스 관리를 용이하게 합니다.

MySQL/MariaDB: 관계형 데이터베이스 관리 시스템으로, 데이터 저장과 조작을 위해 사용됩니다.

Class-validator 및 Class-transformer: DTO(Data Transfer Object) 검증과 변환을 위한 라이브러리로, 입력 데이터의 유효성 검사 및 타입 변환을 단순화합니다.

Swagger: API 문서 자동화 도구로, API의 명세와 테스트를 위한 UI를 제공합니다.

### node.js

이 프로젝트는 Node.js v18 에서 개발 하였습니다.

### API 문서

Swagger를 통해 생성된 API 문서는 실행 중인 애플리케이션의 /api 경로에서 확인할 수 있습니다.
ex) loclhost:8081/api

## 공공 데이터 포탈

### 한국농어촌공사\_농촌용수 저수지 수위정보 조회

이 프로젝트는 공공 데이터 포탈의 농촌용수 저수지 수위 정보 조회 API를 활용 하고 있습니다.

### API 개요

API명 : reserviorWaterLevel 농업용저수지 수위자료
API 설명 : 한국농어촌공사에서 관리중인 농업용저수지의 저수지코드 를 조회할 수 있으며, 해당 저수지 코드로 저수지 수위 정보를 조회 할 수 있다.

### 상세 기능 목록

1. 농업용저수지 코드조회
2. 농업용저수지 수위조회

## 프로젝트 배포 자동화

이 프로젝트는 GitHub Actions를 사용하여 Amazon Elastic Container Registry(ECR)에 도커 이미지를 빌드하고 푸시한 후, Amazon Elastic Container Service(ECS)에 새 작업 정의를 배포하는 자동화된 CI/CD 파이프라인을 구현합니다.

### 배포 흐름

1. GitHub에서 메인 브랜치로 코드가 푸시됩니다.
2. GitHub Actions 워크플로우가 트리거됩니다.

1)  소스 코드가 체크아웃됩니다.
2)  AWS 자격 증명이 구성됩니다.
3)  도커 이미지가 빌드되고 Amazon ECR로 푸시됩니다.

3. 새 ECS 작업 정의가 생성되고 배포됩니다.

### 필요 사항

AWS 계정
Amazon ECR 리포지토리
Amazon ECS 클러스터 및 서비스
GitHub 리포지토리

## nest CLI

nest g resource [name]

## directory

````plaintext
src/
|-- app.module.ts
|-- main.ts
|-- common/
|   |-- filters/
|   |-- guards/
|   |-- decorators/
|   |-- pipes/
|   |-- interceptors/
|   |-- middleware/
|-- modules/
    |-- employees/
    |   |-- dto/
    |   |   |-- create-employees.dto.ts
    |   |   |-- update-employees.dto.ts
    |   |-- entities/
    |   |   |-- employees.entity.ts
    |   |-- employees.controller.ts
    |   |-- employees.module.ts
    |   |-- employees.service.ts


src/: 소스 코드를 담고 있는 최상위 디렉토리입니다.
app.module.ts: 애플리케이션의 루트 모듈입니다.
main.ts: 애플리케이션의 진입점입니다.
common/: 여러 모듈에서 공통적으로 사용되는 커스텀 데코레이터, 필터, 가드, 파이프, 인터셉터, 미들웨어 등을 담고 있습니다.
modules/: 애플리케이션의 각 기능별 모듈을 담고 있는 디렉토리입니다. 각 모듈은 독립적으로 기능을 구현하며, 필요에 따라 다른 모듈과의 관계를 정의할 수 있습니다.
employees/, etc../: 특정 기능을 담당하는 모듈 디렉토리 예시입니다. 각 모듈 내에서는 다음과 같이 구성됩니다:
dto/: Data Transfer Object. 클라이언트와 서버 간에 데이터를 전송하는 객체의 정의를 담고 있습니다.
entities/: 데이터베이스의 모델/엔티티 정의를 담고 있습니다.
_.controller.ts: HTTP 요청을 처리하고 응답을 반환하는 컨트롤러입니다.
_.module.ts: 해당 모듈의 메인 파일로, 모듈의 컨트롤러와 서비스를 NestJS에 등록합니다.
\*.service.ts: 비즈니스 로직을 처리하는 서비스입니다.

## Installation

```bash
$ npm install
````

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

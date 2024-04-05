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

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

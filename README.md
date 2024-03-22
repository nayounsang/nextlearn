## 배포 링크  
[링크](https://nextlearn-c9ow94ddx-younsangnas-projects.vercel.app/)

## 개요
* [노마드 코더의 nestjs 기초강의 토이프로젝트](https://nomadcoders.co/nextjs-for-beginners/lectures/4687)를 구현했다.
* 해당 강의에서 설명해준 것을 넘어 내가 고민하고 적용한 것들을 회고해본다.

## 스타일링
* 강의에서 소개한 module.css에 대한 경험이 괜찮았으나, 난 css in js를 선호했다.
* 하지만 대부분 css in js라이브러리가 런타임에서 적용했기 때문에, 모든 컴포넌트를 클라이언트 컴포넌트로 작성하는것이 강제된다. 이말은 모든 컴포넌트에 hydrate가 들어간단 것이다.
* 그래서 빌드타임에 적용가능한 라이브러리를 찾았고, styleX와 vanilla extract가 대안이 됐다.
* 전자는 나온지 얼마안돼 정보를 별로 찾을 수 없었고, 후자를 선택했다.

### 스타일링을 하면서
* reset css를 적용할 때, globalstyle을 적용하는 것보단, css파일을 사용해서 복붙하는게 좋다고 판단해서 reset css에만 별도의 css파일을 만들었다.
* 하지만, 불안정할수도 있을 것 같다. 이는 지켜봐야겠다.
* 이 중 별도의 스타일을 쓰는 a태그 정도만 추가로 globalstyle을 적용했다.
* reset css와 global css는 예외적으로 /app에 두었고, 나머지는 컴포넌트폴더에 ```(name).css.ts``` 원칙을 지켜 작업하였다.
* 지금 프로젝트에선, 재사용이 가능한 속성과 스타일이 특별하게 관찰되진 않는다.

## nextjs만의 컴포넌트

### next/link
* router push이벤트를 구현할때와 달리 a와 Link는 크롤링시 링크정보를 받을 수 있으므로 seo면에서 이점이 생긴다.
* a태그는 Link와 달리 링크이동시 완전한 새로고침을 한다. Link를 사용하면 웹이 SPA처럼 보이게 할 수 있다.
* [레퍼런스](https://stackoverflow.com/questions/65086108/next-js-link-vs-router-push-vs-a-tag)

### next/image
* 기존 image태그를 최적화한다.
* 기본적으로, 레이지로딩 정책을 채택한다. 뷰포트 밖에 있는 이미지는 이미지가 뷰포트로 들어왔을 때 로드된다.
* alt, 사이즈를 지정하는 것이 강제된다. img태그는 선택사항인데, 사이즈의 경우 지정해주지 않는다면 CLS를 유발할 위험이 있다.
* 사이즈의 경우 필요하다면 css를 이용해 정해주면 된다.
* srcset을 이용한 반응형 이미지를 제공해준다.

## 최적화
### 병렬 라우팅
* 영화 정보 페이지에서 iframe을 통한 여러개의 트레일러가 로드되는데 병목이 생기는 것을 발견했고 이는 전체적인 페이지 성능을 단축시켰다.
* 따라서, 영화 정보 페이지를 한번에 로드하는 것이 아닌 코드스플리팅을 통해 청크를 여러개 만든 것 처럼 병렬 라우팅으로 슬롯을 나누기로 했다.
* 트레일러 부분에 병렬 라우팅을 적용했고 light house 성능점수가 70점대에서 90점대로 증가하였다.
### link preconnect
* 트레일러에서 iframe src의 host는 youtube뿐이다.
* 따라서 youtube를 link preconnect href에 적용했다.
* 하지만 이는 많은 cpu성능을 잡아먹고 결국 오버엔지니어링이 될 수 있다.
* 따라서 이는 제외할 것을 고려중이다.

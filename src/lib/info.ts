import companyLogo from './images/logo.jpg';
import heroImage from './images/hero.jpg';
import { DateTime } from 'luxon';

type TRoute = {
  title: string;
  route: string;
};

export const logo = companyLogo;

export const routes: TRoute[] = [
  { title: '회사소개', route: '/#company' },
  { title: '사업영역', route: '/#buisiness' },
  { title: '공지사항', route: '/notice' },
  { title: '문의하기', route: '/connect' },
];

type TFlooting = (
  | {
      title: string;
    }
  | { icon: string }
) & {
  route: string;
};

export const flooting: TFlooting[] = [
  { title: '블로그', route: 'https://www.naver.com/' },
  { title: '문의하기', route: '/connect' },
];

export type TBoundType = 'instagram' | 'facebook' | 'kakao';
type TOutbound = {
  type: TBoundType;
  href: string;
};

export const outbound: TOutbound[] = [
  {
    href: 'https://ko-kr.facebook.com/',
    type: 'facebook',
  },
  {
    href: '',
    type: 'instagram',
  },
  {
    href: '',
    type: 'kakao',
  },
];

type TPopup = {
  href: string;
  url: string;
  startDate?: Date;
  endDate?: Date;
};

export const popup: TPopup[] = [{ href: 'https://www.naver.com/', url: heroImage, startDate: DateTime.fromISO('2023-08-10').toJSDate() }];

type THero = {
  title: string;
  description: string;
  buttonValue?: string;
  buttonHref?: string;
  backgroundImage?: string;
};

export const hero: THero = {
  title: '고객과 함께 성장하는 기업',
  description: '저희 회사와 함께하신 여러분 환영합니다.',
  backgroundImage: heroImage,
  buttonHref: '/connect',
};

export const companyInfo = {
  address: '서울특별시 서초구 서초동 1322-1',
  roadAddress: '서초대로70길 15',
  kakaoMap: 'https://kko.to/6j_Ktm56jg',
};

export const notice = [
  {
    title: '적립금은 언제까지 사용 가능한가요?',
    detail: `적립금은 적립일로부터 1년간 사용하실 수 있으며 1,000원 이상부터 현금처럼 사용 가능하십니다. 적립금 소멸 7일전 별도 연락을 통해 안내 드릴예정입니다.`,
  },
  {
    title: '제품을 환불하고 싶습니다. 가능한가요?',
    detail: '제품 오류로 인한 문의는 고객센터를 통해 접수해 주시면 검증 후 오류 수정 서비스 가능합니다. ',
  },
  {
    title: '해외 거주자도 제작이 가능할까요?',
    detail: '해외거주자라도 서비스가 가능합니다. 단, 모든 언어를 지원하지는 않는 점 참고 부탁드립니다.',
  },
];

import { Button } from '@/components/ui/button';
import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    daum: any;
  }
}

interface PostcodeData {
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: string;
  bcode: string;
  bname: string;
  bnameEnglish: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  userLanguageType: string;
  query: string;
  buildingName: string;
  buildingCode: string;
  apartment: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  roadAddress: string;
  roadAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  userSelectedType: string;
  noSelected: string;
  hname: string;
  roadnameCode: string;
  roadname: string;
  roadnameEnglish: string;
}

const Geocoder: React.FC = () => {
  // 주소 입력을 위한 상태값
  const [postcodeData, setPostcodeData] = useState<PostcodeData | null>(null);
  const [detailAddress, setDetailAddress] = useState('');
  const detailAddressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 우편번호 찾기 실행 함수
  const DaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data: PostcodeData) => {
        setPostcodeData(data);
        if (detailAddressRef.current) {
          detailAddressRef.current.focus();
        }
      },
    }).open();
  };

  return (
    <div className="w-full flex flex-col items-start">
      <input
        type="text"
        placeholder="우편번호"
        value={postcodeData?.zonecode || ''}
        className="w-3/5 h-10 px-4 py-2 border rounded-md"
      />
      <Button type="button" onClick={DaumPostcode} className="mt-3">
        우편번호 찾기
      </Button>
      <br />
      <input
        type="text"
        placeholder="주소"
        value={postcodeData?.address || ''}
        readOnly
        className="w-3/5 h-10 px-4 py-2 border rounded-md"
      />
      <br />
      <input
        type="text"
        placeholder="상세주소"
        ref={detailAddressRef}
        value={detailAddress}
        onChange={e => setDetailAddress(e.target.value)}
        className="w-3/5 h-10 px-4 py-2 border rounded-md"
      />
      <br />
    </div>
  );
};
export default Geocoder;

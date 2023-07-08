export default function Footer() {
    return(
        <footer className="px-[30px] py-[40px] flex flex-col items-between justify-between text-[#E6E6E6] bg-[#434343]">
          <div className="text-start">
            <h6 className="font-light text-[10px]">
              블라블라 | (팀)그랜드소드마스터
              <br />
              서울특별시 강남구 테헤란로 311 아남타워빌딩 7층
            </h6>
            <h6 className="font-semibold text-[16px] mt-[12px] mb-[8px]">
              CONTACT
            </h6>
            <h6 className="font-light text-[12px]">blablabdmin@gmail.com</h6>
          </div>

          <div className="text-[12px] text-end">
            COPYRIGHT 2023 그랜드소드마스터
            <br />
            ALL RIGHT RESERVED
          </div>
        </footer>
    );
}
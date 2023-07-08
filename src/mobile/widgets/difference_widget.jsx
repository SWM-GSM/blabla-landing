export default function DifferenceWidget(props) {
    return (
      <div className="flex flex-col items-center my-[80px] whitespace-pre-line text-center">
        <h4 className="font-bold text-xl underline decoration-[#FF7F50] underline-offset-0 decoration-[8px]">
          {props.num}
        </h4>
        <h3 className="font-bold text-2xl mt-[32px] mb-[24px]">{props.title}</h3>
        <h6 className="font-medium text-base ">{props.subTitle}</h6>
        <div className="flex flex-col items-center my-[32px]">
          <img src={props.imgBefore} className="w-[200px]" />
          <h6 className="text-xs mt-[20px] mb-[4px]">{props.imgBeforeDesc}</h6>
        </div>
  
        <div className="flex flex-col items-center my-[32px]">
          <img src={props.imgAfter} className="w-[200px]" />
          <h6 className="text-xs mt-[20px] mb-[4px]">{props.imgAfterDesc}</h6>
        </div>
  
        {props.desc}
      </div>
    );
  };
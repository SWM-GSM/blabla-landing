export default function ProsWidget(props) {
    return (
      <div className="flex flex-col items-center my-[40px] whitespace-pre-line text-center">
        <img src={`imgs/img_300_${props.img}.png`} className="w-[300px]" />
        <h3 className="font-bold text-2xl mt-[32px] mb-[24px]">{props.title}</h3>
        <h6 className="font-medium text-sm">{props.desc}</h6>
      </div>
    );
  };
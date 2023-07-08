export default function IconBtn (props) {
    return (
      <button onClick={props.onClick}>
        <div className="h-[28px] w-[90px] flex flex-row justify-between items-center pl-[6px] pr-[9px] bg-white text-black rounded drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
          <img src={`icons/ic_20_${props.icon}.svg`} />
          <h6 className="font-semibold text-[14px]">{props.name}</h6>
        </div>
      </button>
    );
  };
  
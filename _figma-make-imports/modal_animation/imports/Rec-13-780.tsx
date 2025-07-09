import svgPaths from "./svg-t1rivpmamy";

function Text() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] shrink-0 w-[106.8px]"
      data-name="Text"
    />
  );
}

function Cross() {
  return (
    <div className="relative shrink-0 size-[71.2px]" data-name="cross">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 72 72"
      >
        <g id="cross">
          <rect fill="white" fillOpacity="0.01" height="71.2" width="71.2" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1d5d6580}
            fill="var(--fill-0, #091E42)"
            fillOpacity="0.25"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function InnerTag() {
  return (
    <div
      className="bg-[#dfe1e6] relative rounded-[8.9px] shrink-0"
      data-name="Inner tag"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8.9px] relative">
          <div
            className="h-[75.65px] shrink-0 w-[17.8px]"
            data-name="padding"
          />
          <Text />
          <div
            className="h-[75.65px] shrink-0 w-[17.8px]"
            data-name="padding"
          />
          <Cross />
        </div>
      </div>
    </div>
  );
}

function MultiselectTag() {
  return (
    <div
      className="absolute left-[320.63px] opacity-0 rounded-[8.9px] top-[20.5px]"
      data-name="Multiselect Tag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[8.9px] relative">
          <InnerTag />
        </div>
      </div>
    </div>
  );
}

function SelectHandle() {
  return (
    <div
      className="absolute left-[-8.898px] rounded-[2.225px] size-[22.25px] top-[-8.9px]"
      data-name="Select handle"
    >
      <div className="overflow-clip relative size-[22.25px]">
        <div className="absolute bg-[#ffffff] inset-0">
          <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-[-4.45px] pointer-events-none" />
        </div>
      </div>
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none rounded-[2.225px]" />
    </div>
  );
}

function SelectHandle1() {
  return (
    <div
      className="absolute bottom-[-8.9px] left-[-8.898px] rounded-[2.225px] size-[22.25px]"
      data-name="Select handle"
    >
      <div className="overflow-clip relative size-[22.25px]">
        <div className="absolute bg-[#ffffff] inset-0">
          <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-[-4.45px] pointer-events-none" />
        </div>
      </div>
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none rounded-[2.225px]" />
    </div>
  );
}

function SelectHandle2() {
  return (
    <div
      className="absolute bottom-[-8.9px] right-[-8.9px] rounded-[2.225px] size-[22.25px]"
      data-name="Select handle"
    >
      <div className="overflow-clip relative size-[22.25px]">
        <div className="absolute bg-[#ffffff] inset-0">
          <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-[-4.45px] pointer-events-none" />
        </div>
      </div>
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none rounded-[2.225px]" />
    </div>
  );
}

function SelectHandle3() {
  return (
    <div
      className="absolute right-[-8.9px] rounded-[2.225px] size-[22.25px] top-[-8.9px]"
      data-name="Select handle"
    >
      <div className="overflow-clip relative size-[22.25px]">
        <div className="absolute bg-[#ffffff] inset-0">
          <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-[-4.45px] pointer-events-none" />
        </div>
      </div>
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none rounded-[2.225px]" />
    </div>
  );
}

function SelectFrame() {
  return (
    <div
      className="absolute h-[93.45px] left-[329.53px] opacity-0 top-[29.4px] w-[235.85px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none" />
      <SelectHandle />
      <SelectHandle1 />
      <SelectHandle2 />
      <SelectHandle3 />
    </div>
  );
}

export default function Rec() {
  return (
    <div className="bg-[#f1f2f4] relative size-full" data-name="Rec">
      <MultiselectTag />
      <SelectFrame />
    </div>
  );
}
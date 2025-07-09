import svgPaths from "./svg-1my5wm7523";

function Text() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.48)] h-[26.7px] rounded-[13.35px] shrink-0 w-[315.95px]"
      data-name="Text"
    />
  );
}

function Text1() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] rounded-[13.35px] size-full"
      data-name="Text"
    />
  );
}

function Lines() {
  return (
    <div
      className="absolute h-[1094.7px] left-0 right-0 top-0"
      data-name="Lines"
    >
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[6.782%] top-[1068px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1456.02px]">
          {[...Array(9).keys()].map((_, i) => (
            <Text1 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-0 top-[934.5px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1561.95px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[10.106%] top-[801px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1404.09px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[3.723%] top-[667.5px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1503.79px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-0 top-[534px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1561.95px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[2.926%] top-[400.5px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1516.25px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-0 top-[267px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1561.95px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[2.394%] top-[133.5px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1524.56px]" />
      </div>
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1561.95px]" />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] left-0 right-[60%] rounded-[13.35px] top-1/2 translate-y-[-50%]"
      data-name="Text"
    />
  );
}

function LastLine() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[-0.3px] h-[26.7px] left-0 right-0"
      data-name="Last Line"
    >
      <Text10 />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="h-[560.7px] overflow-clip relative shrink-0 w-[1561.95px]"
      data-name="Paragraph"
    >
      <Lines />
      <LastLine />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[712px] relative shrink-0 w-[1561.95px]" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-[106.8px] h-[712px] items-start justify-start p-0 relative w-[1561.95px]">
        <Text />
        <Paragraph />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] shrink-0 w-[195.8px]"
      data-name="Text"
    />
  );
}

function ButtonSubtle() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] h-[142.4px] relative rounded-[13.35px] shrink-0"
      data-name="Button (subtle)"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[142.4px] items-center justify-start px-[53.4px] py-[26.7px] relative">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.199607px)", left: "calc(50% - 4.17265px)" }}
    />
  );
}

function Button() {
  return (
    <div
      className="bg-[#b3d4ff] h-[142.4px] relative rounded-[13.35px] shrink-0 w-[271.45px]"
      data-name="Button"
    >
      <Text13 />
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[35.6px] items-center justify-start overflow-clip p-0 relative">
        <ButtonSubtle />
        <Button />
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[-1557.04px] rounded-[13.35px] top-[-233.149px] w-[1780px]"
      data-name="Modal"
    >
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[71.2px] items-end justify-start p-[106.8px] relative w-[1780px]">
          <Text11 />
          <Actions />
        </div>
      </div>
      <div className="absolute border-[8.9px] border-[rgba(9,30,66,0.13)] border-solid inset-0 pointer-events-none rounded-[13.35px]" />
    </div>
  );
}

function Text14() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.32)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.273631px)", left: "calc(50% - 4.45157px)" }}
    />
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[#123263] h-[84.55px] left-[-177.54px] rounded-[13.35px] top-[105.051px] w-[356px]"
      data-name="Button"
    >
      <Text14 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-1557.04px] top-[-233.149px]">
      <Modal />
      <Button1 />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text15() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text16() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions1() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text17 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header />
        <Actions1 />
      </div>
    </div>
  );
}

function Cross() {
  return (
    <div
      className="absolute left-0 size-[16.679px] top-[4.17px]"
      data-name="Cross"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Cross">
          <rect fill="white" height="16.679" width="16.679" />
          <path
            d={svgPaths.p10347800}
            fill="var(--fill-0, #8590A2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function CloseButton() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross />
    </div>
  );
}

function Flag() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[329.789px] rounded-[10.4243px] top-[29px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon1 />
          <Content />
          <CloseButton />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
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
      className="absolute bottom-[-7.119px] left-[-8.898px] rounded-[2.225px] size-[22.25px]"
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
      className="absolute bottom-[-7.119px] right-[-8.897px] rounded-[2.225px] size-[22.25px]"
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
      className="absolute right-[-8.901px] rounded-[2.225px] size-[22.25px] top-[-8.9px]"
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
      className="absolute h-[96.12px] left-[329.76px] top-[29.4px] w-[253.65px]"
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

function Icon2() {
  return (
    <div
      className="absolute left-[105.79px] size-[61.212px] top-[147px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-14.54%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 80"
        >
          <g id="Icon">
            <path
              d={svgPaths.pa3ff00}
              fill="var(--fill-0, #292A2E)"
              id="background"
            />
            <g filter="url(#filter0_d_2_1385)" id="Glyph">
              <path
                clipRule="evenodd"
                d={svgPaths.p94cd900}
                fill="var(--fill-0, white)"
                fillRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="79.012"
              id="filter0_d_2_1385"
              width="79.012"
              x="0.1"
              y="0.1"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.45" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_2_1385"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_1385"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Rec() {
  return (
    <div className="bg-[#f1f2f4] relative size-full" data-name="Rec">
      <Group1 />
      <Flag />
      <SelectFrame />
      <Icon2 />
    </div>
  );
}
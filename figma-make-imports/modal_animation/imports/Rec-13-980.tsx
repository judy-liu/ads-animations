import svgPaths from "./svg-qw6mbln8df";

function Icon1() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text1() {
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
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text2 key={i} />
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
        <Actions />
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
      className="absolute bg-[#172b4d] left-[106.789px] rounded-[10.4243px] top-[59px] w-[252.269px]"
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

function SelectFrame() {
  return (
    <div
      className="absolute bg-[rgba(56,139,255,0.08)] h-[139px] left-[93.789px] top-[31px] w-[284px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#388bff] border-[4.45px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute left-[368.79px] size-[61.212px] top-[154px]"
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
              d={svgPaths.p39e7f640}
              fill="var(--fill-0, #292A2E)"
              id="background"
            />
            <g filter="url(#filter0_d_2_1411)" id="Glyph">
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
              id="filter0_d_2_1411"
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
                result="effect1_dropShadow_2_1411"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_1411"
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
      <Flag />
      <SelectFrame />
      <Icon2 />
    </div>
  );
}
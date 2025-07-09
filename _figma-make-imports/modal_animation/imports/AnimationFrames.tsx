import svgPaths from "./svg-57uw81694h";
import { imgContainer } from "./svg-m8182";

function Rec() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] shrink-0 w-[468px]"
      data-name="Rec"
    />
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

function Text1() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text2() {
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
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
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
          <Text3 key={i} />
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

function Cross1() {
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
      <Cross1 />
    </div>
  );
}

function Flag() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[107px] rounded-[10.4243px] top-[59px] w-[252.269px]"
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

function Icon2() {
  return (
    <div
      className="absolute left-[293.16px] size-[61.075px] top-[147.496px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-14.54%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 79 79"
        >
          <g id="Icon">
            <path
              d={svgPaths.p108c7c80}
              fill="var(--fill-0, #292A2E)"
              id="background"
            />
            <g filter="url(#filter0_d_2_1397)" id="Glyph">
              <path
                clipRule="evenodd"
                d={svgPaths.p31a7e500}
                fill="var(--fill-0, white)"
                fillRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="78.8345"
              id="filter0_d_2_1397"
              width="78.8345"
              x="0.12"
              y="0.12"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.44" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_2_1397"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_1397"
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

function Rec1() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Flag />
      <Icon2 />
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text5() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text6() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
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
          <Text7 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header1 />
        <Actions1 />
      </div>
    </div>
  );
}

function Cross2() {
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

function CloseButton1() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross2 />
    </div>
  );
}

function Flag1() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[107px] rounded-[10.4243px] top-[59px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon4 />
          <Content1 />
          <CloseButton1 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="absolute left-[98px] size-[61.212px] top-[36.03px]"
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
              d={svgPaths.p288c6500}
              fill="var(--fill-0, #292A2E)"
              id="background"
            />
            <g filter="url(#filter0_d_2_1393)" id="Glyph">
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
              id="filter0_d_2_1393"
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
                result="effect1_dropShadow_2_1393"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_1393"
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

function Rec2() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Flag1 />
      <Icon5 />
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text9() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text10() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions2() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text11 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header2 />
        <Actions2 />
      </div>
    </div>
  );
}

function Cross3() {
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

function CloseButton2() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross3 />
    </div>
  );
}

function Flag2() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[106.789px] rounded-[10.4243px] top-[59px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon7 />
          <Content2 />
          <CloseButton2 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function SelectFrame() {
  return (
    <div
      className="absolute bg-[rgba(56,139,255,0.08)] left-[94.16px] opacity-20 size-[8.9px] top-[31.18px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#388bff] border-[4.45px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="absolute left-[98.61px] size-[61.212px] top-[35.63px]"
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
              d={svgPaths.p288c6500}
              fill="var(--fill-0, #292A2E)"
              id="background"
            />
            <g filter="url(#filter0_d_2_1389)" id="Glyph">
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
              id="filter0_d_2_1389"
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
                result="effect1_dropShadow_2_1389"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_1389"
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

function Rec3() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Flag2 />
      <SelectFrame />
      <Icon8 />
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text13() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text14() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions3() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text15 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header3 />
        <Actions3 />
      </div>
    </div>
  );
}

function Cross4() {
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

function CloseButton3() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross4 />
    </div>
  );
}

function Flag3() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[106.789px] rounded-[10.4243px] top-[59px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon10 />
          <Content3 />
          <CloseButton3 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function SelectFrame1() {
  return (
    <div
      className="absolute bg-[rgba(56,139,255,0.08)] h-[139px] left-[93.789px] top-[31px] w-[284px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#388bff] border-[4.45px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon11() {
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

function Rec4() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Flag3 />
      <SelectFrame1 />
      <Icon11 />
    </div>
  );
}

function Icon13() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text17() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text18() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header4() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions4() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text19 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header4 />
        <Actions4 />
      </div>
    </div>
  );
}

function Cross5() {
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

function CloseButton4() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross5 />
    </div>
  );
}

function Flag4() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[106.789px] rounded-[10.4243px] top-[59px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon13 />
          <Content4 />
          <CloseButton4 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function SelectHandle() {
  return (
    <div
      className="absolute left-[-8.898px] rounded-[2.225px] size-[22.25px] top-[-8.899px]"
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
      className="absolute bottom-[-7.12px] left-[-8.898px] rounded-[2.225px] size-[22.25px]"
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
      className="absolute bottom-[-7.12px] right-[-8.901px] rounded-[2.225px] size-[22.25px]"
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
      className="absolute right-[-8.901px] rounded-[2.225px] size-[22.25px] top-[-8.899px]"
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

function SelectFrame2() {
  return (
    <div
      className="absolute h-[96.12px] left-[106.96px] top-[57.88px] w-[253.65px]"
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

function Text21() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.48)] h-[26.7px] rounded-[13.35px] shrink-0 w-[315.95px]"
      data-name="Text"
    />
  );
}

function Text22() {
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
            <Text22 key={i} />
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

function Text31() {
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
      <Text31 />
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

function Text32() {
  return (
    <div className="h-[712px] relative shrink-0 w-[1561.95px]" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-[106.8px] h-[712px] items-start justify-start p-0 relative w-[1561.95px]">
        <Text21 />
        <Paragraph />
      </div>
    </div>
  );
}

function Text33() {
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
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Text34() {
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
      <Text34 />
    </div>
  );
}

function Actions5() {
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
      className="absolute bg-[#ffffff] left-[-1779.84px] rounded-[13.35px] top-[-202px] w-[1780px]"
      data-name="Modal"
    >
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[71.2px] items-end justify-start p-[106.8px] relative w-[1780px]">
          <Text32 />
          <Actions5 />
        </div>
      </div>
      <div className="absolute border-[8.9px] border-[rgba(9,30,66,0.13)] border-solid inset-0 pointer-events-none rounded-[13.35px]" />
    </div>
  );
}

function Text35() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.273631px)", left: "calc(50% - 4.45157px)" }}
    />
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[#1868db] h-[84.55px] left-[-400.34px] rounded-[13.35px] top-[136.2px] w-[356px]"
      data-name="Button"
    >
      <Text35 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-1779.84px] top-[-202px]">
      <Modal />
      <Button1 />
    </div>
  );
}

function Icon14() {
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

function Rec5() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] overflow-clip relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Flag4 />
      <SelectFrame2 />
      <Group1 />
      <Icon14 />
    </div>
  );
}

function Text36() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.48)] h-[26.7px] rounded-[13.35px] shrink-0 w-[315.95px]"
      data-name="Text"
    />
  );
}

function Text37() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] rounded-[13.35px] size-full"
      data-name="Text"
    />
  );
}

function Lines1() {
  return (
    <div
      className="absolute h-[1094.7px] left-0 right-0 top-0"
      data-name="Lines"
    >
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[6.782%] top-[1068px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1456.02px]">
          {[...Array(9).keys()].map((_, i) => (
            <Text37 key={i} />
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

function Text46() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] left-0 right-[60%] rounded-[13.35px] top-1/2 translate-y-[-50%]"
      data-name="Text"
    />
  );
}

function LastLine1() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[-0.3px] h-[26.7px] left-0 right-0"
      data-name="Last Line"
    >
      <Text46 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="h-[560.7px] overflow-clip relative shrink-0 w-[1561.95px]"
      data-name="Paragraph"
    >
      <Lines1 />
      <LastLine1 />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[712px] relative shrink-0 w-[1561.95px]" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-[106.8px] h-[712px] items-start justify-start p-0 relative w-[1561.95px]">
        <Text36 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] shrink-0 w-[195.8px]"
      data-name="Text"
    />
  );
}

function ButtonSubtle1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] h-[142.4px] relative rounded-[13.35px] shrink-0"
      data-name="Button (subtle)"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[142.4px] items-center justify-start px-[53.4px] py-[26.7px] relative">
          <Text48 />
        </div>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.199607px)", left: "calc(50% - 4.17265px)" }}
    />
  );
}

function Button2() {
  return (
    <div
      className="bg-[#b3d4ff] h-[142.4px] relative rounded-[13.35px] shrink-0 w-[271.45px]"
      data-name="Button"
    >
      <Text49 />
    </div>
  );
}

function Actions6() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[35.6px] items-center justify-start overflow-clip p-0 relative">
        <ButtonSubtle1 />
        <Button2 />
      </div>
    </div>
  );
}

function Modal1() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[-1557.24px] rounded-[13.35px] top-[-233.149px] w-[1780px]"
      data-name="Modal"
    >
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[71.2px] items-end justify-start p-[106.8px] relative w-[1780px]">
          <Text47 />
          <Actions6 />
        </div>
      </div>
      <div className="absolute border-[8.9px] border-[rgba(9,30,66,0.13)] border-solid inset-0 pointer-events-none rounded-[13.35px]" />
    </div>
  );
}

function Text50() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.273631px)", left: "calc(50% - 4.45157px)" }}
    />
  );
}

function Button3() {
  return (
    <div
      className="absolute bg-[#1868db] h-[84.55px] left-[-177.74px] rounded-[13.35px] top-[105.051px] w-[356px]"
      data-name="Button"
    >
      <Text50 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-1557.24px] top-[-233.149px]">
      <Modal1 />
      <Button3 />
    </div>
  );
}

function Icon15() {
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
              d={svgPaths.p22f2b300}
              fill="var(--fill-0, #292A2E)"
              id="background"
            />
            <g filter="url(#filter0_d_2_1404)" id="Glyph">
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
              id="filter0_d_2_1404"
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
                result="effect1_dropShadow_2_1404"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_1404"
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

function Icon17() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text51() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text52() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header5() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text51 />
        <Text52 />
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions7() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text53 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header5 />
        <Actions7 />
      </div>
    </div>
  );
}

function Cross6() {
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

function CloseButton5() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross6 />
    </div>
  );
}

function Flag5() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[329.789px] rounded-[10.4243px] top-[29px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon17 />
          <Content5 />
          <CloseButton5 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function SelectHandle4() {
  return (
    <div
      className="absolute left-[-8.902px] rounded-[2.225px] size-[22.25px] top-[-8.9px]"
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

function SelectHandle5() {
  return (
    <div
      className="absolute bottom-[-7.119px] left-[-8.902px] rounded-[2.225px] size-[22.25px]"
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

function SelectHandle6() {
  return (
    <div
      className="absolute bottom-[-7.119px] right-[-8.901px] rounded-[2.225px] size-[22.25px]"
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

function SelectHandle7() {
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

function SelectFrame3() {
  return (
    <div
      className="absolute h-[96.12px] left-[329.56px] top-[29.4px] w-[253.65px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none" />
      <SelectHandle4 />
      <SelectHandle5 />
      <SelectHandle6 />
      <SelectHandle7 />
    </div>
  );
}

function Rec6() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] overflow-clip relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Group2 />
      <Icon15 />
      <Flag5 />
      <SelectFrame3 />
    </div>
  );
}

function Text55() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.48)] h-[26.7px] rounded-[13.35px] shrink-0 w-[315.95px]"
      data-name="Text"
    />
  );
}

function Text56() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] rounded-[13.35px] size-full"
      data-name="Text"
    />
  );
}

function Lines2() {
  return (
    <div
      className="absolute h-[1094.7px] left-0 right-0 top-0"
      data-name="Lines"
    >
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[6.782%] top-[1068px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1456.02px]">
          {[...Array(9).keys()].map((_, i) => (
            <Text56 key={i} />
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

function Text65() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] left-0 right-[60%] rounded-[13.35px] top-1/2 translate-y-[-50%]"
      data-name="Text"
    />
  );
}

function LastLine2() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[-0.3px] h-[26.7px] left-0 right-0"
      data-name="Last Line"
    >
      <Text65 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="h-[560.7px] overflow-clip relative shrink-0 w-[1561.95px]"
      data-name="Paragraph"
    >
      <Lines2 />
      <LastLine2 />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[712px] relative shrink-0 w-[1561.95px]" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-[106.8px] h-[712px] items-start justify-start p-0 relative w-[1561.95px]">
        <Text55 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] shrink-0 w-[195.8px]"
      data-name="Text"
    />
  );
}

function ButtonSubtle2() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] h-[142.4px] relative rounded-[13.35px] shrink-0"
      data-name="Button (subtle)"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[142.4px] items-center justify-start px-[53.4px] py-[26.7px] relative">
          <Text67 />
        </div>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.199607px)", left: "calc(50% - 4.17265px)" }}
    />
  );
}

function Button4() {
  return (
    <div
      className="bg-[#b3d4ff] h-[142.4px] relative rounded-[13.35px] shrink-0 w-[271.45px]"
      data-name="Button"
    >
      <Text68 />
    </div>
  );
}

function Actions8() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[35.6px] items-center justify-start overflow-clip p-0 relative">
        <ButtonSubtle2 />
        <Button4 />
      </div>
    </div>
  );
}

function Modal2() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[-1557.04px] rounded-[13.35px] top-[-233.149px] w-[1780px]"
      data-name="Modal"
    >
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[71.2px] items-end justify-start p-[106.8px] relative w-[1780px]">
          <Text66 />
          <Actions8 />
        </div>
      </div>
      <div className="absolute border-[8.9px] border-[rgba(9,30,66,0.13)] border-solid inset-0 pointer-events-none rounded-[13.35px]" />
    </div>
  );
}

function Text69() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.32)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.273631px)", left: "calc(50% - 4.45157px)" }}
    />
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-[#123263] h-[84.55px] left-[-177.54px] rounded-[13.35px] top-[105.051px] w-[356px]"
      data-name="Button"
    >
      <Text69 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-1557.04px] top-[-233.149px]">
      <Modal2 />
      <Button5 />
    </div>
  );
}

function Icon19() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text70() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text71() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header6() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text70 />
        <Text71 />
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions9() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text72 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header6 />
        <Actions9 />
      </div>
    </div>
  );
}

function Cross7() {
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

function CloseButton6() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross7 />
    </div>
  );
}

function Flag6() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[329.789px] rounded-[10.4243px] top-[29px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon19 />
          <Content6 />
          <CloseButton6 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function SelectHandle8() {
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

function SelectHandle9() {
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

function SelectHandle10() {
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

function SelectHandle11() {
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

function SelectFrame4() {
  return (
    <div
      className="absolute h-[96.12px] left-[329.76px] top-[29.4px] w-[253.65px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none" />
      <SelectHandle8 />
      <SelectHandle9 />
      <SelectHandle10 />
      <SelectHandle11 />
    </div>
  );
}

function Icon20() {
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

function Rec7() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] overflow-clip relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Group3 />
      <Flag6 />
      <SelectFrame4 />
      <Icon20 />
    </div>
  );
}

function Text74() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.48)] h-[26.7px] rounded-[13.35px] shrink-0 w-[315.95px]"
      data-name="Text"
    />
  );
}

function Text75() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] rounded-[13.35px] size-full"
      data-name="Text"
    />
  );
}

function Lines3() {
  return (
    <div
      className="absolute h-[1094.7px] left-0 right-0 top-0"
      data-name="Lines"
    >
      <div className="absolute flex h-[26.7px] items-center justify-center left-0 right-[6.782%] top-[1068px]">
        <div className="flex-none h-[26.7px] scale-y-[-100%] w-[1456.02px]">
          {[...Array(9).keys()].map((_, i) => (
            <Text75 key={i} />
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

function Text84() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] left-0 right-[60%] rounded-[13.35px] top-1/2 translate-y-[-50%]"
      data-name="Text"
    />
  );
}

function LastLine3() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[-0.3px] h-[26.7px] left-0 right-0"
      data-name="Last Line"
    >
      <Text84 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="h-[560.7px] overflow-clip relative shrink-0 w-[1561.95px]"
      data-name="Paragraph"
    >
      <Lines3 />
      <LastLine3 />
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[712px] relative shrink-0 w-[1561.95px]" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-[106.8px] h-[712px] items-start justify-start p-0 relative w-[1561.95px]">
        <Text74 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] shrink-0 w-[195.8px]"
      data-name="Text"
    />
  );
}

function ButtonSubtle3() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] h-[142.4px] relative rounded-[13.35px] shrink-0"
      data-name="Button (subtle)"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[142.4px] items-center justify-start px-[53.4px] py-[26.7px] relative">
          <Text86 />
        </div>
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.199607px)", left: "calc(50% - 4.17265px)" }}
    />
  );
}

function Button6() {
  return (
    <div
      className="bg-[#b3d4ff] h-[142.4px] relative rounded-[13.35px] shrink-0 w-[271.45px]"
      data-name="Button"
    >
      <Text87 />
    </div>
  );
}

function Actions10() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[35.6px] items-center justify-start overflow-clip p-0 relative">
        <ButtonSubtle3 />
        <Button6 />
      </div>
    </div>
  );
}

function Modal3() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[-1556.84px] rounded-[13.35px] top-[-233.149px] w-[1780px]"
      data-name="Modal"
    >
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[71.2px] items-end justify-start p-[106.8px] relative w-[1780px]">
          <Text85 />
          <Actions10 />
        </div>
      </div>
      <div className="absolute border-[8.9px] border-[rgba(9,30,66,0.13)] border-solid inset-0 pointer-events-none rounded-[13.35px]" />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="absolute bg-[#1868db] h-[84.55px] left-[-177.34px] rounded-[13.35px] top-[105.051px] w-[356px]"
      data-name="Button"
    />
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-1556.84px] top-[-233.149px]">
      <Modal3 />
      <Button7 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute bottom-0 left-[-0.098%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.0703125px_0px] mask-size-[71px_71px] right-[0.098%] top-0"
      data-name="Container"
      style={{ maskImage: `url('${imgContainer}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 71 71"
      >
        <g id="Container">
          <mask
            height="71"
            id="mask0_2_1419"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="72"
            x="0"
            y="0"
          >
            <circle
              cx="35.5008"
              cy="35.5"
              fill="var(--fill-0, #44546F)"
              id="Circle mask"
              r="35.5"
            />
          </mask>
          <g mask="url(#mask0_2_1419)">
            <path
              d={svgPaths.p1dcf1600}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SpinnerAnimation() {
  return (
    <div
      className="absolute bottom-[0.2px] left-0 right-[0.2px] top-0"
      data-name="Spinner animation"
    >
      <Container />
    </div>
  );
}

function Spinner() {
  return (
    <div className="relative shrink-0 size-[71.2px]" data-name="<Spinner>">
      <SpinnerAnimation />
    </div>
  );
}

function Box() {
  return (
    <div className="min-w-[534px] relative shrink-0" data-name="box">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-inherit p-0 relative">
        <Spinner />
      </div>
    </div>
  );
}

function SlotContentMenuLoading() {
  return (
    <div
      className="absolute left-[-306.39px] rounded-[13.35px] top-[23.17px]"
      data-name="Slot content / <Menu> / Loading"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[20px] relative">
          <Box />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div
      className="bg-[#1f845a] rounded-[3.1273px] shrink-0 size-[33.358px]"
      data-name="Icon"
    />
  );
}

function Text89() {
  return (
    <div
      className="bg-[#f1f2f4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      data-name="Text"
    />
  );
}

function Text90() {
  return (
    <div
      className="bg-[#758195] h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      data-name="Text"
    />
  );
}

function Header7() {
  return (
    <div className="relative shrink-0 w-[156.365px]" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text89 />
        <Text90 />
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div
      className="bg-[#0c66e4] h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      data-name="Text"
    />
  );
}

function Actions11() {
  return (
    <div className="h-[25.018px] relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text91 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-[308.561px]" data-name="Content">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header7 />
        <Actions11 />
      </div>
    </div>
  );
}

function Cross8() {
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

function CloseButton7() {
  return (
    <div
      className="h-[25.018px] relative shrink-0 w-[16.679px]"
      data-name="Close button"
    >
      <Cross8 />
    </div>
  );
}

function Flag7() {
  return (
    <div
      className="absolute bg-[#172b4d] left-[329.789px] rounded-[10.4243px] top-[29px] w-[252.269px]"
      data-name="Flag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start px-[16.679px] py-[20.849px] relative w-[252.269px]">
          <Icon22 />
          <Content7 />
          <CloseButton7 />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}

function SelectHandle12() {
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

function SelectHandle13() {
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

function SelectHandle14() {
  return (
    <div
      className="absolute bottom-[-7.119px] right-[-8.901px] rounded-[2.225px] size-[22.25px]"
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

function SelectHandle15() {
  return (
    <div
      className="absolute right-[-8.897px] rounded-[2.225px] size-[22.25px] top-[-8.9px]"
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

function SelectFrame5() {
  return (
    <div
      className="absolute h-[96.12px] left-[329.96px] top-[29.4px] w-[253.65px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none" />
      <SelectHandle12 />
      <SelectHandle13 />
      <SelectHandle14 />
      <SelectHandle15 />
    </div>
  );
}

function Icon23() {
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

function Rec8() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] overflow-clip relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <Group4 />
      <SlotContentMenuLoading />
      <Flag7 />
      <SelectFrame5 />
      <Icon23 />
    </div>
  );
}

function Text93() {
  return (
    <div
      className="bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] shrink-0 w-[106.8px]"
      data-name="Text"
    />
  );
}

function Cross9() {
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

function InnerTag1() {
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
          <Text93 />
          <div
            className="h-[75.65px] shrink-0 w-[17.8px]"
            data-name="padding"
          />
          <Cross9 />
        </div>
      </div>
    </div>
  );
}

function MultiselectTag1() {
  return (
    <div
      className="absolute left-[320.63px] opacity-0 rounded-[8.9px] top-[20.5px]"
      data-name="Multiselect Tag"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[8.9px] relative">
          <InnerTag1 />
        </div>
      </div>
    </div>
  );
}

function SelectHandle16() {
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

function SelectHandle17() {
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

function SelectHandle18() {
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

function SelectHandle19() {
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

function SelectFrame6() {
  return (
    <div
      className="absolute h-[93.45px] left-[329.53px] opacity-0 top-[29.4px] w-[235.85px]"
      data-name="Select frame"
    >
      <div className="absolute border-[#af59e1] border-[4.45px] border-solid inset-0 pointer-events-none" />
      <SelectHandle16 />
      <SelectHandle17 />
      <SelectHandle18 />
      <SelectHandle19 />
    </div>
  );
}

function Rec9() {
  return (
    <div
      className="bg-[#f1f2f4] h-[220px] overflow-clip relative shrink-0 w-[468px]"
      data-name="Rec"
    >
      <MultiselectTag1 />
      <SelectFrame6 />
    </div>
  );
}

export default function AnimationFrames() {
  return (
    <div className="relative size-full" data-name="Animation frames">
      <div className="box-border content-stretch flex flex-row gap-[47px] items-center justify-start p-0 relative size-full">
        <Rec />
        <Rec1 />
        <Rec2 />
        <Rec3 />
        <Rec4 />
        <Rec5 />
        <Rec6 />
        <Rec7 />
        <Rec8 />
        <Rec9 />
      </div>
    </div>
  );
}
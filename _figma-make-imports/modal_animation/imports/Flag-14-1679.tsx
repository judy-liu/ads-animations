import svgPaths from "./svg-2p5uoz3529";

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

export default function Flag() {
  return (
    <div
      className="bg-[#172b4d] relative rounded-[10.4243px] size-full"
      data-name="Flag"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start overflow-clip px-[16.679px] py-[20.849px] relative size-full">
          <Icon1 />
          <Content />
          <CloseButton />
        </div>
      </div>
      <div className="absolute border-[#626f86] border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" />
    </div>
  );
}
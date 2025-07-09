function Text() {
  return (
    <div
      className="absolute bg-[rgba(9,30,66,0.13)] h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
      data-name="Text"
      style={{ top: "calc(50% - 0.273631px)", left: "calc(50% - 4.45157px)" }}
    />
  );
}

export default function Button() {
  return (
    <div
      className="bg-[#1868db] relative rounded-[13.35px] size-full"
      data-name="Button"
    >
      <Text />
    </div>
  );
}
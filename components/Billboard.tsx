import { BillboardType } from "@/lib/types";

export default function Billboard({ data }: { data: BillboardType }) {
  return (
    <>
      <div className="font-bold text-xl sm:text-2xl lg:text-3xl sm:max-w-xl max-w-xs">
        {data.label}
      </div>
      <div
        className="m-2 sm:m-4 lg:m-6 rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center gap-y-8"></div>
        </div>
      </div>
    </>
  );
}

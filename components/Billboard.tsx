import { BillboardType } from "@/lib/types";

export default function Billboard({ data }: { data: BillboardType }) {
  return (
    <div
      className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
    >
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}

import { getBillboard } from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";

export default async function PageStore() {
  const billboard = await getBillboard("affbc9c2-481c-487f-870f-4709e20ca303")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  );
}

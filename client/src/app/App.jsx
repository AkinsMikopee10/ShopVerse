import { Badge, Button, Card, Container, Input, Spinner } from "../components/ui";

export default function Home() {
  return (
    <Container className="py-12">
      <Card className="space-y-6">
        <Badge>New</Badge>

        <h1 className="text-4xl font-bold">ShopVerse UI</h1>

        <Input placeholder="Search products..." />

        <div className="flex gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="outline">Outline</Button>
        </div>

        <Spinner />
      </Card>
    </Container>
  );
}

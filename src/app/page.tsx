import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import {TokenList} from "@/components/token-list/token-list";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto">
        <Hero />
        <TokenList />
      </div>
    </main>
  );
}

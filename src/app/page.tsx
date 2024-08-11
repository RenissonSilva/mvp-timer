import { Header } from "@/components/Header";
import { MvpCard } from "@/components/MvpCard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Header />

      <Box className="flex w-[1100px] grid grid-cols-4 gap-7">
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
      </Box>
    </main>
  );
}

import { Header } from "@/components/Header";
import { MvpCard } from "@/components/MvpCard";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Header />

      <Typography className="font-righteous text-2xl mb-4 mt-8">Ativos</Typography>

      <Box className="flex w-[1100px] grid grid-cols-4 gap-7">
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
        <MvpCard />
      </Box>

      <Typography className="font-righteous text-2xl mb-4 mt-8">Todos</Typography>

      <Box className="flex w-[1100px] grid grid-cols-4 gap-7">
        <MvpCard type="alive"/>
        <MvpCard type="alive"/>
        <MvpCard type="alive"/>
        <MvpCard type="alive"/>
        <MvpCard type="alive"/>
        <MvpCard type="alive"/>
        <MvpCard type="alive"/>
      </Box>
    </main>
  );
}

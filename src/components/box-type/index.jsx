import { Box, Stack, Typography, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemGrid from "@/components/item-grid";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';




import { useState } from "react";


function BoxType(...props) {
  const { tabCategory, handleTabCategory} = props;
  const [swiper, setSwiper] = useState(null);
  const handleClickCategory = (value) => {
    handleTabCategory(value)
  };

  const handleSwiperInit = (swiper) => {
    setSwiper(swiper);
  };
  return (
    <Box sx={{ padding: "0 20px" }}>
      <Typography
        variant="h3"
        sx={{
          mb: {
            xs: 1,
            md: 2,
          },
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        Based on your Area of Interest
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Chip
          label="All"
          sx={{
            background: tabCategory === "All" ? "blue" : "red",
          }}
          onClick={() => handleClickCategory("All")}
        />
        <Chip label="e-Books" onClick={() => handleClickCategory("e-Books")} />
        <Chip label="PDF" onClick={() => handleClickCategory("PDF")} />
      </Stack>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
        <SwiperSlide><ItemGrid /></SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default BoxType;

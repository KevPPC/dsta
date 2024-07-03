import { Box, Typography, Rating, Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { theme } from "@/themes";
function ItemGrid() {
  return (
    <Box sx={{
      background: theme.palette.background.whiteSmoke,
      border: "2px solid "+theme.palette.background.whiteSmoke,
      position: "relative",
      overflow: "hidden"
    }}>
      <Box sx={{
        position: "absolute",
        width: "90px",
        height: "90px",
        top: "-45px",
        left: "-45px",
        transform: "rotate(-45deg)",
        zIndex: "1",
        background: "#FFCE00",
        display: "flex",
        alignItems: "end",
        justifyContent: "center"
      }}>
        <Typography 
          variant="span"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "22px",
          }}
        >New</Typography>
      </Box>
      
      <Box sx={{
        background: theme.palette.background.white,
        height: "225px",
      }}>
        <img />
      </Box>
      <Box sx={{
        p: 2
      }}>
        <Box sx={{mb: 0.5}}>
          <Typography variant="span">PDF</Typography>
        </Box>
        
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between",
          mb: 1.5
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Rating name="read-only" value={3} readOnly />
            <Typography 
              variant="span"
              sx={{
                marginLeft: "10px",
                fontSize: "10px",
                fontWeight: 600,
                color: theme.palette.common.grey70
              }}
            >2 Reviews</Typography>
          </Box>

          <BookmarkBorderIcon />
        </Box>

        <Typography 
          variant="h4"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "22px",
            mb: 1
          }}
        >Steal like an Artist</Typography>

        <Typography 
          variant='body1'
          sx={{
            fontSize: "14px",
             mb: 1
          }}
        >by Austin Kleon</Typography>
        <Typography 
          variant='body1'
          sx={{
            fontSize: "14px",
             mb: 2,
             color: theme.palette.common.grey70
          }}
        >Published on 20 Mar 2002</Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between",
          color: theme.palette.common.grey70
        }}>
          <Typography variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          > 
            <DescriptionOutlinedIcon />
            <Typography variant="span" sx={{ml: 0.5}}> Janes</Typography>
          </Typography>
          <Typography variant="span">21 Downloads</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ItemGrid
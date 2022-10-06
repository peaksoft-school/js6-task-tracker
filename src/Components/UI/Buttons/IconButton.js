import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"

export default function IconButtons({ src, alt, onClick }) {
   return (
      <Stack direction="row" spacing={1}>
         <IconButton onClick={onClick} aria-label="delete">
            <img src={src} alt={alt} />
         </IconButton>
      </Stack>
   )
}
